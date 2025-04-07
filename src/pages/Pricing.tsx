
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Pricing Plans | DocuCreator Pro" 
        description="Choose from our flexible pricing plans for AI-powered legal document generation. Find the perfect plan for your needs."
        canonicalUrl="/pricing"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-legal-gray">
              Choose the plan that's right for you. All plans include access to our document editor and AI assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹499</span>
                <span className="text-legal-gray">/month</span>
              </div>
              <p className="text-legal-gray mb-6">Perfect for individuals with occasional document needs.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>5 documents per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Access to all basic templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Basic AI assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>PDF and Word exports</span>
                </li>
              </ul>
              
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Choose Basic</Button>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-legal-light border border-legal-gold rounded-lg shadow-md p-6 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-legal-gold text-legal-navy py-1 px-3 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹999</span>
                <span className="text-legal-gray">/month</span>
              </div>
              <p className="text-legal-gray mb-6">Ideal for small businesses and frequent users.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>20 documents per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Access to all premium templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced AI assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>E-signature capability</span>
                </li>
              </ul>
              
              <Button className="w-full bg-legal-gold text-legal-navy hover:bg-opacity-90">Choose Professional</Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹2999</span>
                <span className="text-legal-gray">/month</span>
              </div>
              <p className="text-legal-gray mb-6">Complete solution for law firms and large businesses.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom template creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Premium AI legal assistant</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>Team collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>API access</span>
                </li>
              </ul>
              
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Choose Enterprise</Button>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-legal-light rounded-lg text-center">
            <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">Need a custom solution?</h3>
            <p className="text-legal-gray mb-6">
              We offer tailored packages for legal firms, corporate legal departments, and institutions with specific requirements.
            </p>
            <Button className="bg-legal-gold text-legal-navy hover:bg-opacity-90">
              Contact Sales
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-serif font-bold text-legal-navy mb-6 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-legal-navy mb-2">Can I change plans at any time?</h4>
                <p className="text-legal-gray">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-legal-navy mb-2">Are there any long-term contracts?</h4>
                <p className="text-legal-gray">No, all our plans are month-to-month with no long-term commitment required.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-legal-navy mb-2">Do you offer refunds?</h4>
                <p className="text-legal-gray">We offer a 7-day money-back guarantee if you're not satisfied with our service.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default Pricing;
