import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Download, Upload, CheckCircle, AlertCircle, FileJson, Code, FileText, Binary, Image as ImageIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowToUse } from "@/components/seo/HowToUse";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedTools } from "@/components/seo/RelatedTools";

const sampleJSON = {
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "interests": ["coding", "music", "travel"],
    "address": {
      "city": "New York",
      "country": "USA"
    }
  }
};

export default function JsonFormatter() {
  const [input, setInput] = useState(JSON.stringify(sampleJSON, null, 2));
  const [output, setOutput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setIsValid(true);
      toast.success("JSON formatted successfully!");
    } catch (error) {
      setIsValid(false);
      toast.error("Invalid JSON format!");
    }
  };

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setIsValid(true);
      toast.success("JSON minified successfully!");
    } catch (error) {
      setIsValid(false);
      toast.error("Invalid JSON format!");
    }
  };

  const validateJSON = () => {
    try {
      JSON.parse(input);
      setIsValid(true);
      toast.success("JSON is valid!");
    } catch (error) {
      setIsValid(false);
      toast.error("JSON is invalid!");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const downloadJSON = () => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
    toast.success("JSON file downloaded!");
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON Formatter & Validator",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "featureList": "Format JSON, Minify JSON, Validate JSON, Copy to clipboard, Download JSON"
  };

  const breadcrumbItems = [{ label: "JSON Formatter" }];

  const howToSteps = [
    { title: "Paste Your JSON", description: "Copy your JSON data and paste it into the input box. You can also click 'Load Sample' to see an example." },
    { title: "Choose Action", description: "Click 'Format JSON' for readable formatting, 'Minify JSON' to compress, or 'Validate Only' to check for errors." },
    { title: "Copy or Download", description: "Once processed, copy the result to your clipboard or download it as a .json file for use in your project." }
  ];

  const faqs = [
    { question: "What is JSON formatter?", answer: "A JSON formatter is a tool that takes unformatted or minified JSON data and makes it human-readable by adding proper indentation and line breaks. It helps developers quickly understand data structures and debug JSON-related issues." },
    { question: "How to format JSON online free?", answer: "Simply paste your JSON data into our formatter, then click the 'Format JSON' button. The tool will instantly beautify your JSON with proper indentation, making it easy to read. It's completely free with no registration required." },
    { question: "How to validate JSON?", answer: "Use our JSON validator by pasting your data and clicking 'Validate Only'. The tool checks for syntax errors like missing commas, unclosed brackets, or invalid characters. Valid JSON shows a green checkmark, while errors are highlighted in red." },
    { question: "What's the difference between JSON and XML?", answer: "JSON is lighter and faster than XML. JSON uses key-value pairs and is native to JavaScript, while XML uses tags similar to HTML. JSON is generally preferred for web APIs and data exchange due to its simplicity and smaller file size." },
    { question: "How to minify JSON?", answer: "Click the 'Minify JSON' button to remove all whitespace, indentation, and line breaks from your JSON. This reduces file size by up to 40%, making it ideal for API responses and reducing bandwidth usage in production environments." },
    { question: "Is JSON formatter safe to use?", answer: "Yes, our JSON formatter processes all data locally in your browser. Your JSON data never leaves your device or gets uploaded to any server, ensuring complete privacy and security for sensitive information." },
    { question: "How to pretty print JSON?", answer: "Pretty printing is another term for formatting JSON. Our tool automatically adds indentation (2 spaces) and line breaks to make your JSON readable. This is essential for debugging and code reviews." },
    { question: "What is JSON used for?", answer: "JSON is used for data exchange between web servers and clients, API responses, configuration files, storing structured data in databases (like MongoDB), and as a data format in mobile apps. It's the standard for modern web development." },
    { question: "How to fix JSON syntax errors?", answer: "Our validator highlights common errors like missing quotes around keys, trailing commas, unclosed brackets, or invalid escape characters. Check the error message, locate the line mentioned, and correct the syntax according to JSON standards." },
    { question: "Can JSON contain arrays?", answer: "Yes, JSON fully supports arrays using square brackets []. Arrays can contain strings, numbers, objects, other arrays, booleans, or null values. Arrays are ordered collections and are essential for representing lists of data." },
    { question: "Best practices for JSON formatting?", answer: "Use consistent indentation (2 or 4 spaces), validate JSON before deployment, use meaningful key names, keep structures flat when possible, minify for production, and format for development. Always validate your JSON to avoid runtime errors." },
    { question: "How to convert JSON to CSV?", answer: "While our tool focuses on JSON formatting, you can copy the formatted JSON and use a dedicated JSON-to-CSV converter. For simple data structures, you can also manually extract the values into a spreadsheet application." }
  ];

  const relatedTools = [
    { title: "API Tester", description: "Test REST APIs that return JSON responses", path: "/api-tester", icon: Code },
    { title: "Text to HTML", description: "Convert plain text to HTML format", path: "/text-to-html", icon: FileText },
    { title: "Base64 Tools", description: "Encode and decode Base64 data", path: "/base64-tools", icon: Binary },
    { title: "Image Tools", description: "Compress and convert images", path: "/image-tools", icon: ImageIcon }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.jsonFormatter.title}
        description={TOOL_SEO.jsonFormatter.description}
        keywords={TOOL_SEO.jsonFormatter.keywords}
        path={TOOL_SEO.jsonFormatter.path}
        schema={schema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <FileJson className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">JSON Formatter & Validator</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Format, minify, and validate JSON data with real-time error detection
        </p>
      </div>

      {/* Tool Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Format Your JSON</CardTitle>
            <CardDescription>Paste your JSON below to format, minify, or validate it</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Input JSON</label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JSON here..."
                className="font-mono min-h-[300px]"
              />
              {isValid !== null && (
                <div className="mt-2 flex items-center gap-2 text-sm">
                  {isValid ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success">Valid JSON</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      <span className="text-destructive">Invalid JSON</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={formatJSON} className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Format JSON
              </Button>
              <Button onClick={minifyJSON} variant="secondary" className="gap-2">
                Minify JSON
              </Button>
              <Button onClick={validateJSON} variant="outline" className="gap-2">
                Validate Only
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

            {output && (
              <div>
                <label className="text-sm font-medium mb-2 block">Formatted Output</label>
                <Textarea
                  value={output}
                  readOnly
                  className="font-mono min-h-[300px] bg-muted"
                />
                <div className="flex gap-2 mt-2">
                  <Button onClick={copyToClipboard} variant="outline" size="sm" className="gap-2">
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                  <Button onClick={downloadJSON} variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* AdSense - After JSON Tool */}
      <div className="max-w-6xl mx-auto mb-16">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.jsonFormatterInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      <HowToUse steps={howToSteps} toolName="JSON Formatter" />

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Real-time Validation",
              description: "Instantly detect syntax errors and invalid JSON structures as you type",
            },
            {
              title: "Multiple Formats",
              description: "Format with custom indentation or minify to reduce file size",
            },
            {
              title: "Easy Export",
              description: "Download formatted JSON or copy to clipboard with one click",
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

      {/* Blog/Guide Section */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Understanding JSON Formatting</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">What is JSON?</h3>
            <p className="text-muted-foreground">
              JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It's the de facto standard for API communication and data storage in modern web applications.
            </p>

            <h3 className="text-xl font-semibold mt-6">Why Format JSON?</h3>
            <p className="text-muted-foreground">
              Formatted JSON is much easier to read and debug. While minified JSON saves bandwidth, properly formatted JSON with indentation helps developers understand data structures at a glance. Our tool supports both formats for different use cases.
            </p>

            <h3 className="text-xl font-semibold mt-6">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use consistent indentation (2 or 4 spaces) for better readability</li>
              <li>Validate JSON before using it in production environments</li>
              <li>Minify JSON for API responses to reduce payload size</li>
              <li>Use meaningful key names that describe the data they contain</li>
              <li>Keep JSON structures flat when possible to improve performance</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Common Use Cases</h3>
            <p className="text-muted-foreground">
              JSON formatting is essential for API development, configuration files, data migration, debugging web applications, and creating mock data for testing. Whether you're a developer working with REST APIs or managing configuration files, our JSON formatter helps you work more efficiently.
            </p>
          </CardContent>
        </Card>
      </div>

      <FAQ faqs={faqs} />

      <RelatedTools tools={relatedTools} />
    </div>
  );
}
