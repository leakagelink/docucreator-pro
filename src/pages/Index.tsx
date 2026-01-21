
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

  // Homepage FAQ items for structured data - Optimized for PAA keywords (KD 0-25)
  const homeFaqItems = [
    {
      question: "What is stamp duty for rent agreement in India 2026?",
      answer: "Stamp duty varies by state: Maharashtra 0.25% of annual rent (min ₹100), Karnataka 1%, Delhi 2%, Tamil Nadu ₹20-100 for 11-month agreements. For agreements under 11 months, typically ₹100-500 e-stamp paper is sufficient. Under Model Tenancy Act 2021, digital stamping is mandatory in adopting states."
    },
    {
      question: "How to create rent agreement online in India?",
      answer: "1. Visit DocuCreator Pro and select 'Rent Agreement' template. 2. Fill landlord and tenant details. 3. Add property address and rent amount. 4. Set agreement duration (typically 11 months). 5. Add security deposit (max 2 months under MTA 2021). 6. Generate document with e-stamp and e-signature. 7. Download PDF or Word format."
    },
    {
      question: "Is 11 month rent agreement valid without registration?",
      answer: "Yes, under Indian Registration Act 1908, rent agreements of 11 months or less do not require mandatory registration. However, they must be on proper stamp paper, signed by both parties and two witnesses. Agreements exceeding 11 months must be registered with Sub-Registrar office."
    },
    {
      question: "What documents are required for rent agreement?",
      answer: "Required documents: 1. Landlord's ID proof (Aadhaar/PAN), 2. Tenant's ID proof, 3. Property ownership documents, 4. Passport-size photos of both parties, 5. Address proof, 6. Two witnesses with ID proofs, 7. E-stamp paper (₹100-500 based on state)."
    },
    {
      question: "What is Model Tenancy Act 2021?",
      answer: "Model Tenancy Act 2021 by MoHUA standardizes rental agreements across India. Key provisions: Security deposit capped at 2 months' rent for residential properties, mandatory written agreements, digital registration within 60 days, dedicated Rent Courts for disputes, and standardized eviction procedures. 12+ states have adopted it as of 2026."
    },
    {
      question: "Is e-signature valid for legal documents in India?",
      answer: "Yes, e-signatures are legally valid in India under IT Act 2000, Section 5. Digital signatures have the same legal standing as physical signatures for contracts and agreements. DocuCreator Pro uses Aadhaar-based e-sign and DSC for legally binding documents."
    },
    {
      question: "Can I create employment contract online?",
      answer: "Yes, DocuCreator Pro offers AI-powered employment contract templates compliant with Indian Labour Laws, Industrial Disputes Act 1947, and Shops & Establishments Act. Templates include clauses for salary, PF/ESI deductions, notice period, confidentiality, and termination terms."
    },
    {
      question: "What is the penalty for unregistered rent agreement?",
      answer: "For agreements over 11 months that aren't registered: The document is inadmissible as evidence in court (Registration Act Section 49), penalty up to 10x the registration fee, and under MTA 2021, fine of ₹5,000+ for non-compliance. Always register long-term agreements."
    },
    {
      question: "Rent agreement kaise banaye online?",
      answer: "DocuCreator Pro pe rent agreement online banana bahut easy hai. Simply 'Rental Agreement' select karo, landlord-tenant details, rent amount, security deposit fill karo aur instant PDF download karo. 11 month rent agreement format available hai with all essential clauses."
    },
    {
      question: "Partnership deed format available hai?",
      answer: "Haan, partnership deed format available hai. Partners ki details, profit sharing ratio, capital contribution, duties fill karo aur professionally formatted partnership deed download karo. Indian Partnership Act 1932 ke according formatted hai. Registration ke liye Sub-Registrar office mein submit karo."
    },
    {
      question: "NDA agreement format India ke liye kaise banaye?",
      answer: "NDA (Non-Disclosure Agreement) banane ke liye 'Confidentiality' section mein NDA select karo. Confidential information define karo, duration set karo aur download karo. IT Act 2000 ke under legally valid hai. Business meetings aur employee onboarding ke liye perfect hai."
    },
    {
      question: "Rental agreement stamp paper value kitni honi chahiye?",
      answer: "Stamp duty state-wise alag hai. Maharashtra mein 0.25%, Delhi mein 2%, Karnataka mein 1%, UP mein 4% lagti hai. Total rent + security deposit pe calculate hoti hai. E-stamp paper online bhi le sakte ho Stock Holding Corporation of India se."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Free Rent Agreement & Legal Document Generator India 2026 | DocuCreator Pro"
        description="Create rent agreements, employment contracts, NDAs & legal documents online free. AI-powered document generator with e-stamp & e-signature. Trusted by 5000+ Indian users. Model Tenancy Act 2021 compliant."
        keywords="rent agreement online India, rental agreement format download, free rent agreement, employment agreement template India, partnership deed format, NDA agreement India, legal document generator, e-stamp rental agreement, 11 month rent agreement format, rent agreement kaise banaye, kiraya agreement format Hindi, simple rent agreement online India, free rental agreement format download, ghar ka rent agreement format, 11 mahine ka rent agreement"
        canonicalUrl="/"
        ogImage="https://docucreatorpro.online/og-image.png"
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
