
import React, { useState } from 'react';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import DocumentTypeSelector from '@/components/DocumentTypeSelector';
import DocumentForm from '@/components/DocumentForm';
import DocumentPreview from '@/components/DocumentPreview';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

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
      
      {/* AdSense-friendly content section */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-serif font-bold text-legal-navy mb-8 text-center">Why Choose DocuCreator Pro?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">For Individuals</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Create rental agreements that protect your interests as a tenant or landlord</p>
              </li>
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Generate power of attorney documents for various situations</p>
              </li>
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Draft wills and estate planning documents with legal guidance</p>
              </li>
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Create employment contracts for domestic help or other personal hiring needs</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">For Businesses</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Generate NDAs and confidentiality agreements to protect your intellectual property</p>
              </li>
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Create employment contracts and offer letters for new hires</p>
              </li>
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Draft partnership agreements with clear terms and conditions</p>
              </li>
              <li className="flex items-start">
                <span className="text-legal-gold font-bold mr-2">✓</span>
                <p>Generate service agreements for clients and contractors</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4">Ready to create your legal document?</h3>
          <Button 
            className="bg-legal-gold hover:bg-opacity-90 text-legal-navy px-6 py-3 text-lg rounded-lg"
            onClick={() => setStep('select')}
          >
            Get Started Now
          </Button>
        </div>
        
        <div className="bg-legal-light p-8 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-legal-navy mb-4 text-center">Trusted by professionals across India</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-legal-gold mb-2">5000+</p>
              <p className="text-legal-gray">Documents Generated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-legal-gold mb-2">1000+</p>
              <p className="text-legal-gray">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-legal-gold mb-2">25+</p>
              <p className="text-legal-gray">Document Types</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
              <Button variant="outline" className="border-legal-navy text-legal-navy">
                About Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-legal-navy text-legal-navy">
                Contact Support
              </Button>
            </Link>
            <Link to="/privacy">
              <Button variant="outline" className="border-legal-navy text-legal-navy">
                Privacy Policy
              </Button>
            </Link>
            <Link to="/terms">
              <Button variant="outline" className="border-legal-navy text-legal-navy">
                Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdSenseCompliant />
      
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
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default Index;
