import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

interface JsonToPdfOptions {
  fontSize?: number;
  lineHeight?: number;
  margin?: number;
  indentSize?: number;
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
    indentSize = 20
  } = options;

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Courier);
  const boldFont = await pdfDoc.embedFont(StandardFonts.CourierBold);

  // Format JSON as string with proper indentation
  const jsonString = JSON.stringify(jsonData, null, 2);
  const lines = jsonString.split('\n');

  // Calculate page dimensions
  const pageWidth = 595; // A4 width in points
  const pageHeight = 842; // A4 height in points
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
    // Check if we need a new page
    if (lineCount >= maxLinesPerPage) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      yPosition = pageHeight - margin;
      lineCount = 0;
    }

    // Calculate indentation
    const indentMatch = line.match(/^(\s*)/);
    const indentLevel = indentMatch ? Math.floor(indentMatch[1].length / 2) : 0;
    const xPosition = margin + (indentLevel * indentSize);

    // Trim the line
    const trimmedLine = line.trim();

    // Truncate if line is too long
    const maxWidth = pageWidth - margin - xPosition - 10;
    const textWidth = font.widthOfTextAtSize(trimmedLine, fontSize);
    let displayText = trimmedLine;

    if (textWidth > maxWidth) {
      // Truncate and add ellipsis
      const charsPerWidth = trimmedLine.length / textWidth;
      const maxChars = Math.floor(maxWidth * charsPerWidth) - 3;
      displayText = trimmedLine.substring(0, maxChars) + '...';
    }

    // Determine text color based on content
    let textColor = rgb(0, 0, 0);
    if (trimmedLine.includes('"') && trimmedLine.includes(':')) {
      // Property names in blue
      textColor = rgb(0, 0.2, 0.8);
    } else if (trimmedLine.match(/^(true|false|null)$/)) {
      // Keywords in purple
      textColor = rgb(0.5, 0, 0.5);
    } else if (trimmedLine.match(/^[0-9.]+$/)) {
      // Numbers in green
      textColor = rgb(0, 0.5, 0);
    }

    // Draw the text
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

  // Add page numbers
  const pages = pdfDoc.getPages();
  pages.forEach((page, index) => {
    const { height } = page.getSize();
    page.drawText(`Page ${index + 1} of ${pages.length}`, {
      x: pageWidth / 2 - 30,
      y: 30,
      size: 8,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });
  });

  // Serialize the PDF to bytes
  const pdfBytes = await pdfDoc.save();

  // Create a blob and trigger download
  const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
