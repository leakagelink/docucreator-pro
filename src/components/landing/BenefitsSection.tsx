
import React from 'react';
import { Button } from '@/components/ui/button';

interface BenefitsSectionProps {
  onGetStarted: () => void;
}

const BenefitsSection = ({ onGetStarted }: BenefitsSectionProps) => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-serif font-bold text-legal-navy mb-8 text-center">Why Choose DocuCreator Pro?</h2>
      
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ Important Legal Disclaimer:</strong> DocuCreator Pro provides AI-assisted document creation tools and is not a substitute for professional legal advice. Always consult with a qualified attorney for important legal matters.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">For Individuals</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Create rental agreements with AI-assisted document creation that helps protect your interests as a tenant or landlord</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Generate power of attorney documents with customizable templates for various situations</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Draft wills and estate planning documents using AI-assisted templates with built-in legal information</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Create employment contracts for domestic help or other personal hiring needs with legal template assistance</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">For Businesses</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Generate NDAs and confidentiality agreements with AI assistance to help protect your intellectual property</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Create employment contracts and offer letters for new hires using professionally crafted templates</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Draft partnership agreements with AI-assisted customization and clear terms and conditions</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Generate service agreements for clients and contractors with automated document creation tools</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mb-12">
        <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">Ready to create your legal document?</h3>
        <Button 
          className="bg-legal-gold hover:bg-opacity-90 text-legal-navy px-6 py-3 text-lg rounded-lg"
          onClick={onGetStarted}
        >
          Get Started Now
        </Button>
        <p className="text-xs text-gray-600 mt-2">
          *AI-assisted document creation - Professional legal review recommended for important documents
        </p>
      </div>
      
      <div className="bg-legal-light p-8 rounded-lg">
        <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4 text-center">Trusted by professionals across India</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-legal-gold mb-2">5000+</p>
            <p className="text-legal-gray">AI-Generated Documents</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-legal-gold mb-2">1000+</p>
            <p className="text-legal-gray">Satisfied Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-legal-gold mb-2">25+</p>
            <p className="text-legal-gray">Template Categories</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-legal-gray">
            <strong>Disclaimer:</strong> Statistics represent platform usage and do not guarantee legal outcomes. 
            All documents should be reviewed by qualified legal professionals before use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
