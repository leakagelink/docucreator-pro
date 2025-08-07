
import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdBanner from '@/components/ads/AdBanner';

const FooterAdSenseCompliant = () => {
  return (
    <>
      {/* Footer Banner Ad */}
      <div className="bg-gray-50 py-4">
        <AdBanner
          adSlot="2312152116"
          className="flex justify-center"
          style={{ maxWidth: '728px', height: '90px', margin: '0 auto' }}
        />
      </div>

      <footer className="bg-legal-navy text-white">
        <div className="container mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-6 w-6 text-legal-gold" />
                <h3 className="text-xl font-serif font-bold">DocuCreator Pro</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Creating professional legal documents with AI-powered simplicity. Generate contracts, agreements, and legal forms with confidence.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-legal-gold transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-legal-gold transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-legal-gold transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Legal Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-legal-gold transition-colors">Law Blog</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors">Legal Guides</a></li>
                <li><a href="#" className="hover:text-legal-gold transition-colors">Document Types</a></li>
                <li><Link to="/terms" className="hover:text-legal-gold transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-legal-gold transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-legal-gold shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-legal-gold shrink-0" />
                  <span>support@docucreatorpro.online</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-legal-gold shrink-0" />
                  <span>123 Legal Avenue, Tech Park, Bangalore - 560001</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} DocuCreator Pro. All rights reserved.</p>
            <div className="mt-2">
              <Link to="/privacy" className="text-gray-400 hover:text-gray-300 mr-4">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterAdSenseCompliant;
