import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileType } from "lucide-react";

export default function PdfTools() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <FileType className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">PDF Tools</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Merge, split, and optimize PDF documents - coming soon
        </p>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card>
          <CardHeader>
            <CardTitle>PDF Tools Coming Soon</CardTitle>
            <CardDescription>
              We're working on powerful PDF manipulation tools including merge, split, compress, and convert features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Merge PDFs",
                  description: "Combine multiple PDF files into a single document",
                },
                {
                  title: "Split PDFs",
                  description: "Extract specific pages or split by page ranges",
                },
                {
                  title: "Compress PDFs",
                  description: "Reduce file size while maintaining quality",
                },
                {
                  title: "PDF to Image",
                  description: "Convert PDF pages to image format (JPG, PNG)",
                },
              ].map((feature, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
