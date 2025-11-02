import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileJson, 
  FileText, 
  Image, 
  FileType, 
  Binary,
  Code,
  CheckCircle,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO, SEO_CONFIG } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";

const tools = [
  {
    title: "JSON Formatter",
    description: "Format, validate, and beautify your JSON data with syntax highlighting",
    icon: FileJson,
    path: "/json-formatter",
    color: "text-blue-500"
  },
  {
    title: "Text to HTML",
    description: "Convert plain text to properly formatted HTML with automatic link detection",
    icon: FileText,
    path: "/text-to-html",
    color: "text-green-500"
  },
  {
    title: "Image Tools",
    description: "Compress and resize images while maintaining quality",
    icon: Image,
    path: "/image-tools",
    color: "text-purple-500"
  },
  {
    title: "PDF Tools",
    description: "Merge, split, and optimize PDF documents effortlessly",
    icon: FileType,
    path: "/pdf-tools",
    color: "text-red-500"
  },
  {
    title: "Base64 Tools",
    description: "Encode and decode Base64 data for images, text, and files",
    icon: Binary,
    path: "/base64-tools",
    color: "text-yellow-500"
  },
  {
    title: "API Tester",
    description: "Test and debug REST APIs with custom headers and requests",
    icon: Code,
    path: "/api-tester",
    color: "text-cyan-500"
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "All tools run locally in your browser for instant results"
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Your data never leaves your device - complete privacy guaranteed"
  },
  {
    icon: CheckCircle,
    title: "No Registration",
    description: "Start using tools immediately, no account required"
  },
  {
    icon: Globe,
    title: "Always Free",
    description: "All features are completely free with no hidden costs"
  }
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "description": SEO_CONFIG.defaultDescription,
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div>
      <SEO 
        title={TOOL_SEO.home.title}
        description={TOOL_SEO.home.description}
        keywords={TOOL_SEO.home.keywords}
        path={TOOL_SEO.home.path}
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Professional Developer Tools for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Everyone</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              Format JSON, convert text to HTML, compress images, and more - all free and privacy-focused
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <Link to="/json-formatter">
                <Button size="lg" className="w-full sm:w-auto shadow-elegant">
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense - Between Hero and Tools */}
      <div className="container mx-auto px-4">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.homeHeroToTools}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-One Toolkit</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of powerful development tools designed to boost your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link key={tool.path} to={tool.path}>
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-hero">
                      <tool.icon className={`h-6 w-6 ${tool.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {tool.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Tools?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with privacy, speed, and user experience in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense - Between Features and Blog */}
      <div className="container mx-auto px-4">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.homeFeaturesToBlog}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Guides & Tips</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how to make the most of our developer tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "JSON Formatting Best Practices",
              excerpt: "Learn how to properly format and validate JSON data for better readability and debugging.",
              path: "/json-formatter"
            },
            {
              title: "Optimizing Images for Web",
              excerpt: "Discover techniques to compress images without losing quality for faster website loading.",
              path: "/image-tools"
            },
            {
              title: "HTML Conversion Made Easy",
              excerpt: "Convert plain text to semantic HTML with our step-by-step guide and best practices.",
              path: "/text-to-html"
            }
          ].map((post, index) => (
            <Link key={index} to={post.path}>
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="px-0 hover:text-primary">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
