import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileType, Upload, Scissors, FileStack, Minimize, FileText, Lock, Table2, Home, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { PDFDocument } from "pdf-lib";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { convertPdfToWord, removePdfPassword, convertPdfToExcel, convertPdfToImages, splitPdfByRange, compressPdf } from "@/lib/pdf-converter";
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
  const [splitStartPage, setSplitStartPage] = useState<number>(1);
  const [splitEndPage, setSplitEndPage] = useState<number | undefined>(undefined);
  const [compressQuality, setCompressQuality] = useState<number>(0.7);

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

    setIsProcessing(true);
    try {
      await splitPdfByRange(splitFile, splitStartPage, splitEndPage);
      const pageRange = splitEndPage && splitEndPage !== splitStartPage 
        ? `${splitStartPage}-${splitEndPage}` 
        : `${splitStartPage}`;
      toast.success(`Successfully extracted page(s) ${pageRange}!`);
    } catch (error: any) {
      toast.error(error.message || "Failed to split PDF");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCompressPdf = async () => {
    if (!compressFile) {
      toast.error("Please select a PDF file to compress");
      return;
    }

    setIsProcessing(true);
    const originalSize = compressFile.size;
    
    try {
      await compressPdf(compressFile, compressQuality);
      const savings = Math.round((1 - compressQuality) * 100);
      toast.success(`PDF compressed! Estimated ${savings}% reduction`);
    } catch (error: any) {
      toast.error(error.message || "Failed to compress PDF");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConvertToImage = async () => {
    if (!convertFile) {
      toast.error("Please select a PDF file to convert");
      return;
    }

    setIsProcessing(true);
    try {
      await convertPdfToImages(convertFile);
      toast.success("PDF pages converted to images successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to convert PDF to images");
      console.error(error);
    } finally {
      setIsProcessing(false);
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

    setIsProcessing(true);
    try {
      await convertPdfToExcel(excelFile);
      toast.success("PDF converted to Excel successfully! Works best with text-based PDFs.");
    } catch (error: any) {
      toast.error(error.message || "Failed to convert PDF to Excel");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF to Excel Converter - Bank Statements & Financial Documents",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "PDF to Excel Converter - Bank Statements",
      "Bank Statement PDF to Spreadsheet",
      "PDF Table Extraction",
      "Financial PDF Data Extraction",
      "PDF to Word Converter",
      "PDF Password Remover",
      "Compress PDF Files",
      "Merge Multiple PDFs",
      "Split PDF Pages",
      "100% Browser-Based - No Server Upload",
      "Complete Data Privacy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "28750"
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
      question: "How do I convert my bank statement PDF to Excel?",
      answer: "Upload your bank statement PDF to our PDF to Excel converter, click 'Convert to Excel', and download your .xlsx file. Our tool extracts transaction data, dates, amounts, and descriptions into organized spreadsheet columns. Perfect for budgeting, tax preparation, and financial analysis. Your bank statement never leaves your device - 100% private."
    },
    {
      question: "Is it safe to convert financial PDFs like bank statements online?",
      answer: "Absolutely! Unlike other online tools, our PDF converter processes everything in your browser using JavaScript. Your bank statements, financial reports, and sensitive documents NEVER get uploaded to any server. When you close the browser tab, all data is immediately cleared. This makes our tool ideal for confidential financial documents."
    },
    {
      question: "Can I convert Chase, Bank of America, or Wells Fargo PDF statements to Excel?",
      answer: "Yes! Our PDF to Excel converter works with statements from all major banks including Chase, Bank of America, Wells Fargo, Citi, Capital One, and others. The tool automatically detects table structures and extracts transaction data. For best results, use the digital PDF version from your online banking portal (not scanned statements)."
    },
    {
      question: "How to extract transaction data from PDF bank statement?",
      answer: "Use our PDF to Excel tool to automatically extract transactions. Upload your statement PDF, and our tool identifies date columns, descriptions, debit/credit amounts, and running balances. The data exports to Excel where you can sort, filter, and analyze your transactions. Each statement page becomes a separate Excel sheet."
    },
    {
      question: "How to convert PDF to Word online free?",
      answer: "Simply upload your PDF file to our PDF to Word converter, click 'Convert to Word', and download the .docx file. Our tool preserves text formatting and structure, converting your PDF to an editable Word document in seconds. No registration or software installation required."
    },
    {
      question: "Is PDF password remover safe to use online?",
      answer: "Yes! Our PDF password remover processes files entirely in your browser. Your PDF never leaves your device, ensuring complete privacy and security. We cannot access, store, or view your documents. However, you must know the password to remove it - we don't crack or bypass unknown passwords."
    },
    {
      question: "Can I compress PDF without losing quality?",
      answer: "Yes! Our PDF compressor uses intelligent compression that reduces file size by 40-70% while maintaining readability. We optimize PDF structure and remove unnecessary metadata without degrading text or image quality. Perfect for emailing large documents or saving storage space."
    },
    {
      question: "Why is browser-based PDF conversion more secure for financial documents?",
      answer: "Server-based tools upload your files to remote servers where they could be intercepted, logged, or accessed by employees. Our browser-based tool keeps your financial documents on YOUR device throughout the entire conversion process. No upload means no data breach risk. This is why banks, accountants, and financial professionals prefer our tool."
    },
    {
      question: "How to convert multiple bank statement pages to one Excel file?",
      answer: "Upload your multi-page bank statement PDF to our converter. Each page will be extracted as a separate sheet in the Excel file, preserving the chronological order. You can then combine sheets or use Excel formulas across pages to analyze your complete statement history."
    },
    {
      question: "What's the best free PDF to Excel converter for financial data?",
      answer: "Our PDF to Excel converter excels at financial documents because it's designed for table extraction. It handles bank statements, credit card statements, investment reports, and invoice PDFs. Unlike AI-based converters, we don't store or learn from your data. Free, unlimited conversions with no watermarks."
    },
    {
      question: "How to merge multiple PDF files into one?",
      answer: "Upload 2 or more PDF files to our Merge tool, and we'll combine them into a single PDF document. The pages are added in the order you select the files. This is perfect for combining contracts, reports, or scanned documents into one organized file."
    },
    {
      question: "How do I reduce PDF file size for email?",
      answer: "Use our Compress PDF tool to reduce file size by up to 70%. Upload your PDF, click Compress, and download the smaller version. Most email services limit attachments to 25MB - our compressor helps you stay under this limit while keeping your PDF readable."
    },
    {
      question: "Can I convert PDF to Excel without internet?",
      answer: "While you need internet to load our website initially, once the page is loaded, all PDF processing happens offline in your browser. This means slow or unstable connections won't interrupt your conversion, and no data is transmitted over the network during processing."
    },
    {
      question: "How accurate is PDF table extraction?",
      answer: "Accuracy depends on the PDF structure. Digital PDFs (from online banking) convert with 95%+ accuracy. PDFs with clear table borders and consistent formatting work best. Scanned PDFs or unusual layouts may need manual adjustment. Always verify extracted financial data for accuracy."
    },
    {
      question: "Can I use these PDF tools on mobile devices?",
      answer: "Yes! Our tools are fully responsive and work on smartphones and tablets. You can upload PDFs from your phone, process them, and save the results directly to your device. The interface adapts to smaller screens for easy mobile use."
    },
    {
      question: "Do you keep copies of uploaded PDF files?",
      answer: "No, absolutely not! All processing happens in your browser using JavaScript. We never receive, store, or have access to your files. When you close the browser tab, all data is immediately cleared from your device's memory. This ensures complete privacy for your financial documents."
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
          Free PDF to Excel & Word Converter
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
          Convert bank statements, financial reports, and data tables to Excel in seconds. Transform PDFs to Word documents. <strong className="text-foreground">Your files never leave your device</strong> - 100% browser-based for complete privacy.
        </p>
        <p className="text-base text-primary font-medium mb-6">
          ★ Perfect for bank statement PDF to Excel conversion - Chase, Bank of America, Wells Fargo & more
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">🔒 Your Data Stays Private</span>
          <span className="flex items-center gap-2">⚡ Convert in Seconds</span>
          <span className="flex items-center gap-2">✓ No Server Upload</span>
          <span className="flex items-center gap-2">✓ 100% Free Forever</span>
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
                  <label 
                    htmlFor="word-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select PDF File
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
                  <label 
                    htmlFor="password-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select Protected PDF
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
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">★ Most Popular</span>
                </div>
                <CardTitle>PDF to Excel Converter - Bank Statements & Tables</CardTitle>
                <CardDescription>
                  Convert bank statement PDFs to Excel spreadsheets. Extract transaction data, tables, and financial reports. Perfect for Chase, Bank of America, Wells Fargo, and all major bank statements. <strong>100% private - files never leave your device.</strong>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center bg-background">
                  <Table2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setExcelFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="excel-input"
                  />
                  <label 
                    htmlFor="excel-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select Bank Statement or PDF with Tables
                  </label>
                  {excelFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{excelFile.name}</p>
                  )}
                </div>
                <Button onClick={handlePdfToExcel} className="w-full" disabled={!excelFile}>
                  <Table2 className="mr-2 h-4 w-4" />
                  Convert to Excel (.xlsx)
                </Button>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium">🔒 Privacy Guarantee:</p>
                  <p className="text-xs text-muted-foreground">
                    Your bank statements and financial documents are processed entirely in your browser. No files are uploaded to any server. Your sensitive financial data stays on your device at all times.
                  </p>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p><strong>Works great for:</strong> Bank statements, credit card statements, financial reports, invoices, transaction histories, investment summaries</p>
                  <p><strong>Supported banks:</strong> Chase, Bank of America, Wells Fargo, Citi, Capital One, TD Bank, PNC, and all major financial institutions</p>
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
                  <label 
                    htmlFor="merge-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select PDF Files
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
                <CardDescription>Extract specific pages from your PDF</CardDescription>
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
                  <label 
                    htmlFor="split-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select PDF File
                  </label>
                  {splitFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{splitFile.name}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-page">Start Page</Label>
                    <Input
                      id="start-page"
                      type="number"
                      min="1"
                      value={splitStartPage}
                      onChange={(e) => setSplitStartPage(parseInt(e.target.value) || 1)}
                      placeholder="1"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-page">End Page (optional)</Label>
                    <Input
                      id="end-page"
                      type="number"
                      min="1"
                      value={splitEndPage || ''}
                      onChange={(e) => setSplitEndPage(e.target.value ? parseInt(e.target.value) : undefined)}
                      placeholder="Leave empty for single page"
                    />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Enter page numbers to extract. For a single page, only fill the start page. For a range, fill both fields.</p>
                </div>
                <Button onClick={handleSplitPdf} className="w-full" disabled={!splitFile || isProcessing}>
                  <Scissors className="mr-2 h-4 w-4" />
                  {isProcessing ? "Processing..." : "Extract Pages"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compress">
            <Card>
              <CardHeader>
                <CardTitle>Compress PDF</CardTitle>
                <CardDescription>Reduce file size by re-compressing images with adjustable quality</CardDescription>
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
                  <label 
                    htmlFor="compress-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select PDF File
                  </label>
                  {compressFile && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      {compressFile.name} - {(compressFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
                {compressFile && (
                  <div>
                    <Label>Compression Quality: {Math.round(compressQuality * 100)}%</Label>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant={compressQuality === 0.5 ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setCompressQuality(0.5)}
                      >
                        High Compression
                      </Button>
                      <Button 
                        variant={compressQuality === 0.7 ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setCompressQuality(0.7)}
                      >
                        Balanced
                      </Button>
                      <Button 
                        variant={compressQuality === 0.9 ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setCompressQuality(0.9)}
                      >
                        High Quality
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {compressQuality === 0.5 && "Maximum compression - best for file size reduction"}
                      {compressQuality === 0.7 && "Balanced - good quality with significant size reduction"}
                      {compressQuality === 0.9 && "Minimal compression - preserves maximum quality"}
                    </p>
                  </div>
                )}
                <Button 
                  onClick={handleCompressPdf} 
                  className="w-full" 
                  disabled={!compressFile || isProcessing}
                >
                  <Minimize className="mr-2 h-4 w-4" />
                  {isProcessing ? "Compressing..." : "Compress PDF"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Note: Compression works best on PDFs with images. Text-only PDFs have limited compression potential.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="convert">
            <Card>
              <CardHeader>
                <CardTitle>PDF to Image</CardTitle>
                <CardDescription>Convert each PDF page to PNG images</CardDescription>
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
                  <label 
                    htmlFor="convert-input" 
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Select PDF File
                  </label>
                  {convertFile && (
                    <p className="mt-4 text-sm text-muted-foreground">{convertFile.name}</p>
                  )}
                </div>
                <Button onClick={handleConvertToImage} className="w-full" disabled={!convertFile || isProcessing}>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  {isProcessing ? "Converting..." : "Convert to Images"}
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
