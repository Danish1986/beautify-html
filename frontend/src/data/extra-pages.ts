// Extra SEO Pages to reach 100+

import { 
  FileText, Code, Globe, Shield, Zap, Database,
  Smartphone, Monitor, Share2, Download, Mail,
  BarChart, Settings, MessageSquare, Newspaper,
  LucideIcon
} from "lucide-react";

export interface ExtraPageData {
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

export const extraPages: ExtraPageData[] = [
  {
    slug: "json-to-table-converter",
    title: "Free JSON to Table Converter - Display JSON as Tables Online",
    description: "Convert JSON arrays to HTML tables instantly. Sortable columns, pagination. Perfect for data visualization. 100% free.",
    keywords: "json to table, json table converter, display json as table, json to html table, json table viewer",
    heroTitle: "Free JSON to Table Converter",
    heroSubtitle: "Transform JSON arrays into beautiful HTML tables with sortable columns, filtering, and pagination.",
    heroHighlight: "Interactive tables from JSON data",
    primaryCta: "Convert to Table",
    primaryCtaPath: "/json-formatter",
    icon: BarChart,
    iconColor: "text-blue-500",
    category: "tool",
    toolDescription: "Convert JSON arrays into interactive HTML tables. Features include sortable columns, search/filter, pagination, and export options. Perfect for displaying API data, creating reports, or visualizing JSON datasets.",
    features: [
      { title: "Auto-Detection", description: "Detects array structure automatically.", details: ["Array of objects", "Nested data", "Mixed types", "Column inference"] },
      { title: "Interactive Tables", description: "Tables with rich features.", details: ["Sortable columns", "Search/filter", "Pagination", "Column resize"] },
      { title: "Customization", description: "Style your tables.", details: ["Themes", "Column order", "Hide columns", "Custom CSS"] },
      { title: "Export Options", description: "Use tables anywhere.", details: ["Copy HTML", "Download", "Embed code", "Print view"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Enter JSON array" },
      { title: "Preview Table", description: "See interactive table" },
      { title: "Customize", description: "Adjust columns, style" },
      { title: "Export", description: "Copy or download" }
    ],
    useCases: [
      { title: "API Data Display", description: "Show API JSON responses as readable tables." },
      { title: "Data Reports", description: "Create tabular reports from JSON data." },
      { title: "Documentation", description: "Display JSON examples as tables in docs." },
      { title: "Dashboards", description: "Add JSON data tables to dashboards." }
    ],
    whyChoose: ["Auto-detection", "Interactive", "Customizable", "Export options", "100% private", "Free forever"],
    tips: ["JSON arrays of objects work best for tables.", "Use pagination for large datasets.", "Sort by clicking column headers."],
    faqs: [
      { question: "What JSON structure works best?", answer: "Arrays of objects, where each object becomes a row and keys become columns." },
      { question: "Can I customize the table appearance?", answer: "Yes, choose themes, reorder columns, and add custom CSS." },
      { question: "Is pagination automatic?", answer: "Yes, for large datasets. You can configure rows per page." }
    ],
    relatedTools: [
      { title: "JSON to HTML", description: "Convert JSON to HTML", path: "/json-to-html-converter" },
      { title: "JSON to CSV", description: "Convert to CSV", path: "/json-to-csv-converter" },
      { title: "JSON Formatter", description: "Format JSON first", path: "/json-formatter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON to Table Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "svg-to-png-converter",
    title: "Free SVG to PNG Converter - Convert Vector to Raster Online",
    description: "Convert SVG vector graphics to PNG images. Set resolution, background color. Perfect for web and print. 100% free.",
    keywords: "svg to png, convert svg to png, svg png converter, vector to raster, svg converter online",
    heroTitle: "Free SVG to PNG Converter",
    heroSubtitle: "Convert SVG vector graphics to PNG raster images. Control resolution, background color, and size.",
    heroHighlight: "High-resolution PNG from any SVG",
    primaryCta: "Convert SVG to PNG",
    primaryCtaPath: "/image-tools",
    icon: FileText,
    iconColor: "text-green-500",
    category: "tool",
    toolDescription: "Convert SVG vector graphics to PNG raster images with customizable resolution. Set output dimensions, background color (transparent or solid), and quality. Perfect for web use, social media, or print.",
    features: [
      { title: "Resolution Control", description: "Set output dimensions.", details: ["Custom width/height", "Scale factor", "DPI setting", "Preset sizes"] },
      { title: "Background Options", description: "Control transparency.", details: ["Transparent", "White", "Custom color", "Pattern"] },
      { title: "Quality Settings", description: "Optimize output.", details: ["PNG compression", "Color depth", "Anti-aliasing", "Sharp edges"] },
      { title: "Batch Processing", description: "Convert multiple SVGs.", details: ["Upload many", "Same settings", "Bulk download", "Zip archive"] }
    ],
    howItWorks: [
      { title: "Upload SVG", description: "Select SVG file" },
      { title: "Set Options", description: "Size, background, quality" },
      { title: "Convert", description: "Generate PNG" },
      { title: "Download", description: "Get PNG file" }
    ],
    useCases: [
      { title: "Web Graphics", description: "Convert SVG icons to PNG for browser compatibility." },
      { title: "Social Media", description: "Create PNG versions for platforms that don't support SVG." },
      { title: "Print Design", description: "High-res PNG from vector logos for printing." },
      { title: "App Development", description: "Generate PNG assets from SVG designs." }
    ],
    whyChoose: ["Resolution control", "Background options", "Quality settings", "Batch support", "100% private", "Free forever"],
    tips: ["Use 2x or 3x scale for retina displays.", "Keep transparent background for logos and icons.", "Higher resolution = larger file size."],
    faqs: [
      { question: "What resolution should I use?", answer: "72 DPI for web, 150 for general use, 300+ for print." },
      { question: "Can I keep transparency?", answer: "Yes, choose transparent background option." },
      { question: "Is there a size limit?", answer: "No artificial limits - processing happens in your browser." }
    ],
    relatedTools: [
      { title: "PNG to JPG", description: "Convert PNG to JPG", path: "/png-to-jpg-converter" },
      { title: "Image Compressor", description: "Compress PNG", path: "/image-compressor" },
      { title: "Image Resizer", description: "Resize images", path: "/image-resizer" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SVG to PNG Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-tree-viewer",
    title: "Free JSON Tree Viewer - Visualize JSON Structure Online",
    description: "View JSON as an interactive tree structure. Expand/collapse nodes, search, navigate. 100% free, browser-based.",
    keywords: "json tree viewer, json visualizer, json tree, visualize json, json structure viewer, json explorer",
    heroTitle: "Free JSON Tree Viewer",
    heroSubtitle: "Visualize JSON data as an interactive tree structure. Expand, collapse, search, and navigate complex JSON easily.",
    heroHighlight: "Navigate complex JSON visually",
    primaryCta: "View JSON Tree",
    primaryCtaPath: "/json-formatter",
    icon: Share2,
    iconColor: "text-purple-500",
    category: "tool",
    toolDescription: "Visualize JSON data as an interactive tree structure. Expand and collapse nodes, search for keys or values, copy paths, and navigate complex nested data easily. Perfect for understanding large JSON files.",
    features: [
      { title: "Interactive Tree", description: "Expandable tree view.", details: ["Click to expand", "Collapse all", "Expand all", "Level control"] },
      { title: "Search & Filter", description: "Find data quickly.", details: ["Search keys", "Search values", "Highlight matches", "Filter view"] },
      { title: "Path Tools", description: "Work with JSON paths.", details: ["Copy path", "Click to path", "JSONPath support", "Navigate to path"] },
      { title: "Data Info", description: "Understand your data.", details: ["Type indicators", "Array length", "Object keys count", "Value preview"] }
    ],
    howItWorks: [
      { title: "Paste JSON", description: "Enter JSON data" },
      { title: "View Tree", description: "See interactive structure" },
      { title: "Explore", description: "Expand, search, navigate" },
      { title: "Copy Paths", description: "Get paths to data" }
    ],
    useCases: [
      { title: "API Exploration", description: "Understand complex API response structures." },
      { title: "Debugging", description: "Find specific data in large JSON files." },
      { title: "Documentation", description: "Understand JSON schema structures." },
      { title: "Data Analysis", description: "Explore JSON data sets visually." }
    ],
    whyChoose: ["Interactive tree", "Search & filter", "Path tools", "Data info", "100% private", "Free forever"],
    tips: ["Use 'Collapse All' then expand specific branches.", "Search highlights all matching nodes.", "Copy path for use in code or JSONPath queries."],
    faqs: [
      { question: "How do I navigate large JSON?", answer: "Use collapse all, then expand specific branches. Search to find specific data." },
      { question: "What's the path format?", answer: "Paths use dot notation (object.key) and brackets for arrays ([0])." },
      { question: "Can I edit the JSON?", answer: "This is a viewer. Use JSON Formatter for editing." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format and edit JSON", path: "/json-formatter" },
      { title: "JSON Path Finder", description: "Query JSON paths", path: "/json-path-finder" },
      { title: "JSON Validator", description: "Validate JSON syntax", path: "/json-validator" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Tree Viewer", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "markdown-editor",
    title: "Free Online Markdown Editor - Write & Preview Markdown",
    description: "Write Markdown with live preview. GitHub Flavored Markdown support. Export to HTML or PDF. 100% free.",
    keywords: "markdown editor, online markdown editor, markdown preview, markdown writer, github markdown editor",
    heroTitle: "Free Online Markdown Editor",
    heroSubtitle: "Write Markdown with live side-by-side preview. Full GitHub Flavored Markdown support with export options.",
    heroHighlight: "Real-time preview as you type",
    primaryCta: "Start Writing",
    primaryCtaPath: "/text-to-html",
    icon: FileText,
    iconColor: "text-gray-600",
    category: "tool",
    toolDescription: "Write Markdown with instant live preview. Support for GitHub Flavored Markdown including tables, task lists, and code blocks with syntax highlighting. Export to HTML or PDF when done.",
    features: [
      { title: "Live Preview", description: "See rendered output instantly.", details: ["Side-by-side", "Synced scrolling", "Real-time update", "Full screen"] },
      { title: "GFM Support", description: "GitHub Flavored Markdown.", details: ["Tables", "Task lists", "Strikethrough", "Code blocks"] },
      { title: "Editor Features", description: "Comfortable writing.", details: ["Syntax highlighting", "Line numbers", "Auto-complete", "Keyboard shortcuts"] },
      { title: "Export Options", description: "Use your content.", details: ["HTML export", "PDF export", "Copy Markdown", "Download .md"] }
    ],
    howItWorks: [
      { title: "Write", description: "Type Markdown in editor" },
      { title: "Preview", description: "See rendered output live" },
      { title: "Edit", description: "Refine your content" },
      { title: "Export", description: "Download or copy" }
    ],
    useCases: [
      { title: "README Files", description: "Write GitHub README files with preview." },
      { title: "Documentation", description: "Create documentation in Markdown." },
      { title: "Blog Posts", description: "Draft blog posts for static site generators." },
      { title: "Notes", description: "Take formatted notes quickly." }
    ],
    whyChoose: ["Live preview", "GFM support", "Editor features", "Export options", "100% private", "Free forever"],
    tips: ["Use keyboard shortcuts for faster formatting.", "Preview scrolls in sync with editor.", "Export to HTML for web publishing."],
    faqs: [
      { question: "Does it support GitHub Markdown?", answer: "Yes, full GFM support including tables, task lists, and code blocks." },
      { question: "Can I export to PDF?", answer: "Yes, export your Markdown to PDF with formatting preserved." },
      { question: "Is my content saved?", answer: "Content stays in your browser. Export to save permanently." }
    ],
    relatedTools: [
      { title: "Markdown to HTML", description: "Convert Markdown", path: "/markdown-to-html-converter" },
      { title: "Text to HTML", description: "Convert plain text", path: "/text-to-html" },
      { title: "HTML to PDF", description: "Convert to PDF", path: "/html-to-pdf-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Markdown Editor", "applicationCategory": "TextEditor", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "text-case-converter",
    title: "Free Text Case Converter - Change Text Case Online",
    description: "Convert text between cases: UPPERCASE, lowercase, Title Case, Sentence case, camelCase. 100% free.",
    keywords: "text case converter, change text case, uppercase converter, lowercase converter, title case, camelcase",
    heroTitle: "Free Text Case Converter",
    heroSubtitle: "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, and more.",
    heroHighlight: "All text case conversions in one tool",
    primaryCta: "Convert Text Case",
    primaryCtaPath: "/text-to-html",
    icon: Code,
    iconColor: "text-orange-500",
    category: "tool",
    toolDescription: "Convert text between different cases with one click. Support for UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Perfect for formatting code, titles, or any text.",
    features: [
      { title: "Standard Cases", description: "Common text cases.", details: ["UPPERCASE", "lowercase", "Title Case", "Sentence case"] },
      { title: "Code Cases", description: "Programming naming conventions.", details: ["camelCase", "PascalCase", "snake_case", "kebab-case"] },
      { title: "Special Cases", description: "Additional transformations.", details: ["aLtErNaTiNg", "CONSTANT_CASE", "dot.case", "Inverse"] },
      { title: "Batch Processing", description: "Convert multiple lines.", details: ["Multi-line input", "Preserve structure", "Bulk convert", "Copy all"] }
    ],
    howItWorks: [
      { title: "Enter Text", description: "Paste your text" },
      { title: "Choose Case", description: "Select target case" },
      { title: "Convert", description: "Text transformed" },
      { title: "Copy", description: "Use converted text" }
    ],
    useCases: [
      { title: "Code Formatting", description: "Convert variable names between naming conventions." },
      { title: "Title Formatting", description: "Format titles and headings properly." },
      { title: "Data Cleaning", description: "Standardize text case in datasets." },
      { title: "Writing", description: "Fix accidentally typed text case." }
    ],
    whyChoose: ["All cases", "Code conventions", "Batch support", "Instant conversion", "100% private", "Free forever"],
    tips: ["camelCase for JavaScript variables.", "snake_case for Python.", "Title Case for headings and titles."],
    faqs: [
      { question: "What cases are supported?", answer: "UPPER, lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case, and more." },
      { question: "Can I convert multiple lines?", answer: "Yes, each line is converted while preserving line breaks." },
      { question: "What about special characters?", answer: "Special characters are preserved, only letter case changes." }
    ],
    relatedTools: [
      { title: "Text to HTML", description: "Format text as HTML", path: "/text-to-html" },
      { title: "Text Compare", description: "Compare text", path: "/text-compare-tool" },
      { title: "Lorem Ipsum", description: "Generate placeholder text", path: "/lorem-ipsum-generator" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Text Case Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "word-counter",
    title: "Free Word Counter - Count Words, Characters, Sentences Online",
    description: "Count words, characters, sentences, paragraphs. Reading time estimate. Perfect for writers. 100% free.",
    keywords: "word counter, character counter, word count tool, count words online, text counter, reading time",
    heroTitle: "Free Word Counter",
    heroSubtitle: "Count words, characters, sentences, and paragraphs. Get reading time estimate and text statistics instantly.",
    heroHighlight: "Essential tool for writers",
    primaryCta: "Count Words",
    primaryCtaPath: "/text-to-html",
    icon: BarChart,
    iconColor: "text-blue-600",
    category: "tool",
    toolDescription: "Count words, characters (with and without spaces), sentences, and paragraphs in any text. Get reading time and speaking time estimates. Perfect for writers, students, and content creators meeting word count requirements.",
    features: [
      { title: "Word Count", description: "Accurate word counting.", details: ["Total words", "Unique words", "Average word length", "Top words"] },
      { title: "Character Count", description: "Character statistics.", details: ["With spaces", "Without spaces", "Letters only", "Special chars"] },
      { title: "Structure Count", description: "Document structure.", details: ["Sentences", "Paragraphs", "Lines", "Pages (est.)"] },
      { title: "Time Estimates", description: "Reading and speaking time.", details: ["Reading time", "Speaking time", "Adjustable WPM", "Presentation time"] }
    ],
    howItWorks: [
      { title: "Paste Text", description: "Enter your content" },
      { title: "View Stats", description: "See all counts instantly" },
      { title: "Analyze", description: "Check detailed statistics" },
      { title: "Adjust", description: "Edit until targets met" }
    ],
    useCases: [
      { title: "Essay Writing", description: "Meet word count requirements for assignments." },
      { title: "Blog Posts", description: "Check content length for SEO optimization." },
      { title: "Social Media", description: "Stay within character limits." },
      { title: "Presentations", description: "Estimate speaking time for talks." }
    ],
    whyChoose: ["Comprehensive stats", "Time estimates", "Real-time updates", "Detailed analysis", "100% private", "Free forever"],
    tips: ["Average reading speed is ~200-250 WPM.", "Speaking is slower at ~120-150 WPM.", "Check unique word count for vocabulary variety."],
    faqs: [
      { question: "How is reading time calculated?", answer: "Words divided by average reading speed (200-250 WPM). Adjustable in settings." },
      { question: "Do character counts include spaces?", answer: "We show both: with spaces and without spaces." },
      { question: "Is it accurate for all languages?", answer: "Yes, works with any language including Chinese, Japanese (character-based)." }
    ],
    relatedTools: [
      { title: "Text Case Converter", description: "Change text case", path: "/text-case-converter" },
      { title: "Lorem Ipsum", description: "Generate filler text", path: "/lorem-ipsum-generator" },
      { title: "Text to HTML", description: "Format text", path: "/text-to-html" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Word Counter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "diff-checker",
    title: "Free Diff Checker - Compare Code & Text Differences Online",
    description: "Compare two texts and see differences highlighted. Line-by-line or character diff. Git-style output. 100% free.",
    keywords: "diff checker, compare text, text diff, code diff, file comparison, difference checker",
    heroTitle: "Free Diff Checker",
    heroSubtitle: "Compare two texts side-by-side with highlighted differences. Line-by-line and character-level comparison.",
    heroHighlight: "Git-style diff output",
    primaryCta: "Compare Texts",
    primaryCtaPath: "/json-formatter",
    icon: Code,
    iconColor: "text-red-500",
    category: "tool",
    toolDescription: "Compare two texts and see exactly what changed. Side-by-side view with color-coded differences. Support for line-by-line, word, and character-level comparison. Export as unified diff or HTML report.",
    features: [
      { title: "Comparison Modes", description: "Different diff views.", details: ["Side-by-side", "Unified diff", "Inline diff", "Split view"] },
      { title: "Diff Granularity", description: "Choose detail level.", details: ["Line level", "Word level", "Character level", "Semantic"] },
      { title: "Output Options", description: "Export differences.", details: ["Unified diff format", "HTML report", "JSON diff", "Copy changes"] },
      { title: "Configuration", description: "Customize comparison.", details: ["Ignore whitespace", "Ignore case", "Trim lines", "Context lines"] }
    ],
    howItWorks: [
      { title: "Enter Text 1", description: "Original version" },
      { title: "Enter Text 2", description: "Changed version" },
      { title: "Compare", description: "See differences highlighted" },
      { title: "Export", description: "Save diff report" }
    ],
    useCases: [
      { title: "Code Review", description: "Compare code versions before/after changes." },
      { title: "Document Editing", description: "See what changed between document versions." },
      { title: "Configuration Diffs", description: "Compare config files across environments." },
      { title: "Data Validation", description: "Verify data transformations by comparing output." }
    ],
    whyChoose: ["Multiple modes", "Granularity options", "Export formats", "Configurable", "100% private", "Free forever"],
    tips: ["Use character-level diff to find typos.", "Ignore whitespace for code comparisons.", "Export unified diff for Git-style patches."],
    faqs: [
      { question: "What diff formats are available?", answer: "Side-by-side, unified diff (git-style), inline, and HTML report." },
      { question: "Can I ignore whitespace?", answer: "Yes, enable 'Ignore whitespace' to focus on content changes only." },
      { question: "Does it work with large files?", answer: "Yes, efficiently handles large files in your browser." }
    ],
    relatedTools: [
      { title: "JSON Compare", description: "Compare JSON files", path: "/json-compare-tool" },
      { title: "Text Compare", description: "Compare texts", path: "/text-compare-tool" },
      { title: "JSON Formatter", description: "Format before comparing", path: "/json-formatter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Diff Checker", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "json-editor-online",
    title: "Free JSON Editor Online - Edit JSON Data with Validation",
    description: "Edit JSON with syntax highlighting, validation, and tree view. Format, minify, validate as you edit. 100% free.",
    keywords: "json editor, edit json online, json editor online, json data editor, online json editor free",
    heroTitle: "Free JSON Editor Online",
    heroSubtitle: "Edit JSON data with real-time syntax highlighting, validation, and multiple view modes. Tree view and text editor combined.",
    heroHighlight: "Professional JSON editing in your browser",
    primaryCta: "Edit JSON",
    primaryCtaPath: "/json-formatter",
    icon: Code,
    iconColor: "text-green-600",
    category: "tool",
    toolDescription: "Full-featured JSON editor with syntax highlighting, real-time validation, tree view editing, and formatting options. Edit JSON data visually or in text mode. Perfect for working with APIs, configuration files, and data.",
    features: [
      { title: "Dual View Modes", description: "Tree and text editing.", details: ["Tree editor", "Text editor", "Split view", "Synced editing"] },
      { title: "Real-time Validation", description: "Catch errors as you type.", details: ["Syntax check", "Error highlighting", "Line numbers", "Fix suggestions"] },
      { title: "Editing Features", description: "Powerful editing tools.", details: ["Add/remove nodes", "Rename keys", "Change types", "Drag & drop"] },
      { title: "Format Options", description: "Control output format.", details: ["Pretty print", "Minify", "Sort keys", "Custom indent"] }
    ],
    howItWorks: [
      { title: "Load JSON", description: "Paste or upload JSON" },
      { title: "Edit", description: "Use tree or text view" },
      { title: "Validate", description: "Errors shown in real-time" },
      { title: "Export", description: "Copy or download" }
    ],
    useCases: [
      { title: "API Development", description: "Edit request/response JSON during development." },
      { title: "Configuration", description: "Edit JSON config files safely with validation." },
      { title: "Data Cleanup", description: "Fix and clean up JSON data." },
      { title: "Learning", description: "Understand JSON structure through visual editing." }
    ],
    whyChoose: ["Dual view", "Real-time validation", "Visual editing", "Format options", "100% private", "Free forever"],
    tips: ["Use tree view for structural changes, text for quick edits.", "Validation catches errors before you save.", "Sort keys for consistent ordering."],
    faqs: [
      { question: "Can I edit in tree view?", answer: "Yes, add, remove, rename, and drag nodes in tree view." },
      { question: "Does it validate as I type?", answer: "Yes, errors are highlighted in real-time with descriptions." },
      { question: "Can I convert types?", answer: "Yes, change values between string, number, boolean, null, object, array." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format JSON", path: "/json-formatter" },
      { title: "JSON Validator", description: "Validate JSON", path: "/json-validator" },
      { title: "JSON Tree Viewer", description: "View JSON structure", path: "/json-tree-viewer" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JSON Editor Online", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "html-to-markdown-converter",
    title: "Free HTML to Markdown Converter - Convert HTML to MD Online",
    description: "Convert HTML to Markdown format. Preserve formatting, links, images. Clean Markdown output. 100% free.",
    keywords: "html to markdown, convert html to markdown, html to md, html markdown converter, html to markdown online",
    heroTitle: "Free HTML to Markdown Converter",
    heroSubtitle: "Transform HTML into clean Markdown. Preserve formatting, links, images, and structure.",
    heroHighlight: "Clean Markdown from any HTML",
    primaryCta: "Convert to Markdown",
    primaryCtaPath: "/text-to-html",
    icon: FileText,
    iconColor: "text-purple-600",
    category: "tool",
    toolDescription: "Convert HTML to Markdown format while preserving structure. Handles headings, lists, links, images, code blocks, and tables. Perfect for migrating content to Markdown-based systems or creating documentation.",
    features: [
      { title: "Format Preservation", description: "Keep structure intact.", details: ["Headings", "Lists", "Links", "Images", "Tables", "Code blocks"] },
      { title: "Cleanup Options", description: "Control output quality.", details: ["Remove styling", "Clean tags", "Preserve classes", "Custom rules"] },
      { title: "GFM Output", description: "GitHub-compatible output.", details: ["Tables", "Task lists", "Strikethrough", "Fenced code"] },
      { title: "Batch Processing", description: "Convert multiple pages.", details: ["Multiple inputs", "Consistent output", "Bulk download", "Zip archive"] }
    ],
    howItWorks: [
      { title: "Paste HTML", description: "Enter HTML content" },
      { title: "Configure", description: "Set conversion options" },
      { title: "Convert", description: "Generate Markdown" },
      { title: "Copy/Download", description: "Use Markdown output" }
    ],
    useCases: [
      { title: "Content Migration", description: "Move HTML content to Markdown-based CMS." },
      { title: "Documentation", description: "Convert HTML docs to Markdown format." },
      { title: "Blog Migration", description: "Migrate HTML blog posts to static site generators." },
      { title: "README Creation", description: "Convert HTML pages to README.md files." }
    ],
    whyChoose: ["Format preservation", "Cleanup options", "GFM output", "Batch support", "100% private", "Free forever"],
    tips: ["Clean HTML first for best Markdown output.", "Check table conversion manually - complex tables may need adjustment.", "Code blocks preserve language hints when possible."],
    faqs: [
      { question: "Are tables converted properly?", answer: "Yes, HTML tables become GFM-style Markdown tables." },
      { question: "What about inline styles?", answer: "Inline styles are removed by default. Markdown doesn't support them." },
      { question: "Does it handle code blocks?", answer: "Yes, <pre><code> becomes fenced code blocks with language hints." }
    ],
    relatedTools: [
      { title: "Markdown to HTML", description: "Convert Markdown to HTML", path: "/markdown-to-html-converter" },
      { title: "Markdown Editor", description: "Edit Markdown", path: "/markdown-editor" },
      { title: "Text to HTML", description: "Convert text to HTML", path: "/text-to-html" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "HTML to Markdown Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "backslash-escape-unescape",
    title: "Free Backslash Escape/Unescape Tool - Escape Strings Online",
    description: "Escape and unescape strings with backslashes. Handle quotes, newlines, special characters. 100% free.",
    keywords: "escape string, unescape string, backslash escape, string escaping, escape special characters",
    heroTitle: "Free Backslash Escape/Unescape Tool",
    heroSubtitle: "Escape and unescape strings with proper backslash handling. Perfect for JSON strings, regex, and code.",
    heroHighlight: "Handle all escape sequences",
    primaryCta: "Escape Strings",
    primaryCtaPath: "/json-formatter",
    icon: Code,
    iconColor: "text-gray-600",
    category: "tool",
    toolDescription: "Escape and unescape strings with proper backslash sequences. Handle quotes, newlines, tabs, Unicode, and other special characters. Essential for preparing strings for JSON, regex patterns, or code.",
    features: [
      { title: "Escape Sequences", description: "All standard escapes.", details: ["\\n newline", "\\t tab", "\\\" quote", "\\\\ backslash", "Unicode \\uXXXX"] },
      { title: "Language Modes", description: "Different escaping rules.", details: ["JSON strings", "JavaScript", "Python", "Regex"] },
      { title: "Bidirectional", description: "Escape and unescape.", details: ["Escape special chars", "Unescape to original", "Preview both", "Toggle mode"] },
      { title: "Batch Processing", description: "Process multiple strings.", details: ["Line by line", "Bulk process", "Consistent handling", "Copy all"] }
    ],
    howItWorks: [
      { title: "Enter String", description: "Paste text to process" },
      { title: "Choose Mode", description: "Escape or unescape" },
      { title: "Process", description: "String transformed" },
      { title: "Copy", description: "Use result" }
    ],
    useCases: [
      { title: "JSON Strings", description: "Properly escape strings for JSON values." },
      { title: "Code Generation", description: "Escape strings for inclusion in code." },
      { title: "Regex Patterns", description: "Escape special regex characters." },
      { title: "Data Import", description: "Unescape imported escaped strings." }
    ],
    whyChoose: ["All escapes", "Language modes", "Bidirectional", "Batch support", "100% private", "Free forever"],
    tips: ["JSON mode escapes for valid JSON string values.", "Use unescape to see actual string content.", "Check regex mode for pattern preparation."],
    faqs: [
      { question: "What characters are escaped?", answer: "Quotes, backslashes, newlines, tabs, and other control characters." },
      { question: "Is this for JSON strings?", answer: "Yes, JSON mode produces valid JSON string content." },
      { question: "Can I unescape escaped strings?", answer: "Yes, toggle to unescape mode to reverse the process." }
    ],
    relatedTools: [
      { title: "JSON Formatter", description: "Format JSON", path: "/json-formatter" },
      { title: "Regex Tester", description: "Test regex", path: "/regex-tester" },
      { title: "Base64 Encoder", description: "Encode strings", path: "/base64-encoder" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Backslash Escape Tool", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  }
];
