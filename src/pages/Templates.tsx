
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Templates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Document Templates | DocuCreator Pro" 
        description="Browse our collection of professional legal document templates for various needs. Create customized legal documents in minutes."
        canonicalUrl="/templates"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Document Templates</h1>
            <p className="text-lg text-legal-gray">
              Choose from our comprehensive collection of legal document templates designed by legal experts.
              Customize any template to fit your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Template Cards */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Rental Agreement</h3>
              <p className="text-legal-gray mb-4 flex-grow">Standard rental agreement template for residential properties with customizable terms.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Non-Disclosure Agreement</h3>
              <p className="text-legal-gray mb-4 flex-grow">Protect your confidential information with this comprehensive NDA template.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Employment Contract</h3>
              <p className="text-legal-gray mb-4 flex-grow">Legally compliant employment contract template with all essential clauses.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Power of Attorney</h3>
              <p className="text-legal-gray mb-4 flex-grow">Comprehensive power of attorney document with customizable powers and limitations.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Will and Testament</h3>
              <p className="text-legal-gray mb-4 flex-grow">Create a legally binding will with this comprehensive and customizable template.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Service Agreement</h3>
              <p className="text-legal-gray mb-4 flex-grow">Clear and comprehensive service agreement template for freelancers and contractors.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-legal-gray mb-6">
              Don't see the template you need? Contact us for custom document creation services.
            </p>
            <Button className="bg-legal-gold hover:bg-opacity-90 text-legal-navy px-6 py-2 text-lg">
              Request Custom Template
            </Button>
          </div>
        </div>
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default Templates;
