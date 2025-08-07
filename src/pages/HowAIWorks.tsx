
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import { Brain, FileText, Shield, AlertTriangle } from 'lucide-react';
import LegalDisclaimer from '@/components/LegalDisclaimer';

const HowAIWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="How Our AI Works | DocuCreator Pro" 
        description="Learn how DocuCreator Pro's AI-powered document generation works, its capabilities, limitations, and how we ensure data security and privacy."
        canonicalUrl="/how-ai-works"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6 text-center">How Our AI Works</h1>
            <p className="text-lg text-legal-gray text-center mb-8">
              Understanding DocuCreator Pro's AI-powered document generation system
            </p>

            <LegalDisclaimer variant="banner" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-legal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-legal-navy" />
                </div>
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">AI Processing</h3>
                <p className="text-legal-gray">Advanced AI analyzes your inputs to generate customized documents</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-legal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-legal-navy" />
                </div>
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Template Engine</h3>
                <p className="text-legal-gray">Professional templates provide the foundation for accurate documents</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-legal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-legal-navy" />
                </div>
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Data Security</h3>
                <p className="text-legal-gray">Your data is encrypted and processed securely with privacy protection</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Our AI Document Generation Process</h2>
              
              <div className="bg-legal-light p-6 rounded-lg mb-6">
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-4">Step 1: Data Input</h3>
                <p className="mb-4">
                  You provide specific information through our user-friendly forms, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Personal or business details</li>
                  <li>Document-specific requirements</li>
                  <li>Custom terms and conditions</li>
                  <li>Jurisdictional preferences</li>
                </ul>
              </div>

              <div className="bg-white border border-legal-light p-6 rounded-lg mb-6">
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-4">Step 2: AI Processing</h3>
                <p className="mb-4">
                  Our AI system processes your input using:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Natural Language Processing:</strong> Understanding your requirements in plain language</li>
                  <li><strong>Template Matching:</strong> Selecting appropriate legal clauses and structures</li>
                  <li><strong>Context Analysis:</strong> Ensuring document coherence and completeness</li>
                  <li><strong>Compliance Checking:</strong> Basic validation against common legal requirements</li>
                </ul>
              </div>

              <div className="bg-legal-light p-6 rounded-lg mb-6">
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-4">Step 3: Document Generation</h3>
                <p className="mb-4">
                  The AI combines your inputs with professional templates to create:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Customized legal documents tailored to your needs</li>
                  <li>Properly formatted and structured content</li>
                  <li>Standard legal clauses adapted to your situation</li>
                  <li>Professional document layout and presentation</li>
                </ul>
              </div>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">AI Capabilities</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-sm font-medium text-green-800 mb-2">✅ What Our AI Can Do:</p>
                <ul className="text-sm text-green-700 list-disc pl-4 space-y-1">
                  <li>Generate customized documents based on your specific inputs</li>
                  <li>Adapt templates to different scenarios and requirements</li>
                  <li>Ensure consistent formatting and professional presentation</li>
                  <li>Provide basic legal clause variations</li>
                  <li>Process multiple document types simultaneously</li>
                  <li>Maintain document version history</li>
                </ul>
              </div>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">AI Limitations</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800 mb-2">⚠️ What Our AI Cannot Do:</p>
                    <ul className="text-sm text-red-700 list-disc pl-4 space-y-1">
                      <li><strong>Provide Legal Advice:</strong> AI cannot replace professional legal counsel</li>
                      <li><strong>Guarantee Validity:</strong> Cannot ensure legal enforceability in all jurisdictions</li>
                      <li><strong>Handle Complex Cases:</strong> May not address unique or complex legal situations</li>
                      <li><strong>Stay Current with All Laws:</strong> May not reflect the latest legal changes</li>
                      <li><strong>Understand Context Fully:</strong> Cannot grasp all nuances of your specific situation</li>
                      <li><strong>Replace Human Judgment:</strong> Cannot make strategic legal decisions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Data Security and Privacy</h2>
              <p className="mb-4">
                We take your data security seriously and implement comprehensive protection measures:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                <li><strong>No Training Data:</strong> Your documents are not used to train our AI models</li>
                <li><strong>Temporary Processing:</strong> Data is processed temporarily and not permanently stored</li>
                <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
                <li><strong>Data Deletion:</strong> You can delete your data and documents at any time</li>
                <li><strong>Compliance:</strong> We comply with Indian data protection laws</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Quality Assurance</h2>
              <p className="mb-4">
                To ensure the quality of AI-generated documents, we:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Regularly update our templates with current legal standards</li>
                <li>Test AI outputs for consistency and accuracy</li>
                <li>Provide clear guidance on when professional review is needed</li>
                <li>Offer customer support for document-related questions</li>
                <li>Continuously improve our AI based on user feedback</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">When to Seek Professional Legal Help</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-sm font-medium text-blue-800 mb-2">🏛️ Always Consult a Lawyer When:</p>
                <ul className="text-sm text-blue-700 list-disc pl-4 space-y-1">
                  <li>The document involves significant financial amounts or assets</li>
                  <li>Complex legal issues or disputes are involved</li>
                  <li>You're unsure about legal requirements in your jurisdiction</li>
                  <li>The document needs to comply with specific regulations</li>
                  <li>You're facing legal action or litigation</li>
                  <li>The document involves intellectual property or business transactions</li>
                  <li>You need advice on legal strategy or implications</li>
                </ul>
              </div>

              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Continuous Improvement</h2>
              <p className="mb-4">
                Our AI system is continuously evolving through:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Regular Updates:</strong> Templates and AI models are regularly updated</li>
                <li><strong>User Feedback:</strong> We incorporate user suggestions and experiences</li>
                <li><strong>Legal Research:</strong> Ongoing research into legal requirements and best practices</li>
                <li><strong>Quality Monitoring:</strong> Continuous monitoring of AI output quality</li>
                <li><strong>Expert Review:</strong> Legal experts review and validate our templates</li>
              </ul>

              <div className="mt-8 p-6 bg-legal-navy text-white rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-4">Questions About Our AI?</h3>
                <p className="mb-4">
                  We're committed to transparency about our AI technology. If you have questions about how our AI works or its limitations, please don't hesitate to contact us.
                </p>
                <p className="text-legal-gold">
                  <strong>Email:</strong> ai-info@docucreatorpro.online<br />
                  <strong>Support:</strong> support@docucreatorpro.online
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

export default HowAIWorks;
