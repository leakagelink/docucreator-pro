
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import DocumentTypeSelector from '@/components/DocumentTypeSelector';
import DocumentForm from '@/components/DocumentForm';
import DocumentPreview from '@/components/DocumentPreview';
import LandingPage from '@/components/landing/LandingPage';
import SEOMetadata from '@/components/SEOMetadata';
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

  // Homepage FAQ items for structured data
  const homeFaqItems = [
    {
      question: "What is DocuCreator Pro?",
      answer: "DocuCreator Pro is a free AI-powered online tool that helps you create professional legal documents like rent agreements, NDAs, power of attorney, affidavits, and contracts instantly."
    },
    {
      question: "Is DocuCreator Pro free to use?",
      answer: "Yes, DocuCreator Pro is completely free. You can create unlimited documents and download them as PDFs without any charges."
    },
    {
      question: "Are the documents legally valid in India?",
      answer: "Our documents are formatted according to Indian legal standards. For legal enforcement, we recommend getting them notarized or registered with appropriate authorities."
    },
    {
      question: "How do I create a document?",
      answer: "Simply select your document type, fill in the required details in the form, and click generate. Your document will be ready for download in PDF format within seconds."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="DocuCreator Pro | Free AI Legal Document Generator India - Create Rent Agreement, NDA, POA Online"
        description="Create professional legal documents free online. Generate rent agreements, NDAs, power of attorney, affidavits, contracts & more with AI. Instant PDF download. India's #1 document maker."
        keywords="free legal document generator, rent agreement online, NDA template India, power of attorney format, affidavit maker, contract generator, legal document creator, free document maker India, online agreement maker, legal forms India"
        canonicalUrl="/"
        faqItems={homeFaqItems}
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
      />
      
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
