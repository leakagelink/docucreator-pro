import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-legal-navy text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-legal-gold rounded-lg flex items-center justify-center">
            <span className="text-legal-navy font-bold text-sm">DC</span>
          </div>
          <span className="text-xl font-bold">DocuCreator Pro</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-legal-gold transition-colors">Templates</a>
          <a href="#" className="hover:text-legal-gold transition-colors">Features</a>
          <a href="#" className="hover:text-legal-gold transition-colors">Support</a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-white hover:text-legal-gold hover:bg-transparent">
            <HelpCircle className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">Help</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
