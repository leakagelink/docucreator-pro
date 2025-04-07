
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import { FileText, Sparkles, Shield, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">About DocuCreator Pro</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-legal-gray mb-8">
                DocuCreator Pro is India's premier AI-powered legal document generator, designed to simplify the creation of professional legal documents for individuals and businesses alike.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-12 mb-4">Our Mission</h2>
              <p>
                Our mission is to democratize access to legal documentation by leveraging artificial intelligence to create accurate, professional, and legally sound documents at a fraction of the cost of traditional legal services.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-12 mb-4">Our Story</h2>
              <p>
                Founded in 2023 by a team of legal professionals and technology experts, DocuCreator Pro was born from the realization that many individuals and small businesses struggle with creating proper legal documentation due to high costs and complexity.
              </p>
              <p className="mt-4">
                Our founders, with over 25 years of combined experience in legal practice and technology innovation, set out to create a solution that would make legal document creation accessible, affordable, and accurate for everyone.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-legal-light p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-legal-navy mb-4">Our Team</h3>
                  <p>
                    Our team consists of experienced legal professionals, AI engineers, and customer support specialists, all dedicated to providing you with the best possible service and support for your legal documentation needs.
                  </p>
                </div>
                
                <div className="bg-legal-light p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-legal-navy mb-4">Our Technology</h3>
                  <p>
                    We leverage state-of-the-art artificial intelligence and natural language processing technologies to ensure that all documents created through our platform are accurate, comprehensive, and legally sound.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-12 mb-6">Why Choose DocuCreator Pro?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Sparkles className="h-6 w-6 text-legal-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">AI-Powered Precision</h3>
                    <p>Our advanced AI ensures your documents are accurate, complete, and legally compliant.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Clock className="h-6 w-6 text-legal-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Time Efficiency</h3>
                    <p>Create professional legal documents in minutes rather than hours or days.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <Shield className="h-6 w-6 text-legal-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Legal Compliance</h3>
                    <p>All templates are created by legal experts and regularly updated to ensure compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FileText className="h-6 w-6 text-legal-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Diverse Templates</h3>
                    <p>Access a wide range of templates for various legal needs and scenarios.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-legal-navy mt-12 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 my-4">
                <li className="mb-2"><strong>Accessibility:</strong> Making legal documentation available to everyone</li>
                <li className="mb-2"><strong>Accuracy:</strong> Ensuring all documents are precise and legally sound</li>
                <li className="mb-2"><strong>Innovation:</strong> Continuously improving our technology</li>
                <li className="mb-2"><strong>Customer-Centric:</strong> Focusing on user needs and satisfaction</li>
                <li className="mb-2"><strong>Security:</strong> Protecting your data and privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default AboutUs;
