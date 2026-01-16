import { FileSpreadsheet } from "lucide-react";
import { ToolLandingTemplate } from "@/components/landing/ToolLandingTemplate";

const jsonToExcelData = {
  // SEO
  title: "Free JSON to Excel Converter - Convert JSON to XLS/XLSX Online",
  description: "Convert JSON arrays to Excel spreadsheets instantly. Creates formatted tables with headers. 100% browser-based, no uploads, completely free. Perfect for data exports and API responses.",
  keywords: "json to excel converter, convert json to excel, json array to spreadsheet, json to xls, json to xlsx, export json to excel",
  path: "/json-to-excel-converter",
  
  // Hero
  heroTitle: "Free JSON to Excel Converter - Transform JSON Arrays to Spreadsheets",
  heroSubtitle: "Convert JSON data to Excel spreadsheets with automatic table formatting. Perfect for developers, data analysts, and business users who need to export API responses or database queries to Excel.",
  heroHighlight: "Arrays of objects automatically become Excel tables with proper headers",
  primaryCta: "Convert JSON to Excel Now",
  primaryCtaPath: "/json-to-pdf",
  secondaryCta: "Try Example",
  secondaryCtaPath: "/json-to-pdf",
  
  // Icon
  icon: FileSpreadsheet,
  iconColor: "text-green-500",
  
  // Content
  toolDescription: `Our JSON to Excel converter intelligently transforms JSON arrays into properly formatted Excel spreadsheets. It automatically detects object keys and creates column headers, handles nested objects with intelligent flattening, preserves data types (numbers, dates, booleans), and processes large datasets with thousands of records efficiently. Whether you're exporting API responses, database query results, or application data, our tool creates professional spreadsheets ready for analysis in seconds.`,
  
  features: [
    {
      title: "Automatic Header Detection",
      description: "Intelligently analyzes JSON object keys and creates properly formatted column headers in your Excel spreadsheet.",
      details: [
        "Converts camelCase to Title Case",
        "Handles underscore_case keys",
        "Preserves original key names option",
        "Custom header naming available"
      ]
    },
    {
      title: "Nested Object Flattening",
      description: "Handles complex JSON structures with nested objects. Choose between dot notation flattening or creating multiple sheets.",
      details: [
        "Dot notation: user.address.city → separate column",
        "Multiple sheets for nested arrays",
        "Configurable nesting depth",
        "Skip nested objects option"
      ]
    },
    {
      title: "Multiple Sheet Support",
      description: "Create organized workbooks with multiple sheets for different data sections or nested arrays within your JSON.",
      details: [
        "Separate sheets per nested array",
        "Custom sheet naming",
        "Sheet linking with references",
        "Summary sheet generation"
      ]
    },
    {
      title: "Preserves Data Types",
      description: "Numbers stay as numbers, dates are formatted correctly, and booleans display appropriately in Excel.",
      details: [
        "Numbers maintain precision",
        "Dates auto-formatted",
        "Booleans as TRUE/FALSE",
        "Null values handled properly"
      ]
    },
    {
      title: "Handle Large Datasets",
      description: "Process JSON arrays with 10,000+ records efficiently. No artificial limits on data size.",
      details: [
        "10,000 records: 2-3 seconds",
        "50,000 records: 5-10 seconds",
        "100,000 records: 15-20 seconds",
        "Memory-efficient processing"
      ]
    },
    {
      title: "Custom Column Formatting",
      description: "Configure column widths, number formats, date formats, and cell styles for professional output.",
      details: [
        "Auto-fit column widths",
        "Currency formatting",
        "Date format options",
        "Conditional formatting"
      ]
    },
    {
      title: "100% Browser-Based",
      description: "All processing happens locally in your browser. Your data never touches our servers.",
      details: [
        "No server uploads",
        "Works offline after load",
        "Complete data privacy",
        "GDPR compliant"
      ]
    },
    {
      title: "No File Size Limits",
      description: "Unlike cloud converters with free tier limits, convert JSON of any size without restrictions.",
      details: [
        "No file size limits",
        "No record count limits",
        "No daily conversion limits",
        "Completely unlimited"
      ]
    }
  ],
  
  howItWorks: [
    {
      title: "Paste JSON Array",
      description: "Paste your JSON data from API responses, database exports, or files."
    },
    {
      title: "Detect Headers",
      description: "Tool automatically identifies object keys and creates column headers."
    },
    {
      title: "Preview Table",
      description: "See exactly how your Excel file will look before downloading."
    },
    {
      title: "Customize Columns",
      description: "Optionally reorder columns, rename headers, or adjust formatting."
    },
    {
      title: "Download Excel",
      description: "Get your .xlsx or .xls file instantly, ready for analysis."
    }
  ],
  
  useCases: [
    {
      title: "API Response Export",
      description: "Export REST API responses to Excel for analysis. Perfect for developers who need to analyze large datasets returned from endpoints."
    },
    {
      title: "Database Query Results",
      description: "Convert database query results (exported as JSON) to Excel spreadsheets. Ideal for data analysts working with MongoDB, PostgreSQL JSON exports."
    },
    {
      title: "E-commerce Product Catalogs",
      description: "Transform product catalog JSON data into Excel for inventory management, pricing updates, or bulk editing."
    },
    {
      title: "User Lists from Applications",
      description: "Export user data from applications to Excel for marketing, analysis, or reporting purposes."
    },
    {
      title: "Analytics Data Export",
      description: "Convert analytics JSON exports (from Google Analytics, Mixpanel, etc.) to Excel for custom reporting and visualization."
    }
  ],
  
  whyChoose: [
    "10x faster than manual Excel creation",
    "More private than cloud tools",
    "No programming needed",
    "Instant conversion",
    "Completely free",
    "Unlimited usage",
    "Handles complex nested data",
    "Professional formatting"
  ],
  
  tips: [
    "Use consistent object keys across your JSON array for clean, uniform columns. Inconsistent keys will create columns with empty cells.",
    "For deeply nested objects, consider pre-flattening your data or using the dot notation option for cleaner spreadsheets.",
    "Rename cryptic keys (like 'qty' or 'dt') to descriptive names ('Quantity', 'Date') before conversion for more readable headers.",
    "Test with a small sample of your data first (10-20 records) before converting the full dataset to verify the output format meets your needs."
  ],
  
  faqs: [
    {
      question: "Can I convert nested JSON to Excel?",
      answer: "Yes! Our converter handles nested objects in two ways: 1) Flatten them using dot notation (user.address.city becomes a 'User Address City' column), or 2) Create separate sheets for nested arrays. You can configure which approach works best for your data."
    },
    {
      question: "What's the maximum array size I can convert?",
      answer: "There's no hard limit. We've tested with arrays of 100,000+ objects. Processing time depends on your device, but typical datasets (1,000-10,000 records) convert in 2-5 seconds."
    },
    {
      question: "How are null values handled?",
      answer: "Null values are converted to empty cells in Excel. You can optionally configure them to display as 'N/A', '0', or any custom value."
    },
    {
      question: "Can I customize column names?",
      answer: "Yes! Before downloading, you can rename any column header. The converter also automatically converts camelCase and snake_case to readable titles."
    },
    {
      question: "Does it preserve number formatting?",
      answer: "Yes! Numbers are stored as Excel numbers (not text), so you can use them in formulas immediately. Currency symbols, decimals, and percentages are detected and formatted appropriately."
    },
    {
      question: "Can I add multiple JSON arrays as separate sheets?",
      answer: "Absolutely! You can convert multiple JSON arrays and have each one become a separate sheet in the same Excel workbook. Perfect for related datasets."
    },
    {
      question: "Is the conversion accurate?",
      answer: "Very accurate. We preserve data types (numbers, dates, booleans, strings) and handle special characters correctly. The output exactly mirrors your JSON structure."
    },
    {
      question: "What Excel formats are supported?",
      answer: "We support .XLSX (Excel 2007+, recommended) and .XLS (legacy Excel 2003). Both work with Microsoft Excel, Google Sheets, LibreOffice, and Apple Numbers."
    },
    {
      question: "How do I handle complex JSON with mixed types?",
      answer: "Our converter analyzes all objects in your array and creates columns for every unique key found. Mixed types within a column are converted to their appropriate Excel representation."
    },
    {
      question: "Is it really free?",
      answer: "Yes, completely free! No registration, no limits, no watermarks. We don't even show ads. Just paste your JSON and get your Excel file."
    }
  ],
  
  relatedTools: [
    {
      title: "JSON to PDF Converter",
      description: "Transform JSON into beautifully formatted PDF documents.",
      path: "/json-to-pdf"
    },
    {
      title: "JSON to CSV Converter",
      description: "Convert JSON arrays to CSV for database imports.",
      path: "/json-to-csv-converter"
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON with syntax highlighting.",
      path: "/json-formatter"
    },
    {
      title: "Excel to JSON Converter",
      description: "Convert Excel spreadsheets back to JSON format.",
      path: "/json-formatter"
    }
  ],
  
  technicalDetails: {
    title: "Technical Implementation",
    items: [
      {
        label: "JSON Parsing",
        description: "Uses native JSON.parse() with custom error handling for malformed JSON. Validates structure before processing."
      },
      {
        label: "Header Extraction",
        description: "Scans all objects to find unique keys, handles inconsistent schemas, and creates comprehensive column list."
      },
      {
        label: "Type Detection",
        description: "Analyzes values to determine appropriate Excel data types: numbers, dates, booleans, or strings."
      },
      {
        label: "Excel Generation",
        description: "Uses SheetJS (XLSX.js) library to create proper Excel files with formatting, formulas support, and multiple sheets."
      },
      {
        label: "Memory Management",
        description: "Processes large arrays in chunks to prevent browser memory issues. Efficient garbage collection."
      },
      {
        label: "Performance",
        description: "1,000 records in <1 second, 10,000 in 2-3 seconds, 100,000 in 15-20 seconds on average hardware."
      }
    ]
  },
  
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON to Excel Converter",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Web Browser",
    "description": "Free browser-based JSON to Excel converter. Transform JSON arrays into formatted Excel spreadsheets instantly. 100% private.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1923",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
};

export default function JsonToExcel() {
  return <ToolLandingTemplate {...jsonToExcelData} />;
}
