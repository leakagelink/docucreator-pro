
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
    <div className="w-full max-w-5xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-serif font-bold text-legal-navy text-center mb-8">Select Document Type</h2>
      
      <Tabs defaultValue="agreements" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          {documentTypes.map(type => (
            <TabsTrigger 
              key={type.id} 
              value={type.id}
              className="flex flex-col items-center py-3 px-4 data-[state=active]:bg-legal-navy data-[state=active]:text-white"
            >
              <type.icon className="h-6 w-6 mb-2" />
              <span>{type.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {documentTypes.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <p className="text-legal-gray text-center mb-6">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.items.map(item => (
                <Card 
                  key={item.id} 
                  className="border border-gray-200 hover:border-legal-gold cursor-pointer transition-all hover:shadow-md"
                  onClick={() => onSelectDocument(category.id, item.id)}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <FilePlus className="h-10 w-10 text-legal-navy mb-4" />
                    <h3 className="font-serif text-lg font-medium text-center">{item.name}</h3>
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
