// PDF Tools SEO Landing Pages

import { 
  FileType, FileSpreadsheet, FileText, Image, Minimize2, 
  Layers, Scissors, Lock, Unlock, RotateCw, FileImage,
  LucideIcon
} from "lucide-react";

export interface PDFPageData {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlight?: string;
  primaryCta: string;
  primaryCtaPath: string;
  icon: LucideIcon;
  iconColor: string;
  category: string;
  toolDescription: string;
  features: Array<{ title: string; description: string; details?: string[] }>;
  howItWorks: Array<{ title: string; description: string }>;
  useCases: Array<{ title: string; description: string }>;
  whyChoose: string[];
  tips: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedTools: Array<{ title: string; description: string; path: string }>;
  schema: object;
}

export const pdfToolsPages: PDFPageData[] = [
  {
    slug: "pdf-to-word-converter",
    title: "Free PDF to Word Converter - Convert PDF to DOCX Online",
    description: "Convert PDF to Word documents instantly. Preserve formatting, fonts, images. Edit PDFs in Microsoft Word. 100% free, browser-based, no uploads to servers.",
    keywords: "pdf to word, pdf to docx, convert pdf to word, pdf word converter, pdf to word online, edit pdf in word, pdf to editable word",
    heroTitle: "Free PDF to Word Converter - Edit PDFs in Word",
    heroSubtitle: "Convert PDF documents to editable Microsoft Word files with preserved formatting. Edit contracts, reports, and documents with ease.",
    heroHighlight: "Preserves fonts, images, tables, and layouts",
    primaryCta: "Convert PDF to Word Now",
    primaryCtaPath: "/pdf-tools",
    icon: FileText,
    iconColor: "text-blue-600",
    category: "tool",
    toolDescription: "Our PDF to Word converter transforms PDF documents into fully editable Microsoft Word files (.docx). Advanced OCR-free conversion preserves text formatting, fonts, images, tables, and page layouts. Perfect for editing contracts, updating reports, or modifying documents without starting from scratch.",
    features: [
      { title: "Format Preservation", description: "Maintains original document formatting and layout.", details: ["Font styles preserved", "Images retained", "Table structure kept", "Headers/footers included"] },
      { title: "Complex Documents", description: "Handles multi-column layouts and complex formatting.", details: ["Multi-column support", "Text boxes", "Bullet lists", "Numbered lists"] },
      { title: "Image Extraction", description: "All embedded images are extracted and positioned correctly.", details: ["Original quality", "Correct positioning", "Alt text preserved", "Linked images"] },
      { title: "100% Private", description: "All conversion happens in your browser.", details: ["No server uploads", "Works offline", "GDPR compliant", "Enterprise safe"] }
    ],
    howItWorks: [
      { title: "Upload PDF", description: "Select or drag your PDF file" },
      { title: "Convert", description: "Browser processes the document" },
      { title: "Download", description: "Get your editable Word file" }
    ],
    useCases: [
      { title: "Contract Editing", description: "Edit PDF contracts by converting to Word, making changes, then exporting back to PDF." },
      { title: "Report Updates", description: "Update quarterly reports without recreating from scratch." },
      { title: "Resume Editing", description: "Edit PDF resumes received from candidates or update your own." },
      { title: "Document Collaboration", description: "Convert PDFs to Word for track changes and comments." }
    ],
    whyChoose: ["Format preservation", "Complex layouts", "Image support", "100% private", "No limits", "Free forever"],
    tips: ["For best results, use native PDF files (not scanned images).", "Check formatting after conversion and adjust as needed.", "Use Word's 'Accept All Changes' to clean up after editing."],
    faqs: [
      { question: "Will formatting be preserved?", answer: "Yes, our converter preserves fonts, styles, images, tables, and layouts as closely as possible." },
      { question: "Can I convert scanned PDFs?", answer: "Scanned PDFs require OCR first. Our tool works best with native/digital PDFs." },
      { question: "Is there a file size limit?", answer: "No artificial limits. Processing happens in your browser based on available memory." }
    ],
    relatedTools: [
      { title: "PDF to Excel", description: "Convert PDF tables to spreadsheets", path: "/pdf-to-excel-converter" },
      { title: "PDF Compressor", description: "Reduce PDF file size", path: "/pdf-compressor" },
      { title: "Word to PDF", description: "Convert Word docs to PDF", path: "/word-to-pdf-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PDF to Word Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "pdf-compressor",
    title: "Free PDF Compressor - Reduce PDF File Size Online",
    description: "Compress PDF files by up to 90% without quality loss. Reduce file size for email, uploads, storage. 100% free, browser-based compression.",
    keywords: "pdf compressor, compress pdf, reduce pdf size, pdf compression, shrink pdf, pdf file size reducer, compress pdf online",
    heroTitle: "Free PDF Compressor - Reduce File Size by 90%",
    heroSubtitle: "Compress PDF documents while maintaining quality. Perfect for email attachments, web uploads, and storage optimization.",
    heroHighlight: "Compress PDFs without visible quality loss",
    primaryCta: "Compress PDF Now",
    primaryCtaPath: "/pdf-tools",
    icon: Minimize2,
    iconColor: "text-green-500",
    category: "tool",
    toolDescription: "Our PDF compressor uses advanced algorithms to significantly reduce PDF file sizes without noticeable quality loss. Intelligent compression analyzes images, fonts, and metadata to achieve optimal reduction. Perfect for email attachments (under 25MB), web uploads, cloud storage, and archiving.",
    features: [
      { title: "Smart Compression", description: "Intelligent algorithms optimize each element.", details: ["Image downsampling", "Font subsetting", "Metadata removal", "Stream compression"] },
      { title: "Quality Presets", description: "Choose compression level based on your needs.", details: ["Maximum quality", "Balanced", "Maximum compression", "Custom settings"] },
      { title: "Batch Processing", description: "Compress multiple PDFs simultaneously.", details: ["Upload many files", "Consistent settings", "Bulk download", "Progress tracking"] },
      { title: "Browser-Based", description: "All processing in your browser.", details: ["No uploads", "100% private", "Works offline", "Fast processing"] }
    ],
    howItWorks: [
      { title: "Upload PDF", description: "Select PDF files to compress" },
      { title: "Choose Quality", description: "Select compression level" },
      { title: "Compress", description: "Files processed locally" },
      { title: "Download", description: "Get smaller PDF files" }
    ],
    useCases: [
      { title: "Email Attachments", description: "Compress PDFs to under 25MB for Gmail, Outlook email limits." },
      { title: "Web Upload", description: "Reduce file sizes for faster website uploads and better UX." },
      { title: "Cloud Storage", description: "Optimize PDFs to save storage space in Dropbox, Google Drive." },
      { title: "Document Archiving", description: "Compress historical documents for long-term storage." }
    ],
    whyChoose: ["Up to 90% smaller", "Quality preserved", "Batch support", "100% private", "No limits", "Free forever"],
    tips: ["Use 'Maximum quality' for documents you'll print.", "Use 'Maximum compression' for web/email sharing.", "Preview compressed PDF before downloading."],
    faqs: [
      { question: "How much can PDFs be compressed?", answer: "Typically 50-90% reduction depending on content. Image-heavy PDFs compress more." },
      { question: "Will quality be affected?", answer: "With balanced settings, quality loss is negligible. Maximum compression may affect image quality." },
      { question: "Can I compress multiple files?", answer: "Yes, batch processing supports multiple PDFs at once." }
    ],
    relatedTools: [
      { title: "PDF Merger", description: "Combine multiple PDFs", path: "/pdf-merger" },
      { title: "PDF to Word", description: "Convert PDF to Word", path: "/pdf-to-word-converter" },
      { title: "Image Compressor", description: "Compress images", path: "/image-compressor" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PDF Compressor", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "pdf-merger",
    title: "Free PDF Merger - Combine Multiple PDFs Online",
    description: "Merge multiple PDF files into one document. Rearrange pages, combine contracts, consolidate reports. 100% free, browser-based, no uploads.",
    keywords: "pdf merger, merge pdf, combine pdf, join pdf files, pdf combiner, merge pdf online, combine pdf files free",
    heroTitle: "Free PDF Merger - Combine Multiple PDFs Instantly",
    heroSubtitle: "Merge PDF files into a single document. Drag to reorder pages, combine contracts, consolidate reports with ease.",
    heroHighlight: "Drag and drop to rearrange before merging",
    primaryCta: "Merge PDFs Now",
    primaryCtaPath: "/pdf-tools",
    icon: Layers,
    iconColor: "text-purple-500",
    category: "tool",
    toolDescription: "Our PDF merger combines multiple PDF documents into a single file. Drag and drop interface lets you easily reorder files and pages before merging. Perfect for combining contracts, consolidating reports, merging scanned documents, or creating document packages.",
    features: [
      { title: "Drag & Drop Ordering", description: "Easily rearrange file and page order.", details: ["Visual reordering", "Page thumbnails", "Drag to sort", "Remove pages"] },
      { title: "Page Selection", description: "Select specific pages from each PDF.", details: ["Page range selection", "Exclude pages", "Preview pages", "Split & merge"] },
      { title: "Bookmarks Preserved", description: "Maintains bookmarks and table of contents.", details: ["Original bookmarks", "New bookmark creation", "Outline structure", "Page links"] },
      { title: "No File Limits", description: "Merge as many PDFs as needed.", details: ["Unlimited files", "Large file support", "Fast processing", "Batch merge"] }
    ],
    howItWorks: [
      { title: "Add PDFs", description: "Upload or drag PDF files" },
      { title: "Arrange", description: "Reorder files and pages as needed" },
      { title: "Merge", description: "Combine into single document" },
      { title: "Download", description: "Get your merged PDF" }
    ],
    useCases: [
      { title: "Contract Packages", description: "Combine main contract with addendums and exhibits into one file." },
      { title: "Report Consolidation", description: "Merge monthly reports into quarterly or annual documents." },
      { title: "Application Packets", description: "Combine resume, cover letter, certificates into one application." },
      { title: "Scanned Documents", description: "Merge multiple scanned pages into a single PDF document." }
    ],
    whyChoose: ["Drag & drop ordering", "Page selection", "Bookmarks preserved", "Unlimited files", "100% private", "Free forever"],
    tips: ["Arrange files in the order you want before merging.", "Use page selection to include only relevant pages.", "Add bookmarks after merging for easy navigation."],
    faqs: [
      { question: "How many PDFs can I merge?", answer: "There's no limit - merge as many PDFs as your browser memory allows." },
      { question: "Can I select specific pages?", answer: "Yes, you can choose specific pages or page ranges from each PDF." },
      { question: "Are bookmarks preserved?", answer: "Yes, original bookmarks are maintained in the merged document." }
    ],
    relatedTools: [
      { title: "PDF Splitter", description: "Split PDF into multiple files", path: "/pdf-splitter" },
      { title: "PDF Compressor", description: "Reduce merged PDF size", path: "/pdf-compressor" },
      { title: "PDF to Word", description: "Convert PDF to Word", path: "/pdf-to-word-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PDF Merger", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "pdf-splitter",
    title: "Free PDF Splitter - Split PDF Into Multiple Files Online",
    description: "Split PDF documents into separate files. Extract pages, split by page range, create individual page PDFs. 100% free and browser-based.",
    keywords: "pdf splitter, split pdf, divide pdf, extract pdf pages, pdf page extractor, split pdf online, separate pdf pages",
    heroTitle: "Free PDF Splitter - Divide PDFs Into Multiple Files",
    heroSubtitle: "Split large PDF documents into smaller files. Extract specific pages, split by range, or create individual page PDFs.",
    heroHighlight: "Split by page range, fixed intervals, or file size",
    primaryCta: "Split PDF Now",
    primaryCtaPath: "/pdf-tools",
    icon: Scissors,
    iconColor: "text-red-500",
    category: "tool",
    toolDescription: "Our PDF splitter divides large PDF documents into smaller, manageable files. Multiple splitting options: by page range, fixed page count, file size, or extract individual pages. Perfect for separating chapters, extracting specific sections, or breaking down large documents for email.",
    features: [
      { title: "Multiple Split Modes", description: "Various ways to divide your PDF.", details: ["By page range", "Fixed page count", "By file size", "Extract pages"] },
      { title: "Page Preview", description: "Preview pages before splitting.", details: ["Thumbnail view", "Page numbers", "Visual selection", "Range preview"] },
      { title: "Batch Download", description: "Download all split files at once.", details: ["Zip archive", "Named files", "Numbered sequence", "Original quality"] },
      { title: "Custom Naming", description: "Name output files your way.", details: ["Auto numbering", "Custom prefix", "Page numbers", "Custom pattern"] }
    ],
    howItWorks: [
      { title: "Upload PDF", description: "Select the PDF to split" },
      { title: "Choose Method", description: "Select split mode and options" },
      { title: "Preview", description: "Review split configuration" },
      { title: "Download", description: "Get split PDF files" }
    ],
    useCases: [
      { title: "Chapter Extraction", description: "Split ebooks or manuals into separate chapter files." },
      { title: "Email Attachment Limits", description: "Split large PDFs to meet email size restrictions." },
      { title: "Document Organization", description: "Separate combined documents into individual files." },
      { title: "Page Extraction", description: "Extract specific pages for sharing or printing." }
    ],
    whyChoose: ["Multiple split modes", "Page preview", "Batch download", "Custom naming", "100% private", "Free forever"],
    tips: ["Use page range mode for specific sections.", "Fixed page count is great for uniform chapters.", "Preview before splitting to verify selections."],
    faqs: [
      { question: "Can I extract specific pages?", answer: "Yes, you can specify exact page numbers or ranges to extract." },
      { question: "What split options are available?", answer: "Split by page range, fixed page count, file size, or extract individual pages." },
      { question: "How do I download multiple files?", answer: "Split files can be downloaded individually or as a zip archive." }
    ],
    relatedTools: [
      { title: "PDF Merger", description: "Combine PDFs into one", path: "/pdf-merger" },
      { title: "PDF Compressor", description: "Reduce file size", path: "/pdf-compressor" },
      { title: "PDF to Word", description: "Convert to Word", path: "/pdf-to-word-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PDF Splitter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "word-to-pdf-converter",
    title: "Free Word to PDF Converter - Convert DOCX to PDF Online",
    description: "Convert Microsoft Word documents to PDF instantly. Preserve formatting, fonts, images. Create professional PDFs from Word files. 100% free.",
    keywords: "word to pdf, docx to pdf, convert word to pdf, word pdf converter, doc to pdf, word to pdf online free",
    heroTitle: "Free Word to PDF Converter - Create Professional PDFs",
    heroSubtitle: "Convert Word documents (.doc, .docx) to PDF format with preserved formatting. Create professional, shareable PDF files instantly.",
    heroHighlight: "Preserves all formatting, fonts, and images",
    primaryCta: "Convert to PDF Now",
    primaryCtaPath: "/pdf-tools",
    icon: FileType,
    iconColor: "text-blue-500",
    category: "tool",
    toolDescription: "Our Word to PDF converter transforms Microsoft Word documents into professional PDF files while preserving all formatting. Fonts, images, tables, headers, footers, and page layouts are maintained perfectly. Ideal for creating shareable documents, print-ready files, or archival copies.",
    features: [
      { title: "Perfect Conversion", description: "Maintains all Word formatting in PDF.", details: ["Fonts embedded", "Images preserved", "Tables intact", "Styles maintained"] },
      { title: "DOC & DOCX Support", description: "Works with all Word formats.", details: [".docx (2007+)", ".doc (legacy)", "Templates (.dotx)", "Rich Text (.rtf)"] },
      { title: "PDF Options", description: "Customize PDF output settings.", details: ["PDF/A compliance", "Compression level", "Metadata options", "Security settings"] },
      { title: "Batch Conversion", description: "Convert multiple documents at once.", details: ["Upload many files", "Consistent settings", "Bulk download", "Zip archive"] }
    ],
    howItWorks: [
      { title: "Upload Word", description: "Select .doc or .docx file" },
      { title: "Convert", description: "Document converted to PDF" },
      { title: "Download", description: "Get your PDF file" }
    ],
    useCases: [
      { title: "Professional Documents", description: "Create shareable PDFs from Word reports and proposals." },
      { title: "Resume/CV", description: "Convert Word resumes to PDF for job applications." },
      { title: "Contracts", description: "Convert draft Word contracts to finalized PDFs." },
      { title: "Print Preparation", description: "Create print-ready PDFs from Word documents." }
    ],
    whyChoose: ["Perfect formatting", "All Word formats", "PDF options", "Batch support", "100% private", "Free forever"],
    tips: ["Embed fonts in Word before converting for best results.", "Use high-resolution images for print-quality PDFs.", "Check PDF/A option for long-term archival."],
    faqs: [
      { question: "Will my formatting be preserved?", answer: "Yes, all fonts, images, tables, and layouts are maintained in the PDF." },
      { question: "What Word formats are supported?", answer: ".doc, .docx, .dotx, and .rtf files can all be converted." },
      { question: "Can I convert multiple files?", answer: "Yes, batch conversion supports multiple Word documents at once." }
    ],
    relatedTools: [
      { title: "PDF to Word", description: "Convert PDF back to Word", path: "/pdf-to-word-converter" },
      { title: "PDF Compressor", description: "Reduce PDF file size", path: "/pdf-compressor" },
      { title: "Excel to PDF", description: "Convert Excel to PDF", path: "/excel-to-pdf-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Word to PDF Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "excel-to-pdf-converter",
    title: "Free Excel to PDF Converter - Convert Spreadsheets to PDF Online",
    description: "Convert Excel spreadsheets to PDF with preserved formatting. Convert .xlsx, .xls files. Perfect for sharing reports. 100% free and private.",
    keywords: "excel to pdf, xlsx to pdf, convert excel to pdf, spreadsheet to pdf, excel pdf converter, xls to pdf online",
    heroTitle: "Free Excel to PDF Converter - Share Spreadsheets as PDFs",
    heroSubtitle: "Convert Excel spreadsheets (.xlsx, .xls) to PDF format with perfect formatting. Create shareable reports and documents from your data.",
    heroHighlight: "Preserves formulas display, formatting, and charts",
    primaryCta: "Convert to PDF Now",
    primaryCtaPath: "/pdf-tools",
    icon: FileSpreadsheet,
    iconColor: "text-green-600",
    category: "tool",
    toolDescription: "Our Excel to PDF converter transforms spreadsheets into professional PDF documents with preserved formatting. Cell formatting, charts, images, and page layouts are maintained. Perfect for sharing financial reports, data tables, invoices, and dashboards without recipients needing Excel.",
    features: [
      { title: "Format Preservation", description: "Maintains Excel formatting in PDF.", details: ["Cell formatting", "Charts included", "Images preserved", "Conditional formatting"] },
      { title: "Sheet Options", description: "Control which sheets to convert.", details: ["All sheets", "Active sheet only", "Selected sheets", "Custom range"] },
      { title: "Page Setup", description: "Configure PDF page settings.", details: ["Portrait/landscape", "Page size", "Margins", "Scaling options"] },
      { title: "Multiple Formats", description: "Works with all Excel formats.", details: [".xlsx", ".xls", ".xlsm", ".csv"] }
    ],
    howItWorks: [
      { title: "Upload Excel", description: "Select spreadsheet file" },
      { title: "Choose Options", description: "Select sheets and settings" },
      { title: "Convert", description: "Spreadsheet converted to PDF" },
      { title: "Download", description: "Get your PDF file" }
    ],
    useCases: [
      { title: "Financial Reports", description: "Share Excel financial reports as PDFs with stakeholders." },
      { title: "Invoice Generation", description: "Convert Excel invoices to PDF for clients." },
      { title: "Data Presentations", description: "Create PDF handouts from Excel dashboards." },
      { title: "Report Distribution", description: "Share read-only versions of sensitive spreadsheets." }
    ],
    whyChoose: ["Perfect formatting", "Chart support", "Multiple sheets", "Page options", "100% private", "Free forever"],
    tips: ["Set print area in Excel before converting for best results.", "Use 'Fit to page' for wide spreadsheets.", "Convert specific sheets if you don't need the entire workbook."],
    faqs: [
      { question: "Are charts and images included?", answer: "Yes, all charts, images, and graphics are preserved in the PDF." },
      { question: "Can I convert multiple sheets?", answer: "Yes, you can convert all sheets or select specific sheets to include." },
      { question: "What about formulas?", answer: "Formulas are converted to their displayed values in the PDF." }
    ],
    relatedTools: [
      { title: "PDF to Excel", description: "Convert PDF to spreadsheet", path: "/pdf-to-excel-converter" },
      { title: "JSON to Excel", description: "Convert JSON to Excel", path: "/json-to-excel-converter" },
      { title: "Word to PDF", description: "Convert Word to PDF", path: "/word-to-pdf-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Excel to PDF Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "image-to-pdf-converter",
    title: "Free Image to PDF Converter - Convert JPG PNG to PDF Online",
    description: "Convert images to PDF documents. Combine multiple JPG, PNG, WebP images into one PDF. Adjust size, orientation. 100% free and private.",
    keywords: "image to pdf, jpg to pdf, png to pdf, convert image to pdf, photo to pdf, pictures to pdf, image pdf converter",
    heroTitle: "Free Image to PDF Converter - Create PDFs from Images",
    heroSubtitle: "Convert JPG, PNG, WebP images to PDF. Combine multiple images into one document with customizable page size and layout.",
    heroHighlight: "Combine multiple images into one PDF document",
    primaryCta: "Convert Images to PDF",
    primaryCtaPath: "/pdf-tools",
    icon: FileImage,
    iconColor: "text-purple-500",
    category: "tool",
    toolDescription: "Our Image to PDF converter transforms images into professional PDF documents. Support for JPG, PNG, GIF, WebP, and other formats. Combine multiple images into a single PDF, adjust page size, set orientation, and control image placement. Perfect for creating photo albums, document scans, or image portfolios.",
    features: [
      { title: "Multiple Formats", description: "Convert various image formats to PDF.", details: ["JPG/JPEG", "PNG", "WebP", "GIF/BMP/TIFF"] },
      { title: "Combine Images", description: "Merge multiple images into one PDF.", details: ["Drag to reorder", "One image per page", "Multiple per page", "Custom layout"] },
      { title: "Page Options", description: "Customize PDF page settings.", details: ["A4, Letter, etc.", "Portrait/landscape", "Margins control", "Image fit options"] },
      { title: "Quality Control", description: "Maintain or compress image quality.", details: ["Original quality", "Compression options", "DPI settings", "Color mode"] }
    ],
    howItWorks: [
      { title: "Upload Images", description: "Select images to convert" },
      { title: "Arrange", description: "Reorder and configure pages" },
      { title: "Set Options", description: "Choose size and layout" },
      { title: "Download PDF", description: "Get your image PDF" }
    ],
    useCases: [
      { title: "Photo Albums", description: "Create printable PDF photo albums from digital images." },
      { title: "Document Scanning", description: "Combine phone photos of documents into one PDF." },
      { title: "Portfolio Creation", description: "Create PDF portfolios from artwork or design images." },
      { title: "Receipt Storage", description: "Convert receipt photos to organized PDF documents." }
    ],
    whyChoose: ["Multiple formats", "Combine images", "Page options", "Quality control", "100% private", "Free forever"],
    tips: ["Use high-resolution images for print-quality PDFs.", "Arrange images in order before converting.", "Choose appropriate page size for your use case."],
    faqs: [
      { question: "What image formats are supported?", answer: "JPG, PNG, GIF, WebP, BMP, and TIFF are all supported." },
      { question: "Can I combine multiple images?", answer: "Yes, upload multiple images and arrange them into one PDF." },
      { question: "Will image quality be preserved?", answer: "Yes, you can keep original quality or choose compression levels." }
    ],
    relatedTools: [
      { title: "PDF to Image", description: "Convert PDF pages to images", path: "/pdf-to-image-converter" },
      { title: "Image Compressor", description: "Compress images first", path: "/image-compressor" },
      { title: "PDF Merger", description: "Merge PDFs together", path: "/pdf-merger" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Image to PDF Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "pdf-to-image-converter",
    title: "Free PDF to Image Converter - Convert PDF to JPG PNG Online",
    description: "Convert PDF pages to images. Extract pages as JPG, PNG, WebP. High-quality conversion. 100% free, browser-based, private processing.",
    keywords: "pdf to image, pdf to jpg, pdf to png, convert pdf to image, pdf to picture, extract images from pdf, pdf image converter",
    heroTitle: "Free PDF to Image Converter - Extract Pages as Images",
    heroSubtitle: "Convert PDF pages to high-quality JPG, PNG, or WebP images. Extract all pages or select specific pages for conversion.",
    heroHighlight: "High-resolution output up to 300 DPI",
    primaryCta: "Convert PDF to Images",
    primaryCtaPath: "/pdf-tools",
    icon: Image,
    iconColor: "text-pink-500",
    category: "tool",
    toolDescription: "Our PDF to Image converter extracts PDF pages as high-quality images. Support for JPG, PNG, and WebP output formats with customizable resolution up to 300 DPI. Perfect for extracting graphics from PDFs, creating social media images, or preparing print materials.",
    features: [
      { title: "Output Formats", description: "Choose from multiple image formats.", details: ["JPG (smaller files)", "PNG (transparency)", "WebP (modern)", "TIFF (print)"] },
      { title: "Resolution Control", description: "Set output image quality.", details: ["72 DPI (web)", "150 DPI (standard)", "300 DPI (print)", "Custom DPI"] },
      { title: "Page Selection", description: "Convert all or specific pages.", details: ["All pages", "Page range", "Specific pages", "Even/odd pages"] },
      { title: "Batch Export", description: "Download all images efficiently.", details: ["Individual files", "Zip archive", "Named sequence", "Folder structure"] }
    ],
    howItWorks: [
      { title: "Upload PDF", description: "Select PDF to convert" },
      { title: "Choose Format", description: "Select JPG, PNG, or WebP" },
      { title: "Set Quality", description: "Choose resolution (DPI)" },
      { title: "Download", description: "Get image files" }
    ],
    useCases: [
      { title: "Social Media", description: "Extract PDF pages for social media posts and graphics." },
      { title: "Presentations", description: "Convert PDF slides to images for other tools." },
      { title: "Thumbnails", description: "Create preview thumbnails of PDF documents." },
      { title: "Print Prep", description: "Extract high-res images for printing or design work." }
    ],
    whyChoose: ["Multiple formats", "High resolution", "Page selection", "Batch export", "100% private", "Free forever"],
    tips: ["Use PNG for images with text or transparency.", "300 DPI is recommended for printing.", "JPG gives smaller files for web use."],
    faqs: [
      { question: "What formats can I export to?", answer: "JPG, PNG, WebP, and TIFF formats are supported." },
      { question: "What resolution/DPI should I use?", answer: "72 DPI for web, 150 for standard use, 300+ for printing." },
      { question: "Can I convert specific pages only?", answer: "Yes, select specific pages or page ranges to convert." }
    ],
    relatedTools: [
      { title: "Image to PDF", description: "Convert images to PDF", path: "/image-to-pdf-converter" },
      { title: "Image Compressor", description: "Compress extracted images", path: "/image-compressor" },
      { title: "PDF Tools", description: "More PDF tools", path: "/pdf-tools" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PDF to Image Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "html-to-pdf-converter",
    title: "Free HTML to PDF Converter - Convert Web Pages to PDF Online",
    description: "Convert HTML pages to PDF documents. Preserve styles, images, links. Save web pages as PDFs. 100% free and browser-based.",
    keywords: "html to pdf, convert html to pdf, webpage to pdf, save webpage as pdf, html pdf converter, web page to pdf online",
    heroTitle: "Free HTML to PDF Converter - Save Web Pages as PDFs",
    heroSubtitle: "Convert HTML pages and web content to PDF documents. Preserve styling, images, and links in your PDF output.",
    heroHighlight: "Preserves CSS styles, images, and formatting",
    primaryCta: "Convert HTML to PDF",
    primaryCtaPath: "/pdf-tools",
    icon: FileType,
    iconColor: "text-orange-500",
    category: "tool",
    toolDescription: "Our HTML to PDF converter transforms web pages and HTML content into professional PDF documents. CSS styles, images, links, and formatting are preserved. Perfect for archiving web content, creating printable versions of web pages, or generating PDFs from HTML templates.",
    features: [
      { title: "Style Preservation", description: "Maintains CSS styling in PDF.", details: ["Inline styles", "External CSS", "Media queries", "Custom fonts"] },
      { title: "Link Support", description: "Preserves hyperlinks in PDF.", details: ["Internal links", "External links", "Anchor links", "Clickable URLs"] },
      { title: "Page Options", description: "Control PDF output settings.", details: ["Page size", "Orientation", "Margins", "Headers/footers"] },
      { title: "Input Methods", description: "Multiple ways to provide HTML.", details: ["Paste HTML code", "Upload .html file", "Enter URL", "Live editor"] }
    ],
    howItWorks: [
      { title: "Enter HTML", description: "Paste HTML or enter URL" },
      { title: "Preview", description: "See how PDF will look" },
      { title: "Adjust Settings", description: "Set page size, margins" },
      { title: "Download PDF", description: "Get your PDF document" }
    ],
    useCases: [
      { title: "Web Archiving", description: "Save web pages as PDFs for offline access and archiving." },
      { title: "Invoice Generation", description: "Convert HTML invoice templates to PDF for clients." },
      { title: "Report Creation", description: "Generate PDF reports from HTML dashboards." },
      { title: "Documentation", description: "Convert HTML documentation to downloadable PDFs." }
    ],
    whyChoose: ["CSS preserved", "Links work", "Page options", "Multiple inputs", "100% private", "Free forever"],
    tips: ["Use print-friendly CSS for best results.", "Test with preview before final conversion.", "Set appropriate page size for content width."],
    faqs: [
      { question: "Will CSS styles be preserved?", answer: "Yes, inline and external CSS styles are maintained in the PDF." },
      { question: "Do links work in the PDF?", answer: "Yes, hyperlinks are preserved and clickable in the PDF." },
      { question: "Can I convert a live webpage?", answer: "Yes, enter the URL and we'll convert the page content to PDF." }
    ],
    relatedTools: [
      { title: "Text to HTML", description: "Convert text to HTML first", path: "/text-to-html" },
      { title: "JSON to PDF", description: "Convert JSON to PDF", path: "/json-to-pdf" },
      { title: "PDF Compressor", description: "Compress output PDF", path: "/pdf-compressor" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "HTML to PDF Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "pdf-page-rotator",
    title: "Free PDF Page Rotator - Rotate PDF Pages Online",
    description: "Rotate PDF pages 90°, 180°, or 270°. Fix upside-down pages, correct scanned documents. Rotate all or specific pages. 100% free.",
    keywords: "rotate pdf, pdf page rotator, rotate pdf pages, flip pdf, turn pdf pages, pdf rotation tool, rotate pdf online",
    heroTitle: "Free PDF Page Rotator - Fix Page Orientation",
    heroSubtitle: "Rotate PDF pages to fix orientation issues. Rotate individual pages or entire documents. Perfect for correcting scanned documents.",
    heroHighlight: "Rotate 90°, 180°, or 270° clockwise or counter-clockwise",
    primaryCta: "Rotate PDF Pages Now",
    primaryCtaPath: "/pdf-tools",
    icon: RotateCw,
    iconColor: "text-teal-500",
    category: "tool",
    toolDescription: "Our PDF Page Rotator lets you fix page orientation issues in PDF documents. Rotate individual pages or all pages at once. Support for 90°, 180°, and 270° rotation. Perfect for correcting scanned documents, fixing mobile PDF captures, or adjusting page orientation.",
    features: [
      { title: "Rotation Options", description: "Multiple rotation angles available.", details: ["90° clockwise", "90° counter-clockwise", "180° flip", "Custom angles"] },
      { title: "Page Selection", description: "Rotate specific or all pages.", details: ["Single page", "Page range", "All pages", "Even/odd pages"] },
      { title: "Visual Preview", description: "See changes before saving.", details: ["Page thumbnails", "Rotation preview", "Before/after view", "Zoom controls"] },
      { title: "Batch Processing", description: "Process multiple PDFs at once.", details: ["Upload many files", "Same rotation", "Individual settings", "Bulk download"] }
    ],
    howItWorks: [
      { title: "Upload PDF", description: "Select PDF with orientation issues" },
      { title: "Select Pages", description: "Choose which pages to rotate" },
      { title: "Choose Angle", description: "Select rotation direction/angle" },
      { title: "Download", description: "Get corrected PDF" }
    ],
    useCases: [
      { title: "Scanned Documents", description: "Fix pages scanned upside-down or sideways." },
      { title: "Mobile Captures", description: "Correct PDFs created from phone photos with wrong orientation." },
      { title: "Mixed Orientation", description: "Standardize documents with mixed portrait/landscape pages." },
      { title: "Print Preparation", description: "Ensure all pages have correct orientation for printing." }
    ],
    whyChoose: ["Multiple angles", "Page selection", "Visual preview", "Batch support", "100% private", "Free forever"],
    tips: ["Preview each page before saving to verify rotation.", "Use 'All pages' for documents with consistent issues.", "Rotate landscape pages for better printing."],
    faqs: [
      { question: "Can I rotate specific pages only?", answer: "Yes, select individual pages or page ranges to rotate." },
      { question: "What rotation angles are available?", answer: "90° clockwise, 90° counter-clockwise, and 180° flip." },
      { question: "Will this affect PDF quality?", answer: "No, rotation is lossless and doesn't affect document quality." }
    ],
    relatedTools: [
      { title: "PDF Merger", description: "Combine rotated PDFs", path: "/pdf-merger" },
      { title: "PDF Compressor", description: "Compress after rotation", path: "/pdf-compressor" },
      { title: "PDF to Image", description: "Convert pages to images", path: "/pdf-to-image-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PDF Page Rotator", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  }
];
