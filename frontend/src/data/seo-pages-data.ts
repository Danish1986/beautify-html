// SEO Landing Pages Data - 100+ Pages for Google Indexing

import { 
  FileJson, FileText, Image, FileType, Binary, Code, FileSpreadsheet,
  Type, Hash, Link2, Braces, Database, Globe, Lock, Zap, Shield,
  Layers, Filter, FileImage, FileCode, Table, LayoutGrid, Palette,
  Minimize2, Maximize2, RotateCw, Crop, Wand2, FileArchive,
  ArrowLeftRight, Search, Terminal, Server, Webhook, TestTube,
  BookOpen, GraduationCap, Briefcase, Building2, ShoppingCart,
  Stethoscope, Scale, Camera, Newspaper, Users, TrendingUp,
  CheckCircle,
  LucideIcon
} from "lucide-react";

export interface SEOPageData {
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
  category: 'tool' | 'blog' | 'use-case' | 'industry';
  toolDescription: string;
  features: Array<{
    title: string;
    description: string;
    details?: string[];
  }>;
  howItWorks: Array<{
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  whyChoose: string[];
  tips: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedTools: Array<{
    title: string;
    description: string;
    path: string;
  }>;
  schema: object;
}

// JSON Tools Landing Pages
export const jsonToolsPages: SEOPageData[] = [
  {
    slug: "json-to-yaml-converter",
    title: "Free JSON to YAML Converter Online - Transform JSON to YAML Instantly",
    description: "Convert JSON to YAML instantly with our free online converter. Perfect for Kubernetes configs, Docker Compose, CI/CD pipelines. Browser-based, no uploads required.",
    keywords: "json to yaml, json to yaml converter, convert json to yaml, json yaml converter online, kubernetes yaml generator, docker compose converter",
    heroTitle: "Free JSON to YAML Converter - Transform Data Formats Instantly",
    heroSubtitle: "Convert JSON to YAML for Kubernetes, Docker, Ansible, and more. 100% browser-based, your data never leaves your device.",
    heroHighlight: "Perfect for DevOps engineers and cloud architects",
    primaryCta: "Convert JSON to YAML Now",
    primaryCtaPath: "/json-formatter",
    icon: FileJson,
    iconColor: "text-blue-500",
    category: "tool",
    toolDescription: "Our JSON to YAML converter transforms JSON data into clean, readable YAML format instantly. YAML (YAML Ain't Markup Language) is widely used in DevOps for Kubernetes manifests, Docker Compose files, Ansible playbooks, and CI/CD configurations. Our converter preserves data structure, handles nested objects, arrays, and special characters correctly.",
    features: [
      { title: "Instant Conversion", description: "Convert JSON to YAML in milliseconds with proper indentation and formatting.", details: ["Preserves data types", "Handles nested structures", "Proper YAML indentation", "Unicode support"] },
      { title: "Kubernetes Ready", description: "Output is compatible with kubectl and Kubernetes deployments.", details: ["Valid K8s manifests", "Proper apiVersion format", "Multi-document support", "Comments preserved"] },
      { title: "Docker Compose Support", description: "Generate valid docker-compose.yml files from JSON configurations.", details: ["Version 3.x support", "Service definitions", "Network configs", "Volume mappings"] },
      { title: "100% Private", description: "All conversion happens in your browser - no server uploads.", details: ["Zero data transmission", "Works offline", "No registration", "Enterprise safe"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON data or upload a .json file" },
      { title: "Instant Convert", description: "YAML output generated immediately in your browser" },
      { title: "Copy or Download", description: "Copy to clipboard or download as .yaml file" }
    ],
    useCases: [
      { title: "Kubernetes Deployments", description: "Convert JSON API responses to Kubernetes YAML manifests for container orchestration." },
      { title: "Docker Compose Files", description: "Transform JSON configs into docker-compose.yml for multi-container applications." },
      { title: "CI/CD Pipelines", description: "Generate GitHub Actions, GitLab CI, or Jenkins pipeline configs from JSON." },
      { title: "Ansible Playbooks", description: "Convert infrastructure definitions to Ansible-compatible YAML format." }
    ],
    whyChoose: ["Instant conversion", "Kubernetes compatible", "Docker Compose ready", "100% browser-based", "No file size limits", "Free forever"],
    tips: ["Validate your JSON before converting to catch syntax errors early.", "Use the preview to verify YAML structure before downloading.", "For Kubernetes, ensure proper indentation (2 spaces recommended)."],
    faqs: [
      { question: "Is the converted YAML valid for Kubernetes?", answer: "Yes, our converter produces properly formatted YAML that's compatible with kubectl and Kubernetes." },
      { question: "Can I convert large JSON files?", answer: "Yes, there are no file size limits. All processing happens in your browser." },
      { question: "Is my data secure?", answer: "Absolutely. All conversion happens locally in your browser - no data is ever sent to our servers." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format and validate JSON data", path: "/json-formatter" },
      { title: "JSON to XML", description: "Convert JSON to XML format", path: "/json-to-xml-converter" },
      { title: "JSON to CSV", description: "Transform JSON arrays to CSV", path: "/json-to-csv-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON to YAML Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-to-html-converter",
    title: "Free JSON to HTML Converter - Create HTML Tables from JSON Data",
    description: "Convert JSON data to HTML tables instantly. Perfect for displaying API data, creating reports, embedding data in web pages. 100% free and browser-based.",
    keywords: "json to html, json to html table, convert json to html, json html converter, json table generator, display json as html",
    heroTitle: "Free JSON to HTML Converter - Create Beautiful HTML Tables",
    heroSubtitle: "Transform JSON data into responsive HTML tables for web pages, reports, and dashboards. Instant conversion with customizable styling.",
    heroHighlight: "Perfect for web developers and data analysts",
    primaryCta: "Convert JSON to HTML Now",
    primaryCtaPath: "/json-formatter",
    icon: FileCode,
    iconColor: "text-orange-500",
    category: "tool",
    toolDescription: "Our JSON to HTML converter transforms JSON arrays and objects into clean, semantic HTML tables. Perfect for displaying API responses on web pages, creating data reports, or embedding structured data in emails. The output includes responsive CSS and proper table semantics for accessibility.",
    features: [
      { title: "Responsive Tables", description: "Generated HTML tables work on all screen sizes with proper mobile support.", details: ["Mobile-friendly", "Scrollable on small screens", "Proper column widths", "Zebra striping option"] },
      { title: "Semantic HTML", description: "Output uses proper HTML5 table elements for accessibility and SEO.", details: ["thead/tbody structure", "Proper th elements", "Caption support", "ARIA labels"] },
      { title: "Custom Styling", description: "Choose from multiple table styles or add your own CSS classes.", details: ["Bootstrap compatible", "Tailwind CSS ready", "Custom class names", "Inline styles option"] },
      { title: "Nested Data Support", description: "Handles complex nested JSON with expandable rows.", details: ["Object flattening", "Array expansion", "Nested tables", "Data type formatting"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON array or object data" },
      { title: "Choose Style", description: "Select table style and formatting options" },
      { title: "Generate HTML", description: "Get clean HTML code ready to use" },
      { title: "Copy & Use", description: "Copy HTML and paste into your project" }
    ],
    useCases: [
      { title: "API Data Display", description: "Convert REST API JSON responses into HTML tables for web dashboards." },
      { title: "Report Generation", description: "Create printable HTML reports from JSON data exports." },
      { title: "Email Templates", description: "Generate HTML tables for data-rich email newsletters." },
      { title: "Documentation", description: "Display JSON schemas and examples as readable HTML tables." }
    ],
    whyChoose: ["Responsive output", "Semantic HTML5", "Multiple styles", "Nested data support", "No dependencies", "Free forever"],
    tips: ["Use JSON arrays for best table results - each object becomes a row.", "Add custom CSS classes for easy styling integration.", "Enable sorting headers for interactive tables."],
    faqs: [
      { question: "Does it work with nested JSON?", answer: "Yes, nested objects can be flattened or displayed as expandable nested tables." },
      { question: "Can I customize the table styling?", answer: "Absolutely. Choose from presets or add your own CSS classes to the output." },
      { question: "Is the HTML responsive?", answer: "Yes, all generated tables include responsive CSS for proper display on mobile devices." }
    ],
    relatedTools: [
      { title: "JSON to PDF", description: "Convert JSON to PDF documents", path: "/json-to-pdf" },
      { title: "Text to HTML", description: "Convert plain text to HTML", path: "/text-to-html" },
      { title: "JSON Formatter", description: "Format and beautify JSON", path: "/json-formatter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON to HTML Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-minifier",
    title: "Free JSON Minifier Online - Compress & Minify JSON Data Instantly",
    description: "Minify JSON data to reduce file size by removing whitespace and formatting. Perfect for API optimization, faster loading, reduced bandwidth. 100% free.",
    keywords: "json minifier, minify json, compress json, json compressor, reduce json size, json optimization, json minify online",
    heroTitle: "Free JSON Minifier - Compress JSON Data Instantly",
    heroSubtitle: "Remove whitespace and reduce JSON file size by up to 60%. Perfect for API responses, configuration files, and data storage optimization.",
    heroHighlight: "Reduce bandwidth and improve loading times",
    primaryCta: "Minify JSON Now",
    primaryCtaPath: "/json-formatter",
    icon: Minimize2,
    iconColor: "text-green-500",
    category: "tool",
    toolDescription: "Our JSON minifier removes all unnecessary whitespace, line breaks, and formatting from JSON data while preserving the data structure. This significantly reduces file size, improving API response times, reducing bandwidth usage, and optimizing storage. The minified output is valid JSON that can be parsed by any JSON parser.",
    features: [
      { title: "Maximum Compression", description: "Remove all whitespace for smallest possible file size.", details: ["60%+ size reduction", "No data loss", "Valid JSON output", "Preserves structure"] },
      { title: "Instant Processing", description: "Minify megabytes of JSON in milliseconds.", details: ["Browser-based", "No upload needed", "Handles large files", "Real-time preview"] },
      { title: "Batch Processing", description: "Minify multiple JSON files at once.", details: ["Upload multiple files", "Bulk download", "Zip output option", "Preserve filenames"] },
      { title: "API Optimization", description: "Perfect for reducing API payload sizes.", details: ["Faster responses", "Lower bandwidth", "CDN friendly", "Mobile optimized"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste formatted JSON or upload file" },
      { title: "Click Minify", description: "Instantly compress the JSON data" },
      { title: "Copy Result", description: "Copy minified JSON or download file" }
    ],
    useCases: [
      { title: "API Response Optimization", description: "Reduce API payload sizes for faster mobile app performance." },
      { title: "CDN Caching", description: "Smaller JSON files mean more efficient CDN caching and delivery." },
      { title: "Configuration Files", description: "Minify config.json for production deployments." },
      { title: "Data Storage", description: "Reduce storage costs by minifying JSON data files." }
    ],
    whyChoose: ["Up to 60% smaller", "Instant processing", "Batch support", "No data loss", "Valid output", "Free forever"],
    tips: ["Always validate JSON before minifying to catch errors.", "Keep a backup of formatted JSON for debugging.", "Use minified JSON only in production environments."],
    faqs: [
      { question: "Does minifying change my data?", answer: "No, only whitespace is removed. All data values remain exactly the same." },
      { question: "How much smaller will my JSON be?", answer: "Typically 30-60% smaller depending on original formatting." },
      { question: "Can I minify large files?", answer: "Yes, there are no size limits. Processing happens in your browser." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Beautify and format JSON", path: "/json-formatter" },
      { title: "JSON Validator", description: "Validate JSON syntax", path: "/json-formatter" },
      { title: "JSON to CSV", description: "Convert JSON to CSV", path: "/json-to-csv-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Minifier", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-validator",
    title: "Free JSON Validator Online - Validate & Check JSON Syntax Instantly",
    description: "Validate JSON syntax instantly with detailed error messages. Find missing commas, brackets, quotes. Perfect for debugging APIs and config files. 100% free.",
    keywords: "json validator, validate json, json syntax checker, json lint, json error finder, check json, json debugging tool",
    heroTitle: "Free JSON Validator - Check JSON Syntax Instantly",
    heroSubtitle: "Validate JSON data with detailed error messages pinpointing exact locations of syntax errors. Debug APIs and configuration files with ease.",
    heroHighlight: "Pinpoints exact error locations with line numbers",
    primaryCta: "Validate JSON Now",
    primaryCtaPath: "/json-formatter",
    icon: CheckCircle,
    iconColor: "text-green-500",
    category: "tool",
    toolDescription: "Our JSON validator checks your JSON data for syntax errors and provides detailed feedback including exact line numbers and character positions. It detects common issues like missing commas, unmatched brackets, improper quotes, trailing commas, and invalid escape sequences. Perfect for debugging API responses, configuration files, and data imports.",
    features: [
      { title: "Detailed Error Messages", description: "Get precise error locations with line and column numbers.", details: ["Line number display", "Column position", "Error description", "Fix suggestions"] },
      { title: "Common Error Detection", description: "Catches all common JSON syntax mistakes.", details: ["Missing commas", "Unmatched brackets", "Single quotes", "Trailing commas"] },
      { title: "Real-time Validation", description: "Validate as you type with instant feedback.", details: ["Live checking", "Syntax highlighting", "Error underlining", "Quick fixes"] },
      { title: "Schema Validation", description: "Validate JSON against JSON Schema definitions.", details: ["Draft-07 support", "Custom schemas", "Type checking", "Required fields"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON data to validate" },
      { title: "See Results", description: "Instantly see if JSON is valid or errors found" },
      { title: "Fix Errors", description: "Use error messages to fix issues" },
      { title: "Validate Again", description: "Re-validate until JSON is correct" }
    ],
    useCases: [
      { title: "API Debugging", description: "Validate API responses to find malformed JSON causing app errors." },
      { title: "Config File Testing", description: "Check package.json, tsconfig.json and other config files." },
      { title: "Data Import Prep", description: "Validate JSON data before database imports." },
      { title: "Code Review", description: "Quickly validate JSON in pull requests and code reviews." }
    ],
    whyChoose: ["Detailed errors", "Line numbers", "Real-time validation", "Schema support", "No limits", "Free forever"],
    tips: ["Use auto-format after fixing errors to ensure proper structure.", "Enable strict mode to catch more potential issues.", "Validate before minifying for production use."],
    faqs: [
      { question: "What errors does it detect?", answer: "Missing commas, unmatched brackets, wrong quotes, trailing commas, invalid escapes, and more." },
      { question: "Can it validate against a schema?", answer: "Yes, you can provide a JSON Schema to validate structure and data types." },
      { question: "Does it work offline?", answer: "Yes, all validation happens in your browser - no internet required." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format and beautify JSON", path: "/json-formatter" },
      { title: "JSON Minifier", description: "Compress JSON data", path: "/json-minifier" },
      { title: "JSON to PDF", description: "Convert JSON to PDF", path: "/json-to-pdf" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Validator", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-compare-tool",
    title: "Free JSON Compare Tool - Diff & Compare JSON Files Online",
    description: "Compare two JSON files side-by-side and see differences highlighted. Perfect for API testing, config comparison, data validation. 100% free and private.",
    keywords: "json compare, json diff, compare json files, json difference, json comparison tool, diff json online, json file compare",
    heroTitle: "Free JSON Compare Tool - Find Differences Instantly",
    heroSubtitle: "Compare two JSON files side-by-side with highlighted differences. Perfect for API version testing, configuration comparison, and data validation.",
    heroHighlight: "Highlight additions, deletions, and modifications",
    primaryCta: "Compare JSON Now",
    primaryCtaPath: "/json-formatter",
    icon: ArrowLeftRight,
    iconColor: "text-purple-500",
    category: "tool",
    toolDescription: "Our JSON compare tool provides a detailed side-by-side comparison of two JSON files, highlighting additions, deletions, and modifications. Perfect for comparing API responses between versions, validating configuration changes, debugging data discrepancies, and reviewing code changes. The diff view uses color coding for easy identification of changes.",
    features: [
      { title: "Side-by-Side View", description: "Compare JSON files in a split view with synchronized scrolling.", details: ["Dual pane display", "Synced scrolling", "Line numbers", "Collapsible nodes"] },
      { title: "Change Highlighting", description: "Color-coded highlighting for different types of changes.", details: ["Green for additions", "Red for deletions", "Yellow for modifications", "Gray for unchanged"] },
      { title: "Deep Comparison", description: "Compare nested objects and arrays with full depth support.", details: ["Nested object diff", "Array element comparison", "Key ordering options", "Type change detection"] },
      { title: "Export Diff", description: "Export the comparison results in various formats.", details: ["JSON patch format", "Text diff output", "HTML report", "Copy to clipboard"] }
    ],
    howItWorks: [
      { title: "Paste First JSON", description: "Paste your base JSON in the left panel" },
      { title: "Paste Second JSON", description: "Paste comparison JSON in the right panel" },
      { title: "View Differences", description: "See highlighted differences instantly" },
      { title: "Export Results", description: "Export diff report if needed" }
    ],
    useCases: [
      { title: "API Version Testing", description: "Compare API responses between v1 and v2 to identify breaking changes." },
      { title: "Config Management", description: "Compare configuration files between environments (dev, staging, prod)." },
      { title: "Data Validation", description: "Verify data transformations by comparing input and output JSON." },
      { title: "Code Review", description: "Review JSON schema changes in pull requests." }
    ],
    whyChoose: ["Side-by-side view", "Color highlighting", "Deep comparison", "Export options", "No limits", "Free forever"],
    tips: ["Format both JSON files first for easier comparison.", "Use ignore options to skip known differences.", "Export as JSON Patch for programmatic use."],
    faqs: [
      { question: "Does it handle large files?", answer: "Yes, it can compare JSON files of any size efficiently in your browser." },
      { question: "Can I ignore certain keys?", answer: "Yes, you can configure keys to ignore during comparison." },
      { question: "Does order matter?", answer: "By default, object key order is ignored. Array order is significant." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format JSON for easier comparison", path: "/json-formatter" },
      { title: "JSON Validator", description: "Validate JSON syntax", path: "/json-validator" },
      { title: "JSON Minifier", description: "Compress JSON files", path: "/json-minifier" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Compare Tool", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-to-typescript",
    title: "Free JSON to TypeScript Converter - Generate Types from JSON",
    description: "Convert JSON to TypeScript interfaces and types instantly. Generate type-safe code from API responses. Perfect for React, Node.js, Angular developers.",
    keywords: "json to typescript, json to ts, generate typescript from json, typescript interface generator, json typescript converter, api types generator",
    heroTitle: "Free JSON to TypeScript - Generate Types Instantly",
    heroSubtitle: "Convert JSON data to TypeScript interfaces and type definitions. Generate type-safe code from API responses automatically.",
    heroHighlight: "Perfect for React, Angular, and Node.js developers",
    primaryCta: "Generate TypeScript Now",
    primaryCtaPath: "/json-formatter",
    icon: FileCode,
    iconColor: "text-blue-600",
    category: "tool",
    toolDescription: "Our JSON to TypeScript converter analyzes JSON data and generates accurate TypeScript interfaces and type definitions. It handles nested objects, arrays, optional fields, and union types. Perfect for creating type-safe code from API responses, configuration files, and data schemas. Supports both interface and type syntax.",
    features: [
      { title: "Smart Type Inference", description: "Automatically infers correct TypeScript types from JSON values.", details: ["Number/string/boolean", "Null handling", "Union types", "Array types"] },
      { title: "Nested Interfaces", description: "Generate separate interfaces for nested objects.", details: ["Flat or nested output", "Naming conventions", "Export statements", "Module syntax"] },
      { title: "Customization Options", description: "Configure output format to match your coding style.", details: ["Interface vs type", "Optional properties", "Readonly modifier", "Naming prefix/suffix"] },
      { title: "Multiple Samples", description: "Analyze multiple JSON samples to generate more accurate types.", details: ["Union detection", "Optional field detection", "Type narrowing", "Best-guess types"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON data or API response" },
      { title: "Configure Options", description: "Choose interface name and options" },
      { title: "Generate Types", description: "Get TypeScript interfaces instantly" },
      { title: "Copy to Project", description: "Copy and paste into your TypeScript project" }
    ],
    useCases: [
      { title: "API Type Safety", description: "Generate types from REST API responses for type-safe frontend code." },
      { title: "Config Typing", description: "Create types for JSON configuration files." },
      { title: "Database Schemas", description: "Convert MongoDB/JSON schemas to TypeScript interfaces." },
      { title: "Code Generation", description: "Bootstrap TypeScript projects with accurate type definitions." }
    ],
    whyChoose: ["Smart inference", "Nested support", "Customizable", "Multiple samples", "Free forever", "No registration"],
    tips: ["Provide multiple JSON samples for more accurate optional field detection.", "Use PascalCase for interface names by convention.", "Export interfaces for use across modules."],
    faqs: [
      { question: "Does it handle nested objects?", answer: "Yes, nested objects generate separate interfaces with proper references." },
      { question: "Can it detect optional fields?", answer: "Provide multiple samples and it will detect fields that are sometimes missing." },
      { question: "Interface or type?", answer: "You can choose either syntax in the options. Interfaces are recommended for objects." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format JSON before converting", path: "/json-formatter" },
      { title: "JSON Validator", description: "Validate JSON syntax", path: "/json-validator" },
      { title: "API Tester", description: "Test APIs and get JSON responses", path: "/api-tester" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON to TypeScript Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-path-finder",
    title: "Free JSON Path Finder - Query & Extract JSON Data Online",
    description: "Find and extract data from JSON using JSONPath queries. Navigate complex JSON structures easily. Perfect for API data extraction. 100% free.",
    keywords: "json path, jsonpath finder, json query, extract json data, json path tester, jsonpath online, json data extraction",
    heroTitle: "Free JSON Path Finder - Query JSON Data Instantly",
    heroSubtitle: "Use JSONPath expressions to find and extract data from complex JSON structures. Navigate nested objects and arrays with ease.",
    heroHighlight: "Perfect for API data extraction and debugging",
    primaryCta: "Query JSON Now",
    primaryCtaPath: "/json-formatter",
    icon: Search,
    iconColor: "text-amber-500",
    category: "tool",
    toolDescription: "Our JSON Path Finder tool lets you query JSON data using JSONPath expressions (similar to XPath for XML). Navigate complex nested structures, filter arrays, and extract specific values with simple query syntax. Perfect for working with API responses, debugging data issues, and learning JSONPath syntax.",
    features: [
      { title: "JSONPath Support", description: "Full support for JSONPath query syntax.", details: ["Root $ access", "Dot notation", "Bracket notation", "Wildcards"] },
      { title: "Click to Path", description: "Click any value to get its JSONPath.", details: ["Visual path builder", "Copy path button", "Path history", "Favorites"] },
      { title: "Array Filtering", description: "Filter arrays with powerful query expressions.", details: ["Index access [0]", "Slicing [0:5]", "Filter [?(@.id>5)]", "Recursive .."] },
      { title: "Live Results", description: "See query results update as you type.", details: ["Real-time matching", "Result highlighting", "Match count", "Export results"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON data to query" },
      { title: "Enter Path", description: "Type JSONPath expression or click to build" },
      { title: "See Results", description: "Matching data highlighted instantly" },
      { title: "Extract Data", description: "Copy or export the matched results" }
    ],
    useCases: [
      { title: "API Data Extraction", description: "Extract specific fields from complex API responses." },
      { title: "Data Debugging", description: "Find where specific values exist in large JSON structures." },
      { title: "Learning JSONPath", description: "Interactive environment to learn JSONPath syntax." },
      { title: "Data Transformation", description: "Build queries for data pipelines and ETL processes." }
    ],
    whyChoose: ["Full JSONPath", "Click to path", "Live results", "Array filtering", "Free forever", "No registration"],
    tips: ["Use $.store.book[*].author to get all authors in a book array.", "The .. operator searches recursively through all levels.", "Use [?(@.price<10)] to filter items by condition."],
    faqs: [
      { question: "What is JSONPath?", answer: "JSONPath is a query language for JSON, similar to XPath for XML. It lets you extract data from JSON structures." },
      { question: "Can I filter arrays?", answer: "Yes, use filter expressions like [?(@.price<10)] to filter array elements." },
      { question: "Does it support recursion?", answer: "Yes, use .. to search recursively through all nested levels." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format JSON for easier reading", path: "/json-formatter" },
      { title: "JSON Compare", description: "Compare two JSON files", path: "/json-compare-tool" },
      { title: "JSON to CSV", description: "Convert JSON arrays to CSV", path: "/json-to-csv-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Path Finder", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-to-sql-converter",
    title: "Free JSON to SQL Converter - Generate INSERT Statements from JSON",
    description: "Convert JSON data to SQL INSERT statements instantly. Support for MySQL, PostgreSQL, SQLite. Perfect for data migration. 100% free.",
    keywords: "json to sql, json to sql converter, generate sql from json, json to insert statement, json sql converter, database import json",
    heroTitle: "Free JSON to SQL Converter - Generate SQL Statements",
    heroSubtitle: "Convert JSON arrays to SQL INSERT statements for MySQL, PostgreSQL, SQLite, and SQL Server. Perfect for data migration and seeding.",
    heroHighlight: "Support for all major SQL databases",
    primaryCta: "Convert to SQL Now",
    primaryCtaPath: "/json-formatter",
    icon: Database,
    iconColor: "text-indigo-500",
    category: "tool",
    toolDescription: "Our JSON to SQL converter transforms JSON arrays into ready-to-execute SQL INSERT statements. Supports multiple database syntaxes including MySQL, PostgreSQL, SQLite, and SQL Server. Handles data types automatically, escapes special characters, and generates efficient bulk insert statements.",
    features: [
      { title: "Multiple Databases", description: "Generate SQL for your specific database system.", details: ["MySQL syntax", "PostgreSQL", "SQLite", "SQL Server"] },
      { title: "Smart Type Detection", description: "Automatically detects and formats data types.", details: ["String quoting", "Number formatting", "Boolean handling", "NULL values"] },
      { title: "Bulk Inserts", description: "Generate efficient multi-row INSERT statements.", details: ["Batch size options", "Transaction wrapping", "ON CONFLICT clauses", "Upsert support"] },
      { title: "Schema Generation", description: "Optionally generate CREATE TABLE statements.", details: ["Column types", "Primary keys", "Constraints", "Indexes"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON array data" },
      { title: "Select Database", description: "Choose your target database" },
      { title: "Configure Options", description: "Set table name and options" },
      { title: "Get SQL", description: "Copy generated INSERT statements" }
    ],
    useCases: [
      { title: "Data Migration", description: "Migrate JSON data exports to SQL databases." },
      { title: "Database Seeding", description: "Generate seed data for development databases." },
      { title: "API to Database", description: "Import API JSON responses directly to database tables." },
      { title: "Backup Restoration", description: "Restore JSON backups to SQL databases." }
    ],
    whyChoose: ["Multi-database", "Type detection", "Bulk inserts", "Schema generation", "Free forever", "No registration"],
    tips: ["Ensure JSON is an array of objects with consistent keys.", "Use batch inserts for large datasets to improve performance.", "Generate CREATE TABLE first to ensure schema matches."],
    faqs: [
      { question: "Which databases are supported?", answer: "MySQL, PostgreSQL, SQLite, and SQL Server with their specific syntax variations." },
      { question: "Does it handle NULL values?", answer: "Yes, null JSON values are converted to SQL NULL properly." },
      { question: "Can it create tables too?", answer: "Yes, optionally generate CREATE TABLE statements based on JSON structure." }
    ],
    relatedTools: [
      { title: "JSON to CSV", description: "Convert JSON to CSV format", path: "/json-to-csv-converter" },
      { title: "JSON Formatter", description: "Format JSON data", path: "/json-formatter" },
      { title: "JSON to Excel", description: "Convert JSON to Excel", path: "/json-to-excel-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON to SQL Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-to-text-converter",
    title: "Free JSON to Text Converter - Extract Plain Text from JSON",
    description: "Convert JSON to plain text format. Extract values, flatten structures, create readable output from JSON data. 100% free and browser-based.",
    keywords: "json to text, convert json to text, json text converter, extract text from json, json to plain text, flatten json",
    heroTitle: "Free JSON to Text Converter - Extract Plain Text",
    heroSubtitle: "Convert JSON data to readable plain text format. Flatten nested structures, extract values, create human-readable output from complex JSON.",
    heroHighlight: "Perfect for reports and documentation",
    primaryCta: "Convert to Text Now",
    primaryCtaPath: "/json-formatter",
    icon: FileText,
    iconColor: "text-gray-600",
    category: "tool",
    toolDescription: "Our JSON to Text converter transforms JSON data into clean, readable plain text. Multiple output formats available: key-value pairs, indented hierarchy, comma-separated values, or custom templates. Perfect for creating reports, documentation, or extracting data for non-technical stakeholders.",
    features: [
      { title: "Multiple Formats", description: "Choose from various text output formats.", details: ["Key: Value pairs", "Indented hierarchy", "Flat list", "Custom template"] },
      { title: "Value Extraction", description: "Extract only values without keys if needed.", details: ["Values only", "Keys only", "Both", "Selective"] },
      { title: "Structure Flattening", description: "Flatten nested objects with configurable separators.", details: ["Dot notation", "Custom separator", "Array indexing", "Depth limit"] },
      { title: "Custom Templates", description: "Use templates to format output exactly as needed.", details: ["Variable substitution", "Conditional text", "Loop support", "Formatting"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Paste your JSON data" },
      { title: "Choose Format", description: "Select output text format" },
      { title: "Convert", description: "Get plain text output" },
      { title: "Copy/Download", description: "Copy text or download .txt file" }
    ],
    useCases: [
      { title: "Report Generation", description: "Create readable reports from JSON data for stakeholders." },
      { title: "Documentation", description: "Convert JSON examples to plain text for documentation." },
      { title: "Data Export", description: "Export JSON data in text format for non-technical users." },
      { title: "Email Content", description: "Format JSON data as readable text for email inclusion." }
    ],
    whyChoose: ["Multiple formats", "Value extraction", "Custom templates", "Easy to use", "Free forever", "No registration"],
    tips: ["Use key-value format for structured data presentation.", "Custom templates are great for repeated formatting needs.", "Flatten deeply nested objects for cleaner output."],
    faqs: [
      { question: "Can I extract only certain fields?", answer: "Yes, you can select which fields to include in the text output." },
      { question: "How are arrays handled?", answer: "Arrays can be indexed, comma-separated, or listed on separate lines." },
      { question: "Can I use a custom format?", answer: "Yes, use custom templates with variable placeholders." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format JSON nicely", path: "/json-formatter" },
      { title: "JSON to CSV", description: "Convert JSON to CSV", path: "/json-to-csv-converter" },
      { title: "Text to HTML", description: "Convert text to HTML", path: "/text-to-html" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON to Text Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-schema-validator",
    title: "Free JSON Schema Validator - Validate JSON Against Schema Online",
    description: "Validate JSON data against JSON Schema definitions. Check structure, data types, required fields. Support for Draft-07. 100% free.",
    keywords: "json schema validator, validate json schema, json schema tester, json schema checker, draft-07 validator, json schema online",
    heroTitle: "Free JSON Schema Validator - Validate Structure & Types",
    heroSubtitle: "Validate JSON data against JSON Schema definitions. Ensure data integrity with type checking, required fields, and pattern validation.",
    heroHighlight: "Support for JSON Schema Draft-07 and Draft-04",
    primaryCta: "Validate Schema Now",
    primaryCtaPath: "/json-formatter",
    icon: Shield,
    iconColor: "text-green-600",
    category: "tool",
    toolDescription: "Our JSON Schema Validator checks JSON data against JSON Schema definitions to ensure data integrity. Validates data types, required fields, value constraints, patterns, and nested structures. Supports JSON Schema Draft-07, Draft-06, and Draft-04 specifications.",
    features: [
      { title: "Full Schema Support", description: "Comprehensive JSON Schema validation.", details: ["Draft-07 support", "Draft-06 support", "Draft-04 support", "Custom keywords"] },
      { title: "Type Validation", description: "Validates all JSON Schema type constraints.", details: ["String patterns", "Number ranges", "Array lengths", "Object properties"] },
      { title: "Detailed Errors", description: "Clear error messages for validation failures.", details: ["Path to error", "Expected vs actual", "All errors shown", "Quick fixes"] },
      { title: "Schema Editor", description: "Edit and test schemas in real-time.", details: ["Syntax highlighting", "Auto-complete", "Schema validation", "Examples"] }
    ],
    howItWorks: [
      { title: "Paste Schema", description: "Enter your JSON Schema definition" },
      { title: "Paste Data", description: "Enter JSON data to validate" },
      { title: "Validate", description: "Check data against schema" },
      { title: "Review Results", description: "See validation results and errors" }
    ],
    useCases: [
      { title: "API Contract Testing", description: "Validate API responses match expected schemas." },
      { title: "Form Validation", description: "Validate form data before submission." },
      { title: "Data Pipeline QA", description: "Ensure data integrity in ETL pipelines." },
      { title: "Schema Development", description: "Test and refine JSON Schema definitions." }
    ],
    whyChoose: ["Multiple drafts", "Type validation", "Clear errors", "Schema editor", "Free forever", "No registration"],
    tips: ["Start with Draft-07 for the most features.", "Use required array to specify mandatory fields.", "Test with both valid and invalid data."],
    faqs: [
      { question: "Which schema versions are supported?", answer: "Draft-07, Draft-06, and Draft-04 are fully supported." },
      { question: "Can I validate nested objects?", answer: "Yes, nested objects and arrays are fully validated against sub-schemas." },
      { question: "Does it show all errors?", answer: "Yes, all validation errors are shown with paths and descriptions." }
    ],
    relatedTools: [
      { title: "JSON Validator", description: "Validate JSON syntax", path: "/json-validator" },
      { title: "JSON Formatter", description: "Format JSON data", path: "/json-formatter" },
      { title: "JSON to TypeScript", description: "Generate types from JSON", path: "/json-to-typescript" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Schema Validator", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  }
];

// Export all pages combined
export const allSEOPages = [
  ...jsonToolsPages
];
