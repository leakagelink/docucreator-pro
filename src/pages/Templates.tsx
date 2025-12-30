
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Templates = () => {
  const navigate = useNavigate();

  // Template mapping to match DocumentTypeSelector data
  const templates = [
    { 
      id: 'rental-agreement', 
      title: 'Rental Agreement Template',
      description: 'Standard rental agreement template for residential properties with customizable terms based on common practices.',
      category: 'agreements',
      documentType: 'rental'
    },
    { 
      id: 'nda', 
      title: 'Non-Disclosure Agreement Template',
      description: 'Protect your confidential information with this comprehensive NDA template based on standard clauses.',
      category: 'confidential',
      documentType: 'nda'
    },
    { 
      id: 'employment-contract', 
      title: 'Employment Contract Template',
      description: 'Employment contract template with standard clauses and essential terms commonly used in India.',
      category: 'agreements',
      documentType: 'employment'
    },
    { 
      id: 'power-of-attorney', 
      title: 'Power of Attorney Template',
      description: 'Comprehensive power of attorney document template with customizable powers and limitations based on standard formats.',
      category: 'legaldocs',
      documentType: 'poa'
    },
    { 
      id: 'will-testament', 
      title: 'Will and Testament Template',
      description: 'Create a comprehensive will template with this standard format document. Professional legal review strongly recommended.',
      category: 'legaldocs',
      documentType: 'will'
    },
    { 
      id: 'service-agreement', 
      title: 'Service Agreement Template',
      description: 'Clear and comprehensive service agreement template for freelancers and contractors using standard terms.',
      category: 'contracts',
      documentType: 'service'
    }
  ];

  const handleUseTemplate = (template: typeof templates[0]) => {
    // Navigate to home page with template selection
    navigate(`/?template=${template.category}-${template.documentType}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Free Legal Document Templates India | Rent Agreement, NDA, POA Templates - DocuCreator Pro" 
        description="Download free legal document templates. Rent agreement, NDA, employment contract, power of attorney, will templates. Customize and generate instantly."
        keywords="free legal templates, rent agreement template, NDA template free, power of attorney format, employment contract template, legal document templates India"
        canonicalUrl="/templates"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Templates", url: "/templates" }
        ]}
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
            {templates.map(template => (
              <div key={template.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
                <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-legal-navy" />
                </div>
                <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">{template.title}</h3>
                <p className="text-legal-gray mb-4 flex-grow">{template.description}</p>
                <Button 
                  className="w-full bg-legal-navy hover:bg-opacity-90"
                  onClick={() => handleUseTemplate(template)}
                >
                  Use Template
                </Button>
              </div>
            ))}
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
