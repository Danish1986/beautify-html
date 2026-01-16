import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  DollarSign,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useEffect, useState } from "react";

const quickTools = [
  { icon: FileJson, label: "JSON to PDF", path: "/json-to-pdf", color: "text-blue-500" },
  { icon: FileJson, label: "JSON Formatter", path: "/json-formatter", color: "text-green-500" },
  { icon: Image, label: "Image Compress", path: "/image-tools", color: "text-purple-500" },
  { icon: FileType, label: "PDF to Excel", path: "/pdf-tools", color: "text-red-500" },
  { icon: Binary, label: "Base64 Tools", path: "/base64-tools", color: "text-yellow-500" },
  { icon: Code, label: "API Tester", path: "/api-tester", color: "text-cyan-500" },
];

const stats = [
  { value: 2500000, label: "Files Converted", suffix: "+" },
  { value: 50000, label: "Happy Users", suffix: "+" },
  { value: 100, label: "Uptime", suffix: "%" },
  { value: 0, label: "Data Uploaded", suffix: " bytes" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };
  
  return <span>{formatNumber(count)}{suffix}</span>;
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-[10%] animate-float opacity-20">
          <FileJson className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-40 right-[15%] animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          <Image className="h-10 w-10 text-purple-500" />
        </div>
        <div className="absolute bottom-32 left-[20%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <FileType className="h-8 w-8 text-red-500" />
        </div>
        <div className="absolute bottom-40 right-[25%] animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
          <Code className="h-10 w-10 text-cyan-500" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="h-4 w-4" />
            <span>100% Free & Private - No Registration Required</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Free <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">JSON to PDF</span> Converter & Developer Tools
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 max-w-3xl mx-auto">
            Convert JSON to PDF instantly. Format JSON, compress images, encode Base64, test APIs & more - all 100% free and privacy-focused. Your files never leave your device.
          </p>
          
          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm font-medium shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-500" /> 8+ Professional Tools
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm font-medium shadow-sm">
              <Shield className="h-4 w-4 text-blue-500" /> Zero Server Uploads
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm font-medium shadow-sm">
              <DollarSign className="h-4 w-4 text-yellow-500" /> 100% Free Forever
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm font-medium shadow-sm">
              <Zap className="h-4 w-4 text-orange-500" /> No File Size Limits
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm font-medium shadow-sm">
              <Globe className="h-4 w-4 text-cyan-500" /> Works Offline
            </span>
          </div>

          {/* Quick Access Tools */}
          <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-250">
            <p className="text-sm text-muted-foreground mb-4">Quick Access:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickTools.map((tool) => (
                <Link key={tool.path} to={tool.path}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <tool.icon className={`h-4 w-4 mr-2 ${tool.color} group-hover:scale-110 transition-transform`} />
                    {tool.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/json-to-pdf">
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 group">
                Convert JSON to PDF Free 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="#tools">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 hover:bg-primary/5">
                Explore All Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}
