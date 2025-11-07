/**
 * AdSense Configuration
 * 
 * IMPORTANT: Do not remove this file or modify the ad client ID
 * 
 * To update ad slot IDs:
 * 1. Log in to your Google AdSense dashboard
 * 2. Create new ad units for each placement
 * 3. Copy the ad slot IDs (data-ad-slot values)
 * 4. Update the corresponding slot IDs below
 * 
 * Ad Client ID: ca-pub-5299949948790866
 */

export const ADSENSE_CONFIG = {
  // Client ID - DO NOT MODIFY
  clientId: "ca-pub-5299949948790866",

  // Ad Slot IDs - Update these with actual slot IDs from your AdSense dashboard
  adSlots: {
    // Layout Ads (shown on all pages)
    headerLeaderboard: "1234567890", // 728x90 leaderboard in header
    footerBanner: "2345678901", // Banner ad in footer

    // Home Page Ads
    homeHeroToTools: "3456789012", // Between hero and tools grid
    homeFeaturesToBlog: "4567890123", // Between features and blog section

    // Tool-specific Ads
    jsonToPdfInArticle: "1234567891", // JSON to PDF - after conversion tool
    jsonFormatterInArticle: "5678901234", // JSON Formatter - after tool
    textToHtmlInArticle: "6789012345", // Text to HTML - after converter
    imageToolsInArticle: "7890123456", // Image Tools - after compression area
    pdfToolsInArticle: "8901234567", // PDF Tools - between sections
    base64ToolsInArticle: "9012345678", // Base64 Tools - after encoder
    apiTesterInArticle: "0123456789", // API Tester - after form
  },

  // Ad Formats
  formats: {
    auto: "auto", // Responsive - adapts to screen size
    rectangle: "rectangle", // 300x250 medium rectangle
    horizontal: "horizontal", // Horizontal banners
    vertical: "vertical", // Skyscraper ads
    fluid: "fluid", // In-feed ads
  },
} as const;

/**
 * AdSense Best Practices:
 * 
 * 1. Ad Density: Don't place too many ads on a single page (max 3-4 per page)
 * 2. User Experience: Ensure ads don't interfere with content or navigation
 * 3. Above the Fold: Place at least one ad above the fold for visibility
 * 4. Spacing: Maintain adequate spacing around ads (use my-8 classes)
 * 5. Mobile Optimization: Use responsive ad formats for mobile devices
 * 6. Compliance: Follow Google AdSense policies to avoid account suspension
 * 7. Content Quality: Ensure your content is valuable and original
 * 8. Click Intent: Never encourage users to click ads or use misleading placement
 */

export default ADSENSE_CONFIG;
