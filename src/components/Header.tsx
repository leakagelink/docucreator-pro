
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-legal-navy text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/9eb66cb1-4f3f-4245-82d9-b3d0e4cf0d0f.png" 
            alt="DocuCreator Pro Logo" 
            className="h-8 w-8"
          />
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
