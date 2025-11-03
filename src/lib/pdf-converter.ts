import * as pdfjsLib from 'pdfjs-dist';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

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
 * Convert PDF to Excel (placeholder for future implementation)
 */
export async function convertPdfToExcel(file: File): Promise<void> {
  throw new Error('PDF to Excel conversion is coming soon. This feature requires table detection and extraction.');
}
