import { useLocation, Navigate } from "react-router-dom";
import { getPageBySlug } from "@/data";
import { ToolLandingTemplate } from "@/components/landing/ToolLandingTemplate";

export default function SEOPage() {
  const location = useLocation();
  // Extract slug from pathname (remove leading slash)
  const slug = location.pathname.slice(1);
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }
  
  const pageData = getPageBySlug(slug);
  
  if (!pageData) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <ToolLandingTemplate
      title={pageData.title}
      description={pageData.description}
      keywords={pageData.keywords}
      path={`/${pageData.slug}`}
      heroTitle={pageData.heroTitle}
      heroSubtitle={pageData.heroSubtitle}
      heroHighlight={pageData.heroHighlight}
      primaryCta={pageData.primaryCta}
      primaryCtaPath={pageData.primaryCtaPath}
      secondaryCta="View All Tools"
      secondaryCtaPath="/"
      icon={pageData.icon}
      iconColor={pageData.iconColor}
      toolDescription={pageData.toolDescription}
      features={pageData.features}
      howItWorks={pageData.howItWorks}
      useCases={pageData.useCases}
      whyChoose={pageData.whyChoose}
      tips={pageData.tips}
      faqs={pageData.faqs}
      relatedTools={pageData.relatedTools}
      schema={pageData.schema}
    />
  );
}
