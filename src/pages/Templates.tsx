
import React from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Templates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Document Templates | DocuCreator Pro" 
        description="Browse our collection of AI-assisted document templates for various needs. Create customized document templates in minutes using standard formats."
        canonicalUrl="/templates"
      />
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6">Document Templates</h1>
            <p className="text-lg text-legal-gray mb-6">
              Choose from our comprehensive collection of document templates based on standard formats and commonly used clauses.
              Customize any template to fit your specific needs with AI assistance.
            </p>
            <PlayStoreCompliantDisclaimer variant="prominent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Template Cards */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Rental Agreement Template</h3>
              <p className="text-legal-gray mb-4 flex-grow">Standard rental agreement template for residential properties with customizable terms based on common practices.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Non-Disclosure Agreement Template</h3>
              <p className="text-legal-gray mb-4 flex-grow">Protect your confidential information with this comprehensive NDA template based on standard clauses.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Employment Contract Template</h3>
              <p className="text-legal-gray mb-4 flex-grow">Employment contract template with standard clauses and essential terms commonly used in India.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Power of Attorney Template</h3>
              <p className="text-legal-gray mb-4 flex-grow">Comprehensive power of attorney document template with customizable powers and limitations based on standard formats.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Will and Testament Template</h3>
              <p className="text-legal-gray mb-4 flex-grow">Create a comprehensive will template with this standard format document. Professional legal review strongly recommended.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
              <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-legal-navy" />
              </div>
              <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Service Agreement Template</h3>
              <p className="text-legal-gray mb-4 flex-grow">Clear and comprehensive service agreement template for freelancers and contractors using standard terms.</p>
              <Button className="w-full bg-legal-navy hover:bg-opacity-90">Use Template</Button>
            </div>
          </div>
          
          <PlayStoreCompliantDisclaimer variant="inline" className="mb-8" />
          
          <div className="text-center mt-12">
            <p className="text-lg text-legal-gray mb-6">
              Don't see the template you need? Contact us for custom document template creation services.
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
