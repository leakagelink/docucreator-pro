
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Sparkles } from 'lucide-react';

interface LandingHeroProps {
  onGetStarted: () => void;
}

const LandingHero = ({ onGetStarted }: LandingHeroProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center justify-center p-2 bg-legal-navy rounded-full mb-6 animate-fade-in">
        <Sparkles className="h-6 w-6 text-legal-gold" />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-legal-navy mb-6">
        AI-Powered Legal Document Generator
      </h1>
      <p className="text-xl text-legal-gray mb-8 max-w-3xl mx-auto">
        Create professional legal agreements, contracts, and affidavits in minutes with our AI-powered document generator. Simple, accurate, and legally sound.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button 
          className="bg-legal-navy hover:bg-opacity-90 text-white px-6 py-6 text-lg rounded-lg"
          onClick={onGetStarted}
        >
          <FileText className="h-5 w-5 mr-2" />
          Create Document
        </Button>
        <Button 
          variant="outline"
          className="border-legal-navy text-legal-navy hover:bg-legal-light px-6 py-6 text-lg rounded-lg"
        >
          <ArrowRight className="h-5 w-5 mr-2" />
          Explore Templates
        </Button>
      </div>
    </div>
  );
};

export default LandingHero;
