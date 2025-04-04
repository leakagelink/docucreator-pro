
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, HelpCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAdSenseCompliant = () => {
  return (
    <header className="bg-legal-navy text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-legal-gold" />
            <h1 className="text-2xl font-serif font-bold">DocuCreator Pro</h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-legal-gold transition-colors">Home</Link>
          <a href="#" className="hover:text-legal-gold transition-colors">Templates</a>
          <a href="#" className="hover:text-legal-gold transition-colors">Pricing</a>
          <Link to="/about" className="hover:text-legal-gold transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-legal-gold transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-white hover:text-legal-gold hover:bg-transparent">
            <HelpCircle className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">Help</span>
          </Button>
          <Button className="bg-legal-gold hover:bg-opacity-80 text-legal-navy">
            <User className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdSenseCompliant;
