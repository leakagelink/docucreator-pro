
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, FilePlus, FileCheck, FileSignature, Scale } from 'lucide-react';

// Document type data
const documentTypes = [
  {
    id: 'agreements',
    name: 'Agreements',
    icon: FileText,
    description: 'Rental, employment, and partnership agreements',
    items: [
      { id: 'rental', name: 'Rental Agreement' },
      { id: 'employment', name: 'Employment Agreement' },
      { id: 'partnership', name: 'Partnership Agreement' },
      { id: 'vendor', name: 'Vendor Agreement' },
    ]
  },
  {
    id: 'contracts',
    name: 'Contracts',
    icon: FileCheck,
    description: 'Business, service, and sales contracts',
    items: [
      { id: 'business', name: 'Business Contract' },
      { id: 'service', name: 'Service Contract' },
      { id: 'sales', name: 'Sales Contract' },
      { id: 'consulting', name: 'Consulting Contract' },
    ]
  },
  {
    id: 'legaldocs',
    name: 'Legal Documents',
    icon: Scale,
    description: 'Affidavits, powers of attorney, and legal notices',
    items: [
      { id: 'affidavit', name: 'Affidavit' },
      { id: 'poa', name: 'Power of Attorney' },
      { id: 'notice', name: 'Legal Notice' },
      { id: 'will', name: 'Will & Testament' },
    ]
  },
  {
    id: 'confidential',
    name: 'Confidentiality',
    icon: FileSignature,
    description: 'NDAs and confidentiality agreements',
    items: [
      { id: 'nda', name: 'Non-Disclosure Agreement' },
      { id: 'confidentiality', name: 'Confidentiality Agreement' },
      { id: 'ip', name: 'Intellectual Property Agreement' },
      { id: 'non-compete', name: 'Non-Compete Agreement' },
    ]
  },
];

interface DocumentTypeSelectorProps {
  onSelectDocument: (category: string, documentType: string) => void;
}

const DocumentTypeSelector: React.FC<DocumentTypeSelectorProps> = ({ onSelectDocument }) => {
  return (
    <div className="mobile-container my-4 md:my-8">
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-responsive-subheading font-serif font-bold text-legal-navy mb-2 md:mb-4">
          Select Document Type
        </h2>
        <p className="text-responsive-body text-legal-gray max-w-2xl mx-auto">
          Choose from our professionally crafted legal document templates
        </p>
      </div>
      
      <Tabs defaultValue="agreements" className="w-full">
        <div className="overflow-x-auto scrollbar-hide mb-4 md:mb-6">
          <TabsList className="grid grid-cols-4 min-w-max md:min-w-0 w-full md:w-auto mx-auto bg-muted/50 p-1 h-auto">
            {documentTypes.map(type => (
              <TabsTrigger 
                key={type.id} 
                value={type.id}
                className="flex flex-col items-center py-3 px-2 md:px-4 min-w-[120px] md:min-w-0 data-[state=active]:bg-legal-navy data-[state=active]:text-white transition-all duration-200 touch-target"
              >
                <type.icon className="h-5 w-5 md:h-6 md:w-6 mb-1 md:mb-2 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-center leading-tight">{type.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {documentTypes.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0 animate-fade-in">
            <div className="text-center mb-4 md:mb-6">
              <p className="text-responsive-body text-legal-gray">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {category.items.map(item => (
                <Card 
                  key={item.id} 
                  className="group border border-border hover:border-legal-gold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] touch-target bg-card"
                  onClick={() => onSelectDocument(category.id, item.id)}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 text-center min-h-[120px] md:min-h-[140px]">
                    <div className="bg-legal-navy/5 group-hover:bg-legal-navy/10 rounded-full p-3 md:p-4 mb-3 md:mb-4 transition-colors duration-300">
                      <FilePlus className="h-6 w-6 md:h-8 md:w-8 text-legal-navy group-hover:text-legal-gold transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground group-hover:text-legal-navy leading-tight transition-colors duration-300">
                      {item.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DocumentTypeSelector;
