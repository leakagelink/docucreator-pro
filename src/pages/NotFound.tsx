
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-serif font-bold text-legal-navy mb-4">404</h1>
          <p className="text-2xl text-legal-gray mb-6">Oops! Page not found</p>
          <p className="text-legal-gray mb-8">
            We couldn't find the page you were looking for. The page might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-legal-navy hover:bg-opacity-90">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default NotFound;
