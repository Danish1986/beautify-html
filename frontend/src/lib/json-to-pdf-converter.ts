import { PDFDocument, rgb, StandardFonts, PDFPage, PDFFont } from 'pdf-lib';

interface JsonToPdfOptions {
  fontSize?: number;
  lineHeight?: number;
  margin?: number;
  tableFormat?: boolean;
}

interface TableCell {
  text: string;
  isNumber: boolean;
  isHeader: boolean;
}

// Helper function to check if value is an array of objects
function isArrayOfObjects(data: any): boolean {
  return Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && data[0] !== null && !Array.isArray(data[0]);
}

// Helper function to check if value is a simple object (not array, not null)
function isSimpleObject(data: any): boolean {
  return typeof data === 'object' && data !== null && !Array.isArray(data);
}

// Format property names (camelCase to Title Case)
function formatKeyName(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/_/g, ' ')
    .trim();
}

// Format values for display
function formatValue(value: any): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'boolean') return value ? '✓' : '✗';
  if (typeof value === 'number') {
    // Format numbers with thousand separators
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
  if (typeof value === 'string') {
    // Check if it looks like a date
    const dateMatch = value.match(/^\d{4}-\d{2}-\d{2}/);
    if (dateMatch) {
      try {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }
      } catch {}
    }
    return value;
  }
  return String(value);
}

// Check if a value is numeric
function isNumeric(value: any): boolean {
  return typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value)) && value.trim() !== '');
}

// Calculate optimal column widths
function calculateColumnWidths(
  headers: string[],
  data: any[][],
  font: PDFFont,
  fontSize: number,
  maxWidth: number
): number[] {
  const numCols = headers.length;
  const minColWidth = 60;
  const padding = 10;
  
  // Calculate minimum width needed for each column
  const widths = headers.map((header, i) => {
    let maxTextWidth = font.widthOfTextAtSize(header, fontSize + 1);
    
    data.forEach(row => {
      const cellText = String(row[i] || '');
      const textWidth = font.widthOfTextAtSize(cellText, fontSize);
      maxTextWidth = Math.max(maxTextWidth, textWidth);
    });
    
    return Math.max(minColWidth, maxTextWidth + padding * 2);
  });
  
  // Calculate total width and scale if necessary
  const totalWidth = widths.reduce((sum, w) => sum + w, 0);
  
  if (totalWidth > maxWidth) {
    const scale = maxWidth / totalWidth;
    return widths.map(w => w * scale);
  }
  
  return widths;
}

// Draw a table for array of objects
function drawTable(
  page: PDFPage,
  data: any[],
  x: number,
  y: number,
  font: PDFFont,
  boldFont: PDFFont,
  fontSize: number,
  maxWidth: number
): number {
  if (data.length === 0) return y;
  
  const rowHeight = 20;
  const padding = 5;
  
  // Extract headers from first object
  const headers = Object.keys(data[0]);
  const formattedHeaders = headers.map(formatKeyName);
  
  // Prepare data rows
  const rows = data.map(item => headers.map(key => formatValue(item[key])));
  
  // Calculate column widths
  const colWidths = calculateColumnWidths(formattedHeaders, rows, font, fontSize, maxWidth);
  const tableWidth = colWidths.reduce((sum, w) => sum + w, 0);
  
  let currentY = y;
  
  // Draw header row
  let currentX = x;
  
  // Header background
  page.drawRectangle({
    x,
    y: currentY - rowHeight,
    width: tableWidth,
    height: rowHeight,
    color: rgb(0.9, 0.9, 0.9),
  });
  
  // Header text
  formattedHeaders.forEach((header, i) => {
    page.drawText(header, {
      x: currentX + padding,
      y: currentY - rowHeight + padding + 2,
      size: fontSize,
      font: boldFont,
      color: rgb(0, 0, 0),
      maxWidth: colWidths[i] - padding * 2,
    });
    currentX += colWidths[i];
  });
  
  // Draw header border
  page.drawLine({
    start: { x, y: currentY },
    end: { x: x + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0.5, 0.5, 0.5),
  });
  
  currentY -= rowHeight;
  
  // Draw data rows
  rows.forEach((row, rowIndex) => {
    currentX = x;
    
    // Alternate row background
    if (rowIndex % 2 === 1) {
      page.drawRectangle({
        x,
        y: currentY - rowHeight,
        width: tableWidth,
        height: rowHeight,
        color: rgb(0.97, 0.97, 0.97),
      });
    }
    
    // Draw cells
    row.forEach((cell, colIndex) => {
      const cellText = String(cell);
      const isNumber = isNumeric(data[rowIndex][headers[colIndex]]);
      
      // Calculate text position (right-align numbers, left-align text)
      let textX = currentX + padding;
      if (isNumber) {
        const textWidth = font.widthOfTextAtSize(cellText, fontSize);
        textX = currentX + colWidths[colIndex] - textWidth - padding;
      }
      
      page.drawText(cellText, {
        x: textX,
        y: currentY - rowHeight + padding + 2,
        size: fontSize,
        font: font,
        color: rgb(0, 0, 0),
        maxWidth: colWidths[colIndex] - padding * 2,
      });
      
      currentX += colWidths[colIndex];
    });
    
    // Draw row border
    page.drawLine({
      start: { x, y: currentY },
      end: { x: x + tableWidth, y: currentY },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
    
    currentY -= rowHeight;
  });
  
  // Draw bottom border
  page.drawLine({
    start: { x, y: currentY },
    end: { x: x + tableWidth, y: currentY },
    thickness: 1,
    color: rgb(0.5, 0.5, 0.5),
  });
  
  // Draw vertical borders
  currentX = x;
  colWidths.forEach(width => {
    page.drawLine({
      start: { x: currentX, y },
      end: { x: currentX, y: currentY },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
    currentX += width;
  });
  
  // Right border
  page.drawLine({
    start: { x: x + tableWidth, y },
    end: { x: x + tableWidth, y: currentY },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  
  return currentY - 10; // Return Y position after table with spacing
}

// Draw a key-value table
function drawKeyValueTable(
  page: PDFPage,
  obj: any,
  x: number,
  y: number,
  font: PDFFont,
  boldFont: PDFFont,
  fontSize: number,
  maxWidth: number
): number {
  const rowHeight = 18;
  const padding = 5;
  const keyColWidth = maxWidth * 0.35;
  const valueColWidth = maxWidth * 0.65;
  
  let currentY = y;
  const entries = Object.entries(obj);
  
  entries.forEach(([key, value], index) => {
    // Skip nested objects and arrays (they'll be rendered separately)
    if (typeof value === 'object' && value !== null) return;
    
    // Alternate row background
    if (index % 2 === 1) {
      page.drawRectangle({
        x,
        y: currentY - rowHeight,
        width: maxWidth,
        height: rowHeight,
        color: rgb(0.97, 0.97, 0.97),
      });
    }
    
    // Draw key
    page.drawText(formatKeyName(key), {
      x: x + padding,
      y: currentY - rowHeight + padding + 2,
      size: fontSize,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2),
      maxWidth: keyColWidth - padding * 2,
    });
    
    // Draw value
    const formattedValue = formatValue(value);
    page.drawText(formattedValue, {
      x: x + keyColWidth + padding,
      y: currentY - rowHeight + padding + 2,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
      maxWidth: valueColWidth - padding * 2,
    });
    
    // Draw row border
    page.drawLine({
      start: { x, y: currentY },
      end: { x: x + maxWidth, y: currentY },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
    
    currentY -= rowHeight;
  });
  
  // Draw bottom border
  page.drawLine({
    start: { x, y: currentY },
    end: { x: x + maxWidth, y: currentY },
    thickness: 1,
    color: rgb(0.5, 0.5, 0.5),
  });
  
  // Draw vertical borders
  page.drawLine({
    start: { x, y },
    end: { x, y: currentY },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  
  page.drawLine({
    start: { x: x + keyColWidth, y },
    end: { x: x + keyColWidth, y: currentY },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  
  page.drawLine({
    start: { x: x + maxWidth, y },
    end: { x: x + maxWidth, y: currentY },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  
  return currentY - 10;
}

// Render JSON in table format
async function renderTableFormat(
  pdfDoc: PDFDocument,
  jsonData: any,
  font: PDFFont,
  boldFont: PDFFont,
  fontSize: number,
  margin: number,
  pageWidth: number,
  pageHeight: number
): Promise<void> {
  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let yPosition = pageHeight - margin;
  const contentWidth = pageWidth - 2 * margin;
  
  // Helper to check if new page is needed
  const needsNewPage = (requiredSpace: number) => {
    if (yPosition - requiredSpace < margin + 50) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      yPosition = pageHeight - margin;
      return true;
    }
    return false;
  };
  
  // Helper to draw section header
  const drawSectionHeader = (title: string) => {
    needsNewPage(30);
    currentPage.drawText(title, {
      x: margin,
      y: yPosition,
      size: fontSize + 4,
      font: boldFont,
      color: rgb(0.2, 0.3, 0.6),
    });
    yPosition -= 25;
  };
  
  // Recursive function to render JSON structure
  const renderObject = (obj: any, path: string = '') => {
    if (isArrayOfObjects(obj)) {
      // Render as data table
      const estimatedHeight = (obj.length + 2) * 20;
      needsNewPage(estimatedHeight);
      
      yPosition = drawTable(
        currentPage,
        obj,
        margin,
        yPosition,
        font,
        boldFont,
        fontSize,
        contentWidth
      );
    } else if (isSimpleObject(obj)) {
      // Check for nested structures
      const simpleEntries: [string, any][] = [];
      const nestedEntries: [string, any][] = [];
      
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          nestedEntries.push([key, value]);
        } else {
          simpleEntries.push([key, value]);
        }
      });
      
      // Render simple properties as key-value table
      if (simpleEntries.length > 0) {
        const simpleObj = Object.fromEntries(simpleEntries);
        const estimatedHeight = simpleEntries.length * 18 + 20;
        needsNewPage(estimatedHeight);
        
        yPosition = drawKeyValueTable(
          currentPage,
          simpleObj,
          margin,
          yPosition,
          font,
          boldFont,
          fontSize,
          contentWidth
        );
      }
      
      // Render nested structures with section headers
      nestedEntries.forEach(([key, value]) => {
        drawSectionHeader(formatKeyName(key));
        renderObject(value, `${path}.${key}`);
      });
    } else if (Array.isArray(obj)) {
      // Array of primitives
      needsNewPage(50);
      obj.forEach((item, index) => {
        if (needsNewPage(20)) return;
        currentPage.drawText(`${index + 1}. ${formatValue(item)}`, {
          x: margin + 10,
          y: yPosition,
          size: fontSize,
          font: font,
          color: rgb(0, 0, 0),
          maxWidth: contentWidth - 10,
        });
        yPosition -= 18;
      });
    } else {
      // Primitive value
      needsNewPage(20);
      currentPage.drawText(formatValue(obj), {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: font,
        color: rgb(0, 0, 0),
        maxWidth: contentWidth,
      });
      yPosition -= 20;
    }
  };
  
  // Start rendering
  currentPage.drawText('JSON Data Report', {
    x: margin,
    y: yPosition,
    size: 18,
    font: boldFont,
    color: rgb(0, 0, 0),
  });
  yPosition -= 40;
  
  renderObject(jsonData);
}

// Render JSON in raw text format (original)
async function renderRawFormat(
  pdfDoc: PDFDocument,
  jsonData: any,
  font: PDFFont,
  boldFont: PDFFont,
  fontSize: number,
  lineHeight: number,
  margin: number,
  pageWidth: number,
  pageHeight: number
): Promise<void> {
  const jsonString = JSON.stringify(jsonData, null, 2);
  const lines = jsonString.split('\n');
  const maxLinesPerPage = Math.floor((pageHeight - 2 * margin) / lineHeight);
  
  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let yPosition = pageHeight - margin;
  let lineCount = 0;
  
  // Add title
  currentPage.drawText('JSON Data', {
    x: margin,
    y: yPosition,
    size: 16,
    font: boldFont,
    color: rgb(0, 0, 0),
  });
  yPosition -= lineHeight * 2;
  lineCount += 2;
  
  // Process each line
  for (const line of lines) {
    if (lineCount >= maxLinesPerPage) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      yPosition = pageHeight - margin;
      lineCount = 0;
    }
    
    const indentMatch = line.match(/^(\s*)/);
    const indentLevel = indentMatch ? Math.floor(indentMatch[1].length / 2) : 0;
    const xPosition = margin + (indentLevel * 20);
    const trimmedLine = line.trim();
    
    const maxWidth = pageWidth - margin - xPosition - 10;
    const textWidth = font.widthOfTextAtSize(trimmedLine, fontSize);
    let displayText = trimmedLine;
    
    if (textWidth > maxWidth) {
      const charsPerWidth = trimmedLine.length / textWidth;
      const maxChars = Math.floor(maxWidth * charsPerWidth) - 3;
      displayText = trimmedLine.substring(0, maxChars) + '...';
    }
    
    let textColor = rgb(0, 0, 0);
    if (trimmedLine.includes('"') && trimmedLine.includes(':')) {
      textColor = rgb(0, 0.2, 0.8);
    } else if (trimmedLine.match(/^(true|false|null)$/)) {
      textColor = rgb(0.5, 0, 0.5);
    } else if (trimmedLine.match(/^[0-9.]+$/)) {
      textColor = rgb(0, 0.5, 0);
    }
    
    currentPage.drawText(displayText, {
      x: xPosition,
      y: yPosition,
      size: fontSize,
      font: font,
      color: textColor,
    });
    
    yPosition -= lineHeight;
    lineCount++;
  }
}

/**
 * Convert JSON data to a formatted PDF document
 */
export async function convertJsonToPdf(
  jsonData: any,
  filename: string = 'data.pdf',
  options: JsonToPdfOptions = {}
): Promise<void> {
  const {
    fontSize = 10,
    lineHeight = 14,
    margin = 50,
    tableFormat = true
  } = options;
  
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Courier);
  const boldFont = await pdfDoc.embedFont(StandardFonts.CourierBold);
  
  const pageWidth = 595;
  const pageHeight = 842;
  
  if (tableFormat) {
    await renderTableFormat(pdfDoc, jsonData, font, boldFont, fontSize, margin, pageWidth, pageHeight);
  } else {
    await renderRawFormat(pdfDoc, jsonData, font, boldFont, fontSize, lineHeight, margin, pageWidth, pageHeight);
  }
  
  // Add page numbers
  const pages = pdfDoc.getPages();
  pages.forEach((page, index) => {
    page.drawText(`Page ${index + 1} of ${pages.length}`, {
      x: pageWidth / 2 - 30,
      y: 30,
      size: 8,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });
  });
  
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
