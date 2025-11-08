import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileJson, Download, Upload, ThumbsUp, ThumbsDown } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowToUse } from "@/components/seo/HowToUse";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedTools } from "@/components/seo/RelatedTools";
import { convertJsonToPdf } from "@/lib/json-to-pdf-converter";
import { Code, FileType, Binary } from "lucide-react";
import { useFeedback } from "@/hooks/use-feedback";

const sampleJSON = {
  "invoice": {
    "number": "INV-2024-001",
    "date": "2024-01-15",
    "dueDate": "2024-02-15",
    "status": "Paid",
    "customer": {
      "name": "Acme Corporation",
      "email": "contact@acme.com",
      "phone": "+1 (555) 123-4567",
      "address": "123 Business St, Suite 100, New York, NY 10001"
    },
    "items": [
      { "description": "Web Development", "hours": 40, "rate": 150, "amount": 6000 },
      { "description": "UI/UX Design", "hours": 20, "rate": 120, "amount": 2400 },
      { "description": "Consulting Services", "hours": 10, "rate": 200, "amount": 2000 }
    ],
    "subtotal": 10400,
    "taxRate": 0.08,
    "tax": 832,
    "total": 11232
  }
};

export default function JsonToPdf() {
  const [input, setInput] = useState(JSON.stringify(sampleJSON, null, 2));
  const [isConverting, setIsConverting] = useState(false);
  const [tableFormat, setTableFormat] = useState(true);
  const { showFeedback, recordFeedback, stats } = useFeedback('json-to-pdf');

  const convertToPdf = async () => {
    try {
      setIsConverting(true);
      const parsed = JSON.parse(input);
      await convertJsonToPdf(parsed, "converted-data.pdf", { tableFormat });
      toast.success("JSON converted to PDF successfully!");
      recordFeedback('conversion');
    } catch (error: any) {
      toast.error(error.message || "Invalid JSON format!");
    } finally {
      setIsConverting(false);
    }
  };

  const handleFeedback = (helpful: boolean) => {
    recordFeedback(helpful ? 'helpful' : 'not-helpful');
    toast.success(helpful ? "Thanks for your feedback!" : "We'll work on improving!");
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON to PDF Converter",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "featureList": "Convert JSON to PDF, Format JSON data as readable PDF documents, Download PDF files instantly, Free JSON to PDF conversion"
  };

  const breadcrumbItems = [{ label: "JSON to PDF Converter" }];

  const howToSteps = [
    { 
      title: "Paste Your JSON Data", 
      description: "Copy your JSON data and paste it into the input box. The JSON to PDF Converter will validate your data automatically. You can also click 'Load Sample' to see an example." 
    },
    { 
      title: "Click Convert to PDF", 
      description: "Press the 'Convert to PDF' button to transform your JSON data into a professionally formatted PDF document. The conversion happens instantly in your browser." 
    },
    { 
      title: "Download Your PDF", 
      description: "Your PDF file will be automatically downloaded. Open it to view your JSON data in a clean, readable format perfect for reports, invoices, or documentation." 
    }
  ];

  const faqs = [
    { 
      question: "What is a JSON to PDF converter?", 
      answer: "A JSON to PDF converter is a tool that transforms JSON (JavaScript Object Notation) data into PDF (Portable Document Format) documents. This free JSON to PDF converter makes JSON data human-readable and printable, perfect for creating reports, invoices, or documentation from API responses and database exports." 
    },
    { 
      question: "How do I convert JSON to PDF online free?", 
      answer: "Simply paste your JSON data into our JSON to PDF converter, then click 'Convert to PDF'. The tool instantly transforms your JSON into a formatted PDF document that downloads automatically. No registration, no file uploads to servers - everything processes securely in your browser." 
    },
    { 
      question: "Is this JSON to PDF converter safe?", 
      answer: "Yes, our JSON to PDF converter is completely safe. All conversions happen locally in your web browser - your JSON data never leaves your device or gets uploaded to any server. This ensures complete privacy and security for sensitive business data, API responses, or personal information." 
    },
    { 
      question: "What JSON formats can I convert to PDF?", 
      answer: "Our JSON to PDF converter supports all valid JSON formats including objects, arrays, nested structures, strings, numbers, booleans, and null values. Whether you're converting API responses, configuration files, or database exports, the tool handles any properly formatted JSON data." 
    },
    { 
      question: "Can I convert large JSON files to PDF?", 
      answer: "Yes, this JSON to PDF converter handles large JSON files efficiently. However, extremely large files (over 10MB) may take longer to process and result in large PDF files. For best results, consider splitting very large datasets into smaller chunks before conversion." 
    },
    { 
      question: "How is the JSON data formatted in the PDF?", 
      answer: "The JSON to PDF converter uses smart table formatting by default, transforming arrays into readable data tables and objects into key-value tables. This makes JSON data easy to understand for anyone, even without technical knowledge. You can also switch to raw text format if you prefer to see the JSON structure." 
    },
    { 
      question: "Can I use this JSON to PDF converter for invoices?", 
      answer: "Absolutely! Many users convert JSON invoice data from e-commerce platforms, accounting systems, or payment APIs into PDF format using this tool. The converter preserves your JSON structure, making it ideal for creating printable invoice records or financial documentation." 
    },
    { 
      question: "Does the JSON to PDF converter work offline?", 
      answer: "After loading the page once, the JSON to PDF converter can work offline for subsequent conversions. Since all processing happens in your browser using JavaScript, you don't need an internet connection to convert JSON to PDF once the tool is loaded." 
    },
    { 
      question: "What are common uses for JSON to PDF conversion?", 
      answer: "Common uses include converting API responses for documentation, creating printable reports from JSON logs, transforming database exports into shareable PDFs, generating invoices from JSON data, creating readable backups of configuration files, and producing documentation from JSON schemas." 
    },
    { 
      question: "Can I customize the PDF output from JSON?", 
      answer: "Currently, the JSON to PDF converter creates standardized, well-formatted PDFs optimized for readability. The PDFs include proper spacing, indentation, and structure to make your JSON data easy to understand and professional-looking for sharing or printing." 
    },
    {
      question: "Is there a file size limit for JSON to PDF conversion?",
      answer: "There's no strict file size limit, but for optimal performance, we recommend keeping JSON files under 5MB. Larger files will still convert but may take longer. The tool processes everything in your browser's memory, so performance depends on your device's capabilities."
    },
    {
      question: "Can I convert JSON arrays to PDF?",
      answer: "Yes, our JSON to PDF converter fully supports JSON arrays, including nested arrays and arrays of objects. The converter formats arrays clearly with proper indexing, making it easy to read lists of data in the resulting PDF document."
    }
  ];

  const relatedTools = [
    { title: "JSON Formatter", description: "Format, validate and beautify JSON data", path: "/json-formatter", icon: FileJson },
    { title: "PDF Tools", description: "Compress, merge and convert PDF files", path: "/pdf-tools", icon: FileType },
    { title: "API Tester", description: "Test APIs that return JSON responses", path: "/api-tester", icon: Code },
    { title: "Base64 Tools", description: "Encode and decode Base64 data", path: "/base64-tools", icon: Binary }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.jsonToPdf.title}
        description={TOOL_SEO.jsonToPdf.description}
        keywords={TOOL_SEO.jsonToPdf.keywords}
        path={TOOL_SEO.jsonToPdf.path}
        schema={schema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <FileJson className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">JSON to PDF Converter</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert JSON data to professional PDF documents instantly. Free, secure, and works entirely in your browser.
        </p>
        
        {/* Social Proof Counter */}
        {stats.totalConversions > 0 && (
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
            <span className="font-semibold text-primary">{stats.totalConversions.toLocaleString()}+</span>
            <span className="text-muted-foreground">successful conversions</span>
          </div>
        )}
      </div>

      {/* Tool Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Convert JSON to PDF</CardTitle>
            <CardDescription>
              Paste your JSON data below to convert it into a formatted PDF document
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">JSON Data</label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JSON here..."
                className="font-mono min-h-[400px]"
              />
            </div>

            <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
              <Switch
                id="table-format"
                checked={tableFormat}
                onCheckedChange={setTableFormat}
              />
              <div className="flex-1">
                <Label htmlFor="table-format" className="font-medium cursor-pointer">
                  Smart Table Format
                </Label>
                <p className="text-sm text-muted-foreground">
                  Convert JSON to readable tables instead of raw text (recommended for non-technical users)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button 
                onClick={convertToPdf} 
                className="gap-2"
                disabled={isConverting}
              >
                <Download className="h-4 w-4" />
                {isConverting ? "Converting..." : "Convert to PDF"}
              </Button>
              <Button
                onClick={() => setInput(JSON.stringify(sampleJSON, null, 2))}
                variant="outline"
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                Load Sample
              </Button>
            </div>

            {/* User Feedback Section */}
            {showFeedback && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-3">Was this JSON to PDF Converter helpful?</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleFeedback(true)}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Yes, helpful
                  </Button>
                  <Button
                    onClick={() => handleFeedback(false)}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    Needs improvement
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* AdSense - After Tool */}
      <div className="max-w-6xl mx-auto mb-16">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.jsonToPdfInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      <HowToUse steps={howToSteps} toolName="JSON to PDF Converter" />

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our JSON to PDF Converter?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "100% Free & Secure",
              description: "Convert JSON to PDF for free with no hidden costs. All processing happens in your browser - your data never leaves your device.",
            },
            {
              title: "Instant Conversion",
              description: "Transform JSON to PDF in seconds. No waiting, no file size limits, no registration required. Just paste and convert.",
            },
            {
              title: "Professional Output",
              description: "Generate clean, readable PDFs perfect for reports, documentation, and sharing. Proper formatting and structure guaranteed.",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Guide Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Complete Guide to JSON to PDF Conversion</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">What is JSON to PDF Conversion?</h3>
            <p className="text-muted-foreground">
              JSON to PDF conversion transforms JavaScript Object Notation (JSON) data - commonly used for APIs, databases, and data exchange - into Portable Document Format (PDF) files that are universally readable, printable, and shareable. This process makes technical JSON data accessible to non-technical users and creates permanent records of data snapshots.
            </p>

            <h3 className="text-xl font-semibold mt-6">When Do You Need a JSON to PDF Converter?</h3>
            <p className="text-muted-foreground">
              Use our JSON to PDF converter when you need to create printable reports from API responses, generate invoices from e-commerce platforms, document database exports, share configuration files with non-technical stakeholders, create backups of JSON logs, or transform any JSON data into a format suitable for archiving, auditing, or presentation.
            </p>

            <h3 className="text-xl font-semibold mt-6">Benefits of Converting JSON to PDF</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Universal Compatibility:</strong> PDFs open on any device without special software, unlike JSON which requires technical tools</li>
              <li><strong>Preserve Formatting:</strong> Maintain data structure and hierarchy in a readable format that won't change</li>
              <li><strong>Easy Sharing:</strong> Send JSON data to clients, managers, or auditors in a professional, accessible format</li>
              <li><strong>Print-Ready:</strong> Create physical copies of digital records for compliance, archiving, or documentation</li>
              <li><strong>Secure Storage:</strong> Generate permanent snapshots of dynamic JSON data for historical reference</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Best Practices for JSON to PDF Conversion</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Validate your JSON before conversion to ensure accurate PDF output</li>
              <li>Use meaningful property names in your JSON for better readability in the PDF</li>
              <li>For large datasets, consider splitting into multiple smaller JSON files before converting</li>
              <li>Add descriptive filenames to PDFs to easily identify the content later</li>
              <li>Keep a backup of the original JSON file if you need to re-process the data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Common Use Cases</h3>
            <p className="text-muted-foreground">
              Our JSON to PDF converter is widely used for converting Stripe or PayPal transaction records, generating customer invoices from e-commerce JSON, documenting API responses for technical specifications, creating reports from MongoDB or Firebase exports, archiving configuration files, transforming survey results into shareable documents, and producing readable logs from application monitoring systems.
            </p>
          </CardContent>
        </Card>
      </div>

      <FAQ faqs={faqs} />

      <RelatedTools tools={relatedTools} />
    </div>
  );
}