
import React from 'react';
import { Button } from '@/components/ui/button';

interface BenefitsSectionProps {
  onGetStarted: () => void;
}

const BenefitsSection = ({ onGetStarted }: BenefitsSectionProps) => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-serif font-bold text-legal-navy mb-8 text-center">Why Choose DocuCreator Pro?</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">For Individuals</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Create rental agreements that protect your interests as a tenant or landlord</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Generate power of attorney documents for various situations</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Draft wills and estate planning documents with legal guidance</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Create employment contracts for domestic help or other personal hiring needs</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">For Businesses</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Generate NDAs and confidentiality agreements to protect your intellectual property</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Create employment contracts and offer letters for new hires</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Draft partnership agreements with clear terms and conditions</p>
            </li>
            <li className="flex items-start">
              <span className="text-legal-gold font-bold mr-2">✓</span>
              <p>Generate service agreements for clients and contractors</p>
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
      </div>
      
      <div className="bg-legal-light p-8 rounded-lg">
        <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4 text-center">Trusted by professionals across India</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-legal-gold mb-2">5000+</p>
            <p className="text-legal-gray">Documents Generated</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-legal-gold mb-2">1000+</p>
            <p className="text-legal-gray">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-legal-gold mb-2">25+</p>
            <p className="text-legal-gray">Document Types</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
