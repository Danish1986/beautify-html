import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  style?: React.CSSProperties;
  className?: string;
  adLayout?: string;
}

/**
 * AdSense Component
 * 
 * A reusable component for displaying Google AdSense ads.
 * 
 * IMPORTANT: Do not remove this component or the AdSense script from index.html
 * 
 * Usage:
 * <AdSense 
 *   adSlot="1234567890" 
 *   adFormat="auto"
 *   style={{ display: 'block' }}
 * />
 * 
 * @param adSlot - Your unique AdSense ad slot ID from Google AdSense dashboard
 * @param adFormat - Ad format: auto (responsive), rectangle, horizontal, vertical, fluid
 * @param style - Custom styles for the ad container
 * @param className - Custom CSS classes
 * @param adLayout - Layout key for specific ad types (optional)
 */
export const AdSense = ({ 
  adSlot, 
  adFormat = "auto", 
  style, 
  className = "",
  adLayout 
}: AdSenseProps) => {
  useEffect(() => {
    try {
      // Push ad to adsbygoogle array after component mounts
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`adsense-container my-8 ${className}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          ...style,
        }}
        data-ad-client="ca-pub-5299949948790866"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;
