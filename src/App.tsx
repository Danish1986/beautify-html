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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/json-to-pdf" element={<JsonToPdf />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/text-to-html" element={<TextToHtml />} />
            <Route path="/image-tools" element={<ImageTools />} />
            <Route path="/pdf-tools" element={<PdfTools />} />
            <Route path="/base64-tools" element={<Base64Tools />} />
            <Route path="/api-tester" element={<ApiTester />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
