import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Download, FileText, Eye, FileJson, Binary, Image as ImageIcon, Code } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowToUse } from "@/components/seo/HowToUse";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedTools } from "@/components/seo/RelatedTools";

const sampleText = `Welcome to DevTools

This is a sample text that will be converted to HTML.

Features:
- Easy to use
- Free and fast
- No registration required

Visit us at: devtools.example.com
Email: contact@devtools.com`;

export default function TextToHtml() {
  const [input, setInput] = useState(sampleText);
  const [output, setOutput] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const convertToHTML = () => {
    let html = input;
    
    // Convert URLs to links
    html = html.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    
    // Convert emails to mailto links
    html = html.replace(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g,
      '<a href="mailto:$1">$1</a>'
    );
    
    // Convert line breaks to paragraphs
    const paragraphs = html.split('\n\n').filter(p => p.trim());
    html = paragraphs.map(p => {
      const lines = p.split('\n').filter(l => l.trim());
      if (lines.length === 1) {
        return `<p>${lines[0]}</p>`;
      }
      return '<p>' + lines.join('<br>') + '</p>';
    }).join('\n');
    
    setOutput(html);
    setShowPreview(true);
    toast.success("Text converted to HTML!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("HTML copied to clipboard!");
  };

  const downloadHTML = () => {
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Converted HTML</title>
</head>
<body>
    ${output}
</body>
</html>`;
    
    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.html";
    a.click();
    toast.success("HTML file downloaded!");
  };

  const breadcrumbItems = [{ label: "Text to HTML" }];

  const howToSteps = [
    { title: "Enter Your Text", description: "Type or paste your plain text into the input box. The tool automatically detects URLs and email addresses for conversion." },
    { title: "Convert to HTML", description: "Click the 'Convert to HTML' button to transform your text into properly formatted HTML with paragraph tags, line breaks, and clickable links." },
    { title: "Preview and Download", description: "Use the 'Show Preview' button to see how your HTML will look, then copy the code or download it as a complete HTML file." }
  ];

  const faqs = [
    { question: "How to convert text to HTML?", answer: "Paste your plain text into our converter and click 'Convert to HTML'. The tool automatically formats paragraphs, converts line breaks to <br> tags, and transforms URLs and emails into clickable links. You can preview the result before copying or downloading." },
    { question: "How to convert plain text to HTML online?", answer: "Our online tool makes conversion instant and free. Simply paste text, click convert, and get clean HTML code. No installation or registration needed. The tool runs entirely in your browser for maximum privacy and speed." },
    { question: "Does HTML converter work for email?", answer: "Yes! The converted HTML works perfectly for email clients. It creates properly formatted paragraphs and links that display correctly in Gmail, Outlook, and other email services. Make sure to test in your specific email client before sending to large lists." },
    { question: "How to create HTML from text automatically?", answer: "Our tool automatically detects text patterns and converts them to HTML. URLs become <a> tags, emails get mailto: links, double line breaks create <p> tags, and single breaks become <br> tags. It follows HTML5 best practices automatically." },
    { question: "What's the best text to HTML converter?", answer: "The best converter should handle links automatically, preserve formatting, create semantic HTML, and provide a live preview. Our tool does all this while running securely in your browser without uploading your data to servers." },
    { question: "How to format paragraphs in HTML?", answer: "Our tool wraps text blocks separated by empty lines in <p> tags (paragraph elements). Lines within the same paragraph are separated with <br> tags. This creates proper semantic HTML that's accessible and SEO-friendly." },
    { question: "How to make links in HTML?", answer: "The tool automatically detects URLs (http:// or https://) and converts them to <a href=\"url\">url</a> tags with target=\"_blank\" for external links and rel=\"noopener noreferrer\" for security. Email addresses become mailto: links automatically." },
    { question: "Is text to HTML conversion free?", answer: "Yes, our tool is completely free with unlimited conversions. No registration, no hidden fees, no credit card required. All processing happens in your browser, so there are no server costs limiting usage." },
    { question: "Can I convert Word to HTML?", answer: "While this tool works best with plain text, you can copy text from Word documents and convert it. For complex Word documents with images and formatting, consider specialized Word-to-HTML converters or save directly from Word as HTML." },
    { question: "How to preserve formatting in HTML?", answer: "The tool preserves line breaks, paragraph structure, and basic text flow. For advanced formatting like bold, italics, or colors, you'll need to manually add HTML tags like <strong>, <em>, or <span style=\"\"> after conversion." },
    { question: "Best practices for HTML conversion?", answer: "Organize text with clear paragraph breaks before converting. Use double line breaks between paragraphs. Include full URLs (with http://) for automatic link detection. Always preview the result to verify formatting before using in production." },
    { question: "How to convert text to HTML for emails?", answer: "Convert your text, then wrap the result in a proper email template with DOCTYPE, html, head, and body tags. Use inline CSS for styling as many email clients don't support external stylesheets. Test in multiple email clients before sending." }
  ];

  const relatedTools = [
    { title: "JSON Formatter", description: "Format and validate JSON data", path: "/json-formatter", icon: FileJson },
    { title: "PDF Tools", description: "Convert and merge PDF files", path: "/pdf-tools", icon: FileText },
    { title: "Base64 Tools", description: "Encode HTML for embedding", path: "/base64-tools", icon: Binary },
    { title: "Image Tools", description: "Optimize images for web", path: "/image-tools", icon: ImageIcon }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.textToHtml.title}
        description={TOOL_SEO.textToHtml.description}
        keywords={TOOL_SEO.textToHtml.keywords}
        path={TOOL_SEO.textToHtml.path}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <FileText className="h-8 w-8 text-success" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Text to HTML Converter</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert plain text to properly formatted HTML with automatic link detection
        </p>
      </div>

      {/* Tool Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Convert Text to HTML</CardTitle>
            <CardDescription>Enter your plain text and we'll convert it to semantic HTML</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Input Text</label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your text here..."
                className="min-h-[300px]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={convertToHTML} className="gap-2">
                <FileText className="h-4 w-4" />
                Convert to HTML
              </Button>
              <Button
                onClick={() => setInput(sampleText)}
                variant="outline"
                className="gap-2"
              >
                Load Sample
              </Button>
              {output && (
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant="outline"
                  className="gap-2"
                >
                  <Eye className="h-4 w-4" />
                  {showPreview ? "Hide" : "Show"} Preview
                </Button>
              )}
            </div>

            {output && (
              <>
                <div>
                  <label className="text-sm font-medium mb-2 block">HTML Output</label>
                  <Textarea
                    value={output}
                    readOnly
                    className="font-mono min-h-[200px] bg-muted"
                  />
                  <div className="flex gap-2 mt-2">
                    <Button onClick={copyToClipboard} variant="outline" size="sm" className="gap-2">
                      <Copy className="h-4 w-4" />
                      Copy HTML
                    </Button>
                    <Button onClick={downloadHTML} variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                {showPreview && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Live Preview</label>
                    <div
                      className="border rounded-lg p-4 bg-card min-h-[200px]"
                      dangerouslySetInnerHTML={{ __html: output }}
                    />
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* AdSense - After Text to HTML Tool */}
      <div className="max-w-6xl mx-auto mb-16">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.textToHtmlInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      <HowToUse steps={howToSteps} toolName="Text to HTML Converter" />

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Auto Link Detection",
              description: "Automatically converts URLs and email addresses into clickable links",
            },
            {
              title: "Paragraph Formatting",
              description: "Intelligently converts line breaks into proper HTML paragraphs",
            },
            {
              title: "Live Preview",
              description: "See how your HTML will render in real-time before exporting",
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
            <CardTitle className="text-2xl">Text to HTML Conversion Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">Why Convert Text to HTML?</h3>
            <p className="text-muted-foreground">
              Converting plain text to HTML is essential for web publishing, email campaigns, and content management systems. Proper HTML markup ensures your content is accessible, SEO-friendly, and displays consistently across different browsers and devices.
            </p>

            <h3 className="text-xl font-semibold mt-6">How It Works</h3>
            <p className="text-muted-foreground">
              Our converter automatically detects common text patterns and converts them to semantic HTML elements. URLs become clickable links, email addresses get mailto links, and paragraphs are properly separated with <code>&lt;p&gt;</code> tags. Line breaks within paragraphs use <code>&lt;br&gt;</code> tags for proper formatting.
            </p>

            <h3 className="text-xl font-semibold mt-6">Best Practices for HTML Content</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use semantic HTML5 elements for better accessibility and SEO</li>
              <li>Keep paragraphs concise and focused on a single idea</li>
              <li>Always add <code>target="_blank"</code> and <code>rel="noopener noreferrer"</code> for external links</li>
              <li>Include alt text for images (not automated by this tool)</li>
              <li>Test your HTML in multiple browsers to ensure compatibility</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Common Use Cases</h3>
            <p className="text-muted-foreground">
              This tool is perfect for bloggers converting drafts to HTML, marketers creating email templates, developers generating documentation, and content creators preparing text for CMSs like WordPress. It's also useful for students learning HTML basics by seeing how plain text translates to markup.
            </p>

            <h3 className="text-xl font-semibold mt-6">Tips for Better Results</h3>
            <p className="text-muted-foreground">
              Organize your text with clear paragraph breaks before converting. Use double line breaks to separate paragraphs and single breaks for lines within the same paragraph. Include full URLs (with http:// or https://) for automatic link detection. The preview feature lets you verify the output before downloading or copying.
            </p>
          </CardContent>
        </Card>
      </div>

      <FAQ faqs={faqs} />

      <RelatedTools tools={relatedTools} />
    </div>
  );
}
