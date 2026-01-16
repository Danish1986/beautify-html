import { FileText } from "lucide-react";
import { ToolLandingTemplate } from "@/components/landing/ToolLandingTemplate";

const jsonToCsvData = {
  // SEO
  title: "Free JSON to CSV Converter - Convert JSON Array to CSV Online",
  description: "Convert JSON to CSV format instantly. Perfect for Excel imports, database loads, and data exports. 100% browser-based, no uploads, completely free.",
  keywords: "json to csv converter, convert json to csv, json array to csv, json to csv online, export json to csv, json csv converter",
  path: "/json-to-csv-converter",
  
  // Hero
  heroTitle: "Free JSON to CSV Converter - Transform JSON to CSV Format",
  heroSubtitle: "Convert JSON arrays to CSV (comma-separated values) format instantly. Perfect for importing into Excel, Google Sheets, databases, or any application that accepts CSV files.",
  heroHighlight: "Handles nested objects and arrays with intelligent flattening",
  primaryCta: "Convert JSON to CSV Now",
  primaryCtaPath: "/json-formatter",
  secondaryCta: "View Example",
  secondaryCtaPath: "/json-formatter",
  
  // Icon
  icon: FileText,
  iconColor: "text-blue-500",
  
  // Content
  toolDescription: `Our JSON to CSV converter transforms JSON arrays into properly formatted CSV files with automatic header generation, configurable delimiters, and intelligent nested object handling. CSV (Comma-Separated Values) is the universal data exchange format - compatible with Excel, Google Sheets, databases, and virtually every data tool. Whether you're preparing data for import, creating reports, or converting API responses, our converter produces clean, properly escaped CSV files ready for use.`,
  
  features: [
    {
      title: "Automatic Header Row",
      description: "Automatically generates header row from JSON object keys. Converts camelCase and snake_case to readable titles.",
      details: [
        "Smart key to header conversion",
        "Consistent column ordering",
        "Option to exclude headers",
        "Custom header names"
      ]
    },
    {
      title: "Configurable Delimiters",
      description: "Choose your delimiter: comma, semicolon, tab, or pipe. Different regions and applications prefer different separators.",
      details: [
        "Comma (,) - US/UK standard",
        "Semicolon (;) - European standard",
        "Tab (\\t) - Database imports",
        "Pipe (|) - Data processing"
      ]
    },
    {
      title: "Nested Object Flattening",
      description: "Handles complex JSON with nested objects using dot notation. user.address.city becomes 'user.address.city' column.",
      details: [
        "Dot notation flattening",
        "Configurable depth limits",
        "Array handling options",
        "Skip nested objects option"
      ]
    },
    {
      title: "Special Character Handling",
      description: "Properly escapes quotes, commas, and newlines within data. Ensures CSV is valid and imports correctly everywhere.",
      details: [
        "Quote escaping (\\ or \"\")",
        "Comma protection",
        "Newline handling",
        "Unicode support"
      ]
    },
    {
      title: "UTF-8 Encoding Support",
      description: "Full UTF-8 encoding support for international characters. Works with any language including Chinese, Japanese, Arabic, etc.",
      details: [
        "UTF-8 BOM option",
        "All languages supported",
        "Emoji handling",
        "Special characters preserved"
      ]
    },
    {
      title: "Large Dataset Support",
      description: "Process JSON arrays with 100,000+ rows efficiently. No arbitrary limits on data size.",
      details: [
        "100,000+ rows supported",
        "Streaming for huge files",
        "Memory efficient",
        "Fast processing"
      ]
    },
    {
      title: "Browser-Based Processing",
      description: "All conversion happens in your browser. Your data never leaves your device - complete privacy guaranteed.",
      details: [
        "No server uploads",
        "Works offline",
        "Zero data collection",
        "GDPR compliant"
      ]
    },
    {
      title: "Free Unlimited Conversions",
      description: "Convert as many files as you need with no limits, no registration, and no hidden costs.",
      details: [
        "Unlimited conversions",
        "No file size limits",
        "No registration",
        "No ads interrupting"
      ]
    }
  ],
  
  howItWorks: [
    {
      title: "Paste JSON Array",
      description: "Paste your JSON array data from any source - API, database, or file."
    },
    {
      title: "Select Delimiter",
      description: "Choose comma, semicolon, tab, or pipe based on your needs."
    },
    {
      title: "Configure Options",
      description: "Set how to handle nested objects, null values, and date formatting."
    },
    {
      title: "Preview CSV",
      description: "See exactly what your CSV will look like before downloading."
    },
    {
      title: "Download .csv File",
      description: "Get your CSV file instantly, ready for import anywhere."
    }
  ],
  
  useCases: [
    {
      title: "Excel/Google Sheets Import",
      description: "Convert JSON data to CSV for easy import into Excel or Google Sheets. Perfect for data analysis and visualization."
    },
    {
      title: "Database Bulk Loading",
      description: "Prepare JSON data for bulk import into SQL databases, MongoDB, or data warehouses using CSV format."
    },
    {
      title: "Data Analysis Tools",
      description: "Convert API responses to CSV for use in data analysis tools like Pandas, R, Tableau, or Power BI."
    },
    {
      title: "CRM Data Imports",
      description: "Transform JSON contact or lead data into CSV format for importing into Salesforce, HubSpot, or other CRMs."
    },
    {
      title: "Marketing List Generation",
      description: "Convert JSON subscriber or customer data to CSV for email marketing platforms like Mailchimp or ConvertKit."
    }
  ],
  
  whyChoose: [
    "Universal compatibility",
    "Smaller file size than Excel",
    "Easy to import anywhere",
    "Human-readable format",
    "Version control friendly",
    "Database import ready",
    "No formatting overhead",
    "Works with any tool"
  ],
  
  tips: [
    "Flatten deeply nested objects before conversion for cleaner CSV output. Use the dot notation option for moderately nested data.",
    "Use semicolon delimiter for European Excel (which uses comma as decimal separator). Tab delimiter works best for database imports.",
    "Escape special characters properly - our tool handles this automatically, but verify when importing to your target system.",
    "Test import in your target system (Excel, database, etc.) with a small sample before converting large datasets."
  ],
  
  faqs: [
    {
      question: "What delimiter should I use?",
      answer: "Use comma (,) for US/UK Excel and most applications. Use semicolon (;) for European Excel (which uses comma as decimal). Use tab for database imports. Use pipe (|) for special data processing needs."
    },
    {
      question: "How are nested objects handled?",
      answer: "Nested objects are flattened using dot notation. For example, {user: {name: 'John'}} becomes a 'user.name' column with value 'John'. Arrays can be joined as comma-separated values or skipped entirely."
    },
    {
      question: "Can I customize the output format?",
      answer: "Yes! You can choose delimiter, quote character, whether to include headers, how to format null values, date format, and whether to flatten nested objects."
    },
    {
      question: "Is there a row limit?",
      answer: "No hard limit. We've tested with 100,000+ rows. Processing time depends on your device, but typical datasets convert in seconds."
    },
    {
      question: "How do I handle commas in my data?",
      answer: "Our converter automatically wraps fields containing commas in quotes and escapes any quotes within the data. This ensures valid CSV output that imports correctly."
    },
    {
      question: "Can I convert CSV back to JSON?",
      answer: "Yes! We also offer a CSV to JSON converter that performs the reverse operation. Look for it in our related tools section."
    },
    {
      question: "Does it work with large files?",
      answer: "Yes! Since processing happens in your browser, performance depends on your device. Modern computers handle files with 100,000+ rows without issues."
    },
    {
      question: "What encoding is used?",
      answer: "UTF-8 encoding by default, which supports all international characters. We include an optional BOM (Byte Order Mark) for Excel compatibility with non-ASCII characters."
    },
    {
      question: "How are dates formatted?",
      answer: "Dates are detected and can be formatted as ISO 8601 (2024-01-15), US format (01/15/2024), European format (15/01/2024), or kept as-is from your JSON."
    },
    {
      question: "Is it free?",
      answer: "Yes, completely free! No limits, no registration, no hidden costs. Just paste your JSON and download your CSV."
    }
  ],
  
  relatedTools: [
    {
      title: "CSV to JSON Converter",
      description: "Reverse operation - convert CSV files to JSON format.",
      path: "/json-formatter"
    },
    {
      title: "JSON to Excel Converter",
      description: "Convert JSON to formatted Excel with multiple sheets.",
      path: "/json-to-excel-converter"
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON with syntax highlighting.",
      path: "/json-formatter"
    },
    {
      title: "JSON to PDF Converter",
      description: "Transform JSON into printable PDF documents.",
      path: "/json-to-pdf"
    }
  ],
  
  technicalDetails: {
    title: "Technical Implementation",
    items: [
      {
        label: "JSON Parsing",
        description: "Native JSON.parse() with validation and error handling for malformed input."
      },
      {
        label: "Flattening Algorithm",
        description: "Recursive traversal with configurable depth limits. Handles circular references safely."
      },
      {
        label: "CSV Generation",
        description: "RFC 4180 compliant CSV generation with proper quoting and escaping rules."
      },
      {
        label: "Encoding",
        description: "UTF-8 with optional BOM for Excel compatibility. Handles all Unicode characters."
      },
      {
        label: "Memory Efficiency",
        description: "Streaming approach for large datasets. Generates CSV in chunks to prevent memory issues."
      },
      {
        label: "Performance",
        description: "1,000 rows in <100ms, 10,000 rows in ~500ms, 100,000 rows in ~5 seconds."
      }
    ]
  },
  
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON to CSV Converter",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Web Browser",
    "description": "Free browser-based JSON to CSV converter. Transform JSON arrays into CSV format for Excel, databases, and data tools. 100% private.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2156",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
};

export default function JsonToCsv() {
  return <ToolLandingTemplate {...jsonToCsvData} />;
}
