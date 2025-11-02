import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Upload, Download, Image as ImageIcon, Loader2 } from "lucide-react";

export default function ImageTools() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState([80]);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4">
          <ImageIcon className="h-8 w-8 text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Image Compression Tool</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Reduce image file size while maintaining quality for faster loading times
        </p>
      </div>

      {/* Tool Section */}
      <div className="max-w-6xl mx-auto mb-16">
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
      </div>

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
    </div>
  );
}
