
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Sparkles } from 'lucide-react';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';

interface LandingHeroProps {
  onGetStarted: () => void;
}

const LandingHero = ({ onGetStarted }: LandingHeroProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
      <div className="inline-flex items-center justify-center p-2 bg-legal-navy rounded-full mb-3 animate-fade-in">
        <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-legal-gold" />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-legal-navy mb-2 md:mb-3">
        AI-Assisted Legal Document Templates
      </h1>
      <p className="text-lg md:text-xl text-legal-gray mb-6 md:mb-8 max-w-3xl mx-auto">
        Create professional document templates and agreements in minutes with our AI-assisted document generator using standard formats and commonly used clauses.
      </p>
      
      <PlayStoreCompliantDisclaimer variant="prominent" className="mb-4" />
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
        <Button 
          className="bg-legal-navy hover:bg-opacity-90 text-white px-4 py-5 md:px-6 md:py-6 text-base md:text-lg rounded-lg w-full sm:w-auto"
          onClick={onGetStarted}
        >
          <FileText className="h-5 w-5 mr-2" />
          Create Document Template
        </Button>
        <Button 
          variant="outline"
          className="border-legal-navy text-legal-navy hover:bg-legal-light px-4 py-5 md:px-6 md:py-6 text-base md:text-lg rounded-lg w-full sm:w-auto"
        >
          <ArrowRight className="h-5 w-5 mr-2" />
          Explore Templates
        </Button>
      </div>
    </div>
  );
};

export default LandingHero;
