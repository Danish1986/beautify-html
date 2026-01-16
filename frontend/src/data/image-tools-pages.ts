// Image Tools SEO Landing Pages

import { 
  Image, Minimize2, Maximize2, Crop, RotateCw, Palette,
  FileImage, Layers, Wand2, Camera, ArrowLeftRight,
  LucideIcon
} from "lucide-react";

export interface ImagePageData {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlight?: string;
  primaryCta: string;
  primaryCtaPath: string;
  icon: LucideIcon;
  iconColor: string;
  category: string;
  toolDescription: string;
  features: Array<{ title: string; description: string; details?: string[] }>;
  howItWorks: Array<{ title: string; description: string }>;
  useCases: Array<{ title: string; description: string }>;
  whyChoose: string[];
  tips: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedTools: Array<{ title: string; description: string; path: string }>;
  schema: object;
}

export const imageToolsPages: ImagePageData[] = [
  {
    slug: "image-compressor",
    title: "Free Image Compressor - Reduce Image Size by 80% Without Quality Loss",
    description: "Compress JPG, PNG, WebP images by up to 80% without visible quality loss. Perfect for websites, emails, social media. 100% free, browser-based.",
    keywords: "image compressor, compress image, reduce image size, image compression, jpg compressor, png compressor, compress photos online",
    heroTitle: "Free Image Compressor - Reduce File Size by 80%",
    heroSubtitle: "Compress images without visible quality loss. Perfect for faster websites, smaller email attachments, and optimized social media posts.",
    heroHighlight: "Reduce 10MB images to under 2MB with no visible quality loss",
    primaryCta: "Compress Images Now",
    primaryCtaPath: "/image-tools",
    icon: Minimize2,
    iconColor: "text-green-500",
    category: "tool",
    toolDescription: "Our advanced image compressor uses intelligent algorithms to reduce file sizes by up to 80% while maintaining visual quality. Support for JPG, PNG, GIF, and WebP formats with real-time quality preview. Perfect for web developers, bloggers, marketers, and anyone who needs smaller image files without sacrificing quality.",
    features: [
      { title: "Smart Compression", description: "Intelligent algorithms maintain visual quality.", details: ["Lossy & lossless options", "Quality slider (1-100)", "Real-time preview", "Side-by-side comparison"] },
      { title: "Multiple Formats", description: "Compress various image formats.", details: ["JPG/JPEG", "PNG", "WebP", "GIF"] },
      { title: "Batch Processing", description: "Compress multiple images at once.", details: ["Upload 50+ images", "Same settings for all", "Individual settings", "Bulk download"] },
      { title: "Size Targets", description: "Compress to specific file sizes.", details: ["Target file size", "Maximum dimensions", "Auto-optimize", "Custom quality"] }
    ],
    howItWorks: [
      { title: "Upload Images", description: "Select or drag images to compress" },
      { title: "Set Quality", description: "Adjust compression level" },
      { title: "Preview", description: "See before/after comparison" },
      { title: "Download", description: "Get compressed images" }
    ],
    useCases: [
      { title: "Website Optimization", description: "Compress images for faster page load times and better SEO rankings." },
      { title: "Email Attachments", description: "Reduce image sizes to fit email attachment limits." },
      { title: "Social Media", description: "Optimize images for Facebook, Instagram, Twitter uploads." },
      { title: "E-commerce", description: "Compress product images for faster shopping experiences." }
    ],
    whyChoose: ["80% size reduction", "Quality maintained", "Batch processing", "Real-time preview", "100% private", "Free forever"],
    tips: ["Use quality 80-85 for web images - best balance of size and quality.", "PNG compression is lossless - use for graphics with text.", "Enable WebP output for 30% smaller files on supported browsers."],
    faqs: [
      { question: "Will compression affect image quality?", answer: "With our smart compression, quality loss is imperceptible at recommended settings (80-85)." },
      { question: "What's the maximum compression possible?", answer: "Typically 50-80% reduction. Image-heavy content compresses more than simple graphics." },
      { question: "Can I compress multiple images?", answer: "Yes, batch processing supports 50+ images simultaneously." }
    ],
    relatedTools: [
      { title: "Image Resizer", description: "Resize image dimensions", path: "/image-resizer" },
      { title: "PNG to JPG", description: "Convert PNG to smaller JPG", path: "/png-to-jpg-converter" },
      { title: "WebP Converter", description: "Convert to modern WebP", path: "/webp-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Image Compressor", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "image-resizer",
    title: "Free Image Resizer - Resize Images Online Without Quality Loss",
    description: "Resize images to exact dimensions or percentage. Maintain aspect ratio, crop to fit. Perfect for social media, web, print. 100% free.",
    keywords: "image resizer, resize image, resize photo, image resize online, change image size, resize picture, photo resizer free",
    heroTitle: "Free Image Resizer - Resize to Any Dimension",
    heroSubtitle: "Resize images to exact pixel dimensions or percentage. Maintain aspect ratio or crop to fit. Perfect for social media, web, and print.",
    heroHighlight: "Preset sizes for all social media platforms",
    primaryCta: "Resize Images Now",
    primaryCtaPath: "/image-tools",
    icon: Maximize2,
    iconColor: "text-blue-500",
    category: "tool",
    toolDescription: "Our image resizer lets you change image dimensions quickly and easily. Resize to exact pixel dimensions, percentage of original, or use presets for popular social media sizes. Options to maintain aspect ratio, crop to fit, or stretch. High-quality resizing algorithms ensure sharp output.",
    features: [
      { title: "Exact Dimensions", description: "Resize to specific pixel sizes.", details: ["Width x Height", "Percentage scale", "One dimension", "Maximum size"] },
      { title: "Social Media Presets", description: "Quick sizes for popular platforms.", details: ["Instagram (1080x1080)", "Facebook (1200x630)", "Twitter (1600x900)", "LinkedIn (1200x627)"] },
      { title: "Aspect Ratio Options", description: "Control how images are resized.", details: ["Maintain ratio", "Crop to fit", "Stretch/distort", "Add padding"] },
      { title: "Quality Control", description: "Maintain image quality when resizing.", details: ["High-quality algorithm", "Anti-aliasing", "Sharpening option", "Format conversion"] }
    ],
    howItWorks: [
      { title: "Upload Image", description: "Select image to resize" },
      { title: "Set Dimensions", description: "Enter size or choose preset" },
      { title: "Preview", description: "See resized result" },
      { title: "Download", description: "Get resized image" }
    ],
    useCases: [
      { title: "Social Media Posts", description: "Resize images for optimal display on Instagram, Facebook, Twitter." },
      { title: "Website Images", description: "Create consistent image sizes for web galleries and blogs." },
      { title: "Email Signatures", description: "Resize photos for professional email signatures." },
      { title: "Print Preparation", description: "Resize images to specific print dimensions." }
    ],
    whyChoose: ["Exact dimensions", "Social presets", "Aspect ratio options", "High quality", "100% private", "Free forever"],
    tips: ["Use 'Maintain aspect ratio' to prevent distortion.", "Social media presets ensure optimal display on each platform.", "For print, resize to 300 DPI at final dimensions."],
    faqs: [
      { question: "Will resizing reduce quality?", answer: "Enlarging images can reduce quality. Shrinking maintains quality with our algorithms." },
      { question: "Can I resize to specific social media sizes?", answer: "Yes, we have presets for Instagram, Facebook, Twitter, LinkedIn, and more." },
      { question: "What about aspect ratio?", answer: "You can maintain ratio, crop to fit, or allow distortion based on your needs." }
    ],
    relatedTools: [
      { title: "Image Compressor", description: "Compress resized images", path: "/image-compressor" },
      { title: "Image Cropper", description: "Crop before resizing", path: "/image-cropper" },
      { title: "Bulk Image Resizer", description: "Resize many images", path: "/bulk-image-resizer" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Image Resizer", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "image-cropper",
    title: "Free Image Cropper - Crop Photos Online Instantly",
    description: "Crop images to any size or aspect ratio. Remove unwanted areas, focus on subjects. Preset ratios for social media. 100% free, browser-based.",
    keywords: "image cropper, crop image online, photo cropper, crop picture, image crop tool, crop photo free, crop image to size",
    heroTitle: "Free Image Cropper - Crop Photos Instantly",
    heroSubtitle: "Crop images to any size or aspect ratio. Remove unwanted areas and focus on what matters. Preset ratios for common uses.",
    heroHighlight: "Drag-to-select cropping with real-time preview",
    primaryCta: "Crop Images Now",
    primaryCtaPath: "/image-tools",
    icon: Crop,
    iconColor: "text-purple-500",
    category: "tool",
    toolDescription: "Our image cropper lets you precisely select and extract portions of images. Interactive drag-to-select interface with preset aspect ratios for common uses. Perfect for removing unwanted backgrounds, focusing on subjects, or creating consistent image sizes.",
    features: [
      { title: "Interactive Cropping", description: "Drag to select crop area visually.", details: ["Drag corners", "Move selection", "Precise coordinates", "Zoom for detail"] },
      { title: "Aspect Ratio Presets", description: "Lock to common ratios.", details: ["1:1 (Square)", "16:9 (Widescreen)", "4:3 (Standard)", "Custom ratio"] },
      { title: "Precise Controls", description: "Enter exact crop dimensions.", details: ["X, Y coordinates", "Width & height", "Center point", "Rotation angle"] },
      { title: "Real-time Preview", description: "See final result as you crop.", details: ["Live preview", "Grid overlay", "Rule of thirds", "Before/after"] }
    ],
    howItWorks: [
      { title: "Upload Image", description: "Select image to crop" },
      { title: "Select Area", description: "Drag to select crop region" },
      { title: "Adjust", description: "Fine-tune selection" },
      { title: "Download", description: "Get cropped image" }
    ],
    useCases: [
      { title: "Social Media Profiles", description: "Crop images to square for profile pictures." },
      { title: "Product Photos", description: "Remove backgrounds and focus on products for e-commerce." },
      { title: "Portrait Extraction", description: "Crop photos to focus on faces for ID photos." },
      { title: "Banner Creation", description: "Crop images to wide aspect ratios for website banners." }
    ],
    whyChoose: ["Interactive cropping", "Aspect presets", "Precise controls", "Real-time preview", "100% private", "Free forever"],
    tips: ["Use rule of thirds grid for better composition.", "Lock aspect ratio for consistent sizing.", "Zoom in for precise edge selection."],
    faqs: [
      { question: "Can I crop to specific dimensions?", answer: "Yes, enter exact pixel dimensions or use aspect ratio presets." },
      { question: "Is there a grid overlay?", answer: "Yes, enable rule of thirds grid for better composition while cropping." },
      { question: "Can I undo crop selections?", answer: "Yes, reset or adjust your selection at any time before downloading." }
    ],
    relatedTools: [
      { title: "Image Resizer", description: "Resize after cropping", path: "/image-resizer" },
      { title: "Image Compressor", description: "Compress cropped images", path: "/image-compressor" },
      { title: "Image Rotator", description: "Rotate before cropping", path: "/image-rotator" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Image Cropper", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "png-to-jpg-converter",
    title: "Free PNG to JPG Converter - Convert PNG to JPEG Online",
    description: "Convert PNG images to JPG format instantly. Reduce file size, remove transparency. Batch conversion supported. 100% free, browser-based.",
    keywords: "png to jpg, convert png to jpg, png to jpeg, png jpg converter, change png to jpg, png to jpg online free",
    heroTitle: "Free PNG to JPG Converter - Reduce File Size",
    heroSubtitle: "Convert PNG images to smaller JPG files. Perfect for web uploads, email attachments, and reducing storage. Batch conversion available.",
    heroHighlight: "Reduce PNG file sizes by 50-70% when converting to JPG",
    primaryCta: "Convert PNG to JPG",
    primaryCtaPath: "/image-tools",
    icon: ArrowLeftRight,
    iconColor: "text-orange-500",
    category: "tool",
    toolDescription: "Our PNG to JPG converter transforms PNG images to the more compact JPEG format. JPG files are typically 50-70% smaller than PNGs, making them ideal for web use, email attachments, and storage optimization. Control quality levels and handle transparent backgrounds.",
    features: [
      { title: "Size Reduction", description: "JPG files are significantly smaller.", details: ["50-70% smaller", "Quality control", "Web optimized", "Fast loading"] },
      { title: "Background Handling", description: "Options for PNG transparency.", details: ["White background", "Custom color", "Remove alpha", "Preserve edges"] },
      { title: "Quality Control", description: "Balance size vs quality.", details: ["Quality slider", "Preview output", "Size estimate", "Comparison view"] },
      { title: "Batch Conversion", description: "Convert multiple PNGs at once.", details: ["Upload many files", "Same settings", "Bulk download", "Zip archive"] }
    ],
    howItWorks: [
      { title: "Upload PNG", description: "Select PNG images" },
      { title: "Set Quality", description: "Choose JPG quality level" },
      { title: "Background", description: "Set color for transparency" },
      { title: "Download JPG", description: "Get converted images" }
    ],
    useCases: [
      { title: "Website Optimization", description: "Convert PNGs to smaller JPGs for faster page loads." },
      { title: "Email Attachments", description: "Reduce image sizes for email attachment limits." },
      { title: "Storage Savings", description: "Convert large PNG libraries to JPG to save disk space." },
      { title: "Social Sharing", description: "Create smaller files for faster social media uploads." }
    ],
    whyChoose: ["50-70% smaller", "Background options", "Quality control", "Batch support", "100% private", "Free forever"],
    tips: ["Use 85-90 quality for best size/quality balance.", "Choose white background for most web uses.", "Keep original PNGs if you need transparency later."],
    faqs: [
      { question: "Why convert PNG to JPG?", answer: "JPG files are much smaller than PNGs, ideal for web use and storage optimization." },
      { question: "What happens to transparency?", answer: "JPG doesn't support transparency. You can set a background color for transparent areas." },
      { question: "Will quality be affected?", answer: "JPG is lossy, but at 85-90 quality, the difference is usually imperceptible." }
    ],
    relatedTools: [
      { title: "JPG to PNG", description: "Convert JPG to PNG", path: "/jpg-to-png-converter" },
      { title: "Image Compressor", description: "Further compress images", path: "/image-compressor" },
      { title: "WebP Converter", description: "Convert to modern WebP", path: "/webp-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "PNG to JPG Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "jpg-to-png-converter",
    title: "Free JPG to PNG Converter - Convert JPEG to PNG Online",
    description: "Convert JPG images to PNG format. Add transparency, preserve quality. Perfect for graphics and logos. 100% free, browser-based conversion.",
    keywords: "jpg to png, convert jpg to png, jpeg to png, jpg png converter, change jpg to png, jpg to png online free",
    heroTitle: "Free JPG to PNG Converter - Add Transparency Support",
    heroSubtitle: "Convert JPG images to PNG format for transparency support and lossless quality. Perfect for graphics, logos, and image editing.",
    heroHighlight: "PNG supports transparency and lossless quality",
    primaryCta: "Convert JPG to PNG",
    primaryCtaPath: "/image-tools",
    icon: ArrowLeftRight,
    iconColor: "text-blue-500",
    category: "tool",
    toolDescription: "Our JPG to PNG converter transforms JPEG images to PNG format. PNG supports transparency (alpha channel) and lossless compression, making it ideal for graphics, logos, and images requiring editing. The conversion preserves image quality without additional compression.",
    features: [
      { title: "Transparency Ready", description: "PNG format supports alpha channel.", details: ["Full transparency", "Semi-transparency", "Alpha channel", "Layer ready"] },
      { title: "Lossless Quality", description: "No quality degradation in conversion.", details: ["No compression loss", "Original colors", "Sharp edges", "Text clarity"] },
      { title: "Editing Friendly", description: "PNG is better for image editing.", details: ["Layer support", "No artifacts", "Clean edges", "Professional output"] },
      { title: "Batch Conversion", description: "Convert multiple JPGs at once.", details: ["Many files", "Consistent output", "Fast processing", "Bulk download"] }
    ],
    howItWorks: [
      { title: "Upload JPG", description: "Select JPEG images" },
      { title: "Convert", description: "Automatic conversion to PNG" },
      { title: "Download PNG", description: "Get converted images" }
    ],
    useCases: [
      { title: "Logo Preparation", description: "Convert JPG logos to PNG for transparency support." },
      { title: "Graphic Design", description: "Prepare JPGs for editing software that prefers PNG." },
      { title: "Image Editing", description: "Convert to PNG before making edits to preserve quality." },
      { title: "Web Graphics", description: "Create PNGs for icons, buttons, and graphics needing transparency." }
    ],
    whyChoose: ["Transparency support", "Lossless quality", "Edit-friendly", "Batch conversion", "100% private", "Free forever"],
    tips: ["Convert to PNG before making edits to avoid quality loss.", "Use PNG for graphics with text or sharp edges.", "JPG artifacts may be visible in PNG - consider source quality."],
    faqs: [
      { question: "Why convert JPG to PNG?", answer: "PNG supports transparency and doesn't lose quality with edits, unlike JPG." },
      { question: "Will file size increase?", answer: "Yes, PNGs are typically larger than JPGs. Consider your use case." },
      { question: "Can I add transparency after converting?", answer: "Yes, once in PNG format you can edit and add transparency." }
    ],
    relatedTools: [
      { title: "PNG to JPG", description: "Convert PNG to smaller JPG", path: "/png-to-jpg-converter" },
      { title: "Image Compressor", description: "Compress PNG files", path: "/image-compressor" },
      { title: "Background Remover", description: "Add transparency", path: "/background-remover" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "JPG to PNG Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "webp-converter",
    title: "Free WebP Converter - Convert Images to WebP Format Online",
    description: "Convert JPG, PNG, GIF to WebP format. 30% smaller files with same quality. Perfect for web optimization. 100% free, browser-based.",
    keywords: "webp converter, convert to webp, jpg to webp, png to webp, webp format, webp image converter, webp compression",
    heroTitle: "Free WebP Converter - Modern Image Format",
    heroSubtitle: "Convert images to WebP for 30% smaller file sizes with the same quality. The modern image format supported by all major browsers.",
    heroHighlight: "WebP offers 30% smaller files than JPG/PNG at same quality",
    primaryCta: "Convert to WebP",
    primaryCtaPath: "/image-tools",
    icon: Wand2,
    iconColor: "text-green-600",
    category: "tool",
    toolDescription: "Our WebP converter transforms JPG, PNG, and GIF images to the modern WebP format. WebP provides superior compression (30% smaller) while maintaining quality, and supports both lossy and lossless compression plus animation and transparency. All major browsers now support WebP.",
    features: [
      { title: "Superior Compression", description: "30% smaller than JPG/PNG.", details: ["Same visual quality", "Lossy & lossless", "Animation support", "Transparency"] },
      { title: "Multiple Sources", description: "Convert from various formats.", details: ["JPG to WebP", "PNG to WebP", "GIF to WebP", "BMP to WebP"] },
      { title: "Quality Control", description: "Fine-tune compression settings.", details: ["Quality slider", "Lossless option", "Size preview", "Comparison view"] },
      { title: "Browser Support", description: "WebP works everywhere now.", details: ["Chrome", "Firefox", "Safari", "Edge"] }
    ],
    howItWorks: [
      { title: "Upload Image", description: "Select JPG, PNG, or GIF" },
      { title: "Set Quality", description: "Choose compression level" },
      { title: "Convert", description: "Image processed to WebP" },
      { title: "Download", description: "Get WebP file" }
    ],
    useCases: [
      { title: "Website Speed", description: "Convert all website images to WebP for 30% faster loading." },
      { title: "CDN Optimization", description: "Reduce CDN bandwidth costs with smaller image files." },
      { title: "Mobile Apps", description: "Smaller images for faster mobile app performance." },
      { title: "E-commerce", description: "Optimize product images for faster shopping experiences." }
    ],
    whyChoose: ["30% smaller files", "Same quality", "Full browser support", "Animation support", "100% private", "Free forever"],
    tips: ["Use quality 80-85 for best size/quality balance.", "Enable lossless for images with text or graphics.", "Provide JPG/PNG fallbacks for older browsers if needed."],
    faqs: [
      { question: "Do all browsers support WebP?", answer: "Yes, all modern browsers (Chrome, Firefox, Safari, Edge) now support WebP." },
      { question: "How much smaller are WebP files?", answer: "Typically 25-35% smaller than equivalent quality JPG or PNG." },
      { question: "Does WebP support transparency?", answer: "Yes, WebP supports full alpha channel transparency like PNG." }
    ],
    relatedTools: [
      { title: "Image Compressor", description: "Compress images further", path: "/image-compressor" },
      { title: "PNG to JPG", description: "Convert to other formats", path: "/png-to-jpg-converter" },
      { title: "Bulk Converter", description: "Convert many images", path: "/bulk-image-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "WebP Converter", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "image-to-base64",
    title: "Free Image to Base64 Converter - Encode Images Online",
    description: "Convert images to Base64 encoded strings. Create data URIs for CSS/HTML. Embed images directly in code. 100% free, browser-based.",
    keywords: "image to base64, convert image to base64, base64 image encoder, image base64 converter, data uri generator, embed image code",
    heroTitle: "Free Image to Base64 Converter - Create Data URIs",
    heroSubtitle: "Convert images to Base64 encoded strings for embedding in HTML, CSS, or JSON. Create data URIs without external file references.",
    heroHighlight: "Embed images directly in your code",
    primaryCta: "Convert Image to Base64",
    primaryCtaPath: "/base64-tools",
    icon: FileImage,
    iconColor: "text-indigo-500",
    category: "tool",
    toolDescription: "Our Image to Base64 converter transforms images into Base64 encoded strings that can be embedded directly in HTML, CSS, or JSON. Perfect for creating data URIs, embedding small images in stylesheets, or including images in API responses without separate file hosting.",
    features: [
      { title: "Data URI Output", description: "Complete data URI ready to use.", details: ["Full data:image/... format", "Copy to clipboard", "Multiple formats", "Proper MIME type"] },
      { title: "Multiple Formats", description: "Encode various image types.", details: ["JPG/JPEG", "PNG", "GIF", "WebP", "SVG"] },
      { title: "Size Information", description: "See encoded string statistics.", details: ["Original size", "Encoded size", "Overhead %", "Character count"] },
      { title: "Code Snippets", description: "Ready-to-use code examples.", details: ["HTML img tag", "CSS background", "JavaScript", "JSON format"] }
    ],
    howItWorks: [
      { title: "Upload Image", description: "Select image to encode" },
      { title: "Encode", description: "Image converted to Base64" },
      { title: "Copy", description: "Copy data URI or code snippet" },
      { title: "Use", description: "Paste into your project" }
    ],
    useCases: [
      { title: "CSS Backgrounds", description: "Embed small images directly in CSS as data URIs." },
      { title: "Email Templates", description: "Embed images in HTML emails for better delivery." },
      { title: "Single-File Apps", description: "Include images in single HTML file applications." },
      { title: "API Responses", description: "Return images as Base64 in JSON API responses." }
    ],
    whyChoose: ["Complete data URIs", "All formats", "Size info", "Code snippets", "100% private", "Free forever"],
    tips: ["Only embed small images (< 10KB) as Base64 for best performance.", "Use for icons and small graphics, not large photos.", "CSS embedding reduces HTTP requests for faster page loads."],
    faqs: [
      { question: "When should I use Base64 images?", answer: "For small images (< 10KB) like icons to reduce HTTP requests. Large images should be separate files." },
      { question: "Does Base64 increase file size?", answer: "Yes, Base64 encoding increases size by about 33%, so use for small images only." },
      { question: "Can I use this in CSS?", answer: "Yes, copy the data URI and use it as a background-image URL in CSS." }
    ],
    relatedTools: [
      { title: "Base64 to Image", description: "Decode Base64 back to image", path: "/base64-to-image" },
      { title: "Base64 Encoder", description: "Encode text to Base64", path: "/base64-encoder" },
      { title: "Image Compressor", description: "Compress before encoding", path: "/image-compressor" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Image to Base64 Converter", "applicationCategory": "DeveloperApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "image-rotator",
    title: "Free Image Rotator - Rotate Photos Online Instantly",
    description: "Rotate images 90°, 180°, or any angle. Fix orientation, flip horizontally or vertically. Batch rotation supported. 100% free.",
    keywords: "image rotator, rotate image, rotate photo online, flip image, image rotation tool, rotate picture, turn image",
    heroTitle: "Free Image Rotator - Fix Photo Orientation",
    heroSubtitle: "Rotate images to any angle. Fix sideways photos, flip images, correct orientation issues. Quick 90° rotations or precise angle control.",
    heroHighlight: "Quick 90° buttons plus precise angle slider",
    primaryCta: "Rotate Images Now",
    primaryCtaPath: "/image-tools",
    icon: RotateCw,
    iconColor: "text-teal-500",
    category: "tool",
    toolDescription: "Our image rotator lets you quickly fix photo orientation or rotate to any angle. Quick buttons for 90° clockwise/counter-clockwise and 180° flip, plus a slider for precise angle rotation. Also supports horizontal and vertical flipping. Batch processing available.",
    features: [
      { title: "Quick Rotation", description: "One-click 90° rotations.", details: ["90° clockwise", "90° counter-clockwise", "180° flip", "Reset to original"] },
      { title: "Precise Angle", description: "Rotate to any degree.", details: ["Angle slider", "Manual input", "0.1° precision", "Live preview"] },
      { title: "Flip Options", description: "Mirror images horizontally or vertically.", details: ["Horizontal flip", "Vertical flip", "Combined flip", "Undo support"] },
      { title: "Batch Processing", description: "Rotate multiple images.", details: ["Same rotation for all", "Individual settings", "Quick processing", "Bulk download"] }
    ],
    howItWorks: [
      { title: "Upload Image", description: "Select image to rotate" },
      { title: "Rotate/Flip", description: "Use buttons or slider" },
      { title: "Preview", description: "See rotated result" },
      { title: "Download", description: "Get corrected image" }
    ],
    useCases: [
      { title: "Phone Photos", description: "Fix photos taken with phone in wrong orientation." },
      { title: "Scanned Documents", description: "Correct sideways or upside-down scans." },
      { title: "Product Photography", description: "Adjust product photo angles for e-commerce." },
      { title: "Design Work", description: "Rotate images to specific angles for design projects." }
    ],
    whyChoose: ["Quick rotation", "Precise angles", "Flip options", "Batch support", "100% private", "Free forever"],
    tips: ["Use 90° buttons for quick orientation fixes.", "Enable grid overlay for precise angle alignment.", "Rotate before cropping for best results."],
    faqs: [
      { question: "Can I rotate to any angle?", answer: "Yes, use the angle slider or enter specific degrees for precise rotation." },
      { question: "What's the difference between rotate and flip?", answer: "Rotate turns the image; flip mirrors it horizontally or vertically." },
      { question: "Does rotation affect quality?", answer: "90° and 180° rotations are lossless. Other angles may require resampling." }
    ],
    relatedTools: [
      { title: "Image Cropper", description: "Crop after rotating", path: "/image-cropper" },
      { title: "Image Resizer", description: "Resize rotated images", path: "/image-resizer" },
      { title: "Image Compressor", description: "Compress final image", path: "/image-compressor" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Image Rotator", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "bulk-image-resizer",
    title: "Free Bulk Image Resizer - Resize Multiple Images Online",
    description: "Resize multiple images at once to the same dimensions. Perfect for product photos, galleries, social media. Batch processing. 100% free.",
    keywords: "bulk image resizer, batch resize images, resize multiple images, mass image resizer, bulk photo resize, batch image processing",
    heroTitle: "Free Bulk Image Resizer - Resize Many Images at Once",
    heroSubtitle: "Resize hundreds of images to consistent dimensions in one batch. Perfect for product catalogs, photo galleries, and social media content.",
    heroHighlight: "Process 100+ images with one click",
    primaryCta: "Bulk Resize Now",
    primaryCtaPath: "/image-tools",
    icon: Layers,
    iconColor: "text-purple-600",
    category: "tool",
    toolDescription: "Our bulk image resizer processes multiple images simultaneously, applying the same resize settings to all. Perfect for e-commerce product photos, creating consistent gallery images, or preparing social media content batches. Upload 100+ images and resize them all with one click.",
    features: [
      { title: "Mass Processing", description: "Resize 100+ images at once.", details: ["Upload many files", "Drag & drop", "Folder upload", "Progress tracking"] },
      { title: "Consistent Output", description: "All images resized identically.", details: ["Same dimensions", "Same aspect ratio", "Same quality", "Same format"] },
      { title: "Multiple Options", description: "Various resize methods.", details: ["Exact dimensions", "Max width/height", "Percentage scale", "Fit to bounds"] },
      { title: "Output Control", description: "Customize result files.", details: ["Rename pattern", "Format conversion", "Quality setting", "Zip download"] }
    ],
    howItWorks: [
      { title: "Upload Images", description: "Select multiple images" },
      { title: "Set Size", description: "Choose target dimensions" },
      { title: "Process", description: "All images resized" },
      { title: "Download All", description: "Get zip of resized images" }
    ],
    useCases: [
      { title: "Product Photography", description: "Resize all product images to consistent sizes for e-commerce." },
      { title: "Gallery Creation", description: "Create uniform thumbnail and display images for galleries." },
      { title: "Social Media Prep", description: "Resize content batches for social media posting." },
      { title: "Website Migration", description: "Resize all images when moving to a new website design." }
    ],
    whyChoose: ["100+ images", "Consistent results", "Multiple options", "Zip download", "100% private", "Free forever"],
    tips: ["Use 'Fit to bounds' to handle mixed orientations.", "Set a naming pattern to keep files organized.", "Convert all to same format for consistency."],
    faqs: [
      { question: "How many images can I process?", answer: "There's no set limit - process as many as your browser can handle (typically 100+)." },
      { question: "Can I resize images with different aspect ratios?", answer: "Yes, use 'Fit to bounds' to handle mixed orientations while maintaining aspect ratios." },
      { question: "How do I download all results?", answer: "All resized images are packaged in a zip file for easy download." }
    ],
    relatedTools: [
      { title: "Image Resizer", description: "Resize single images", path: "/image-resizer" },
      { title: "Image Compressor", description: "Compress batch results", path: "/image-compressor" },
      { title: "Bulk Converter", description: "Convert image formats", path: "/bulk-image-converter" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Bulk Image Resizer", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  },
  {
    slug: "gif-maker",
    title: "Free GIF Maker - Create Animated GIFs from Images Online",
    description: "Create animated GIFs from multiple images. Set frame delay, loop options, optimize size. Perfect for memes and animations. 100% free.",
    keywords: "gif maker, create gif, make gif, image to gif, animated gif creator, gif generator, gif from images",
    heroTitle: "Free GIF Maker - Create Animated GIFs",
    heroSubtitle: "Combine multiple images into animated GIFs. Control frame timing, loop settings, and optimize file size. Perfect for memes and animations.",
    heroHighlight: "Create smooth animations from your images",
    primaryCta: "Create GIF Now",
    primaryCtaPath: "/image-tools",
    icon: Camera,
    iconColor: "text-pink-500",
    category: "tool",
    toolDescription: "Our GIF maker combines multiple images into animated GIF files. Control frame duration, loop count, and image order. Optimization options reduce file size while maintaining quality. Perfect for creating memes, product animations, social media content, or simple motion graphics.",
    features: [
      { title: "Frame Control", description: "Control animation timing.", details: ["Frame delay (ms)", "Per-frame timing", "Preview animation", "Reorder frames"] },
      { title: "Loop Options", description: "Set how GIF loops.", details: ["Infinite loop", "Loop count", "Play once", "Bounce (ping-pong)"] },
      { title: "Size Optimization", description: "Reduce GIF file size.", details: ["Color reduction", "Dithering options", "Lossy compression", "Size preview"] },
      { title: "Editing Features", description: "Edit your animation.", details: ["Add/remove frames", "Duplicate frames", "Reverse order", "Add text"] }
    ],
    howItWorks: [
      { title: "Upload Images", description: "Add images for frames" },
      { title: "Arrange", description: "Order frames and set timing" },
      { title: "Preview", description: "Watch your GIF animation" },
      { title: "Download", description: "Get your animated GIF" }
    ],
    useCases: [
      { title: "Meme Creation", description: "Create reaction GIFs and memes for social media." },
      { title: "Product Showcase", description: "Show products from multiple angles in one animated image." },
      { title: "Tutorial Steps", description: "Create step-by-step visual instructions as GIFs." },
      { title: "Social Content", description: "Make eye-catching animated posts for social media." }
    ],
    whyChoose: ["Frame control", "Loop options", "Size optimization", "Easy editing", "100% private", "Free forever"],
    tips: ["Use 100-200ms delay for smooth animations.", "Reduce colors to 128 for smaller file sizes.", "Keep GIFs under 5MB for best social media performance."],
    faqs: [
      { question: "What image formats can I use?", answer: "JPG, PNG, GIF, and WebP images can all be combined into a GIF." },
      { question: "How do I control animation speed?", answer: "Set frame delay in milliseconds - lower values = faster animation." },
      { question: "Can I optimize GIF file size?", answer: "Yes, reduce colors and enable lossy compression to shrink file size." }
    ],
    relatedTools: [
      { title: "Image Compressor", description: "Compress source images", path: "/image-compressor" },
      { title: "Image Resizer", description: "Resize frames uniformly", path: "/image-resizer" },
      { title: "GIF to MP4", description: "Convert GIF to video", path: "/gif-to-mp4" }
    ],
    schema: { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "GIF Maker", "applicationCategory": "UtilitiesApplication", "offers": { "@type": "Offer", "price": "0" } }
  }
];
