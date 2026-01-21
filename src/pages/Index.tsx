
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

  // Homepage FAQ items for structured data - Optimized for target keywords
  const homeFaqItems = [
    {
      question: "Rent agreement online kaise banaye?",
      answer: "DocuCreator Pro pe rent agreement online banana bahut easy hai. Simply 'Rental Agreement' select karo, landlord-tenant details, rent amount, security deposit fill karo aur instant PDF download karo. 11 month rent agreement format available hai with all essential clauses."
    },
    {
      question: "Is DocuCreator Pro free to use?",
      answer: "Haan, DocuCreator Pro completely free hai. Unlimited rent agreements, employment contracts, NDAs, partnership deeds aur legal documents banao bina kisi charge ke. Instant PDF download available."
    },
    {
      question: "Kya documents legally valid hain India mein?",
      answer: "Hamare documents Indian legal standards ke according formatted hain. Rent agreement ke liye proper stamp duty lagao aur notarize karwao. Employment agreements aur NDAs immediately valid hain signed hone ke baad."
    },
    {
      question: "Employment agreement template kaise use kare?",
      answer: "Employment agreement banane ke liye 'Employment Agreement' select karo, employee details, salary, job role, notice period fill karo. Professional format mein instant download milega with all statutory clauses."
    },
    {
      question: "Partnership deed format available hai?",
      answer: "Haan, partnership deed format available hai. Partners ki details, profit sharing ratio, capital contribution, duties fill karo aur professionally formatted partnership deed download karo. Registration ke liye Sub-Registrar office mein submit karo."
    },
    {
      question: "NDA agreement format India ke liye kaise banaye?",
      answer: "NDA (Non-Disclosure Agreement) banane ke liye 'Confidentiality' section mein NDA select karo. Confidential information define karo, duration set karo aur download karo. Business meetings aur employee onboarding ke liye perfect hai."
    },
    {
      question: "Rental agreement stamp paper value kitni honi chahiye?",
      answer: "Stamp duty state-wise alag hai. Maharashtra mein 0.25%, Delhi mein 2%, Karnataka mein 1%, UP mein 4% lagti hai. Total rent + security deposit pe calculate hoti hai. E-stamp paper online bhi le sakte ho."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Free Rent Agreement & Legal Document Generator India | DocuCreator Pro"
        description="Create rent agreements, employment contracts, NDAs & legal documents online. AI-powered document generator with instant PDF download. Free templates for India. Rent agreement kaise banaye - step-by-step guide available."
        keywords="rent agreement online, rental agreement format, employment agreement template India, partnership deed format, legal document generator India, free rent agreement format Hindi, 11 month rent agreement format, NDA agreement format India, rent agreement kaise banaye, kiraya agreement format Hindi, power of attorney format online, rental agreement stamp paper value, vendor agreement sample India"
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
