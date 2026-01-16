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
  Globe,
  Users,
  Briefcase,
  GraduationCap,
  LineChart,
  Building2,
  ArrowRight,
  Monitor,
  Lock,
  UserX,
  DollarSign
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO, SEO_CONFIG } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { HeroSection } from "@/components/HeroSection";
import { allSEOPages, navigationGroups } from "@/data";

const tools = [
  {
    title: "JSON to PDF Converter",
    description: "Transform JSON data into beautifully formatted PDF documents in seconds.",
    longDescription: "Perfect for generating invoices, reports, data exports, and documentation from JSON files. Smart table formatting for arrays, automatic hierarchy visualization for nested JSON, customizable styling, and handles large files with no size limits.",
    features: [
      "Smart table formatting for arrays of objects",
      "Automatic hierarchy visualization for nested JSON",
      "Customizable styling (fonts, colors, margins)",
      "Handles large JSON files (no size limits)",
      "Creates print-ready, professional PDFs"
    ],
    perfectFor: "Converting API responses into shareable reports, generating invoices from e-commerce order JSON, creating data visualizations from database exports, and producing documentation from configuration files.",
    useCases: "E-commerce order receipts, financial reports for stakeholders, API documentation, database query results, configuration backups, analytics dashboards.",
    icon: FileJson,
    path: "/json-to-pdf",
    color: "text-blue-500",
    featured: true
  },
  {
    title: "JSON Formatter & Validator",
    description: "Format, validate, and beautify your JSON data with real-time syntax error detection.",
    longDescription: "Essential for developers working with APIs, configuration files, and data structures. Real-time validation as you type, syntax highlighting with color coding, and pinpoints exact error locations.",
    features: [
      "Real-time validation as you type",
      "Syntax highlighting with color coding",
      "Pinpoints exact error locations (line & character)",
      "Beautify/minify with one click",
      "Detects common errors (trailing commas, unquoted keys)"
    ],
    perfectFor: "Debugging API responses, validating configuration files (package.json, config.json), learning proper JSON syntax, cleaning up malformed data, and preparing JSON for production.",
    useCases: "Missing commas between objects, trailing commas, single quotes instead of double quotes, unquoted property names, incorrect escaping.",
    icon: FileJson,
    path: "/json-formatter",
    color: "text-green-500"
  },
  {
    title: "Text to HTML Converter",
    description: "Convert plain text into clean, semantic HTML code instantly.",
    longDescription: "Perfect for bloggers, content creators, and developers who need to transform text documents into web-ready HTML. Preserves line breaks, automatic HTML entity escaping, and generates semantic HTML5 markup.",
    features: [
      "Preserves line breaks and paragraph structure",
      "Automatic HTML entity escaping (&, <, >, quotes)",
      "Generates semantic HTML5 markup",
      "Handles special characters correctly",
      "No file size restrictions"
    ],
    perfectFor: "Converting blog drafts to HTML for WordPress/Medium, transforming email content into web pages, digitizing text documents for websites, creating HTML from plain text notes.",
    useCases: "Blog post conversion, email newsletter HTML generation, documentation formatting, content migration from text editors to CMS platforms.",
    icon: FileText,
    path: "/text-to-html",
    color: "text-green-500"
  },
  {
    title: "Image Compressor & Converter",
    description: "Compress images by 50-80% without visible quality loss.",
    longDescription: "Optimize JPG, PNG, GIF, and WebP files for faster website loading and reduced storage needs. Intelligent compression algorithms with adjustable quality levels and batch processing.",
    features: [
      "Intelligent compression algorithms",
      "Adjustable quality levels (high/medium/low)",
      "Batch processing (compress multiple images)",
      "Format conversion (JPG ↔ PNG ↔ WebP)",
      "Real-time preview of compressed result"
    ],
    perfectFor: "Web developers optimizing site speed, photographers reducing file sizes for online galleries, bloggers preparing images for faster page loads, marketers compressing assets for email campaigns.",
    useCases: "Compressing a 10-image blog post from 20MB to 3MB can reduce page load time from 8 seconds to 2 seconds - dramatically improving SEO rankings.",
    icon: Image,
    path: "/image-tools",
    color: "text-purple-500"
  },
  {
    title: "PDF Tools Suite",
    description: "Convert PDFs to Excel and Word documents with preserved formatting.",
    longDescription: "Extract data from bank statements, financial reports, and documents into editable formats. Accurate table detection, maintains formatting, fonts, and layout.",
    features: [
      "PDF to Excel with accurate column/row detection",
      "PDF to Word maintains formatting and layout",
      "Multi-page document processing",
      "Preserves hyperlinks and metadata",
      "Password-protected PDF support"
    ],
    perfectFor: "Converting bank statements to Excel for expense tracking, editing PDF contracts in Word, extracting financial data from reports, digitizing paper receipts.",
    useCases: "Finance: Convert Chase/Bank of America statements to Excel. Legal: Edit PDF contracts. Business: Extract sales data from PDF reports.",
    icon: FileType,
    path: "/pdf-tools",
    color: "text-red-500"
  },
  {
    title: "Base64 Encoder & Decoder",
    description: "Encode and decode Base64 data for secure text transmission and data URIs.",
    longDescription: "Essential for web developers working with APIs and data encoding. Encode text/files to Base64, decode strings, supports UTF-8, and creates data URIs for embedding images.",
    features: [
      "Encode text/files to Base64",
      "Decode Base64 strings to original format",
      "Supports UTF-8 and special characters",
      "Create data URIs for embedding images",
      "Process large files efficiently"
    ],
    perfectFor: "Creating data URIs for CSS/HTML, encoding API authentication tokens, transmitting binary data as text, debugging Base64-encoded content.",
    useCases: "Data URIs for embedding images, API Authentication headers, email attachments, storing binary data in JSON.",
    icon: Binary,
    path: "/base64-tools",
    color: "text-yellow-500"
  },
  {
    title: "API Tester",
    description: "Test and debug REST APIs with custom headers, request bodies, and authentication.",
    longDescription: "Perfect for developers building or integrating with APIs. Support for all HTTP methods, custom headers, JSON/XML request body formatting, and response syntax highlighting.",
    features: [
      "Support for GET, POST, PUT, DELETE, PATCH methods",
      "Custom HTTP headers configuration",
      "JSON/XML request body formatting",
      "Response syntax highlighting",
      "Authentication support (Bearer tokens, API keys)"
    ],
    perfectFor: "Testing API endpoints during development, debugging API integration issues, learning how APIs work, validating API responses.",
    useCases: "Testing: Verify API endpoints. Debugging: Identify why API calls fail. Learning: Experiment with public APIs. Development: Test your own APIs.",
    icon: Code,
    path: "/api-tester",
    color: "text-cyan-500"
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Processing",
    shortDescription: "All tools run locally in your browser for instant results",
    description: "Experience instant conversions without the waiting. Unlike traditional online converters that require uploading files to remote servers (5-30 seconds per file), our browser-based tools process everything locally on your device in milliseconds.",
    comparison: {
      traditional: "Upload 10MB file → Wait 15 seconds → Download result → Total: ~20 seconds",
      ours: "Paste/select file → Convert instantly → Copy/download → Total: ~2 seconds"
    },
    benefit: "All processing happens using optimized JavaScript libraries (PDF.js, PapaParse, etc.) that run directly in your browser's engine - no network latency, no server processing delays."
  },
  {
    icon: Shield,
    title: "100% Private & Secure",
    shortDescription: "Your data never leaves your device - complete privacy guaranteed",
    description: "Your data never leaves your device. Period. While most \"free\" online converters upload your files to their servers, our tools process everything locally in your browser using JavaScript.",
    benefits: [
      "Financial documents: Bank statements, tax returns, invoices stay completely private",
      "Business confidential: Contracts, reports, internal data never exposed",
      "Medical records: HIPAA-compliant since data never transmits to servers",
      "Personal information: Resume, letters, photos remain 100% secure"
    ],
    transparency: "We don't even have servers to store your data. Our tools are pure client-side JavaScript. You can verify this by checking your browser's network tab."
  },
  {
    icon: UserX,
    title: "No Registration Required",
    shortDescription: "Start using tools immediately, no account required",
    description: "Start converting files in 5 seconds. No account creation, no email verification, no credit card \"for verification\", no personal information collection.",
    notNeeded: ["Email address", "Password creation", "Phone number", "Credit card", "Social media login"],
    needed: ["A web browser", "Your file or data", "5 seconds"],
    reason: "We believe file conversion tools should be instantly accessible utilities, not data collection mechanisms disguised as services."
  },
  {
    icon: DollarSign,
    title: "Always 100% Free",
    shortDescription: "All features are completely free with no hidden costs",
    description: "Every feature, every tool, every time - completely free. No \"free trial\" that expires. No \"premium features\" locked behind paywalls.",
    included: [
      "Unlimited conversions",
      "No file size limits",
      "Batch processing",
      "All advanced features",
      "No daily limits",
      "No watermarks on outputs"
    ],
    tricksNotUsed: [
      "\"First 3 conversions free, then $9.99/month\"",
      "\"Free tier: 5MB limit, Premium: unlimited\"",
      "\"Free: watermarked PDFs, Premium: clean output\""
    ]
  }
];

const userTypes = [
  {
    icon: Code,
    title: "Developers & Programmers",
    uses: [
      "Validate JSON from API responses",
      "Convert data exports to PDFs for documentation",
      "Test API endpoints during development",
      "Encode/decode Base64 authentication tokens",
      "Debug malformed JSON in configuration files"
    ]
  },
  {
    icon: LineChart,
    title: "Data Analysts & Researchers",
    uses: [
      "Convert JSON datasets to PDF reports",
      "Extract tables from PDF documents to Excel",
      "Compress large image datasets",
      "Generate formatted documentation from raw data",
      "Process survey results and analytics exports"
    ]
  },
  {
    icon: Briefcase,
    title: "Finance Professionals",
    uses: [
      "Convert bank statement PDFs to Excel for analysis",
      "Generate invoice PDFs from JSON order data",
      "Compress receipt images for record-keeping",
      "Extract financial data from PDF reports",
      "Create formatted expense reports"
    ]
  },
  {
    icon: GraduationCap,
    title: "Students & Educators",
    uses: [
      "Convert research data to formatted PDFs",
      "Validate JSON for programming assignments",
      "Compress images for online submission portals",
      "Transform text notes to HTML for websites",
      "Test APIs for learning projects"
    ]
  },
  {
    icon: Building2,
    title: "Small Business Owners",
    uses: [
      "Generate professional invoices from order data",
      "Convert business documents between formats",
      "Compress product images for e-commerce sites",
      "Create PDF reports from spreadsheet data",
      "Test payment/shipping API integrations"
    ]
  }
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Select or Paste Your Data",
    description: "File stays on your device - never uploaded to any server"
  },
  {
    step: 2,
    title: "JavaScript Processes Locally",
    description: "Using libraries like PDF.js, jsPDF, and custom algorithms"
  },
  {
    step: 3,
    title: "Result Generated Instantly",
    description: "All processing happens in your browser's memory"
  },
  {
    step: 4,
    title: "Download or Copy Output",
    description: "No server upload/download required - immediate results"
  }
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON2PDF Converter",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Web Browser",
    "description": "Free browser-based JSON to PDF converter and developer tools. Convert JSON, validate data, compress images, and test APIs - all 100% private with zero uploads.",
    "url": SEO_CONFIG.siteUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
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
      
      {/* Enhanced Hero Section with Animations */}
      <HeroSection />

      {/* AdSense - Between Hero and Tools */}
      <div className="container mx-auto px-4">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.homeHeroToTools}
          adFormat="auto"
          style={{ display: 'block', minHeight: '90px' }}
        />
      </div>

      {/* Tools Grid - Enhanced */}
      <section id="tools" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-One Developer Toolkit</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our collection of powerful, browser-based tools designed to handle your everyday file conversion, validation, and data processing needs - all without compromising your privacy.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4">
            Whether you're converting JSON data to formatted PDF reports, validating API responses, compressing images for web optimization, encoding data for secure transmission, or testing REST APIs, our toolkit provides professional-grade solutions that work entirely in your browser. No downloads, no installations, no uploads - just instant, private results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
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
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tool.longDescription}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Key Features:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tool.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 px-0 hover:text-primary">
                    Use Tool Free <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA after tools */}
        <div className="text-center mt-12">
          <Link to="/json-to-pdf">
            <Button size="lg" className="shadow-elegant">
              Start Converting Now - It's Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section - NEW */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Browser-Based Tools Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>Traditional online converters</strong> require uploading your files to their servers, processing remotely, then downloading results. This creates privacy risks, slow processing, and potential data breaches.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              <strong>Our approach is different:</strong> All processing happens locally in your browser using advanced JavaScript libraries.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Details */}
          <div className="bg-card rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              Technical Details (for developers)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Code className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong>JSON to PDF:</strong> Uses jsPDF library to generate PDFs client-side
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Code className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong>JSON Validation:</strong> Parses with JSON.parse() and custom error detection
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Code className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong>Image Compression:</strong> HTML5 Canvas API with optimized algorithms
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Code className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong>Base64 Encoding:</strong> Browser's native btoa()/atob() functions
                </div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground text-sm">
              <strong>The Result:</strong> Lightning-fast conversions (no upload/download time) + complete privacy (data never leaves your device) + no costs (no server infrastructure needed).
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/json-to-pdf">
              <Button size="lg" className="shadow-elegant">
                Try It Now - Free & Private <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Tools?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with privacy, speed, and user experience at the core - here's why thousands of developers and professionals trust our toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    
                    {feature.comparison && (
                      <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2">
                        <p><strong className="text-destructive">Traditional:</strong> {feature.comparison.traditional}</p>
                        <p><strong className="text-primary">Our tool:</strong> {feature.comparison.ours}</p>
                      </div>
                    )}
                    
                    {feature.benefits && (
                      <ul className="text-sm space-y-1 mt-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {feature.included && (
                      <div className="grid grid-cols-2 gap-1 text-sm mt-2">
                        {feature.included.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {feature.notNeeded && (
                      <div className="mt-3 text-sm">
                        <p className="font-medium mb-1">What you DON'T need:</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.notNeeded.map((item, idx) => (
                            <span key={idx} className="text-destructive/80 line-through text-xs">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/json-to-pdf">
              <Button size="lg" className="shadow-elegant">
                Experience the Difference <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense - Between Features and Who Uses */}
      <div className="container mx-auto px-4">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.homeFeaturesToBlog}
          adFormat="auto"
          style={{ display: 'block', minHeight: '90px' }}
        />
      </div>

      {/* Who Uses Our Tools - NEW */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses Our Tools?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by professionals across industries who need fast, secure, and private file conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {userTypes.map((userType, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <userType.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold">{userType.title}</h3>
                </div>
                <ul className="space-y-2">
                  {userType.uses.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Enhanced */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Guides & Tips</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how to make the most of our developer tools with expert guides and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "JSON Formatting Best Practices: Complete 2025 Guide for Developers",
              excerpt: "Learn how to properly format, validate, and optimize JSON data for better readability, debugging, and production performance. Essential tips for API development.",
              path: "/json-formatter"
            },
            {
              title: "Image Optimization for Web: Reduce File Size by 80% Without Quality Loss",
              excerpt: "Discover advanced techniques to compress images without losing quality. Improve website loading speed, SEO rankings, and user experience dramatically.",
              path: "/image-tools"
            },
            {
              title: "Text to HTML Conversion: Complete Guide for Bloggers and Web Developers",
              excerpt: "Convert plain text to semantic HTML with proper structure, formatting, and entity escaping. Step-by-step guide with best practices for CMS migration.",
              path: "/text-to-html"
            }
          ].map((post, index) => (
            <Link key={index} to={post.path}>
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="px-0 hover:text-primary">
                    Read Full Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Convert Your Files?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of developers and professionals who trust our tools for fast, secure, and private file conversions. No registration, no uploads, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/json-to-pdf">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Convert JSON to PDF Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#tools">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white/20 text-white hover:bg-white/30 border-white/40">
                Explore All Tools
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
