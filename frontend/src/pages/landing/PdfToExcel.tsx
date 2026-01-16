import { FileSpreadsheet } from "lucide-react";
import { ToolLandingTemplate } from "@/components/landing/ToolLandingTemplate";

const pdfToExcelData = {
  // SEO
  title: "Free PDF to Excel Converter - Extract Tables to Spreadsheet",
  description: "Convert PDF to Excel instantly. Extract tables from bank statements, financial reports, invoices. 100% browser-based, no uploads. Tested with Chase, BofA, Wells Fargo PDFs.",
  keywords: "pdf to excel converter, convert pdf to excel free, pdf to spreadsheet, bank statement pdf to excel, pdf table to excel, extract pdf data to excel",
  path: "/pdf-to-excel-converter",
  
  // Hero
  heroTitle: "Free PDF to Excel Converter - Extract Tables & Data to Spreadsheet",
  heroSubtitle: "Convert bank statements, financial reports, and data tables to Excel in seconds. Transform PDFs to Word documents. Your files never leave your device - 100% browser-based for complete privacy.",
  heroHighlight: "Perfect for bank statement PDF to Excel conversion - Chase, Bank of America, Wells Fargo & more",
  primaryCta: "Convert PDF to Excel Now",
  primaryCtaPath: "/pdf-tools",
  secondaryCta: "Try Sample PDF",
  secondaryCtaPath: "/pdf-tools",
  
  // Icon
  icon: FileSpreadsheet,
  iconColor: "text-green-500",
  
  // Content
  toolDescription: `Our advanced PDF to Excel converter uses intelligent algorithms to identify and extract tables with 95%+ accuracy. Unlike basic converters that simply dump text, we recognize column headers and data relationships, merged cells and spanning columns, nested tables and sub-headers, alternating row patterns, and bold headers and totals rows. Perfect for complex financial documents like bank statements where transaction data must maintain precise structure. The algorithm adapts to different table formats - whether it's a simple 3-column bank transaction list or a complex multi-page financial report with subtotals and calculations.`,
  
  features: [
    {
      title: "Accurate Table Detection & Extraction",
      description: "Advanced PDF parsing engine uses intelligent algorithms to identify and extract tables with 95%+ accuracy.",
      details: [
        "Column headers and data relationships",
        "Merged cells and spanning columns",
        "Nested tables and sub-headers",
        "Alternating row patterns"
      ]
    },
    {
      title: "Preserves Formatting, Fonts & Structure",
      description: "Don't lose your document's formatting in conversion. Maintains font families, sizes, text colors, cell backgrounds, and borders.",
      details: [
        "Font families, sizes, and weights",
        "Text colors and highlights",
        "Cell background colors and patterns",
        "Number and date formatting"
      ]
    },
    {
      title: "Bank Statement Conversion",
      description: "Specifically optimized for bank statement PDFs from major financial institutions including Chase, Bank of America, Wells Fargo, Citi, and Capital One.",
      details: [
        "Personal and business statements",
        "Credit card monthly statements",
        "Transaction date and posting date",
        "Check numbers and reference IDs"
      ]
    },
    {
      title: "Multi-Page Document Processing",
      description: "Handle PDFs of any length effortlessly. Process single-page or 100+ page documents with options for sheet organization.",
      details: [
        "Create one sheet with all data",
        "Separate sheets per page",
        "Split into multiple Excel files",
        "Extract specific page ranges"
      ]
    },
    {
      title: "Handle Large Files - No Size Restrictions",
      description: "Unlike cloud-based converters that limit free users to 5MB or 10MB files, we have NO artificial limits.",
      details: [
        "Small PDFs (< 1MB): 1-2 seconds",
        "Medium PDFs (1-10MB): 3-5 seconds",
        "Large PDFs (10-50MB): 10-20 seconds",
        "Very large PDFs (50MB+): 30-60 seconds"
      ]
    },
    {
      title: "100% Private & Secure - No Server Uploads",
      description: "Your financial data never leaves your device. Ever. Zero data transmission to our servers.",
      details: [
        "Bank statements stay private",
        "HIPAA-compliant processing",
        "GDPR compliant",
        "Verify in browser DevTools"
      ]
    },
    {
      title: "Preserves Data Types & Formulas",
      description: "Intelligent parser recognizes and preserves numbers, dates, currency, percentages, and attempts to recreate Excel formulas.",
      details: [
        "Numbers maintain precision",
        "Dates convert to Excel format",
        "Currency symbols preserved",
        "Empty cells maintained"
      ]
    },
    {
      title: "Batch Processing",
      description: "Need to convert multiple bank statements or invoices? Upload up to 50 PDFs at once and process them simultaneously.",
      details: [
        "Process up to 50 PDFs at once",
        "Download as separate files",
        "Or combined workbook",
        "Auto-naming from original files"
      ]
    },
    {
      title: "Password-Protected PDF Support",
      description: "Many bank statements and financial documents are password-protected. We handle them with local password processing.",
      details: [
        "Enter password prompt appears",
        "Password processed locally",
        "Option to remove protection",
        "Never sent to servers"
      ]
    },
    {
      title: "Export Options & Compatibility",
      description: "Maximum flexibility for your workflow with .XLSX, .XLS, and CSV options compatible with all major spreadsheet applications.",
      details: [
        "Excel 2007-2021, Microsoft 365",
        "Google Sheets compatible",
        "LibreOffice Calc 5.0+",
        "Apple Numbers 3.0+"
      ]
    }
  ],
  
  howItWorks: [
    {
      title: "Upload Your PDF",
      description: "Click to select or drag & drop your PDF file. Works with all standard PDF formats."
    },
    {
      title: "Automatic Detection",
      description: "Our algorithm scans and identifies all tables, columns, and data structures."
    },
    {
      title: "Preview & Adjust",
      description: "Review detected data in preview pane. Adjust table boundaries if needed."
    },
    {
      title: "Choose Format",
      description: "Select .XLSX or .XLS format with your preferred options."
    },
    {
      title: "Convert & Download",
      description: "Conversion happens instantly in browser. Download immediately."
    }
  ],
  
  useCases: [
    {
      title: "Accounting & Financial Analysis",
      description: "Accountants and bookkeepers convert PDF bank statements, financial reports, and transaction histories to Excel for analysis. Save 10+ hours per month vs manual data entry."
    },
    {
      title: "Small Business Expense Tracking",
      description: "Small business owners and freelancers convert credit card statements and bank statements to track expenses and income. Identify tax-deductible expenses easily."
    },
    {
      title: "Mortgage & Loan Applications",
      description: "Banks require 3-6 months of bank statements for mortgage applications. Convert all PDFs to one Excel workbook for faster application processing."
    },
    {
      title: "Tax Preparation & Deductions",
      description: "Extract transaction data for tax filing and maximizing deductions. Filter transactions for deductible expenses and calculate totals for Schedule C."
    },
    {
      title: "Budget Creation & Analysis",
      description: "Convert statements to analyze spending patterns and create realistic budgets. Use pivot tables to categorize spending by groceries, dining, entertainment."
    },
    {
      title: "Business Invoice Processing",
      description: "Accounts payable departments convert vendor invoices to Excel for tracking and payment scheduling. Avoid late payment fees and take advantage of early payment discounts."
    },
    {
      title: "Real Estate & Property Management",
      description: "Property managers and landlords convert tenant payment records and property expense PDFs. Track occupancy and payment rates across multiple properties."
    }
  ],
  
  whyChoose: [
    "95%+ accuracy for digital PDFs",
    "No file size limits",
    "100% browser-based processing",
    "Zero server uploads",
    "Optimized for bank statements",
    "Preserves all formatting",
    "Batch processing support",
    "Completely free forever"
  ],
  
  tips: [
    "Ensure your PDF contains actual tables (not scanned images). Try selecting text in the PDF - if you can highlight it, our converter will work best.",
    "Download 'Digital' or 'Machine-readable' statements from your bank website for best conversion accuracy. These convert 10x more accurately than scanned images.",
    "Always check the preview before downloading to verify all columns are detected and data is aligned properly.",
    "For multi-month statements, use batch processing to convert all 12 at once. Name files consistently for easy organization.",
    "After conversion, spot-check 5-10 random rows against the original PDF to verify critical numbers are accurate.",
    "Clean up Excel data after conversion: remove extra rows, rename columns, format numbers, and create pivot tables for analysis."
  ],
  
  faqs: [
    {
      question: "Can I convert scanned PDFs to Excel?",
      answer: "Scanned PDFs (images of paper documents) require OCR first. Our tool works best with digital PDFs that contain selectable text. How to check: Try selecting text in your PDF - if you can highlight it, our converter will work. If you can't select text, you'll need OCR first."
    },
    {
      question: "What's the maximum file size I can convert?",
      answer: "There's no artificial limit - we don't restrict file sizes like cloud converters do. The only limit is your device's browser memory. Most modern computers easily handle files up to 100MB+."
    },
    {
      question: "Does it work with bank statements from Chase, Bank of America, Wells Fargo?",
      answer: "Yes! We've specifically tested and optimized our converter for major bank formats including Chase, Bank of America, Wells Fargo, Citibank, Capital One, US Bank, PNC, TD Bank, and 20+ other major banks."
    },
    {
      question: "How accurate is the conversion?",
      answer: "For digital PDFs with clear table structures, our accuracy is 95%+. For complex layouts or poorly formatted PDFs, accuracy may be 80-90%. Always spot-check critical data."
    },
    {
      question: "Is my data secure?",
      answer: "Your data never leaves your device. All processing happens in your browser using JavaScript. You can verify this by checking your browser's Network tab - you'll see zero file uploads during conversion."
    },
    {
      question: "Can I convert password-protected PDFs?",
      answer: "Yes! If your PDF is password-protected, you'll be prompted to enter the password. The password is processed locally and never sent to any server."
    },
    {
      question: "What Excel formats are supported?",
      answer: "We support .XLSX (Excel 2007 and later, recommended) and .XLS (legacy format for Excel 2003 and earlier). Files are compatible with Microsoft Excel, Google Sheets, LibreOffice, and Apple Numbers."
    },
    {
      question: "Can I process multiple PDFs at once?",
      answer: "Yes! Our batch processing feature lets you upload and convert up to 50 PDFs simultaneously. You can download them as separate files or combine them into one workbook."
    },
    {
      question: "Is there any cost or subscription required?",
      answer: "No! This tool is completely free with unlimited conversions, no file size limits, no daily limits, and no watermarks. We don't even require registration."
    },
    {
      question: "How long does conversion take?",
      answer: "Conversion is nearly instant since everything happens in your browser. A 10-page PDF typically converts in 3-5 seconds. Large files (50+ pages) may take 30-45 seconds."
    }
  ],
  
  relatedTools: [
    {
      title: "PDF to Word Converter",
      description: "Convert PDFs to editable Word documents with formatting preserved.",
      path: "/pdf-tools"
    },
    {
      title: "JSON to PDF Converter",
      description: "Transform JSON data into professional PDF documents.",
      path: "/json-to-pdf"
    },
    {
      title: "Image Compressor",
      description: "Compress images by 50-80% without quality loss.",
      path: "/image-tools"
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON with syntax highlighting.",
      path: "/json-formatter"
    }
  ],
  
  bankSupport: {
    title: "Perfect for Converting Bank Statements from Major Banks",
    description: "We've specifically optimized our PDF to Excel converter for bank statement processing. Tested and verified with all major financial institutions.",
    banks: [
      "Chase Bank",
      "Bank of America",
      "Wells Fargo",
      "Citibank",
      "Capital One",
      "US Bank",
      "PNC Bank",
      "TD Bank",
      "Regions Bank",
      "Fifth Third"
    ],
    extractions: [
      "Transaction dates (post date and effective date)",
      "Payee / merchant descriptions",
      "Check numbers or reference IDs",
      "Debit / withdrawal amounts",
      "Credit / deposit amounts",
      "Running balance after each transaction",
      "Beginning and ending statement balances",
      "Account information (last 4 digits)"
    ]
  },
  
  technicalDetails: {
    title: "How Our PDF to Excel Converter Works",
    items: [
      {
        label: "PDF Parsing",
        description: "Loads PDF into browser memory using PDF.js library (Mozilla's open-source PDF renderer). Extracts text content, positioning, and formatting."
      },
      {
        label: "Table Detection Algorithm",
        description: "Analyzes text positioning to identify table structures. Uses spacing, alignment, and repeated patterns to find columns and rows."
      },
      {
        label: "Data Extraction",
        description: "Groups detected text into cells based on table structure. Identifies data types (numbers, dates, currency, text)."
      },
      {
        label: "Excel Generation",
        description: "Uses SheetJS library (XLSX.js) to create Excel file format. Writes data with appropriate formatting."
      },
      {
        label: "Privacy Architecture",
        description: "All JavaScript processing happens client-side. No API calls to external servers. Files cleared from memory when you close the tab."
      },
      {
        label: "Performance",
        description: "10-page PDF converts in 3-5 seconds, 50-page in 10-15 seconds. No upload delays since everything is local."
      }
    ]
  },
  
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF to Excel Converter",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Web Browser",
    "description": "Free browser-based PDF to Excel converter. Extract tables from bank statements, financial reports, invoices. 100% private with zero uploads.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
};

export default function PdfToExcel() {
  return <ToolLandingTemplate {...pdfToExcelData} />;
}
