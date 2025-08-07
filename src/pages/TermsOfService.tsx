import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Terms of Service | DocuCreator Pro" 
        description="Our terms of service outline the rules and guidelines for using DocuCreator Pro's AI-assisted document template services, including important disclaimers about legal advice."
        canonicalUrl="/terms"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Terms of Service</h1>
            <p className="text-gray-500 mb-6">Last updated: January 15, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <PlayStoreCompliantDisclaimer variant="prominent" className="mb-6" />

              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500">
                <p className="text-sm font-bold text-red-800 mb-2">⚠️ CRITICAL LEGAL DISCLAIMER - PLAY STORE COMPLIANT</p>
                <p className="text-sm text-red-700">
                  DocuCreator Pro is <strong>NOT a substitute for professional legal advice</strong>. Our AI-assisted document template generation service provides templates based on standard formats and commonly used clauses, but <strong>does not constitute legal advice, legal representation, or legal services</strong>. We do not guarantee the legal validity, enforceability, or binding nature of any generated documents. Always consult with a qualified attorney for legal matters.
                </p>
              </div>

              <p className="mb-4">
                By accessing or using the DocuCreator Pro website, mobile application, and AI-powered document generation services, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">2. Description of Service and AI Limitations</h2>
              <p className="mb-4">
                DocuCreator Pro provides an AI-assisted platform for creating document templates based on standard formats and commonly used clauses. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>AI-assisted document template creation using standard formats</li>
                <li>Customizable document templates based on commonly used clauses</li>
                <li>Document formatting and generation tools</li>
                <li>Basic information and guidance (not legal advice)</li>
              </ul>
              
              <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <p className="text-sm font-bold text-yellow-800 mb-2">AI Service Limitations (Play Store Compliant):</p>
                <ul className="text-sm text-yellow-700 list-disc pl-4">
                  <li>Our AI provides automated template assistance, not professional legal advice</li>
                  <li>Generated documents are templates that may require legal review and customization</li>
                  <li>AI responses are based on standard formats and may not cover all legal requirements</li>
                  <li>Users are responsible for ensuring document accuracy and compliance</li>
                  <li>AI may not reflect the most current legal changes or jurisdictional variations</li>
                  <li>No guarantee of document validity, enforceability, or binding nature</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">3. User Accounts and Responsibilities</h2>
              <p className="mb-4">
                Some features of our services require you to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Maintaining the confidentiality of your account information</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Promptly updating account information when changes occur</li>
                <li>Ensuring you have the legal capacity to enter into these terms</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">4. User Content and Document Template Accuracy</h2>
              <p className="mb-4">
                You retain ownership of the content you create using our services. However, you grant us a limited license to use, store, and process your content to provide our template generation services. You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The accuracy and completeness of information you provide</li>
                <li>Reviewing and verifying all generated document templates before use</li>
                <li>Ensuring compliance with applicable laws and regulations</li>
                <li>Obtaining professional legal review when appropriate</li>
                <li>The legal consequences of using generated document templates</li>
                <li>Understanding that templates are based on standard formats, not legal advice</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">5. E-Signature and Document Template Validity</h2>
              <p className="mb-4">
                <strong>Important Notice about E-Signatures and Document Templates (Play Store Compliant):</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Electronic signatures may be recognized under the Information Technology Act, 2000</li>
                <li>Not all documents can be executed electronically under Indian law</li>
                <li>Document templates may require physical signatures, notarization, or registration</li>
                <li>Users are responsible for understanding e-signature laws in their jurisdiction</li>
                <li><strong>We do not guarantee the validity, enforceability, or binding nature of documents or signatures</strong></li>
                <li>Consult with legal counsel regarding signature requirements for important documents</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">6. Template Intellectual Property and Licensing</h2>
              <p className="mb-4">
                Our document templates are either:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Original Content:</strong> Created by our legal team and protected by copyright</li>
                <li><strong>Licensed Content:</strong> Used under appropriate licensing agreements</li>
                <li><strong>Public Domain:</strong> Based on publicly available legal forms and templates</li>
              </ul>
              <p className="mb-4">
                <strong>Template Usage Rights:</strong> You may use our templates for creating documents for your personal or business use. Commercial redistribution of templates is prohibited without explicit permission.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">7. Prohibited Conduct and Content Policy</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use our services for any illegal purpose or fraudulent activity</li>
                <li>Create documents for illegal transactions or activities</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Generate defamatory, harassing, or abusive content</li>
                <li>Attempt to reverse engineer or copy our AI systems</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services to compete with us or create similar services</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">8. Subscription and Billing</h2>
              <p className="mb-4">
                <strong>Subscription Services:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Subscription fees are billed in advance on a recurring basis</li>
                <li>All fees are non-refundable except as required by applicable law</li>
                <li>We may change subscription prices with 30 days advance notice</li>
                <li>You can cancel your subscription at any time through your account settings</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>We comply with automatic renewal laws and provide clear billing disclosures</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">9. Advertisements and Third-Party Content</h2>
              <p className="mb-4">
                Our website and mobile app may display advertisements provided by Google AdSense and other third-party advertisers:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Advertisements are not endorsements or recommendations by DocuCreator Pro</li>
                <li>We are not responsible for advertiser content or claims</li>
                <li>Your interactions with advertisers are solely between you and the advertiser</li>
                <li>We do not control third-party websites linked from advertisements</li>
                <li>Users are prohibited from artificially inflating ad impressions or clicks</li>
                <li>We reserve the right to refuse or remove advertisements at our discretion</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">10. Intellectual Property Rights</h2>
              <p className="mb-4">
                Our services and all related content, features, and functionality are owned by DocuCreator Pro and are protected by:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Indian and international copyright laws</li>
                <li>Trademark and service mark protections</li>
                <li>Trade secret and confidential information protections</li>
                <li>Other applicable intellectual property laws</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">11. Legal Disclaimers and Warranties (Play Store Compliant)</h2>
              <div className="mb-4 p-4 bg-gray-50 border-l-4 border-gray-500">
                <p className="text-sm font-bold text-gray-800 mb-2">COMPREHENSIVE LEGAL DISCLAIMERS:</p>
                <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                  <li><strong>No Legal Advice:</strong> Our services do not constitute legal advice or create an attorney-client relationship</li>
                  <li><strong>No Warranty of Accuracy:</strong> We do not guarantee the accuracy, completeness, or currency of information</li>
                  <li><strong>Document Template Validity:</strong> We do not warrant the validity, enforceability, or binding nature of generated document templates</li>
                  <li><strong>Jurisdictional Variations:</strong> Legal requirements vary by jurisdiction; templates may need local customization</li>
                  <li><strong>Professional Review Recommended:</strong> Important documents should be reviewed by qualified legal counsel</li>
                  <li><strong>AI Limitations:</strong> AI-generated content may contain errors and should not be relied upon without verification</li>
                  <li><strong>Standard Format Templates:</strong> Our templates are based on commonly used formats, not legal guarantees</li>
                </ul>
              </div>

              <p className="mb-4">
                <strong>AS-IS SERVICE:</strong> Our services are provided on an "as is" and "as available" basis. We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">12. Limitation of Liability</h2>
              <p className="mb-4">
                <strong>LIMITATION OF LIABILITY:</strong> To the maximum extent permitted by applicable law, DocuCreator Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Legal costs or fees arising from document use</li>
                <li>Damages from document errors or omissions</li>
                <li>Consequential damages from AI-generated content</li>
                <li>Data loss or corruption</li>
                <li>Business interruption or system downtime</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">13. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless DocuCreator Pro from any claims, damages, losses, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of generated documents</li>
                <li>Your violation of these terms or applicable laws</li>
                <li>Inaccurate information you provide to our services</li>
                <li>Your failure to obtain appropriate legal review</li>
                <li>Third-party claims related to your use of our services</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved through:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Jurisdiction:</strong> Courts of Bangalore, Karnataka, India</li>
                <li><strong>Applicable Law:</strong> Indian Contract Act, 1872, Information Technology Act, 2000, and other applicable Indian laws</li>
                <li><strong>Arbitration:</strong> Disputes may be resolved through binding arbitration under Indian Arbitration laws</li>
                <li><strong>Consumer Rights:</strong> Nothing in these terms limits your rights under Indian consumer protection laws</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">15. Mobile App Terms (Google Play Store Compliance)</h2>
              <p className="mb-4">
                When using our mobile application from Google Play Store:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You must comply with Google Play Store terms and conditions</li>
                <li>We are not responsible for Google Play Store policies or billing practices</li>
                <li>App updates may modify features or functionality</li>
                <li>Certain features require internet connectivity</li>
                <li>You are responsible for data usage charges from your mobile carrier</li>
                <li>The app provides document templates, not legal advice or binding documents</li>
                <li>Professional legal review is recommended for all generated templates</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">16. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. Material changes will be communicated through:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email notification to registered users</li>
                <li>In-app notifications</li>
                <li>Prominent website notices</li>
                <li>Updated terms with revision dates</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">17. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason in our sole discretion.
              </p>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">18. Contact Information and Support</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> legal@docucreatorpro.online<br />
                <strong>Customer Support:</strong> support@docucreatorpro.online<br />
                <strong>Play Store Support:</strong> playstore@docucreatorpro.online<br />
                <strong>Address:</strong> 123 Legal Avenue, Tech Park, Bangalore - 560001, India<br />
                <strong>Phone:</strong> +91 98765 43210<br />
                <strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST<br />
                <strong>Response Time:</strong> We aim to respond to all inquiries within 2 business days
              </p>

              <div className="mt-8 p-4 bg-legal-light border-l-4 border-legal-gold">
                <p className="text-sm text-legal-gray">
                  <strong>Consumer Rights Notice:</strong> These terms comply with Google Play Store policies and Indian consumer protection laws. Nothing in these terms limits your statutory rights as a consumer. Our service provides document templates based on standard formats - not legal advice or binding documents.
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

export default TermsOfService;
