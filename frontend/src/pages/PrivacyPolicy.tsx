import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | DevTools"
        description="DevTools Privacy Policy - Learn how we protect your data with our zero-storage policy and commitment to user privacy."
        keywords="privacy policy, data protection, user privacy, zero-storage policy"
        path="/privacy-policy"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mt-8 mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              DevTools ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we handle your information when you use our free online developer tools at 
              jsonpdfconverter.com.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Zero-Storage Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We maintain a strict <strong>zero-storage policy</strong> for all user uploads:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>All files are processed in volatile memory only</li>
              <li>Files are automatically deleted within one hour of processing or download</li>
              <li>We do not store, archive, or backup any user-uploaded files</li>
              <li>Your data never leaves our secure processing environment</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Technical Data</h3>
                <p className="leading-relaxed">
                  We collect anonymized technical data for performance monitoring, including browser type, 
                  device information, and usage statistics. This data is used solely to improve our services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No Personal Information</h3>
                <p className="leading-relaxed">
                  We do not require user registration or collect any personally identifiable information 
                  such as names, email addresses, or contact details (except for voluntary support inquiries).
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>To provide and improve our developer tools</li>
              <li>To monitor and analyze performance and usage patterns</li>
              <li>To detect and prevent technical issues or abuse</li>
              <li>To display relevant advertisements through Google AdSense</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Google AdSense</h3>
                <p className="leading-relaxed">
                  We use Google AdSense to display advertisements. Google may use cookies and web beacons 
                  to serve ads based on your prior visits to our website or other websites. You can opt out 
                  of personalized advertising by visiting Google's Ads Settings.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Google Analytics</h3>
                <p className="leading-relaxed">
                  We use Google Analytics to understand how visitors use our site. This helps us improve 
                  user experience. Google Analytics uses cookies to collect anonymized information.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies for essential functionality and analytics. You can control cookies through 
              your browser settings. Disabling cookies may affect some features of our tools.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data during processing. 
              All file processing occurs in secure, encrypted environments. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since we do not store personal data or user files, there is no data to access, modify, or delete. 
              All processing is temporary and automatic.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under 13. We do not knowingly collect information 
              from children under 13 years of age.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a 
                href="mailto:support@jsonpdfconverter.com" 
                className="text-primary hover:underline font-medium"
              >
                support@jsonpdfconverter.com
              </a>
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
