
import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
          <FileText className="h-6 w-6 text-legal-navy" />
        </div>
        <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Multiple Document Types</h3>
        <p className="text-legal-gray">Choose from a variety of legal formats including rent agreements, business contracts, NDAs, and more.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-legal-navy" />
        </div>
        <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">AI-Powered Assistance</h3>
        <p className="text-legal-gray">Our AI helps you create legally sound documents by guiding you through the necessary information.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-legal-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"></path>
            <path d="M9 12L11 14L15 10"></path>
          </svg>
        </div>
        <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">E-Signature & Stamps</h3>
        <p className="text-legal-gray">Easily add digital signatures and stamps to finalize your documents securely.</p>
      </div>
    </div>
  );
};

export default FeatureCards;
