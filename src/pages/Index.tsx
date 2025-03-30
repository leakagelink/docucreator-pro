
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocumentTypeSelector from '@/components/DocumentTypeSelector';
import DocumentForm from '@/components/DocumentForm';
import DocumentPreview from '@/components/DocumentPreview';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [step, setStep] = useState<'landing' | 'select' | 'form' | 'preview'>('landing');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDocType, setSelectedDocType] = useState<string>('');
  const [documentData, setDocumentData] = useState<any>({});
  const { toast } = useToast();

  const handleSelectDocument = (category: string, documentType: string) => {
    setSelectedCategory(category);
    setSelectedDocType(documentType);
    setStep('form');
    
    toast({
      title: "Document type selected",
      description: "Now please fill in the details for your document.",
    });
  };

  const handleFormComplete = (formData: any) => {
    setDocumentData(formData);
    setStep('preview');
    
    toast({
      title: "Document generated!",
      description: "Your document has been created successfully.",
    });
  };

  const renderLandingPage = () => (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-legal-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-2 bg-legal-navy rounded-full mb-6 animate-fade-in">
          <Sparkles className="h-6 w-6 text-legal-gold" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-legal-navy mb-6">
          AI-Powered Legal Document Generator
        </h1>
        <p className="text-xl text-legal-gray mb-8 max-w-3xl mx-auto">
          Create professional legal agreements, contracts, and affidavits in minutes with our AI-powered document generator. Simple, accurate, and legally sound.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            className="bg-legal-navy hover:bg-opacity-90 text-white px-6 py-6 text-lg rounded-lg"
            onClick={() => setStep('select')}
          >
            <FileText className="h-5 w-5 mr-2" />
            Create Document
          </Button>
          <Button 
            variant="outline"
            className="border-legal-navy text-legal-navy hover:bg-legal-light px-6 py-6 text-lg rounded-lg"
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            Explore Templates
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-legal-navy" />
            </div>
            <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Multiple Document Types</h3>
            <p className="text-legal-gray">Choose from a variety of legal formats including rent agreements, business contracts, NDAs, and more.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-legal-navy" />
            </div>
            <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">AI-Powered Assistance</h3>
            <p className="text-legal-gray">Our AI helps you create legally sound documents by guiding you through the necessary information.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-legal-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-legal-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"></path>
                <path d="M9 12L11 14L15 10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">E-Signature & Stamps</h3>
            <p className="text-legal-gray">Easily add digital signatures and stamps to finalize your documents securely.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {step === 'landing' && renderLandingPage()}
        {step === 'select' && <DocumentTypeSelector onSelectDocument={handleSelectDocument} />}
        {step === 'form' && (
          <DocumentForm 
            category={selectedCategory} 
            documentType={selectedDocType} 
            onComplete={handleFormComplete} 
          />
        )}
        {step === 'preview' && (
          <DocumentPreview 
            documentData={documentData}
            onBack={() => setStep('form')}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
