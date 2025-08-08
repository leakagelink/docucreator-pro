
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsPWA } from '@/hooks/use-pwa';
import AdBanner from '@/components/ads/AdBanner';

const HeaderAdSenseCompliant = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isPWA = useIsPWA();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`sticky top-0 bg-white text-legal-navy py-4 px-4 md:px-6 shadow-md relative z-50 border-b border-gray-200 ${isPWA ? 'safe-area-top' : ''}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/65e2842b-9ade-4578-8288-c617f5fbfc3f.png" 
                alt="DocuCreator Pro Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
            </Link>
          </div>
          
          {isMobile ? (
            <Button 
              variant="ghost"
              size="icon"
              className="text-legal-navy hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          ) : (
            <>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-legal-gold transition-colors">Home</Link>
                <Link to="/templates" className="hover:text-legal-gold transition-colors">Templates</Link>
                <Link to="/about" className="hover:text-legal-gold transition-colors">About Us</Link>
                <Link to="/contact" className="hover:text-legal-gold transition-colors">Contact</Link>
              </div>
              
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" className="text-legal-navy hover:text-legal-gold hover:bg-gray-100">
                  <HelpCircle className="h-5 w-5 mr-1" />
                  <span>Help</span>
                </Button>
              </div>
            </>
          )}
        </div>
        
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in border-t border-gray-200">
            <Link to="/" className="py-2 hover:text-legal-gold transition-colors text-legal-navy" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/templates" className="py-2 hover:text-legal-gold transition-colors text-legal-navy" onClick={() => setMobileMenuOpen(false)}>
              Templates
            </Link>
            <Link to="/about" className="py-2 hover:text-legal-gold transition-colors text-legal-navy" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="py-2 hover:text-legal-gold transition-colors text-legal-navy" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center justify-start pt-4 border-t border-gray-200">
              <Button variant="ghost" className="text-legal-navy hover:text-legal-gold hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                <HelpCircle className="h-5 w-5 mr-1" />
                Help
              </Button>
            </div>
          </div>
        )}
      </header>
      
      {/* Header Banner Ad - only on desktop */}
      {!isMobile && (
        <div className="bg-gray-50 py-2">
          <AdBanner
            adSlot="2312152116"
            className="flex justify-center"
            style={{ maxWidth: '728px', height: '90px', margin: '0 auto' }}
          />
        </div>
      )}
    </>
  );
};

export default HeaderAdSenseCompliant;
