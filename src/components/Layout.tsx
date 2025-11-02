import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";

const navigation = [
  { name: "Home", path: "/" },
  { name: "JSON Formatter", path: "/json-formatter" },
  { name: "Text to HTML", path: "/text-to-html" },
  { name: "Image Tools", path: "/image-tools" },
  { name: "PDF Tools", path: "/pdf-tools" },
  { name: "Base64 Tools", path: "/base64-tools" },
  { name: "API Tester", path: "/api-tester" },
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
            <span className="bg-gradient-primary bg-clip-text text-transparent">DevTools</span>
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-3">
                <Code2 className="h-5 w-5 text-primary" />
                <span>DevTools</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Free online developer tools for formatting, converting, and optimizing your files.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/json-formatter" className="hover:text-primary transition-smooth">JSON Formatter</Link></li>
                <li><Link to="/text-to-html" className="hover:text-primary transition-smooth">Text to HTML</Link></li>
                <li><Link to="/image-tools" className="hover:text-primary transition-smooth">Image Tools</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <p className="text-sm text-muted-foreground">
                All tools are free and run entirely in your browser. Your data never leaves your device.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevTools. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
