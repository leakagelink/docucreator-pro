
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Privacy Policy | DocuCreator Pro" 
        description="Our privacy policy outlines how we collect, use, and protect your information when using DocuCreator Pro's AI-powered legal document services."
        canonicalUrl="/privacy"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: January 15, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                At DocuCreator Pro, we take your privacy seriously. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of DocuCreator Pro's AI-powered document creation services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you use our services, we collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Account information (name, email address, phone number)</li>
                <li>Document content and input data you provide to our AI system</li>
                <li>Usage information (features used, time spent, actions taken, documents generated)</li>
                <li>Device information (IP address, browser type, operating system, device identifiers)</li>
                <li>Cookies and similar technologies</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">AI Data Processing and Document Handling</h2>
              <p className="mb-4">
                Our AI-powered document generation service processes the information you provide to create customized legal documents:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Document Content:</strong> We temporarily process your input data to generate documents. This data is not used to train our AI models.</li>
                <li><strong>AI Processing:</strong> Your document inputs are processed by our AI system to create personalized legal documents based on your specifications.</li>
                <li><strong>Data Security:</strong> All document data is encrypted in transit and at rest using industry-standard encryption protocols.</li>
                <li><strong>No Human Review:</strong> Your document content is processed automatically by AI and is not reviewed by our staff unless you specifically request support.</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Data Retention and Deletion</h2>
              <p className="mb-4">We retain your information as follows:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after account deletion</li>
                <li><strong>Generated Documents:</strong> Stored for 90 days unless you choose to delete them earlier</li>
                <li><strong>Usage Analytics:</strong> Anonymized usage data may be retained for service improvement purposes</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with applicable laws</li>
              </ul>
              <p className="mb-4">
                <strong>Your Right to Delete:</strong> You can delete your account and associated data at any time through your account settings or by contacting us at privacy@docucreatorpro.online.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide AI-powered document generation services</li>
                <li>To process your transactions and manage subscriptions</li>
                <li>To send you service-related communications</li>
                <li>To send marketing communications (with your explicit consent)</li>
                <li>To improve our AI models and services (using anonymized data only)</li>
                <li>To provide customer support</li>
                <li>To protect our services and users from fraud and abuse</li>
                <li>To comply with legal obligations under Indian laws including IT Act 2000</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Data Localization and Compliance</h2>
              <p className="mb-4">
                In compliance with Indian data protection regulations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your personal data is primarily stored within India</li>
                <li>We comply with the Information Technology Act, 2000 and associated rules</li>
                <li>Cross-border data transfers are conducted only with appropriate safeguards</li>
                <li>We maintain data processing logs as required by applicable regulations</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Google AdSense and Cookies</h2>
              <p className="mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
              </p>
              <p className="mb-4">
                <strong>Cookie Consent:</strong> We obtain your consent before placing non-essential cookies on your device. You can manage your cookie preferences through our cookie consent banner or browser settings.
              </p>
              <p className="mb-4">
                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-legal-gold hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info" className="text-legal-gold hover:underline">www.aboutads.info</a>.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers (cloud hosting, analytics, payment processing) under strict data processing agreements</li>
                <li>Legal and regulatory authorities when required by Indian law</li>
                <li>Potential buyers in case of a business sale or merger (with prior notice)</li>
                <li>Third parties with your explicit consent</li>
              </ul>
              <p className="mb-4">
                <strong>No Sale of Personal Data:</strong> We do not sell your personal information to third parties.
              </p>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Mobile App Specific Privacy</h2>
              <p className="mb-4">
                When you use our mobile application:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Device Permissions:</strong> We request only necessary permissions for app functionality</li>
                <li><strong>Offline Data:</strong> Some data may be stored locally on your device for offline functionality</li>
                <li><strong>App Analytics:</strong> We collect anonymous usage analytics to improve app performance</li>
                <li><strong>Push Notifications:</strong> You can control notification preferences in your device settings</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
                <li><strong>Complaint:</strong> File a complaint with relevant data protection authorities</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Security</h2>
              <p className="mb-4">
                We implement comprehensive security measures including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure cloud infrastructure with industry-leading providers</li>
                <li>Regular staff training on data protection and security</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. Material changes will be notified through:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email notification to registered users</li>
                <li>In-app notifications</li>
                <li>Prominent notice on our website</li>
                <li>Updated "last modified" date at the top of this policy</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                For any questions about this Privacy Policy or to exercise your rights, please contact us:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> privacy@docucreatorpro.online<br />
                <strong>Data Protection Officer:</strong> dpo@docucreatorpro.online<br />
                <strong>Address:</strong> 123 Legal Avenue, Tech Park, Bangalore - 560001, India<br />
                <strong>Phone:</strong> +91 98765 43210<br />
                <strong>Response Time:</strong> We will respond to your privacy requests within 30 days
              </p>
              
              <div className="mt-8 p-4 bg-legal-light border-l-4 border-legal-gold">
                <p className="text-sm text-legal-gray">
                  <strong>Note:</strong> This privacy policy complies with the Information Technology Act, 2000, and other applicable Indian data protection laws. For international users, additional protections may apply under your local data protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default PrivacyPolicy;
