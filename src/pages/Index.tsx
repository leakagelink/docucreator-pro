
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import DocumentTypeSelector from '@/components/DocumentTypeSelector';
import DocumentForm from '@/components/DocumentForm';
import DocumentPreview from '@/components/DocumentPreview';
import LandingPage from '@/components/landing/LandingPage';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<'landing' | 'select' | 'form' | 'preview'>('landing');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDocType, setSelectedDocType] = useState<string>('');
  const [documentData, setDocumentData] = useState<any>({});
  const { toast } = useToast();

  // Check for template parameter on component mount
  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      const [category, docType] = templateParam.split('-');
      if (category && docType) {
        setSelectedCategory(category);
        setSelectedDocType(docType);
        setStep('form');
        
        toast({
          title: "Template selected",
          description: "Please fill in the details for your selected template.",
        });
      }
    }
  }, [searchParams, toast]);

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

  const handleGetStarted = () => {
    setStep('select');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow">
        {step === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}
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
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default Index;
