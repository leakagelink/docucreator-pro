
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Terms of Service | DocuCreator Pro" 
        description="Our terms of service outline the rules, guidelines, and legal agreements between DocuCreator Pro and its users."
        canonicalUrl="/terms"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last updated: April 7, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                By accessing or using the DocuCreator Pro website and services, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">2. Description of Service</h2>
              <p className="mb-4">
                DocuCreator Pro provides an AI-powered platform for creating legal documents. We offer various document templates that users can customize according to their needs.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">3. User Accounts</h2>
              <p className="mb-4">
                Some features of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">4. User Content</h2>
              <p className="mb-4">
                You retain ownership of the content you create using our services. However, you grant us a license to use, store, and display your content in connection with providing and improving our services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">5. Prohibited Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use our services for any illegal purpose</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our services</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">6. Advertisements and Third-Party Content</h2>
              <p className="mb-4">
                Our website may display advertisements provided by Google AdSense and other third-party advertisers. These advertisements are not endorsements or recommendations by DocuCreator Pro. Your interactions with advertisers are solely between you and the advertiser.
              </p>
              <p className="mb-4">
                We do not control the content of third-party websites that may be linked from advertisements on our site. We are not responsible for the content, privacy policies, or practices of any third-party websites.
              </p>
              <p className="mb-4">
                Users are prohibited from engaging in any activity that may artificially inflate ad impressions or clicks, including but not limited to manual methods of generating impressions or clicks on advertisements displayed on our website.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                Our services and all related content, features, and functionality are owned by DocuCreator Pro and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-4">
                Our services are provided on an "as is" and "as available" basis. We disclaim all warranties, express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall DocuCreator Pro be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">10. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. If we make material changes, we will notify you by email or through our website.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">11. Governing Law</h2>
              <p className="mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mb-4">
                Email: legal@docucreatorpro.online<br />
                Address: 123 Legal Avenue, Tech Park, Bangalore - 560001<br />
                Phone: +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default TermsOfService;
