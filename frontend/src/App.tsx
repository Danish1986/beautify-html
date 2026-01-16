import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import JsonToPdf from "./pages/JsonToPdf";
import JsonFormatter from "./pages/JsonFormatter";
import TextToHtml from "./pages/TextToHtml";
import ImageTools from "./pages/ImageTools";
import PdfTools from "./pages/PdfTools";
import Base64Tools from "./pages/Base64Tools";
import ApiTester from "./pages/ApiTester";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import SEOPage from "./pages/SEOPage";

// Legacy SEO Landing Pages (keep for backward compatibility)
import PdfToExcel from "./pages/landing/PdfToExcel";
import JsonToExcel from "./pages/landing/JsonToExcel";
import JsonToCsv from "./pages/landing/JsonToCsv";
import JsonToXml from "./pages/landing/JsonToXml";

// Import all SEO pages data for dynamic routing
import { allSEOPages } from "./data";

const queryClient = new QueryClient();

// List of reserved routes that should NOT be handled by SEOPage
const reservedRoutes = [
  'json-to-pdf', 'json-formatter', 'text-to-html', 'image-tools',
  'pdf-tools', 'base64-tools', 'api-tester', 'about-us',
  'privacy-policy', 'terms-of-service', 'pdf-to-excel-converter',
  'json-to-excel-converter', 'json-to-csv-converter', 'json-to-xml-converter'
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Main Tool Pages - MUST be first */}
            <Route path="/" element={<Home />} />
            <Route path="/json-to-pdf" element={<JsonToPdf />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/text-to-html" element={<TextToHtml />} />
            <Route path="/image-tools" element={<ImageTools />} />
            <Route path="/pdf-tools" element={<PdfTools />} />
            <Route path="/base64-tools" element={<Base64Tools />} />
            <Route path="/api-tester" element={<ApiTester />} />
            
            {/* About & Legal Pages - MUST come before dynamic routes */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* Legacy SEO Landing Pages (keep for backward compatibility) */}
            <Route path="/pdf-to-excel-converter" element={<PdfToExcel />} />
            <Route path="/json-to-excel-converter" element={<JsonToExcel />} />
            <Route path="/json-to-csv-converter" element={<JsonToCsv />} />
            <Route path="/json-to-xml-converter" element={<JsonToXml />} />
            
            {/* Dynamic SEO Pages - 100+ pages (filter out reserved routes) */}
            {allSEOPages
              .filter(page => !reservedRoutes.includes(page.slug))
              .map((page) => (
                <Route 
                  key={page.slug} 
                  path={`/${page.slug}`} 
                  element={<SEOPage />} 
                />
              ))}
            
            {/* 404 Page - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
