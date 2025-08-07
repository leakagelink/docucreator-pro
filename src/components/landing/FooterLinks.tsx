
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FooterLinks = () => {
  return (
    <div className="mt-12 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/how-ai-works">
          <Button variant="outline" className="border-legal-navy text-legal-navy">
            How AI Works
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="outline" className="border-legal-navy text-legal-navy">
            About Us
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="border-legal-navy text-legal-navy">
            Contact Support
          </Button>
        </Link>
        <Link to="/privacy">
          <Button variant="outline" className="border-legal-navy text-legal-navy">
            Privacy Policy
          </Button>
        </Link>
        <Link to="/terms">
          <Button variant="outline" className="border-legal-navy text-legal-navy">
            Terms of Service
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
