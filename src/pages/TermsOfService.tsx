import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <>
      <SEO
        title="Terms of Service | DevTools"
        description="DevTools Terms of Service - Read our terms and conditions for using our free online developer tools."
        keywords="terms of service, terms and conditions, user agreement, service terms"
        path="/terms-of-service"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mt-8 mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using DevTools (jsonpdfconverter.com), you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing this site.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Permission is granted to use DevTools for personal and commercial purposes, subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You may not modify or copy the materials</li>
                <li>You may not use the materials for any commercial purpose without attribution</li>
                <li>You may not attempt to reverse engineer any software contained on DevTools</li>
                <li>You may not remove any copyright or other proprietary notations from the materials</li>
                <li>You may not transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Free Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              DevTools is provided as a free service supported by advertising. We reserve the right to modify, 
              suspend, or discontinue any part of the service at any time without notice. We are not liable 
              for any modification, suspension, or discontinuance of the service.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When using DevTools, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Not upload any illegal, harmful, or malicious content</li>
              <li>Not attempt to harm or disrupt the service or its infrastructure</li>
              <li>Not use automated systems (bots) to access the service excessively</li>
              <li>Not violate any applicable laws or regulations</li>
              <li>Not upload files containing viruses, malware, or harmful code</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">File Processing and Data</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                All files uploaded to DevTools are processed temporarily in volatile memory and are automatically 
                deleted within one hour. We maintain a strict zero-storage policy. You are solely responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining backups of your original files</li>
                <li>Ensuring you have the right to upload and process the files</li>
                <li>The content and legality of files you upload</li>
                <li>Downloading processed files before they are automatically deleted</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                The materials on DevTools are provided on an "as is" basis. DevTools makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="leading-relaxed">
                We do not warrant that the service will be uninterrupted, error-free, or completely secure. 
                We do not guarantee the accuracy or completeness of results obtained from using our tools.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall DevTools or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use DevTools, even if DevTools or a DevTools authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive for accuracy, the materials appearing on DevTools could include technical, 
              typographical, or photographic errors. DevTools does not warrant that any of the materials 
              on its website are accurate, complete, or current. DevTools may make changes to the materials 
              contained on its website at any time without notice.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              DevTools may contain links to third-party websites or services that are not owned or controlled 
              by DevTools. We have no control over, and assume no responsibility for, the content, privacy 
              policies, or practices of any third-party websites or services.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              DevTools may revise these Terms of Service at any time without notice. By using this website, 
              you are agreeing to be bound by the then-current version of these Terms of Service. We encourage 
              you to check this page periodically for changes.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:{" "}
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

export default TermsOfService;
