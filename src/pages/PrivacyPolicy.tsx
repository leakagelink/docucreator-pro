import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Privacy Policy | DocuCreator Pro" 
        description="Our privacy policy outlines how we collect, use, and protect your information when using DocuCreator Pro's AI-assisted document template services."
        canonicalUrl="/privacy"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" }
        ]}
      />
      <HeaderAdSenseCompliant />
      <PageBreadcrumb items={[{ label: "Privacy Policy" }]} />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Privacy Policy</h1>
            <p className="text-gray-500 mb-6">Last updated: January 15, 2025</p>
            
            <PlayStoreCompliantDisclaimer variant="prominent" className="mb-8" />
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500">
                <p className="text-sm font-bold text-blue-800 mb-2">📱 Google Play Store Compliance Notice</p>
                <p className="text-sm text-blue-700">
                  This privacy policy complies with Google Play Store requirements. We are committed to transparency about our data practices and protecting your privacy while using our AI-assisted document template service.
                </p>
              </div>

              <p className="mb-4">
                At DocuCreator Pro, we take your privacy seriously. This Privacy Policy describes how we collect, use, process, and disclose your information when you use DocuCreator Pro's AI-assisted document template creation services (both web and mobile applications).
              </p>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Google Play Store Data Collection Disclosure</h2>
              <p className="mb-4">
                <strong>For Google Play Store users, we collect the following data:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number (for account creation)</li>
                <li><strong>Document Input Data:</strong> Text and information you provide to generate document templates</li>
                <li><strong>Usage Analytics:</strong> App usage patterns, features used, time spent (anonymized)</li>
                <li><strong>Device Information:</strong> Device model, operating system, app version</li>
                <li><strong>Crash Reports:</strong> Technical data to improve app stability</li>
                <li><strong>Advertising ID:</strong> For personalized ads (with consent)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">How We Use Your Data (Play Store Specific)</h2>
              <p className="mb-4">We use your information for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>AI Document Template Generation:</strong> Processing your input to create document templates</li>
                <li><strong>App Functionality:</strong> Providing core features and saving your templates</li>
                <li><strong>Analytics:</strong> Understanding app usage to improve features (anonymized data)</li>
                <li><strong>Crash Prevention:</strong> Identifying and fixing technical issues</li>
                <li><strong>Customer Support:</strong> Responding to your queries and providing assistance</li>
                <li><strong>Legal Compliance:</strong> Meeting Indian data protection laws</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Third-Party Services We Use</h2>
              <p className="mb-4">
                <strong>For transparency, we integrate with these third-party services:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Google AdSense:</strong> For displaying advertisements (collects cookies and advertising data)</li>
                <li><strong>Google Analytics:</strong> For website and app usage analytics (anonymized)</li>
                <li><strong>Cloud Storage Providers:</strong> For secure document storage and processing</li>
                <li><strong>Payment Processors:</strong> For handling subscription payments securely</li>
                <li><strong>AI Processing Services:</strong> For document template generation (data encrypted)</li>
                <li><strong>Crash Reporting Tools:</strong> For app stability monitoring</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Mobile App Permissions</h2>
              <p className="mb-4">
                <strong>Our mobile app requests these permissions:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Internet Access:</strong> To connect to our AI services and sync data</li>
                <li><strong>Storage Access:</strong> To save generated documents locally</li>
                <li><strong>Network State:</strong> To check connectivity for optimal user experience</li>
                <li><strong>Notification Permission:</strong> To send important updates (optional)</li>
              </ul>
              <p className="mb-4">
                <strong>We do NOT access:</strong> Your contacts, camera, microphone, location, or other sensitive device features unless explicitly required for a specific feature you choose to use.
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
                Our AI-assisted document template generation service processes the information you provide:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Template Generation:</strong> We temporarily process your input data to create document templates based on standard formats</li>
                <li><strong>AI Processing:</strong> Your inputs are processed by our AI system to create personalized templates using commonly used clauses</li>
                <li><strong>Data Security:</strong> All document data is encrypted in transit and at rest using industry-standard protocols</li>
                <li><strong>No Training Use:</strong> Your document content is not used to train our AI models</li>
                <li><strong>No Human Review:</strong> Your document content is processed automatically and not reviewed by staff unless you request support</li>
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
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">AI Data Processing and Document Handling</h2>
              <p className="mb-4">
                Our AI-assisted document template generation service processes the information you provide:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Template Generation:</strong> We temporarily process your input data to create document templates based on standard formats</li>
                <li><strong>AI Processing:</strong> Your inputs are processed by our AI system to create personalized templates using commonly used clauses</li>
                <li><strong>Data Security:</strong> All document data is encrypted in transit and at rest using industry-standard protocols</li>
                <li><strong>No Training Use:</strong> Your document content is not used to train our AI models</li>
                <li><strong>No Human Review:</strong> Your document content is processed automatically and not reviewed by staff unless you request support</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Children's Privacy (COPPA Compliance)</h2>
              <p className="mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>

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
                For any questions about this Privacy Policy, data deletion requests, or to exercise your rights:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> privacy@docucreatorpro.online<br />
                <strong>Data Protection Officer:</strong> dpo@docucreatorpro.online<br />
                <strong>Play Store Data Deletion:</strong> dataprotection@docucreatorpro.online<br />
                <strong>Address:</strong> 123 Legal Avenue, Tech Park, Bangalore - 560001, India<br />
                <strong>Phone:</strong> +91 98765 43210<br />
                <strong>Response Time:</strong> We will respond to privacy requests within 30 days
              </p>
              
              <div className="mt-8 p-4 bg-legal-light border-l-4 border-legal-gold">
                <p className="text-sm text-legal-gray">
                  <strong>Play Store Users:</strong> This privacy policy complies with Google Play Store requirements and Indian data protection laws. Your rights as a consumer are protected under applicable Indian consumer protection laws.
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
