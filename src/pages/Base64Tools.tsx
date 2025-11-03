import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Copy, Binary, Upload, Code, FileJson, FileText, Image as ImageIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowToUse } from "@/components/seo/HowToUse";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedTools } from "@/components/seo/RelatedTools";

export default function Base64Tools() {
  const [encodeInput, setEncodeInput] = useState("");
  const [encodeOutput, setEncodeOutput] = useState("");
  const [decodeInput, setDecodeInput] = useState("");
  const [decodeOutput, setDecodeOutput] = useState("");

  const encodeToBase64 = () => {
    try {
      const encoded = btoa(encodeInput);
      setEncodeOutput(encoded);
      toast.success("Text encoded to Base64!");
    } catch (error) {
      toast.error("Failed to encode. Please check your input.");
    }
  };

  const decodeFromBase64 = () => {
    try {
      const decoded = atob(decodeInput);
      setDecodeOutput(decoded);
      toast.success("Base64 decoded successfully!");
    } catch (error) {
      toast.error("Invalid Base64 string. Please check your input.");
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Base64 Encoder & Decoder",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "featureList": "Encode Base64, Decode Base64, Copy to clipboard"
  };

  const breadcrumbItems = [{ label: "Base64 Tools" }];

  const howToSteps = [
    { title: "Choose Encode or Decode", description: "Select the 'Encode' tab to convert text to Base64, or 'Decode' tab to convert Base64 back to readable text." },
    { title: "Paste Your Data", description: "Enter your plain text in the encode tab, or paste your Base64 string in the decode tab." },
    { title: "Convert and Copy", description: "Click the encode or decode button, then copy the result to your clipboard for use in your project." }
  ];

  const faqs = [
    { question: "What is Base64 encoding?", answer: "Base64 is an encoding scheme that converts binary data into ASCII text format using 64 characters (A-Z, a-z, 0-9, +, /). It's used to safely transmit data over text-based protocols and ensure data integrity during transport across different systems." },
    { question: "How to encode Base64 online?", answer: "Paste your text into our encoder and click 'Encode to Base64'. The tool instantly converts your text using the btoa() method, which is the standard browser API for Base64 encoding. The result is a Base64 string you can copy and use anywhere." },
    { question: "How to decode Base64 string?", answer: "Switch to the 'Decode' tab, paste your Base64 string, and click 'Decode from Base64'. The tool uses the atob() method to convert the Base64 string back to readable text. Invalid Base64 strings will show an error message." },
    { question: "Is Base64 encryption secure?", answer: "No, Base64 is encoding, not encryption. It provides no security or privacy protection. Anyone can easily decode Base64 data. Never use Base64 alone to protect passwords, API keys, or sensitive information. Use proper encryption like AES-256 or RSA instead." },
    { question: "What is Base64 used for?", answer: "Base64 is used for embedding images in HTML/CSS (data URIs), sending binary data in JSON/XML, encoding email attachments (MIME), Basic Authentication headers in HTTP, storing binary data in databases, and safely passing data in URLs." },
    { question: "How to convert image to Base64?", answer: "While this tool handles text, you can convert images to Base64 by reading the image file as binary data and encoding it. The result can be used in img src=\"data:image/png;base64,...\" tags to embed images directly in HTML without external files." },
    { question: "Base64 encoding vs encryption?", answer: "Encoding (Base64) transforms data format for compatibility and transmission. Anyone can decode it. Encryption (AES, RSA) scrambles data with a secret key for security. Only someone with the correct key can decrypt it. Use encryption for security, Base64 for transport." },
    { question: "How to decode Base64 to text?", answer: "Our decoder automatically converts Base64 strings back to plain text. The process reverses the encoding by converting each group of four Base64 characters back to three bytes of original data. Invalid characters or incorrect padding will trigger an error." },
    { question: "Why use Base64 encoding?", answer: "Base64 ensures data integrity when transmitting over text-based systems that might corrupt binary data. It's essential for email attachments, embedding images in HTML, sending binary data in JSON APIs, and including credentials in HTTP headers without special character issues." },
    { question: "Base64 encoding examples?", answer: "Text 'Hello' encodes to 'SGVsbG8='. The '=' is padding. 'Hello World' becomes 'SGVsbG8gV29ybGQ='. Each group of 3 input bytes becomes 4 Base64 characters. The encoded output is about 33% larger than the original." },
    { question: "Is Base64 safe for passwords?", answer: "No! Base64 is trivially reversible. Never use it for passwords. Anyone can decode Base64 instantly. Use proper password hashing algorithms like bcrypt, Argon2, or PBKDF2. These are one-way functions designed specifically for password security with salt and multiple iterations." },
    { question: "How to use Base64 in APIs?", answer: "Base64 is common in API authentication (Basic Auth uses Base64-encoded credentials), sending binary files in JSON responses, embedding images as data URIs, and encoding special characters in URL parameters. Always use HTTPS when transmitting Base64-encoded sensitive data." }
  ];

  const relatedTools = [
    { title: "API Tester", description: "Test APIs with Base64 authentication", path: "/api-tester", icon: Code },
    { title: "JSON Formatter", description: "Format JSON with Base64 data", path: "/json-formatter", icon: FileJson },
    { title: "Image Tools", description: "Convert images to Base64", path: "/image-tools", icon: ImageIcon },
    { title: "Text to HTML", description: "Convert text formats", path: "/text-to-html", icon: FileText }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.base64Tools.title}
        description={TOOL_SEO.base64Tools.description}
        keywords={TOOL_SEO.base64Tools.keywords}
        path={TOOL_SEO.base64Tools.path}
        schema={schema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <Binary className="h-8 w-8 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Base64 Encoder & Decoder</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encode and decode Base64 data for secure text transmission and data URIs
        </p>
      </div>

      {/* Tool Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Base64 Tools</CardTitle>
            <CardDescription>Convert between plain text and Base64 encoding</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="encode" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="encode">Encode</TabsTrigger>
                <TabsTrigger value="decode">Decode</TabsTrigger>
              </TabsList>

              <TabsContent value="encode" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Text to Encode</label>
                  <Textarea
                    value={encodeInput}
                    onChange={(e) => setEncodeInput(e.target.value)}
                    placeholder="Enter text to encode..."
                    className="min-h-[200px]"
                  />
                </div>

                <Button onClick={encodeToBase64} className="gap-2">
                  <Binary className="h-4 w-4" />
                  Encode to Base64
                </Button>

                {encodeOutput && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Base64 Output</label>
                    <Textarea
                      value={encodeOutput}
                      readOnly
                      className="font-mono min-h-[200px] bg-muted"
                    />
                    <Button
                      onClick={() => copyToClipboard(encodeOutput, "Base64")}
                      variant="outline"
                      size="sm"
                      className="mt-2 gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="decode" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Base64 to Decode</label>
                  <Textarea
                    value={decodeInput}
                    onChange={(e) => setDecodeInput(e.target.value)}
                    placeholder="Enter Base64 string to decode..."
                    className="font-mono min-h-[200px]"
                  />
                </div>

                <Button onClick={decodeFromBase64} className="gap-2">
                  <Binary className="h-4 w-4" />
                  Decode from Base64
                </Button>

                {decodeOutput && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Decoded Text</label>
                    <Textarea
                      value={decodeOutput}
                      readOnly
                      className="min-h-[200px] bg-muted"
                    />
                    <Button
                      onClick={() => copyToClipboard(decodeOutput, "Decoded text")}
                      variant="outline"
                      size="sm"
                      className="mt-2 gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* AdSense - After Base64 Tool */}
      <div className="max-w-6xl mx-auto mb-16">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.base64ToolsInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      <HowToUse steps={howToSteps} toolName="Base64 Encoder & Decoder" />

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Two-Way Conversion",
              description: "Easily switch between encoding and decoding with tabbed interface",
            },
            {
              title: "Instant Processing",
              description: "Convert text and Base64 instantly with a single click",
            },
            {
              title: "Error Handling",
              description: "Clear error messages for invalid Base64 strings",
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
            <CardTitle className="text-2xl">Understanding Base64 Encoding</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">What is Base64?</h3>
            <p className="text-muted-foreground">
              Base64 is an encoding scheme that converts binary data into ASCII text format using 64 different characters (A-Z, a-z, 0-9, +, /). This encoding is essential for transmitting data over media designed to handle text, ensuring data integrity during transport.
            </p>

            <h3 className="text-xl font-semibold mt-6">Why Use Base64 Encoding?</h3>
            <p className="text-muted-foreground">
              Base64 encoding is commonly used in email attachments (MIME), embedding images in HTML/CSS using data URIs, storing complex data in JSON or XML, and transmitting binary data over text-based protocols. It ensures that binary data remains intact without modification during transport through systems that might otherwise corrupt it.
            </p>

            <h3 className="text-xl font-semibold mt-6">Common Use Cases</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Data URIs:</strong> Embed images directly in HTML or CSS files</li>
              <li><strong>API Authentication:</strong> Encode credentials for Basic Authentication headers</li>
              <li><strong>Email Attachments:</strong> MIME encoding for file attachments</li>
              <li><strong>JSON/XML Data:</strong> Store binary data in text-based formats</li>
              <li><strong>URL Parameters:</strong> Safely pass binary data in URLs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">How It Works</h3>
            <p className="text-muted-foreground">
              Base64 encoding takes three bytes (24 bits) of input data and represents them as four ASCII characters (6 bits each). This means the encoded output is approximately 33% larger than the original data. The "=" character is used as padding when the input length isn't divisible by three.
            </p>

            <h3 className="text-xl font-semibold mt-6">Security Note</h3>
            <p className="text-muted-foreground">
              Base64 is an encoding method, not encryption. It provides no security or privacy protection. Anyone can decode Base64-encoded data. Never use Base64 encoding alone to protect sensitive information - use proper encryption methods like AES or RSA instead.
            </p>

            <h3 className="text-xl font-semibold mt-6">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use Base64 for data transmission, not for security</li>
              <li>Consider file size increase (33% larger) when encoding large files</li>
              <li>Validate decoded output to ensure data integrity</li>
              <li>Use URL-safe Base64 variants when encoding data for URLs</li>
              <li>Document when you're using Base64 encoding for future maintainers</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <FAQ faqs={faqs} />

      <RelatedTools tools={relatedTools} />
    </div>
  );
}
