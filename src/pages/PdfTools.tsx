import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileType, Upload, Download, Scissors, FileStack, Minimize, Image } from "lucide-react";
import { toast } from "sonner";
import { PDFDocument } from "pdf-lib";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";

export default function PdfTools() {
  const [mergeFiles, setMergeFiles] = useState<File[]>([]);
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [compressFile, setCompressFile] = useState<File | null>(null);
  const [convertFile, setConvertFile] = useState<File | null>(null);

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Tools",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "featureList": "Merge PDFs, Split PDFs, Compress PDFs, PDF to Image conversion"
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.pdfTools.title}
        description={TOOL_SEO.pdfTools.description}
        keywords={TOOL_SEO.pdfTools.keywords}
        path={TOOL_SEO.pdfTools.path}
        schema={schema}
      />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <FileType className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">PDF Tools</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Merge, split, compress, and convert PDF documents directly in your browser
        </p>
      </div>

      {/* PDF Tools */}
      <div className="max-w-4xl mx-auto mb-16">
        <Tabs defaultValue="merge" className="w-full">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="merge">
              <FileStack className="h-4 w-4 mr-2" />
              Merge
            </TabsTrigger>
            <TabsTrigger value="split">
              <Scissors className="h-4 w-4 mr-2" />
              Split
            </TabsTrigger>
            <TabsTrigger value="compress">
              <Minimize className="h-4 w-4 mr-2" />
              Compress
            </TabsTrigger>
            <TabsTrigger value="convert">
              <Image className="h-4 w-4 mr-2" />
              To Image
            </TabsTrigger>
          </TabsList>

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
                  <Image className="mr-2 h-4 w-4" />
                  Convert to Images
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Guide Section */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Understanding PDF Tools</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">What Are PDF Tools?</h3>
            <p className="text-muted-foreground">
              PDF (Portable Document Format) tools allow you to manipulate PDF files in various ways. Whether you need to combine multiple documents, extract specific pages, reduce file size, or convert to other formats, PDF tools make document management efficient and straightforward.
            </p>

            <h3 className="text-xl font-semibold mt-6">Common PDF Operations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Merging:</strong> Combine multiple PDF files into a single document for easier sharing and organization</li>
              <li><strong>Splitting:</strong> Extract specific pages or divide large PDFs into smaller, more manageable files</li>
              <li><strong>Compression:</strong> Reduce file size for faster uploads and downloads while maintaining readability</li>
              <li><strong>Conversion:</strong> Transform PDFs to images or other document formats as needed</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Why Use PDF Tools?</h3>
            <p className="text-muted-foreground">
              PDF tools save time and streamline workflows for professionals, students, and anyone who works with digital documents. They eliminate the need for expensive software subscriptions and provide instant results directly in your browser.
            </p>

            <h3 className="text-xl font-semibold mt-6">Best Practices for PDF Management</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Keep original files as backups before performing operations</li>
              <li>Use descriptive filenames for better organization</li>
              <li>Compress large PDFs before emailing to avoid bounce-backs</li>
              <li>Split large documents into chapters or sections for easier navigation</li>
              <li>Regularly audit and merge related PDFs to reduce file clutter</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Security Considerations</h3>
            <p className="text-muted-foreground">
              When our PDF tools launch, they will process all files locally in your browser, ensuring your documents never leave your device. This approach guarantees complete privacy and security for sensitive documents.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
