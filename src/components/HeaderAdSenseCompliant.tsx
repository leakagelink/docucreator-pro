import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeaderAdSenseCompliant = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-legal-navy text-white py-4 px-4 md:px-6 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/140a1ef9-b2d2-47c1-80cd-9a5a5387768a.png" 
              alt="DocuCreator Pro Logo" 
              className="h-6 w-6 md:h-8 md:w-8"
            />
            <h1 className="text-xl md:text-2xl font-serif font-bold">DocuCreator Pro</h1>
          </Link>
        </div>
        
        {isMobile ? (
          <Button 
            variant="ghost"
            size="icon"
            className="text-white hover:bg-legal-navy/50"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-legal-gold transition-colors">Home</Link>
              <Link to="/templates" className="hover:text-legal-gold transition-colors">Templates</Link>
              <Link to="/pricing" className="hover:text-legal-gold transition-colors">Pricing</Link>
              <Link to="/about" className="hover:text-legal-gold transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-legal-gold transition-colors">Contact</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="text-white hover:text-legal-gold hover:bg-transparent">
                <HelpCircle className="h-5 w-5 mr-1" />
                <span>Help</span>
              </Button>
            </div>
          </>
        )}
      </div>
      
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-legal-navy shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" className="py-2 hover:text-legal-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/templates" className="py-2 hover:text-legal-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Templates
          </Link>
          <Link to="/pricing" className="py-2 hover:text-legal-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/about" className="py-2 hover:text-legal-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="py-2 hover:text-legal-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex items-center justify-start pt-4 border-t border-white/20">
            <Button variant="ghost" className="text-white hover:text-legal-gold hover:bg-transparent" onClick={() => setMobileMenuOpen(false)}>
              <HelpCircle className="h-5 w-5 mr-1" />
              Help
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAdSenseCompliant;
