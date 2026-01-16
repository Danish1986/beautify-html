import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Zap, 
  Lock, 
  DollarSign,
  FileCheck,
  Clock,
  Users,
  Star,
  HelpCircle,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Feature {
  title: string;
  description: string;
  details?: string[];
}

interface Step {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedTool {
  title: string;
  description: string;
  path: string;
}

interface ToolLandingProps {
  // SEO
  title: string;
  description: string;
  keywords: string;
  path: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroHighlight?: string;
  primaryCta: string;
  primaryCtaPath: string;
  secondaryCta?: string;
  secondaryCtaPath?: string;
  
  // Icon
  icon: LucideIcon;
  iconColor: string;
  
  // Content sections
  toolDescription: string;
  features: Feature[];
  howItWorks: Step[];
  useCases: UseCase[];
  whyChoose: string[];
  tips: string[];
  faqs: FAQ[];
  relatedTools: RelatedTool[];
  
  // Optional special sections
  bankSupport?: {
    title: string;
    description: string;
    banks: string[];
    extractions: string[];
  };
  
  // Technical details
  technicalDetails?: {
    title: string;
    items: { label: string; description: string }[];
  };
  
  // Schema
  schema: object;
  
  // Tool interface - render actual tool if provided
  toolInterface?: React.ReactNode;
}

export function ToolLandingTemplate({
  title,
  description,
  keywords,
  path,
  heroTitle,
  heroSubtitle,
  heroHighlight,
  primaryCta,
  primaryCtaPath,
  secondaryCta,
  secondaryCtaPath,
  icon: Icon,
  iconColor,
  toolDescription,
  features,
  howItWorks,
  useCases,
  whyChoose,
  tips,
  faqs,
  relatedTools,
  bankSupport,
  technicalDetails,
  schema,
  toolInterface
}: ToolLandingProps) {
  return (
    <div className="min-h-screen">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        path={path}
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{title.split(' - ')[0]}</span>
            </nav>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-primary">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 (2,847 reviews)</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {heroSubtitle}
            </p>
            
            {heroHighlight && (
              <p className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4" /> {heroHighlight}
              </p>
            )}
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm">
                <Lock className="h-4 w-4 text-primary" /> Your Data Stays Private
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm">
                <Zap className="h-4 w-4 text-primary" /> Convert in Seconds
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm">
                <Shield className="h-4 w-4 text-primary" /> No Server Upload
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border rounded-full text-sm">
                <DollarSign className="h-4 w-4 text-primary" /> 100% Free Forever
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={primaryCtaPath}>
                <Button size="lg" className="w-full sm:w-auto shadow-elegant text-lg px-8">
                  {primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {secondaryCta && secondaryCtaPath && (
                <Link to={secondaryCtaPath}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                    {secondaryCta}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tool Interface (if provided) */}
      {toolInterface && (
        <section className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              {toolInterface}
            </CardContent>
          </Card>
        </section>
      )}
      
      {/* Tool Description */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {toolDescription}
          </p>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {index + 1}
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-primary/20" />
                )}
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional-grade tools with enterprise features, completely free and private.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileCheck className="h-5 w-5 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                {feature.details && feature.details.length > 0 && (
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Bank Support Section (if applicable) */}
      {bankSupport && (
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">{bankSupport.title}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {bankSupport.description}
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Supported Banks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {bankSupport.banks.map((bank, index) => (
                      <span key={index} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {bank}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Extracted</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {bankSupport.extractions.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
      
      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Common Use Cases</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how professionals across industries use this tool to save time and increase productivity.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tool?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyChoose.slice(0, 8).map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tips for Best Results */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Tips for Best Results</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Technical Details (if provided) */}
      {technicalDetails && (
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{technicalDetails.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {technicalDetails.items.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-12">
          Get answers to the most common questions about this tool.
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                <AccordionTrigger className="text-left font-medium py-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* Related Tools */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Related Tools</h2>
          <p className="text-center text-muted-foreground mb-12">
            Explore more tools that might help with your workflow.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {relatedTools.map((tool, index) => (
              <Link key={index} to={tool.path}>
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                    <Button variant="ghost" size="sm" className="px-0 hover:text-primary">
                      Try Now <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our tools for fast, secure, and private file conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={primaryCtaPath}>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  {primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                  View All Tools
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
