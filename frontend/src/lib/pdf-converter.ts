import * as pdfjsLib from 'pdfjs-dist';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';
import * as XLSX from 'xlsx';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';

// Configure PDF.js worker - using Vite's ?url import for proper worker loading
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

/**
 * Convert PDF to Word document
 */
export async function convertPdfToWord(file: File): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  
  const paragraphs: Paragraph[] = [];
  
  // Extract text from each page
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    
    // Add page header
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Page ${i}`,
            bold: true,
            break: 2,
          }),
        ],
      })
    );
    
    // Extract and format text items
    const textItems = textContent.items as any[];
    let currentLine = '';
    
    textItems.forEach((item, index) => {
      if (item.str) {
        currentLine += item.str;
        
        // Check if this is end of line (next item has significantly different y-position or is last item)
        const nextItem = textItems[index + 1];
        const isEndOfLine = !nextItem || Math.abs(nextItem.transform[5] - item.transform[5]) > 5;
        
        if (isEndOfLine && currentLine.trim()) {
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: currentLine.trim(),
                }),
              ],
            })
          );
          currentLine = '';
        } else if (!isEndOfLine) {
          currentLine += ' ';
        }
      }
    });
  }
  
  // Create Word document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs,
      },
    ],
  });
  
  // Generate and save
  const blob = await Packer.toBlob(doc);
  const fileName = file.name.replace('.pdf', '.docx');
  saveAs(blob, fileName);
}

/**
 * Remove password protection from PDF
 * Note: pdf-lib doesn't support password-protected PDFs directly.
 * This is a simplified implementation that works with basic protection.
 */
export async function removePdfPassword(file: File, password: string): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  
  try {
    // Attempt to load PDF - if it's password protected, this will fail
    // pdf-lib doesn't have built-in password support, so we'll try to load it
    const pdfDoc = await PDFDocument.load(arrayBuffer, { 
      ignoreEncryption: true
    });
    
    // Save without any protection
    const pdfBytes = await pdfDoc.save();
    
    const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
    const fileName = file.name.replace('.pdf', '_unlocked.pdf');
    saveAs(blob, fileName);
  } catch (error: any) {
    // If pdf-lib can't handle it, provide helpful guidance
    throw new Error('This PDF has encryption that requires specialized tools. Try using desktop software like Adobe Acrobat or qpdf for advanced password removal.');
  }
}

/**
 * Compress PDF by re-rendering pages at lower quality
 * This provides real file size reduction by compressing images
 */
export async function compressPdf(file: File, quality: number = 0.7): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  
  // Create new PDF document
  const pdfDoc = await PDFDocument.create();
  
  // Process each page
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    
    // Render at lower scale for compression
    const scale = quality > 0.8 ? 1.5 : quality > 0.5 ? 1.2 : 1.0;
    const viewport = page.getViewport({ scale });
    
    // Create canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Failed to get canvas context');
    
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // Render PDF page to canvas
    const renderTask = page.render({
      canvasContext: context as any,
      viewport: viewport,
      canvas: canvas as any,
    });
    await renderTask.promise;
    
    // Convert canvas to compressed JPEG
    const imageDataUrl = canvas.toDataURL('image/jpeg', quality);
    const imageBytes = Uint8Array.from(atob(imageDataUrl.split(',')[1]), c => c.charCodeAt(0));
    
    // Embed image in new PDF
    const image = await pdfDoc.embedJpg(imageBytes);
    const pdfPage = pdfDoc.addPage([viewport.width, viewport.height]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    });
  }
  
  // Save compressed PDF
  const pdfBytes = await pdfDoc.save({
    useObjectStreams: true,
  });
  
  const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
  const fileName = file.name.replace('.pdf', '_compressed.pdf');
  saveAs(blob, fileName);
}

/**
 * Convert PDF to Excel by extracting text content
 * Works best with text-based PDFs containing table-like structures
 */
export async function convertPdfToExcel(file: File): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  
  const workbook = XLSX.utils.book_new();
  
  // Extract text from each page and create a worksheet
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    
    // Extract text items with position data
    const textItems = textContent.items as any[];
    
    // Group text items by Y-coordinate (rows)
    const rows = new Map<number, Array<{ x: number; text: string }>>();
    
    textItems.forEach((item) => {
      if (item.str && item.str.trim()) {
        const y = Math.round(item.transform[5]); // Y-coordinate
        const x = Math.round(item.transform[4]); // X-coordinate
        
        if (!rows.has(y)) {
          rows.set(y, []);
        }
        rows.get(y)!.push({ x, text: item.str.trim() });
      }
    });
    
    // Sort rows by Y-coordinate (top to bottom)
    const sortedRows = Array.from(rows.entries()).sort((a, b) => b[0] - a[0]);
    
    // Create worksheet data
    const worksheetData: string[][] = [];
    
    sortedRows.forEach(([_, rowItems]) => {
      // Sort items in row by X-coordinate (left to right)
      const sortedItems = rowItems.sort((a, b) => a.x - b.x);
      
      // Detect columns by grouping items with similar X-coordinates
      const columns: string[] = [];
      let currentColumn = '';
      let lastX = -Infinity;
      
      sortedItems.forEach((item, idx) => {
        // If there's a significant gap (>50 units), start a new column
        if (idx > 0 && item.x - lastX > 50) {
          columns.push(currentColumn.trim());
          currentColumn = item.text;
        } else {
          currentColumn += (currentColumn ? ' ' : '') + item.text;
        }
        lastX = item.x;
      });
      
      // Add the last column
      if (currentColumn.trim()) {
        columns.push(currentColumn.trim());
      }
      
      worksheetData.push(columns);
    });
    
    // Create worksheet from data
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, `Page ${i}`);
  }
  
  // Generate Excel file and download
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const fileName = file.name.replace('.pdf', '.xlsx');
  saveAs(blob, fileName);
}

/**
 * Convert PDF pages to images
 */
export async function convertPdfToImages(file: File): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 });
    
    // Create canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Failed to get canvas context');
    
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // Render PDF page to canvas
    const renderTask = page.render({
      canvasContext: context as any,
      viewport: viewport,
      canvas: canvas as any,
    });
    await renderTask.promise;
    
    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const fileName = file.name.replace('.pdf', `_page_${i}.png`);
        saveAs(blob, fileName);
      }
    }, 'image/png');
  }
}

/**
 * Split PDF into specific page range
 */
export async function splitPdfByRange(
  file: File, 
  startPage: number, 
  endPage?: number
): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pageCount = pdfDoc.getPageCount();
  
  // Validate page numbers
  if (startPage < 1 || startPage > pageCount) {
    throw new Error(`Invalid start page. PDF has ${pageCount} pages.`);
  }
  
  const lastPage = endPage && endPage <= pageCount ? endPage : startPage;
  
  if (lastPage < startPage) {
    throw new Error('End page must be greater than or equal to start page.');
  }
  
  // Extract pages (convert to 0-based index)
  const pagesToExtract = [];
  for (let i = startPage - 1; i < lastPage; i++) {
    pagesToExtract.push(i);
  }
  
  const newPdf = await PDFDocument.create();
  const copiedPages = await newPdf.copyPages(pdfDoc, pagesToExtract);
  copiedPages.forEach((page) => newPdf.addPage(page));
  
  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
  
  const fileName = file.name.replace(
    '.pdf', 
    `_pages_${startPage}-${lastPage}.pdf`
  );
  saveAs(blob, fileName);
}
