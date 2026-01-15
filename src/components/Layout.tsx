import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X, CheckCircle } from "lucide-react";
import { useState } from "react";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";

const navigation = [
  { name: "JSON to PDF", path: "/json-to-pdf" },
  { name: "JSON Formatter", path: "/json-formatter" },
  { name: "Text to HTML", path: "/text-to-html" },
  { name: "Image Tools", path: "/image-tools" },
  { name: "PDF Tools", path: "/pdf-tools" },
  { name: "Base64 Tools", path: "/base64-tools" },
  { name: "API Tester", path: "/api-tester" },
];

const popularTools = [
  { name: "JSON to PDF Converter", path: "/json-to-pdf" },
  { name: "JSON Formatter & Validator", path: "/json-formatter" },
  { name: "PDF to Excel Converter", path: "/pdf-tools" },
  { name: "Image Compressor", path: "/image-tools" },
  { name: "Base64 Encoder/Decoder", path: "/base64-tools" },
  { name: "API Tester", path: "/api-tester" },
];

const trustSignals = [
  "100% Browser-Based",
  "Zero Server Uploads",
  "Completely Free",
  "No Registration Required",
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent hidden sm:inline">JSON PDF Converter</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent sm:hidden">JSON2PDF</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className="transition-smooth"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start transition-smooth"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t bg-card mt-20">
        {/* AdSense Footer Banner - DO NOT REMOVE */}
        <div className="container mx-auto px-4 pt-8">
          <AdSense 
            adSlot={ADSENSE_CONFIG.adSlots.footerBanner}
            adFormat="auto"
            style={{ display: 'block', minHeight: '90px' }}
          />
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg mb-3">
                <Code2 className="h-5 w-5 text-primary" />
                <span>JSON PDF Converter</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Free, privacy-first file conversion and developer tools. All our tools run entirely in your browser - your files never leave your device. No registration, no hidden fees, no premium tiers. Just professional-grade tools that work.
              </p>
              {/* Trust Signals */}
              <div className="space-y-1">
                {trustSignals.map((signal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-smooth">All Tools</Link></li>
                <li><Link to="/json-to-pdf" className="hover:text-primary transition-smooth">JSON to PDF Converter</Link></li>
                <li><Link to="/json-formatter" className="hover:text-primary transition-smooth">JSON Formatter</Link></li>
                <li><Link to="/image-tools" className="hover:text-primary transition-smooth">Image Compressor</Link></li>
                <li><Link to="/about-us" className="hover:text-primary transition-smooth">About Us</Link></li>
              </ul>
            </div>

            {/* Popular Tools */}
            <div>
              <h3 className="font-semibold mb-3">Popular Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {popularTools.map((tool, idx) => (
                  <li key={idx}>
                    <Link to={tool.path} className="hover:text-primary transition-smooth">
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="font-semibold mb-3">Legal & Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-primary transition-smooth">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-primary transition-smooth">Terms of Service</Link></li>
                <li><a href="mailto:support@jsonpdfconverter.com" className="hover:text-primary transition-smooth">Contact Support</a></li>
              </ul>
              
              {/* Why Choose Us */}
              <div className="mt-6">
                <h4 className="font-medium text-sm mb-2">Why Choose Us?</h4>
                <p className="text-xs text-muted-foreground">
                  Unlike cloud-based converters that upload your files to remote servers, our tools process everything locally in your browser. Your data stays 100% private.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} JSON PDF Converter. All rights reserved. Built with expertise in India.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Trusted by thousands of developers worldwide for fast, secure JSON to PDF conversion and developer tools.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span>🔒 100% Secure</span>
                <span>⚡ Lightning Fast</span>
                <span>🆓 Forever Free</span>
                <span>🌍 Works Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
