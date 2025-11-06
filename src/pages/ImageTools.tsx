import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Upload, Download, Image as ImageIcon, Loader2, ArrowRightLeft, Maximize, FileJson, Binary, Code, FileText } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TOOL_SEO } from "@/lib/seo-config";
import { AdSense } from "@/components/AdSense";
import { ADSENSE_CONFIG } from "@/lib/adsense-config";
import { jpegToPng, pngToJpeg, toWebP, resizeImage, getImageDimensions, loadImage } from "@/lib/image-converter";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowToUse } from "@/components/seo/HowToUse";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedTools } from "@/components/seo/RelatedTools";

export default function ImageTools() {
  // Compress states
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState([80]);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Converter states
  const [convertFile, setConvertFile] = useState<File | null>(null);
  const [convertQuality, setConvertQuality] = useState([90]);
  const [convertLoading, setConvertLoading] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [estimatedJpegSize, setEstimatedJpegSize] = useState<number | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  
  // Resize states
  const [resizeFile, setResizeFile] = useState<File | null>(null);
  const [resizeWidth, setResizeWidth] = useState<number>(1920);
  const [resizeHeight, setResizeHeight] = useState<number>(1080);
  const [resizeQuality, setResizeQuality] = useState([90]);
  const [resizeLoading, setResizeLoading] = useState(false);
  const [resizeDimensions, setResizeDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error("Please select a valid image file");
        return;
      }

      setOriginalSize(file.size);
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setCompressedImage(null);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const compressImage = async () => {
    if (!selectedImage) {
      toast.error("Please upload an image first");
      return;
    }

    setLoading(true);
    
    try {
      const img = new Image();
      img.src = selectedImage;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error("Could not get canvas context");
      
      ctx.drawImage(img, 0, 0);
      
      const compressed = canvas.toDataURL('image/jpeg', quality[0] / 100);
      setCompressedImage(compressed);
      
      // Calculate compressed size (approximate)
      const base64Length = compressed.length - (compressed.indexOf(',') + 1);
      const padding = (compressed.charAt(compressed.length - 2) === '=') ? 2 : ((compressed.charAt(compressed.length - 1) === '=') ? 1 : 0);
      const compSize = (base64Length * 0.75) - padding;
      setCompressedSize(compSize);
      
      toast.success("Image compressed successfully!");
    } catch (error) {
      toast.error("Failed to compress image");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!compressedImage) return;
    
    const link = document.createElement('a');
    link.href = compressedImage;
    link.download = 'compressed-image.jpg';
    link.click();
    toast.success("Image downloaded!");
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const savingsPercent = originalSize > 0 
    ? Math.round(((originalSize - compressedSize) / originalSize) * 100)
    : 0;
  
  // Converter handlers
  const estimateJpegSize = async (file: File, quality: number) => {
    try {
      const img = await loadImage(file);
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      ctx.drawImage(img, 0, 0);
      
      return new Promise<number>((resolve) => {
        canvas.toBlob(
          (blob) => {
            resolve(blob ? blob.size : 0);
          },
          'image/jpeg',
          quality / 100
        );
      });
    } catch (error) {
      console.error('Failed to estimate JPEG size:', error);
      return null;
    }
  };

  const generateQualityPreview = async (file: File, quality: number) => {
    try {
      setIsGeneratingPreview(true);
      const img = await loadImage(file);
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      ctx.drawImage(img, 0, 0);
      
      return new Promise<string | null>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              resolve(url);
            } else {
              resolve(null);
            }
          },
          'image/jpeg',
          quality / 100
        );
      });
    } catch (error) {
      console.error('Failed to generate preview:', error);
      return null;
    } finally {
      setIsGeneratingPreview(false);
    }
  };

  const handleConvertFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error("Please select a valid image file");
        return;
      }
      
      // Clean up previous URLs
      if (originalImageUrl) URL.revokeObjectURL(originalImageUrl);
      if (previewImageUrl) URL.revokeObjectURL(previewImageUrl);
      
      setConvertFile(file);
      
      // Create original image URL
      const originalUrl = URL.createObjectURL(file);
      setOriginalImageUrl(originalUrl);
      
      try {
        const dims = await getImageDimensions(file);
        setImageDimensions(dims);
        
        // Generate initial preview at current quality
        const estimatedSize = await estimateJpegSize(file, convertQuality[0]);
        setEstimatedJpegSize(estimatedSize);
        
        const previewUrl = await generateQualityPreview(file, convertQuality[0]);
        setPreviewImageUrl(previewUrl);
      } catch (error) {
        console.error("Failed to process image:", error);
      }
    }
  };

  // Debounce preview generation for performance
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (convertFile) {
      // Clear existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      
      // Set new timeout for preview generation
      debounceTimeoutRef.current = setTimeout(async () => {
        const estimatedSize = await estimateJpegSize(convertFile, convertQuality[0]);
        setEstimatedJpegSize(estimatedSize);
        
        if (previewImageUrl) {
          URL.revokeObjectURL(previewImageUrl);
        }
        
        const previewUrl = await generateQualityPreview(convertFile, convertQuality[0]);
        setPreviewImageUrl(previewUrl);
      }, 300); // 300ms debounce
    }
    
    // Cleanup
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [convertQuality, convertFile]);

  // Cleanup URLs on unmount
  useEffect(() => {
    return () => {
      if (originalImageUrl) URL.revokeObjectURL(originalImageUrl);
      if (previewImageUrl) URL.revokeObjectURL(previewImageUrl);
    };
  }, []);
  
  const handleJpegToPng = async () => {
    if (!convertFile) {
      toast.error("Please upload a JPEG image first");
      return;
    }
    setConvertLoading(true);
    try {
      await jpegToPng(convertFile);
      toast.success("JPEG converted to PNG successfully!");
    } catch (error) {
      toast.error("Failed to convert JPEG to PNG");
      console.error(error);
    } finally {
      setConvertLoading(false);
    }
  };
  
  const handlePngToJpeg = async () => {
    if (!convertFile) {
      toast.error("Please upload a PNG image first");
      return;
    }
    setConvertLoading(true);
    try {
      await pngToJpeg(convertFile, convertQuality[0] / 100);
      toast.success("PNG converted to JPEG successfully!");
    } catch (error) {
      toast.error("Failed to convert PNG to JPEG");
      console.error(error);
    } finally {
      setConvertLoading(false);
    }
  };
  
  const handleToWebP = async () => {
    if (!convertFile) {
      toast.error("Please upload an image first");
      return;
    }
    setConvertLoading(true);
    try {
      await toWebP(convertFile, convertQuality[0] / 100);
      toast.success("Image converted to WebP successfully!");
    } catch (error) {
      toast.error("Failed to convert to WebP");
      console.error(error);
    } finally {
      setConvertLoading(false);
    }
  };
  
  // Resize handlers
  const handleResizeFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error("Please select a valid image file");
        return;
      }
      setResizeFile(file);
      try {
        const dims = await getImageDimensions(file);
        setResizeDimensions(dims);
        setResizeWidth(dims.width);
        setResizeHeight(dims.height);
      } catch (error) {
        console.error("Failed to get image dimensions:", error);
      }
    }
  };
  
  const handleResizeImage = async () => {
    if (!resizeFile) {
      toast.error("Please upload an image first");
      return;
    }
    setResizeLoading(true);
    try {
      await resizeImage(resizeFile, resizeWidth, resizeHeight, resizeQuality[0] / 100);
      toast.success("Image resized successfully!");
    } catch (error) {
      toast.error("Failed to resize image");
      console.error(error);
    } finally {
      setResizeLoading(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Image Compressor",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "featureList": "Compress images, Optimize images, Reduce file size, Quality control, Download compressed images"
  };

  const breadcrumbItems = [{ label: "Image Tools" }];

  const howToSteps = [
    { title: "Select Your Tool", description: "Choose from Compress, Convert (JPEG to PNG, PNG to JPEG, to WebP), or Resize. Each tool is optimized for specific image optimization tasks." },
    { title: "Upload Image", description: "Click 'Browse' or drag your image file. The tool accepts JPEG, PNG, and other common formats. You'll see a preview and current file size." },
    { title: "Adjust Settings", description: "Use the quality slider for compression, select output format for conversion, or set dimensions for resizing. Then process and download your optimized image." }
  ];

  const faqs = [
    { question: "How to compress image without losing quality?", answer: "Use quality settings between 80-90% for visually lossless compression. Our tool reduces file size by removing metadata and optimizing encoding while preserving visible detail. For web use, 80% quality typically reduces file size by 40-60% with imperceptible quality loss." },
    { question: "How to convert JPEG to PNG online free?", answer: "Select the 'JPEG → PNG' tab, upload your JPEG file, and click 'Convert to PNG'. PNG format supports transparency and is lossless, making it ideal for logos, graphics with text, and images requiring transparency. The conversion is instant and free." },
    { question: "How to convert PNG to JPEG?", answer: "Use the 'PNG → JPEG' tab, upload your PNG, adjust the quality slider (85-95% recommended), and click convert. JPEG is better for photographs and significantly reduces file size compared to PNG. Note that transparency is lost in conversion." },
    { question: "What's the best image compressor?", answer: "The best compressor balances quality and file size reduction. Our tool uses browser-native compression for client-side processing, meaning your images never leave your device. You control quality with a slider, preview results instantly, and can compare original vs compressed." },
    { question: "How to convert images to WebP?", answer: "Click the 'To WebP' tab, upload any image format, adjust quality (90% recommended for best results), and convert. WebP provides 25-35% better compression than JPEG while maintaining similar quality, making it excellent for modern websites." },
    { question: "Is WebP better than JPEG?", answer: "Yes, WebP typically achieves 25-35% smaller file sizes than JPEG at equivalent quality levels. It supports both lossy and lossless compression, plus transparency. Modern browsers (Chrome, Firefox, Edge, Safari 14+) fully support WebP, making it ideal for web performance optimization." },
    { question: "How to reduce image file size?", answer: "Use our compression tool with 70-85% quality setting. This typically reduces file size by 50-70% while maintaining good visual quality. For further reduction, resize large images to actual display dimensions, convert to WebP format, and remove unnecessary metadata." },
    { question: "Best image format for web?", answer: "WebP is best for modern websites (smaller files, better quality). Use JPEG for photographs and complex images, PNG for logos and graphics with transparency, SVG for icons and simple graphics. Always compress images before uploading to your website." },
    { question: "How to resize images online?", answer: "Use the 'Resize' tab, upload your image, set target width and height in pixels, adjust quality (90% recommended), and click 'Resize Image'. Maintain aspect ratio by calculating proportions, or set custom dimensions for specific requirements." },
    { question: "Does image compression reduce quality?", answer: "Lossy compression (JPEG, WebP) reduces quality slightly but imperceptibly at 70-90% settings. Lossless compression (PNG) maintains perfect quality but achieves less file size reduction. For web use, lossy compression at 80% offers the best balance of quality and file size." },
    { question: "How to optimize images for website?", answer: "Resize to actual display size, compress at 70-85% quality, convert to WebP when possible, add proper width/height attributes in HTML, use lazy loading for below-fold images, and serve different sizes for mobile vs desktop using responsive images." },
    { question: "JPEG vs PNG vs WebP comparison?", answer: "JPEG: Best for photos, lossy compression, no transparency, widely supported. PNG: Lossless, supports transparency, larger files, best for logos/graphics. WebP: Best compression, supports transparency, modern format, requires browser support. Choose based on image type and browser requirements." },
    { question: "How to compress images for email?", answer: "Use 60-75% quality compression to significantly reduce file size. Resize to maximum 800px width for email viewing. Keep total email size under 2MB. Consider converting to JPEG for photos. Test in multiple email clients to ensure proper display." },
    { question: "Best compression ratio for images?", answer: "For web: 70-85% balances quality and size. For email: 60-75% for smaller files. For print: 90-100% maintains detail. For thumbnails: 60-70% is acceptable. Test at different levels and choose the lowest quality that maintains acceptable visual appearance." }
  ];

  const relatedTools = [
    { title: "PDF Tools", description: "Convert images to PDF", path: "/pdf-tools", icon: FileText },
    { title: "Base64 Tools", description: "Encode images as Base64", path: "/base64-tools", icon: Binary },
    { title: "API Tester", description: "Test image upload APIs", path: "/api-tester", icon: Code },
    { title: "JSON Formatter", description: "Format image metadata", path: "/json-formatter", icon: FileJson }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={TOOL_SEO.imageTools.title}
        description={TOOL_SEO.imageTools.description}
        keywords={TOOL_SEO.imageTools.keywords}
        path={TOOL_SEO.imageTools.path}
        schema={schema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <ImageIcon className="h-8 w-8 text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Image Tools: Compress & Convert Images Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compress images, convert JPEG to PNG, PNG to JPEG, and to WebP format. Resize images with quality control.
        </p>
      </div>

      {/* Tool Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <Tabs defaultValue="compress" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full gap-1">
            <TabsTrigger value="compress">
              <ImageIcon className="h-4 w-4 mr-2" />
              Compress
            </TabsTrigger>
            <TabsTrigger value="jpeg-to-png">
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              JPEG → PNG
            </TabsTrigger>
            <TabsTrigger value="png-to-jpeg">
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              PNG → JPEG
            </TabsTrigger>
            <TabsTrigger value="to-webp">
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              To WebP
            </TabsTrigger>
            <TabsTrigger value="resize">
              <Maximize className="h-4 w-4 mr-2" />
              Resize
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="compress">
        <Card>
          <CardHeader>
            <CardTitle>Compress Your Image</CardTitle>
            <CardDescription>Upload an image and adjust the quality slider to compress it</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="image-upload">Upload Image</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Browse
                </Button>
              </div>
            </div>

            {selectedImage && (
              <>
                <div>
                  <Label>Quality: {quality[0]}%</Label>
                  <Slider
                    value={quality}
                    onValueChange={setQuality}
                    min={1}
                    max={100}
                    step={1}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Lower quality = smaller file size. Recommended: 70-90%
                  </p>
                </div>

                <Button 
                  onClick={compressImage} 
                  disabled={loading}
                  className="w-full gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Compressing...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-4 w-4" />
                      Compress Image
                    </>
                  )}
                </Button>
              </>
            )}

            {(selectedImage || compressedImage) && (
              <div className="grid md:grid-cols-2 gap-4">
                {selectedImage && (
                  <div>
                    <Label className="mb-2 block">Original Image</Label>
                    <div className="border rounded-lg p-4 bg-muted">
                      <img
                        src={selectedImage}
                        alt="Original"
                        className="w-full h-auto rounded"
                      />
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        Size: {formatFileSize(originalSize)}
                      </p>
                    </div>
                  </div>
                )}

                {compressedImage && (
                  <div>
                    <Label className="mb-2 block">Compressed Image</Label>
                    <div className="border rounded-lg p-4 bg-muted">
                      <img
                        src={compressedImage}
                        alt="Compressed"
                        className="w-full h-auto rounded"
                      />
                      <div className="mt-2 text-sm text-center">
                        <p className="text-muted-foreground">Size: {formatFileSize(compressedSize)}</p>
                        <p className="text-success font-medium">Saved {savingsPercent}%</p>
                      </div>
                    </div>
                    <Button
                      onClick={downloadImage}
                      variant="outline"
                      className="w-full mt-2 gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download Compressed Image
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
          </TabsContent>
          
          <TabsContent value="jpeg-to-png">
            <Card>
              <CardHeader>
                <CardTitle>JPEG to PNG Converter</CardTitle>
                <CardDescription>Convert JPEG/JPG images to PNG format (lossless)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="jpeg-to-png-upload">Upload JPEG Image</Label>
                  <Input
                    id="jpeg-to-png-upload"
                    type="file"
                    accept="image/jpeg,image/jpg"
                    onChange={handleConvertFileChange}
                    className="mt-2"
                  />
                  {convertFile && imageDimensions && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {convertFile.name} - {imageDimensions.width} × {imageDimensions.height}px ({formatFileSize(convertFile.size)})
                    </p>
                  )}
                </div>
                <Button 
                  onClick={handleJpegToPng} 
                  disabled={!convertFile || convertLoading}
                  className="w-full gap-2"
                >
                  {convertLoading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Converting...</>
                  ) : (
                    <><ArrowRightLeft className="h-4 w-4" /> Convert to PNG</>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  PNG format supports transparency and is lossless. Great for logos and graphics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="png-to-jpeg">
            <Card>
              <CardHeader>
                <CardTitle>PNG to JPEG Converter</CardTitle>
                <CardDescription>Convert PNG images to JPEG format with quality control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="png-to-jpeg-upload">Upload PNG Image</Label>
                  <Input
                    id="png-to-jpeg-upload"
                    type="file"
                    accept="image/png"
                    onChange={handleConvertFileChange}
                    className="mt-2"
                  />
                  {convertFile && imageDimensions && (
                    <div className="mt-4 space-y-4">
                      {/* File Info */}
                      <p className="text-sm text-muted-foreground">
                        {convertFile.name} - {imageDimensions.width} × {imageDimensions.height}px
                      </p>
                      
                      {/* Image Comparison View */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Original Image */}
                        <div className="space-y-2">
                          <div className="bg-muted p-2 rounded text-center">
                            <p className="text-xs text-muted-foreground font-medium">Original PNG</p>
                            <p className="text-sm font-bold">{formatFileSize(convertFile.size)}</p>
                          </div>
                          {originalImageUrl && (
                            <div className="border rounded-lg overflow-hidden bg-muted">
                              <img 
                                src={originalImageUrl} 
                                alt="Original" 
                                className="w-full h-auto max-h-64 object-contain"
                              />
                            </div>
                          )}
                        </div>
                        
                        {/* Preview Image */}
                        <div className="space-y-2">
                          <div className="bg-muted p-2 rounded text-center">
                            <p className="text-xs text-muted-foreground font-medium">Preview JPEG @ {convertQuality[0]}%</p>
                            <p className="text-sm font-bold">
                              {estimatedJpegSize ? formatFileSize(estimatedJpegSize) : 'Calculating...'}
                            </p>
                            {estimatedJpegSize && convertFile.size > estimatedJpegSize && (
                              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                                ↓ {Math.round((1 - estimatedJpegSize / convertFile.size) * 100)}% smaller
                              </p>
                            )}
                          </div>
                          {previewImageUrl && (
                            <div className="border rounded-lg overflow-hidden bg-muted relative">
                              {isGeneratingPreview && (
                                <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10">
                                  <Loader2 className="h-6 w-6 animate-spin" />
                                </div>
                              )}
                              <img 
                                src={previewImageUrl} 
                                alt="Preview" 
                                className="w-full h-auto max-h-64 object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {convertFile && (
                  <div>
                    <Label>JPEG Quality: {convertQuality[0]}%</Label>
                    <Slider
                      value={convertQuality}
                      onValueChange={setConvertQuality}
                      min={1}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Higher quality = larger file size. Recommended: 85-95%
                    </p>
                  </div>
                )}
                <Button 
                  onClick={handlePngToJpeg} 
                  disabled={!convertFile || convertLoading}
                  className="w-full gap-2"
                >
                  {convertLoading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Converting...</>
                  ) : (
                    <><ArrowRightLeft className="h-4 w-4" /> Convert to JPEG</>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  JPEG is smaller than PNG but doesn't support transparency. Best for photos.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="to-webp">
            <Card>
              <CardHeader>
                <CardTitle>Convert to WebP</CardTitle>
                <CardDescription>Convert any image to modern WebP format (30% smaller)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="to-webp-upload">Upload Image (JPEG/PNG)</Label>
                  <Input
                    id="to-webp-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleConvertFileChange}
                    className="mt-2"
                  />
                  {convertFile && imageDimensions && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {convertFile.name} - {imageDimensions.width} × {imageDimensions.height}px ({formatFileSize(convertFile.size)})
                    </p>
                  )}
                </div>
                {convertFile && (
                  <div>
                    <Label>WebP Quality: {convertQuality[0]}%</Label>
                    <Slider
                      value={convertQuality}
                      onValueChange={setConvertQuality}
                      min={1}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      WebP offers superior compression. Recommended: 80-90%
                    </p>
                  </div>
                )}
                <Button 
                  onClick={handleToWebP} 
                  disabled={!convertFile || convertLoading}
                  className="w-full gap-2"
                >
                  {convertLoading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Converting...</>
                  ) : (
                    <><ArrowRightLeft className="h-4 w-4" /> Convert to WebP</>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  WebP is 30% smaller than JPEG/PNG with same quality. Supported by all modern browsers.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resize">
            <Card>
              <CardHeader>
                <CardTitle>Resize Image</CardTitle>
                <CardDescription>Resize images with custom dimensions and quality control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="resize-upload">Upload Image</Label>
                  <Input
                    id="resize-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleResizeFileChange}
                    className="mt-2"
                  />
                  {resizeFile && resizeDimensions && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Original: {resizeDimensions.width} × {resizeDimensions.height}px ({formatFileSize(resizeFile.size)})
                    </p>
                  )}
                </div>
                {resizeFile && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="resize-width">Max Width (px)</Label>
                        <Input
                          id="resize-width"
                          type="number"
                          min="1"
                          value={resizeWidth}
                          onChange={(e) => setResizeWidth(parseInt(e.target.value) || 1920)}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="resize-height">Max Height (px)</Label>
                        <Input
                          id="resize-height"
                          type="number"
                          min="1"
                          value={resizeHeight}
                          onChange={(e) => setResizeHeight(parseInt(e.target.value) || 1080)}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Quality: {resizeQuality[0]}%</Label>
                      <Slider
                        value={resizeQuality}
                        onValueChange={setResizeQuality}
                        min={1}
                        max={100}
                        step={1}
                        className="mt-2"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Image will be resized to fit within max dimensions while maintaining aspect ratio.
                      </p>
                    </div>
                  </>
                )}
                <Button 
                  onClick={handleResizeImage} 
                  disabled={!resizeFile || resizeLoading}
                  className="w-full gap-2"
                >
                  {resizeLoading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Resizing...</>
                  ) : (
                    <><Maximize className="h-4 w-4" /> Resize Image</>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* AdSense - After Image Compression Tool */}
      <div className="max-w-6xl mx-auto mb-16">
        <AdSense 
          adSlot={ADSENSE_CONFIG.adSlots.imageToolsInArticle}
          adFormat="auto"
          style={{ display: 'block', minHeight: '250px' }}
        />
      </div>

      <HowToUse steps={howToSteps} toolName="Image Tools" />

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Adjustable Quality",
              description: "Fine-tune compression with a quality slider from 1% to 100%",
            },
            {
              title: "Instant Preview",
              description: "Compare original and compressed images side-by-side",
            },
            {
              title: "File Size Reduction",
              description: "See exactly how much space you're saving in real-time",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog/Guide Section */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Image Compression Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
            <h3 className="text-xl font-semibold">Why Compress Images?</h3>
            <p className="text-muted-foreground">
              Large image files significantly slow down websites, leading to poor user experience and lower search engine rankings. Image compression reduces file size while maintaining visual quality, resulting in faster page loads and lower bandwidth costs.
            </p>

            <h3 className="text-xl font-semibold mt-6">Understanding Image Quality</h3>
            <p className="text-muted-foreground">
              The quality slider controls the compression ratio. Higher values (80-100%) maintain more detail but produce larger files. Lower values (40-70%) create smaller files with some quality loss. For web use, 70-85% typically offers the best balance between quality and file size.
            </p>

            <h3 className="text-xl font-semibold mt-6">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use JPEG for photographs and images with many colors</li>
              <li>Target 70-85% quality for most web images</li>
              <li>Compress images before uploading to your website or CMS</li>
              <li>Use modern formats like WebP when browser support allows</li>
              <li>Always keep backup copies of original high-resolution images</li>
              <li>Test compressed images on actual devices to verify quality</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Impact on Website Performance</h3>
            <p className="text-muted-foreground">
              Optimized images can reduce page load times by 50% or more. This improvement directly affects user engagement, conversion rates, and SEO rankings. Google considers page speed a ranking factor, making image compression essential for competitive websites.
            </p>

            <h3 className="text-xl font-semibold mt-6">When to Use Different Quality Levels</h3>
            <p className="text-muted-foreground">
              Use 90-100% quality for portfolio images, product photos where detail matters, and images that will be zoomed. Use 70-85% for general website images, blog post illustrations, and thumbnails. Use 40-70% for background images, decorative elements, and cases where file size is critical.
            </p>
          </CardContent>
        </Card>
      </div>

      <FAQ faqs={faqs} />

      <RelatedTools tools={relatedTools} />
    </div>
  );
}
