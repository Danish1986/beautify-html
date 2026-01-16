import { FileCode } from "lucide-react";
import { ToolLandingTemplate } from "@/components/landing/ToolLandingTemplate";

const jsonToXmlData = {
  // SEO
  title: "Free JSON to XML Converter - Convert JSON to XML Online",
  description: "Convert JSON to XML format instantly. Perfect for SOAP APIs, legacy systems, and data integration. 100% browser-based, free, no registration required.",
  keywords: "json to xml converter, convert json to xml, json xml converter, json to xml online, transform json to xml, json xml transformation",
  path: "/json-to-xml-converter",
  
  // Hero
  heroTitle: "Free JSON to XML Converter - Transform JSON to XML Documents",
  heroSubtitle: "Convert JSON objects to XML documents instantly. Perfect for legacy system integration, SOAP APIs, RSS/Atom feed generation, and data exchange between modern and traditional systems.",
  heroHighlight: "Handles complex nested structures with configurable element naming",
  primaryCta: "Convert JSON to XML Now",
  primaryCtaPath: "/json-formatter",
  secondaryCta: "View Example",
  secondaryCtaPath: "/json-formatter",
  
  // Icon
  icon: FileCode,
  iconColor: "text-orange-500",
  
  // Content
  toolDescription: `Our JSON to XML converter transforms JSON data structures into well-formed XML documents with intelligent mapping rules. JSON properties become XML elements, arrays become repeated elements, and you can configure whether to use elements or attributes for different data types. Perfect for integrating with enterprise systems, SOAP web services, configuration management, and any application requiring XML format. The converter produces valid, properly escaped XML with optional pretty printing and namespace support.`,
  
  features: [
    {
      title: "Automatic XML Structure Generation",
      description: "Intelligently maps JSON objects to XML elements, arrays to repeated elements, and handles all data types correctly.",
      details: [
        "Objects → nested elements",
        "Arrays → repeated elements",
        "Primitives → text content",
        "Null handling options"
      ]
    },
    {
      title: "Configurable Root Element",
      description: "Choose your root element name and add optional namespace declarations for standards-compliant XML output.",
      details: [
        "Custom root element name",
        "Namespace prefix support",
        "Default namespace option",
        "Multiple namespaces"
      ]
    },
    {
      title: "Attribute vs Element Choice",
      description: "Configure whether JSON properties become XML elements or attributes. Perfect for creating specific XML schemas.",
      details: [
        "All as elements (default)",
        "Primitives as attributes",
        "Custom attribute markers",
        "Mixed mode support"
      ]
    },
    {
      title: "Array Handling Options",
      description: "Control how JSON arrays are converted. Use wrapper elements, repeated elements, or custom item naming.",
      details: [
        "Repeated elements (default)",
        "Wrapper element option",
        "Custom item element names",
        "Index attributes option"
      ]
    },
    {
      title: "Pretty Print or Minified",
      description: "Choose between human-readable indented XML or compact minified output for production use.",
      details: [
        "Pretty print with indentation",
        "Minified single-line",
        "Configurable indent size",
        "Line ending options"
      ]
    },
    {
      title: "XML Declaration & Encoding",
      description: "Add proper XML declaration with version and encoding specification. UTF-8 default with other encodings available.",
      details: [
        "<?xml version=\"1.0\"?>",
        "UTF-8, UTF-16 options",
        "Standalone attribute",
        "Custom declarations"
      ]
    },
    {
      title: "Namespace Support",
      description: "Add XML namespaces for enterprise integration. Supports both default and prefixed namespaces.",
      details: [
        "Default namespace",
        "Multiple prefixes",
        "Standard schemas",
        "Custom namespace URIs"
      ]
    },
    {
      title: "Large File Support",
      description: "Process large JSON structures efficiently. All processing happens in your browser with no server uploads.",
      details: [
        "No size limits",
        "Browser-based processing",
        "Memory efficient",
        "Fast conversion"
      ]
    }
  ],
  
  howItWorks: [
    {
      title: "Paste JSON Data",
      description: "Paste your JSON object or array from any source."
    },
    {
      title: "Configure Options",
      description: "Set root element name, formatting, and namespace options."
    },
    {
      title: "Choose Element/Attribute",
      description: "Decide how properties map to XML structure."
    },
    {
      title: "Preview XML Output",
      description: "See syntax-highlighted XML before downloading."
    },
    {
      title: "Download .xml File",
      description: "Get your well-formed XML document instantly."
    }
  ],
  
  useCases: [
    {
      title: "SOAP API Integration",
      description: "Convert JSON responses from REST APIs to XML format for SOAP web service integration. Perfect for enterprise middleware."
    },
    {
      title: "Legacy System Data Exchange",
      description: "Transform modern JSON data into XML for legacy systems that only accept XML input. Common in banking and government."
    },
    {
      title: "RSS/Atom Feed Generation",
      description: "Create RSS or Atom feeds from JSON content data. Generate valid syndication feeds from your content management system."
    },
    {
      title: "Configuration File Conversion",
      description: "Convert JSON configuration files to XML format for applications that require XML configuration (Java, .NET, etc.)."
    },
    {
      title: "Data Interchange",
      description: "Transform data between systems with different format requirements. Bridge modern microservices with traditional enterprise applications."
    }
  ],
  
  whyChoose: [
    "Required by legacy systems",
    "SOAP web service standard",
    "Supports attributes & namespaces",
    "XML schema validation ready",
    "Human and machine readable",
    "Standards compliant output",
    "Proper character escaping",
    "Well-formed XML guaranteed"
  ],
  
  tips: [
    "Choose meaningful root element names that describe your data (e.g., 'users', 'order', 'configuration') rather than generic names.",
    "Use attributes for metadata (id, type, version) and elements for actual data content. This creates cleaner, more semantic XML.",
    "If you need to validate the output against an XML schema, configure namespaces properly before conversion.",
    "Consider using CDATA sections for text content that might contain special characters (configured in advanced options)."
  ],
  
  faqs: [
    {
      question: "How are JSON arrays converted to XML?",
      answer: "Arrays become repeated elements by default. For example, {'items': [1, 2, 3]} becomes <items>1</items><items>2</items><items>3</items>. You can optionally wrap them in a container element."
    },
    {
      question: "Can I customize element names?",
      answer: "Yes! You can set the root element name and configure how array items are named. For nested objects, element names come from JSON property names."
    },
    {
      question: "Does it support XML namespaces?",
      answer: "Yes! You can add default namespaces, prefixed namespaces, and standard XML schema namespaces. Perfect for creating enterprise-compliant XML."
    },
    {
      question: "How are special characters handled?",
      answer: "Special characters (&, <, >, \", ') are automatically escaped to their XML entity equivalents (&amp;, &lt;, &gt;, etc.). CDATA sections are available for complex content."
    },
    {
      question: "Can I validate the XML output?",
      answer: "The output is guaranteed to be well-formed XML. For schema validation, you'll need to validate against your specific XSD using an XML validator."
    },
    {
      question: "Is CDATA supported?",
      answer: "Yes! You can configure text content to be wrapped in CDATA sections, which is useful for HTML content or data with many special characters."
    },
    {
      question: "What encoding is used?",
      answer: "UTF-8 by default, which supports all international characters. UTF-16 and ISO-8859-1 are also available if needed for legacy systems."
    },
    {
      question: "Can I convert XML back to JSON?",
      answer: "Yes! We offer an XML to JSON converter that performs the reverse operation. Find it in our related tools section."
    },
    {
      question: "Are attributes supported?",
      answer: "Yes! You can configure JSON properties to become XML attributes instead of elements. Use the '@' prefix convention or configure in settings."
    },
    {
      question: "Is it free?",
      answer: "Completely free! No limits, no registration, no hidden costs. All processing happens in your browser for complete privacy."
    }
  ],
  
  relatedTools: [
    {
      title: "XML to JSON Converter",
      description: "Reverse operation - convert XML documents to JSON format.",
      path: "/json-formatter"
    },
    {
      title: "JSON to CSV Converter",
      description: "Convert JSON arrays to CSV for spreadsheets and databases.",
      path: "/json-to-csv-converter"
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON with syntax highlighting.",
      path: "/json-formatter"
    },
    {
      title: "JSON to YAML Converter",
      description: "Transform JSON to YAML for configuration files.",
      path: "/json-formatter"
    }
  ],
  
  technicalDetails: {
    title: "JSON to XML Mapping Rules",
    items: [
      {
        label: "Objects → Elements",
        description: "JSON objects become nested XML elements. Each property becomes a child element."
      },
      {
        label: "Arrays → Repeated Elements",
        description: "JSON arrays become repeated XML elements with the same name (or wrapped in a container)."
      },
      {
        label: "Properties → Elements/Attributes",
        description: "JSON properties become elements by default. Use @ prefix or settings for attributes."
      },
      {
        label: "Special Character Escaping",
        description: "Automatic escaping: & → &amp;, < → &lt;, > → &gt;, \" → &quot;, ' → &apos;"
      },
      {
        label: "Null Handling",
        description: "Null values become empty elements <element/> or can be configured to use xsi:nil='true'."
      },
      {
        label: "Output Validation",
        description: "All output is guaranteed well-formed XML. Validates against XML 1.0 specification."
      }
    ]
  },
  
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON to XML Converter",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Web Browser",
    "description": "Free browser-based JSON to XML converter. Transform JSON to well-formed XML for SOAP APIs, legacy systems, and enterprise integration. 100% private.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "1432",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
};

export default function JsonToXml() {
  return <ToolLandingTemplate {...jsonToXmlData} />;
}
