
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Privacy Policy | DocuCreator Pro" 
        description="Our privacy policy outlines how we collect, use, and protect your information when using DocuCreator Pro's services."
        canonicalUrl="/privacy"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: April 7, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                At DocuCreator Pro, we take your privacy seriously. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of DocuCreator Pro.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you use our services, we collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Account information (name, email address, phone number)</li>
                <li>Document information (content you input into our platform)</li>
                <li>Usage information (features used, time spent, actions taken)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Cookies and similar technologies</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your transactions</li>
                <li>To send you service-related communications</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To personalize your experience</li>
                <li>To protect our services and users</li>
                <li>To comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Google AdSense and Cookies</h2>
              <p className="mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
              </p>
              <p className="mb-4">
                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-legal-gold hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info" className="text-legal-gold hover:underline">www.aboutads.info</a>.
              </p>
              <p className="mb-4">
                Please note that if you opt out of personalized advertising, you will still see advertisements, but they may not be as relevant to you.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers (hosting, analytics, payment processing)</li>
                <li>Legal and regulatory authorities</li>
                <li>Potential buyers in case of a sale or merger</li>
                <li>Third parties with your consent</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Objection to or restriction of processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you through our website or by email.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@docucreatorpro.online<br />
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

export default PrivacyPolicy;
