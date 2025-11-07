import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Shield, Globe, Heart, Zap } from "lucide-react";

const AboutUs = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DevTools - Built In India With Love",
    "description": "DevTools was founded in India with a vision to create the world's most reliable, secure, and intuitive set of online utilities for developers worldwide.",
    "url": "https://jsonpdfconverter.com/about-us"
  };

  return (
    <>
      <SEO
        title="About Us - Built In India With Love | JSON PDF Converter"
        description="JSON PDF Converter was founded in India with a vision to create the world's most reliable JSON to PDF converter and developer tools. Free, secure, built with expertise."
        keywords="about json pdf converter, built in india, developer tools, indian tech company, json to pdf, online utilities india"
        path="/about-us"
        schema={schema}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Built In India With Love 🇮🇳</h1>
          
          {/* Developer Profile - E-E-A-T Enhancement */}
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-muted rounded-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center text-4xl font-bold text-primary">
                AS
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold mb-2">Amit Sharma</h2>
                <p className="text-muted-foreground mb-3">Senior Software Engineer & Founder</p>
                <p className="text-sm text-muted-foreground">
                  With 8+ years of experience in full-stack development and data engineering, Amit specializes in 
                  building high-performance web tools and APIs. Previously worked at tech companies building 
                  developer tools and data processing systems. Passionate about creating free, privacy-first 
                  tools that developers and businesses can trust.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-primary/10 rounded">JavaScript/TypeScript Expert</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 rounded">React Specialist</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 rounded">API Architecture</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 rounded">Data Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission: Free JSON to PDF Conversion for All</h2>
          <p className="text-lg leading-relaxed text-foreground mb-4">
            JSON PDF Converter (jsonpdfconverter.com) was founded with a simple vision: to create the world's best free 
            JSON to PDF converter and professional-grade developer tools that are completely free, privacy-focused, and 
            accessible to everyone. We aim to eliminate the frustration of slow, ad-heavy, and untrustworthy tools by 
            offering professional-grade solutions built right here in India.
          </p>
          <p className="text-muted-foreground">
            Our flagship JSON to PDF converter has helped thousands of developers, businesses, and students transform JSON data 
            into professional PDF documents for reports, invoices, documentation, and archiving. Every conversion happens 
            securely in your browser with zero data collection.
          </p>
        </Card>

        {/* Expertise Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Expertise and Reliability You Can Trust</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our tools are engineered by a dedicated team of Indian software architects and engineers with 
                over a decade of experience in high-performance data processing, file compression, and API development. 
                This establishes our expertise and authority in building reliable developer tools.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Technical Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in complex server-side operations to ensure blazing fast speed and unwavering 
                accuracy when handling sensitive data formats like JSON, PDF, and high-resolution images. 
                Every tool is optimized for performance and precision.
              </p>
            </Card>
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Commitment to Security and User Privacy</h2>
          </div>
          
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Security Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Security is our highest priority. We strictly adhere to a <strong>zero-storage policy</strong> for 
                  all user uploads. All files are processed in volatile memory and are permanently and automatically 
                  deleted from our servers within one hour of the file being processed or downloaded.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Handling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not require user registration. We use anonymized data strictly for performance monitoring 
                  and feature improvements. Your privacy is paramount, and we never share your data with third parties.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Global Advantage Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">The Global Advantage of Local Innovation</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Standards</h3>
              <p className="text-muted-foreground text-sm">
                Delivering world-class speed and quality from our base in India, serving millions of users globally.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Free</h3>
              <p className="text-muted-foreground text-sm">
                Professional-grade utilities accessible to everyone, everywhere, at no cost.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">User-Focused Monetization</h3>
              <p className="text-muted-foreground text-sm">
                We use minimal, unobtrusive AdSense units to keep the service free for millions of users worldwide.
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <Card className="p-8 text-center bg-card">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-4">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <a 
            href="mailto:support@jsonpdfconverter.com" 
            className="text-primary hover:underline font-medium"
          >
            support@jsonpdfconverter.com
          </a>
        </Card>
      </div>
    </>
  );
};

export default AboutUs;
