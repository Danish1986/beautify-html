import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";

export default function ApiTester() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState("{}");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState<number>(0);

  const handleSendRequest = async () => {
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }

    setLoading(true);
    const startTime = performance.now();

    try {
      let parsedHeaders = {};
      try {
        parsedHeaders = JSON.parse(headers);
      } catch (e) {
        toast.error("Invalid JSON in headers");
        setLoading(false);
        return;
      }

      const options: RequestInit = {
        method,
        headers: parsedHeaders,
      };

      if (method !== "GET" && body) {
        options.body = body;
      }

      const res = await fetch(url, options);
      const endTime = performance.now();
      setResponseTime(endTime - startTime);

      const contentType = res.headers.get("content-type");
      let data;

      if (contentType?.includes("application/json")) {
        data = await res.json();
      } else {
        data = await res.text();
      }

      setResponse({
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers.entries()),
        data,
      });

      toast.success("Request completed");
    } catch (error: any) {
      toast.error(error.message || "Request failed");
      setResponse({
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "API Tester",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "featureList": "Test REST APIs, Custom headers, Request body, Response preview, Response time measurement"
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.apiTester.title}
        description={TOOL_SEO.apiTester.description}
        keywords={TOOL_SEO.apiTester.keywords}
        path={TOOL_SEO.apiTester.path}
        schema={schema}
      />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <Code className="h-8 w-8 text-cyan-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">API Tester</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Test and debug REST APIs with custom headers and request bodies
        </p>
      </div>

      {/* API Tester Tool */}
      <div className="max-w-6xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Send HTTP Request</CardTitle>
            <CardDescription>Configure and send API requests to test endpoints</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                  <SelectItem value="PATCH">PATCH</SelectItem>
                  <SelectItem value="DELETE">DELETE</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Enter API URL (e.g., https://api.example.com/data)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
            </div>

            <Tabs defaultValue="headers" className="w-full">
              <TabsList>
                <TabsTrigger value="headers">Headers</TabsTrigger>
                <TabsTrigger value="body">Body</TabsTrigger>
              </TabsList>
              <TabsContent value="headers" className="space-y-2">
                <Textarea
                  placeholder='{"Content-Type": "application/json", "Authorization": "Bearer token"}'
                  value={headers}
                  onChange={(e) => setHeaders(e.target.value)}
                  rows={6}
                  className="font-mono text-sm"
                />
              </TabsContent>
              <TabsContent value="body" className="space-y-2">
                <Textarea
                  placeholder='{"key": "value"}'
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={6}
                  className="font-mono text-sm"
                  disabled={method === "GET"}
                />
              </TabsContent>
            </Tabs>

            <Button onClick={handleSendRequest} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </>
              )}
            </Button>

            {response && (
              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Response</CardTitle>
                    {responseTime > 0 && (
                      <span className="text-sm text-muted-foreground">
                        {responseTime.toFixed(0)}ms
                      </span>
                    )}
                  </div>
                  {response.status && (
                    <CardDescription>
                      Status: {response.status} {response.statusText}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <pre className="text-xs overflow-auto p-4 bg-background rounded-lg max-h-96">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Multiple Methods",
              description: "Support for GET, POST, PUT, PATCH, and DELETE requests",
            },
            {
              title: "Custom Headers",
              description: "Add authentication tokens and custom headers in JSON format",
            },
            {
              title: "Request Body",
              description: "Send JSON payloads with POST, PUT, and PATCH requests",
            },
            {
              title: "Response Preview",
              description: "View formatted response data with status codes and headers",
            },
            {
              title: "Response Time",
              description: "Measure API response time in milliseconds",
            },
            {
              title: "Error Handling",
              description: "Clear error messages for debugging connection issues",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Guide Section */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">API Testing Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">What is API Testing?</h3>
            <p className="text-muted-foreground">
              API testing allows developers to verify that their APIs work correctly by sending HTTP requests and validating responses. It's essential for ensuring your backend services respond properly to different types of requests.
            </p>

            <h3 className="text-xl font-semibold mt-6">How to Use This Tool</h3>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>Select the HTTP method (GET, POST, PUT, etc.)</li>
              <li>Enter the API endpoint URL</li>
              <li>Add custom headers like authentication tokens</li>
              <li>Include a request body for POST/PUT/PATCH requests</li>
              <li>Click "Send Request" to test the API</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6">Common Use Cases</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Testing REST APIs:</strong> Verify endpoints return expected data</li>
              <li><strong>Authentication:</strong> Test API keys and bearer tokens</li>
              <li><strong>Debugging:</strong> Identify issues with request/response formats</li>
              <li><strong>Performance:</strong> Measure API response times</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Always test with valid authentication credentials</li>
              <li>Use proper Content-Type headers for JSON requests</li>
              <li>Check status codes: 200 (success), 400 (bad request), 401 (unauthorized), 500 (server error)</li>
              <li>Validate response data matches your expected schema</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
