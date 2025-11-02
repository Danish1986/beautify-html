import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Copy, Binary, Upload } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";

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

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.base64Tools.title}
        description={TOOL_SEO.base64Tools.description}
        keywords={TOOL_SEO.base64Tools.keywords}
        path={TOOL_SEO.base64Tools.path}
        schema={schema}
      />
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
    </div>
  );
}
