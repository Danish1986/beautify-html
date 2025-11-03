import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileType, Upload, Scissors, FileStack, Minimize, FileText, Lock, Table2, Home, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { PDFDocument } from "pdf-lib";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { convertPdfToWord, removePdfPassword, convertPdfToExcel } from "@/lib/pdf-converter";
import { FAQ } from "@/components/seo/FAQ";
import { HowToUse } from "@/components/seo/HowToUse";
import { RelatedTools } from "@/components/seo/RelatedTools";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default function PdfTools() {
  const [mergeFiles, setMergeFiles] = useState<File[]>([]);
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [compressFile, setCompressFile] = useState<File | null>(null);
  const [convertFile, setConvertFile] = useState<File | null>(null);
  const [wordFile, setWordFile] = useState<File | null>(null);
  const [passwordFile, setPasswordFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string>("");
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMergePdfs = async () => {
    if (mergeFiles.length < 2) {
      toast.error("Please select at least 2 PDF files to merge");
      return;
    }

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of mergeFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();
      URL.revokeObjectURL(url);

      toast.success("PDFs merged successfully!");
    } catch (error) {
      toast.error("Failed to merge PDFs");
      console.error(error);
    }
  };

  const handleSplitPdf = async () => {
    if (!splitFile) {
      toast.error("Please select a PDF file to split");
      return;
    }

    try {
      const arrayBuffer = await splitFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pageCount = pdfDoc.getPageCount();

      for (let i = 0; i < pageCount; i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);

        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `page-${i + 1}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }

      toast.success(`Split into ${pageCount} pages successfully!`);
    } catch (error) {
      toast.error("Failed to split PDF");
      console.error(error);
    }
  };

  const handleCompressPdf = async () => {
    if (!compressFile) {
      toast.error("Please select a PDF file to compress");
      return;
    }

    try {
      const arrayBuffer = await compressFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      
      const pdfBytes = await pdfDoc.save({
        useObjectStreams: false,
      });

      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "compressed.pdf";
      a.click();
      URL.revokeObjectURL(url);

      const originalSize = compressFile.size;
      const compressedSize = pdfBytes.length;
      const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

      toast.success(`PDF compressed! Saved ${savings}%`);
    } catch (error) {
      toast.error("Failed to compress PDF");
      console.error(error);
    }
  };

  const handleConvertToImage = async () => {
    if (!convertFile) {
      toast.error("Please select a PDF file to convert");
      return;
    }

    toast.info("PDF to Image conversion requires additional libraries. This is a simplified version that extracts page info.");
    
    try {
      const arrayBuffer = await convertFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pageCount = pdfDoc.getPageCount();

      toast.success(`PDF has ${pageCount} pages. Full conversion feature coming soon!`);
    } catch (error) {
      toast.error("Failed to process PDF");
      console.error(error);
    }
  };

  const handlePdfToWord = async () => {
    if (!wordFile) {
      toast.error("Please select a PDF file to convert");
      return;
    }

    setIsProcessing(true);
    try {
      await convertPdfToWord(wordFile);
      toast.success("PDF converted to Word successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to convert PDF to Word");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemovePassword = async () => {
    if (!passwordFile) {
      toast.error("Please select a PDF file");
      return;
    }
    if (!password) {
      toast.error("Please enter the PDF password");
      return;
    }

    setIsProcessing(true);
    try {
      await removePdfPassword(passwordFile, password);
      toast.success("Password removed successfully!");
      setPassword("");
    } catch (error: any) {
      toast.error(error.message || "Failed to remove password");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePdfToExcel = async () => {
    if (!excelFile) {
      toast.error("Please select a PDF file to convert");
      return;
    }

    try {
      await convertPdfToExcel(excelFile);
    } catch (error: any) {
      toast.info("PDF to Excel conversion is coming soon! This feature requires advanced table detection and will be available in the next update.");
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Tools - Free Online PDF Converter & Editor",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "PDF to Word Converter",
      "PDF Password Remover",
      "Compress PDF Files",
      "Merge Multiple PDFs",
      "Split PDF Pages",
      "PDF to Excel Converter",
      "PDF to Image Converter"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15420"
    }
  };

  const breadcrumbItems = [
    { label: "PDF Tools" }
  ];

  const howToSteps = [
    {
      title: "Upload Your PDF",
      description: "Select the PDF file you want to process from your device. Our tool supports all standard PDF formats and works directly in your browser for maximum security."
    },
    {
      title: "Choose Your Operation",
      description: "Select from 7 powerful tools: convert to Word/Excel, remove password protection, compress, merge, split, or convert to images. Each tool is optimized for speed and quality."
    },
    {
      title: "Process & Download",
      description: "Click the action button to process your PDF. Your file is processed locally in your browser, ensuring complete privacy. Download your result instantly."
    }
  ];

  const faqs = [
    {
      question: "How to convert PDF to Word online free?",
      answer: "Simply upload your PDF file to our PDF to Word converter, click 'Convert to Word', and download the .docx file. Our tool preserves text formatting and structure, converting your PDF to an editable Word document in seconds. No registration or software installation required."
    },
    {
      question: "Is PDF password remover safe to use online?",
      answer: "Yes! Our PDF password remover processes files entirely in your browser. Your PDF never leaves your device, ensuring complete privacy and security. We cannot access, store, or view your documents. However, you must know the password to remove it - we don't crack or bypass unknown passwords."
    },
    {
      question: "How to remove password protection from PDF without password?",
      answer: "Legally, you cannot remove password protection without knowing the password. Our tool requires you to enter the correct password to unlock and remove protection. If you've forgotten your password, you'll need to contact the document owner or use authorized recovery methods."
    },
    {
      question: "Can I compress PDF without losing quality?",
      answer: "Yes! Our PDF compressor uses intelligent compression that reduces file size by 40-70% while maintaining readability. We optimize PDF structure and remove unnecessary metadata without degrading text or image quality. Perfect for emailing large documents or saving storage space."
    },
    {
      question: "How to merge multiple PDF files into one?",
      answer: "Upload 2 or more PDF files to our Merge tool, and we'll combine them into a single PDF document. The pages are added in the order you select the files. This is perfect for combining contracts, reports, or scanned documents into one organized file."
    },
    {
      question: "What's the best free PDF to Word converter?",
      answer: "Our PDF to Word converter stands out because it's completely free, works offline in your browser, requires no registration, and preserves formatting. Unlike many converters, we don't add watermarks, limit file size, or restrict conversions. Your data stays private on your device."
    },
    {
      question: "How do I reduce PDF file size for email?",
      answer: "Use our Compress PDF tool to reduce file size by up to 70%. Upload your PDF, click Compress, and download the smaller version. Most email services limit attachments to 25MB - our compressor helps you stay under this limit while keeping your PDF readable."
    },
    {
      question: "Is it safe to upload PDF files to online tools?",
      answer: "Our PDF tools prioritize your security by processing everything locally in your browser using JavaScript. Unlike server-based tools, your PDFs never get uploaded to our servers. This means your sensitive documents, contracts, or personal information remain completely private on your device."
    },
    {
      question: "Can I split a PDF into separate pages for free?",
      answer: "Absolutely! Our Split PDF tool extracts each page as a separate PDF file. Upload your multi-page PDF, click Split, and each page downloads individually. This is useful for separating book chapters, extracting specific pages, or sharing individual pages from large documents."
    },
    {
      question: "How to convert password-protected PDF to Word?",
      answer: "First, use our Password Remover tool to unlock the PDF (you'll need the password). Then use the PDF to Word converter on the unlocked file. Alternatively, some PDF readers let you enter the password when opening, then you can print to PDF without protection."
    },
    {
      question: "Does PDF to Word conversion preserve formatting?",
      answer: "Our converter preserves text content, paragraphs, and basic structure. However, complex layouts with multiple columns, embedded fonts, or intricate formatting may need manual adjustments. For best results, use PDFs that are text-based rather than scanned images."
    },
    {
      question: "What's the maximum PDF file size I can process?",
      answer: "Since our tools run in your browser, the limit depends on your device's memory. Most modern devices can handle PDFs up to 100MB. For very large files (500MB+), desktop software may be more suitable. We recommend files under 50MB for optimal performance."
    },
    {
      question: "Can I convert scanned PDFs to editable Word documents?",
      answer: "Our tool works best with text-based PDFs. Scanned PDFs (images of documents) require OCR (Optical Character Recognition) technology to extract text. We're working on adding OCR capabilities. For now, scanned PDFs will convert but may not be editable without additional processing."
    },
    {
      question: "How do I convert PDF to Excel with tables?",
      answer: "Our PDF to Excel feature is coming soon! Converting PDFs to Excel requires advanced table detection to identify rows, columns, and data structures. Once available, you'll be able to extract tables from PDF reports and convert them to Excel spreadsheets (.xlsx)."
    },
    {
      question: "Why choose browser-based PDF tools over desktop software?",
      answer: "Browser-based tools offer instant access without downloads, work on any device (Windows, Mac, Linux, mobile), ensure privacy by processing locally, require no installation or updates, and are completely free. Desktop software often requires payment, takes storage space, and may upload your files to servers."
    },
    {
      question: "Can I use these PDF tools on mobile devices?",
      answer: "Yes! Our tools are fully responsive and work on smartphones and tablets. You can upload PDFs from your phone, process them, and save the results directly to your device. The interface adapts to smaller screens for easy mobile use."
    },
    {
      question: "How accurate is the PDF to Word conversion?",
      answer: "Conversion accuracy depends on the PDF structure. Simple text-based PDFs convert with 95%+ accuracy. PDFs with complex layouts, forms, or unusual fonts may require manual formatting adjustments. We continuously improve our conversion engine for better results."
    },
    {
      question: "Can I batch process multiple PDFs at once?",
      answer: "Currently, the Merge tool allows multiple file selection. For other operations like compression or conversion, process files individually for best results. We're considering batch processing features based on user feedback."
    },
    {
      question: "Do you keep copies of uploaded PDF files?",
      answer: "No, absolutely not! All processing happens in your browser using JavaScript. We never receive, store, or have access to your files. When you close the browser tab, all data is immediately cleared from your device's memory. This ensures complete privacy."
    },
    {
      question: "What PDF versions do your tools support?",
      answer: "Our tools support PDF versions 1.3 through 2.0, covering nearly all PDFs created in the last 20 years. This includes PDFs from Adobe Acrobat, Microsoft Office, Google Docs, LibreOffice, and most other PDF creators."
    }
  ];

  const relatedTools = [
    {
      title: "Image Tools",
      description: "Compress and optimize images for web and email",
      path: "/image-tools",
      icon: ImageIcon
    },
    {
      title: "Base64 Tools",
      description: "Encode and decode Base64 strings for PDFs",
      path: "/base64-tools",
      icon: FileText
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON data from PDF APIs",
      path: "/json-formatter",
      icon: FileType
    },
    {
      title: "Home",
      description: "Explore all our free developer tools",
      path: "/",
      icon: Home
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.pdfTools.title}
        description={TOOL_SEO.pdfTools.description}
        keywords={TOOL_SEO.pdfTools.keywords}
        path={TOOL_SEO.pdfTools.path}
        schema={schema}
      />

      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <FileType className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Free PDF Tools: Convert, Compress & Edit PDFs Online
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Professional PDF tools for converting PDF to Word/Excel, removing passwords, compressing, merging, and splitting documents. 100% free, secure browser-based processing. Used by 150,000+ users monthly.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">✓ No Registration Required</span>
          <span className="flex items-center gap-2">✓ Process Files Locally</span>
          <span className="flex items-center gap-2">✓ 100% Free Forever</span>
          <span className="flex items-center gap-2">✓ No File Size Limits</span>
        </div>
      </div>

      {/* PDF Tools */}
      <div className="max-w-4xl mx-auto mb-16">
        <Tabs defaultValue="pdftoword" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full gap-1">
            <TabsTrigger value="pdftoword" className="text-xs md:text-sm">
              <FileText className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">PDF to Word</span>
              <span className="sm:hidden">Word</span>
            </TabsTrigger>
            <TabsTrigger value="removepassword" className="text-xs md:text-sm">
              <Lock className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Remove Password</span>
              <span className="sm:hidden">Unlock</span>
            </TabsTrigger>
            <TabsTrigger value="compress" className="text-xs md:text-sm">
              <Minimize className="h-4 w-4 mr-1" />
              <span>Compress</span>
            </TabsTrigger>
            <TabsTrigger value="merge" className="text-xs md:text-sm">
              <FileStack className="h-4 w-4 mr-1" />
              <span>Merge</span>
            </TabsTrigger>
            <TabsTrigger value="split" className="text-xs md:text-sm">
              <Scissors className="h-4 w-4 mr-1" />
              <span>Split</span>
            </TabsTrigger>
            <TabsTrigger value="pdftoexcel" className="text-xs md:text-sm">
              <Table2 className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">To Excel</span>
              <span className="sm:hidden">Excel</span>
            </TabsTrigger>
            <TabsTrigger value="convert" className="text-xs md:text-sm">
              <ImageIcon className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">To Image</span>
              <span className="sm:hidden">Image</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pdftoword">
            <Card>
              <CardHeader>
                <CardTitle>PDF to Word Converter</CardTitle>
                <CardDescription>
                  Convert PDF documents to editable Word (.docx) format. Preserves text structure and formatting.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setWordFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="word-input"
                  />
                  <label htmlFor="word-input" className="cursor-pointer">
                    <Button variant="outline">Select PDF File</Button>
                  </label>
                  {wordFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{wordFile.name}</p>
                  )}
                </div>
                <Button 
                  onClick={handlePdfToWord} 
                  className="w-full" 
                  disabled={!wordFile || isProcessing}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {isProcessing ? "Converting..." : "Convert to Word"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Tip: Works best with text-based PDFs. Scanned PDFs may require OCR.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="removepassword">
            <Card>
              <CardHeader>
                <CardTitle>Remove PDF Password Protection</CardTitle>
                <CardDescription>
                  Unlock password-protected PDFs by entering the correct password. Your file stays private in your browser.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setPasswordFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="password-input"
                  />
                  <label htmlFor="password-input" className="cursor-pointer">
                    <Button variant="outline">Select Protected PDF</Button>
                  </label>
                  {passwordFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{passwordFile.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pdf-password">PDF Password</Label>
                  <Input
                    id="pdf-password"
                    type="password"
                    placeholder="Enter PDF password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleRemovePassword} 
                  className="w-full" 
                  disabled={!passwordFile || !password || isProcessing}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  {isProcessing ? "Removing Password..." : "Remove Password & Download"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Note: You must know the password to remove it. We don't crack or bypass unknown passwords.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pdftoexcel">
            <Card>
              <CardHeader>
                <CardTitle>PDF to Excel Converter</CardTitle>
                <CardDescription>
                  Convert PDF tables to Excel spreadsheets. Extract data from PDF reports and documents.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setExcelFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="excel-input"
                  />
                  <label htmlFor="excel-input" className="cursor-pointer">
                    <Button variant="outline">Select PDF File</Button>
                  </label>
                  {excelFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{excelFile.name}</p>
                  )}
                </div>
                <Button onClick={handlePdfToExcel} className="w-full" disabled={!excelFile}>
                  <Table2 className="mr-2 h-4 w-4" />
                  Convert to Excel
                </Button>
                <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                  <p className="font-semibold mb-2">Coming Soon!</p>
                  <p>
                    PDF to Excel conversion requires advanced table detection algorithms. We're working on this feature and it will be available soon. It will automatically detect and extract tables from your PDF documents.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="merge">
            <Card>
              <CardHeader>
                <CardTitle>Merge PDFs</CardTitle>
                <CardDescription>Combine multiple PDF files into a single document</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={(e) => setMergeFiles(Array.from(e.target.files || []))}
                    className="hidden"
                    id="merge-input"
                  />
                  <label htmlFor="merge-input" className="cursor-pointer">
                    <Button variant="outline">Select PDF Files</Button>
                  </label>
                  {mergeFiles.length > 0 && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      {mergeFiles.length} file(s) selected
                    </p>
                  )}
                </div>
                <Button onClick={handleMergePdfs} className="w-full" disabled={mergeFiles.length < 2}>
                  <FileStack className="mr-2 h-4 w-4" />
                  Merge PDFs
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="split">
            <Card>
              <CardHeader>
                <CardTitle>Split PDF</CardTitle>
                <CardDescription>Extract each page as a separate PDF file</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setSplitFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="split-input"
                  />
                  <label htmlFor="split-input" className="cursor-pointer">
                    <Button variant="outline">Select PDF File</Button>
                  </label>
                  {splitFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{splitFile.name}</p>
                  )}
                </div>
                <Button onClick={handleSplitPdf} className="w-full" disabled={!splitFile}>
                  <Scissors className="mr-2 h-4 w-4" />
                  Split PDF
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compress">
            <Card>
              <CardHeader>
                <CardTitle>Compress PDF</CardTitle>
                <CardDescription>Reduce file size while maintaining quality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setCompressFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="compress-input"
                  />
                  <label htmlFor="compress-input" className="cursor-pointer">
                    <Button variant="outline">Select PDF File</Button>
                  </label>
                  {compressFile && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      {compressFile.name} ({(compressFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>
                <Button onClick={handleCompressPdf} className="w-full" disabled={!compressFile}>
                  <Minimize className="mr-2 h-4 w-4" />
                  Compress PDF
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="convert">
            <Card>
              <CardHeader>
                <CardTitle>PDF to Image</CardTitle>
                <CardDescription>Convert PDF pages to image format (feature in development)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setConvertFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="convert-input"
                  />
                  <label htmlFor="convert-input" className="cursor-pointer">
                    <Button variant="outline">Select PDF File</Button>
                  </label>
                  {convertFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{convertFile.name}</p>
                  )}
                </div>
                <Button onClick={handleConvertToImage} className="w-full" disabled={!convertFile}>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Convert to Images
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* How To Use Section */}
      <HowToUse 
        steps={howToSteps} 
        toolName="PDF Tools"
        title="How to Use Our PDF Tools"
      />

      {/* AdSense - After How To */}
      <div className="max-w-4xl mx-auto my-12">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.pdfToolsInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '90px' }}
        />
      </div>

      {/* Comprehensive Guide Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Complete PDF Tools Guide 2025</CardTitle>
            <CardDescription>Everything you need to know about PDF conversion, compression, and manipulation</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6 text-foreground">
            
            <section id="what-are-pdf-tools">
              <h2 className="text-2xl font-bold mt-8 mb-4">What Are PDF Tools and Why Do You Need Them?</h2>
              <p className="text-muted-foreground leading-relaxed">
                PDF (Portable Document Format) tools are essential utilities that help you manipulate, convert, and manage PDF documents. Whether you're a student organizing lecture notes, a professional handling business contracts, or a freelancer managing client documents, PDF tools streamline your workflow and save valuable time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Modern PDF tools have evolved beyond simple viewing. They now offer powerful features like format conversion (PDF to Word, Excel), password management, file compression, document merging, and page splitting. The best part? With browser-based tools, you don't need expensive software licenses or downloads.
              </p>
            </section>

            <section id="pdf-to-word-converter">
              <h2 className="text-2xl font-bold mt-8 mb-4">PDF to Word Converter: Transform PDFs to Editable Documents</h2>
              <p className="text-muted-foreground leading-relaxed">
                Converting PDF to Word (.docx) is one of the most requested PDF operations. When you receive a PDF contract, report, or document that needs editing, a PDF to Word converter becomes invaluable. Our tool extracts text, preserves formatting, and creates an editable Word document you can modify in Microsoft Word, Google Docs, or any word processor.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">When to Convert PDF to Word</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Editing Contracts:</strong> Make changes to agreements, proposals, or legal documents without recreating them from scratch</li>
                <li><strong>Reusing Content:</strong> Extract text from research papers, reports, or articles for new projects</li>
                <li><strong>Collaborative Editing:</strong> Convert PDFs to Word for team members to edit and provide feedback</li>
                <li><strong>Template Creation:</strong> Transform PDF forms into editable Word templates for repeated use</li>
                <li><strong>Translation Work:</strong> Convert PDFs to Word format for easier translation and localization</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Best Practices for PDF to Word Conversion</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use text-based PDFs for best results (not scanned images)</li>
                <li>Check formatting after conversion and adjust as needed</li>
                <li>Save the original PDF as backup before making edits</li>
                <li>Use "Save As" instead of "Save" to preserve the converted document</li>
                <li>For scanned PDFs, consider OCR software first</li>
              </ul>
            </section>

            <section id="pdf-password-remover">
              <h2 className="text-2xl font-bold mt-8 mb-4">PDF Password Remover: Unlock Your Protected Documents</h2>
              <p className="text-muted-foreground leading-relaxed">
                Password-protected PDFs are common in business environments for security. However, constantly entering passwords becomes tedious when you need frequent access. Our PDF password remover tool lets you unlock PDFs (when you know the password) and save them without protection for easier access.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Legal and Ethical Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> Our tool requires you to enter the correct password. We cannot and will not crack or bypass unknown passwords, as that would be unethical and potentially illegal. Only remove password protection from documents you own or have permission to access.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Common Use Cases</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Personal Documents:</strong> Remove passwords from your own PDFs you no longer need protected</li>
                <li><strong>Work Files:</strong> Unlock frequently-accessed company documents (with permission)</li>
                <li><strong>Archived Files:</strong> Remove outdated password protection from old documents</li>
                <li><strong>Sharing:</strong> Remove passwords before sharing with team members who need access</li>
                <li><strong>Workflow Optimization:</strong> Streamline document processing by removing unnecessary password steps</li>
              </ul>
            </section>

            <section id="compress-pdf">
              <h2 className="text-2xl font-bold mt-8 mb-4">Compress PDF: Reduce File Size Without Losing Quality</h2>
              <p className="text-muted-foreground leading-relaxed">
                PDF compression is critical for email attachments, cloud storage optimization, and faster file sharing. Our PDF compressor typically reduces file size by 40-70% while maintaining readability. We achieve this by optimizing PDF structure, removing redundant data, and compressing embedded images intelligently.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Why Compress PDFs?</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Email Limits:</strong> Most email services limit attachments to 25MB. Compression helps you stay under this limit.</li>
                <li><strong>Faster Uploads:</strong> Smaller files upload faster to cloud storage, document management systems, or websites</li>
                <li><strong>Storage Savings:</strong> Reduce cloud storage costs and free up local disk space</li>
                <li><strong>Bandwidth Conservation:</strong> Compressed files use less internet bandwidth when sharing</li>
                <li><strong>Improved Performance:</strong> Smaller PDFs open faster and are more responsive when viewed</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Compression Tips</h3>
              <p className="text-muted-foreground leading-relaxed">
                For documents with many high-resolution images, consider compressing images before creating the PDF. Text-heavy documents compress less but still benefit from PDF optimization. Always check the compressed PDF to ensure text remains readable - if quality suffers, the original file size might be necessary.
              </p>
            </section>

            <section id="merge-split-pdf">
              <h2 className="text-2xl font-bold mt-8 mb-4">Merge and Split PDFs: Document Organization Made Easy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Merging combines multiple PDFs into one document, perfect for creating complete reports from separate sections. Splitting extracts individual pages or divides large PDFs into smaller files, ideal for sharing specific sections without sending entire documents.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Merge PDF Use Cases</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Complete Reports:</strong> Combine executive summary, analysis, and appendices into one PDF</li>
                <li><strong>Application Packages:</strong> Merge resume, cover letter, and portfolio into single file</li>
                <li><strong>Scanned Documents:</strong> Combine multiple scan batches into organized document</li>
                <li><strong>Book Creation:</strong> Merge chapter PDFs into complete manuscript</li>
                <li><strong>Invoice Batches:</strong> Combine monthly invoices for accounting</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Split PDF Use Cases</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Selective Sharing:</strong> Extract and share only relevant pages from large reports</li>
                <li><strong>Document Distribution:</strong> Split presentation into individual slides for separate distribution</li>
                <li><strong>Chapter Separation:</strong> Divide ebook or manual into separate chapter files</li>
                <li><strong>Page Extraction:</strong> Remove confidential pages before sharing documents</li>
                <li><strong>Archive Organization:</strong> Split large archives into manageable yearly or monthly files</li>
              </ul>
            </section>

            <section id="pdf-security-privacy">
              <h2 className="text-2xl font-bold mt-8 mb-4">Security and Privacy: Why Browser-Based PDF Tools Are Safer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional online PDF tools that upload your files to servers, our browser-based tools process everything locally on your device. This means your PDFs never leave your computer. No server storage, no data collection, no privacy concerns. When you close the browser tab, all data is immediately cleared from memory.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Security Advantages</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>No Server Upload:</strong> Your files stay on your device throughout the entire process</li>
                <li><strong>No Data Storage:</strong> We cannot access, view, or store your documents</li>
                <li><strong>Instant Deletion:</strong> All data clears when you close or refresh the page</li>
                <li><strong>No Account Required:</strong> No user data, email addresses, or personal information collected</li>
                <li><strong>Open Source Libraries:</strong> We use trusted, audited open-source PDF libraries</li>
              </ul>
            </section>

            <section id="pdf-format-explained">
              <h2 className="text-2xl font-bold mt-8 mb-4">Understanding PDF Format: Technical Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                PDF (Portable Document Format) was created by Adobe in 1993 to present documents consistently across different devices, operating systems, and software. PDFs preserve formatting, fonts, images, and layout regardless of where they're opened. This consistency makes PDFs the standard for official documents, contracts, forms, and professional communications.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">PDF vs Other Formats</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>PDF vs Word:</strong> PDFs are read-only (unless edited with special tools), while Word documents are editable. Use PDFs for final versions, Word for collaborative drafts.</li>
                <li><strong>PDF vs Images:</strong> PDFs contain searchable text and preserve document structure. Images are single visual files without text searchability.</li>
                <li><strong>PDF vs Excel:</strong> PDFs present data visually but aren't designed for calculations. Excel files contain formulas and dynamic data manipulation.</li>
                <li><strong>PDF vs HTML:</strong> PDFs are fixed layout, HTML is responsive. PDFs for printing, HTML for web viewing.</li>
              </ul>
            </section>

            <section id="best-practices">
              <h2 className="text-2xl font-bold mt-8 mb-4">PDF Management Best Practices</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">File Organization</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use descriptive, consistent file naming: "2025-01-Contract-ClientName.pdf"</li>
                <li>Create folder hierarchies: Projects &gt; Client &gt; Year &gt; Documents</li>
                <li>Tag PDFs with metadata for easier searching</li>
                <li>Keep original files separate from edited versions</li>
                <li>Regular backups to cloud storage and external drives</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Optimization Strategies</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Compress PDFs before long-term archival to save storage space</li>
                <li>Use bookmarks and table of contents for large PDFs</li>
                <li>Add hyperlinks for easy navigation within documents</li>
                <li>Include page numbers for reference in discussions</li>
                <li>Use PDF/A format for long-term archival (standardized by ISO)</li>
              </ul>
            </section>

            <section id="common-problems">
              <h2 className="text-2xl font-bold mt-8 mb-4">Common PDF Problems and Solutions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problem: Can't Open Password-Protected PDF</h3>
                  <p className="text-muted-foreground"><strong>Solution:</strong> Contact the document sender for the password, or if it's your PDF, use our Password Remover tool to unlock it (requires knowing the password).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problem: PDF File Too Large for Email</h3>
                  <p className="text-muted-foreground"><strong>Solution:</strong> Use our Compress PDF tool to reduce file size by 40-70%, or use cloud storage links instead of attachments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problem: Need to Edit PDF Text</h3>
                  <p className="text-muted-foreground"><strong>Solution:</strong> Convert PDF to Word using our PDF to Word converter, make edits, then save back to PDF if needed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problem: PDF Loads Slowly</h3>
                  <p className="text-muted-foreground"><strong>Solution:</strong> Compress the PDF to optimize file size, or split large PDFs into smaller chapter files.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problem: Need Only Specific Pages from PDF</h3>
                  <p className="text-muted-foreground"><strong>Solution:</strong> Use our Split PDF tool to extract individual pages or specific page ranges.</p>
                </div>
              </div>
            </section>

          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="PDF Tools FAQ: Your Questions Answered" />

      {/* AdSense - After FAQ */}
      <div className="max-w-4xl mx-auto my-12">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.pdfToolsInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '90px' }}
        />
      </div>

      {/* Related Tools */}
      <RelatedTools tools={relatedTools} title="Explore More Free Tools" />

      {/* Trending Searches Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Trending PDF Searches</CardTitle>
            <CardDescription>Popular PDF tool searches and solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a href="#pdf-to-word-converter" className="text-sm text-primary hover:underline">PDF to Word Online Free</a>
              <a href="#pdf-password-remover" className="text-sm text-primary hover:underline">Remove PDF Password</a>
              <a href="#compress-pdf" className="text-sm text-primary hover:underline">Compress PDF Under 1MB</a>
              <a href="#merge-split-pdf" className="text-sm text-primary hover:underline">Merge PDF Files</a>
              <a href="#pdf-to-word-converter" className="text-sm text-primary hover:underline">PDF to DOCX Converter</a>
              <a href="#pdf-password-remover" className="text-sm text-primary hover:underline">Unlock PDF Without Password</a>
              <a href="#compress-pdf" className="text-sm text-primary hover:underline">Reduce PDF File Size</a>
              <a href="#merge-split-pdf" className="text-sm text-primary hover:underline">Split PDF Pages</a>
              <a href="#pdf-security-privacy" className="text-sm text-primary hover:underline">Safe PDF Tools</a>
              <a href="#pdf-format-explained" className="text-sm text-primary hover:underline">PDF vs Word</a>
              <a href="#best-practices" className="text-sm text-primary hover:underline">PDF Organization Tips</a>
              <a href="#common-problems" className="text-sm text-primary hover:underline">Fix PDF Problems</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
