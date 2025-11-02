import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import JsonFormatter from "./pages/JsonFormatter";
import TextToHtml from "./pages/TextToHtml";
import ImageTools from "./pages/ImageTools";
import PdfTools from "./pages/PdfTools";
import Base64Tools from "./pages/Base64Tools";
import ApiTester from "./pages/ApiTester";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/json-formatter" element={<JsonFormatter />} />
              <Route path="/text-to-html" element={<TextToHtml />} />
              <Route path="/image-tools" element={<ImageTools />} />
              <Route path="/pdf-tools" element={<PdfTools />} />
              <Route path="/base64-tools" element={<Base64Tools />} />
              <Route path="/api-tester" element={<ApiTester />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
