
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown, Printer, Share2, Check } from 'lucide-react';
import { format } from 'date-fns';

interface DocumentPreviewProps {
  documentData: any;
  onBack: () => void;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ documentData, onBack }) => {
  const getDocumentTitle = () => {
    const typeMap: { [key: string]: string } = {
      'rental': 'Rental Agreement',
      'employment': 'Employment Agreement',
      'business': 'Business Contract',
      'affidavit': 'Affidavit',
      'nda': 'Non-Disclosure Agreement'
    };
    
    return documentData.title || typeMap[documentData.documentType] || 'Legal Document';
  };

  const getDocumentTemplate = () => {
    const { category, documentType } = documentData;
    
    if (category === 'agreements' && documentType === 'rental') {
      return renderRentalAgreement();
    } else if (category === 'contracts' && documentType === 'business') {
      return renderBusinessContract();
    } else if (category === 'legaldocs' && documentType === 'affidavit') {
      return renderAffidavit();
    } else if (category === 'confidential' && documentType === 'nda') {
      return renderNDA();
    } else {
      return renderGenericDocument();
    }
  };

  const renderRentalAgreement = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif font-bold text-center uppercase">RENTAL AGREEMENT</h1>
      
      <p className="text-sm">THIS RENTAL AGREEMENT (hereinafter referred to as the "Agreement") is made and entered into on {documentData.date ? format(documentData.date, 'MMMM d, yyyy') : 'the date of signing'}, by and between the parties identified in this agreement (hereinafter referred to collectively as the "Parties").</p>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">1. PARTIES</h2>
        <p>{documentData.parties}</p>
        
        <h2 className="text-lg font-semibold">2. PREMISES</h2>
        <p>The Landlord hereby leases to the Tenant, and the Tenant hereby leases from the Landlord, the residential premises located at: {documentData.propertyAddress}</p>
        
        <h2 className="text-lg font-semibold">3. TERM</h2>
        <p>This Agreement shall commence on {documentData.startDate} and shall continue until {documentData.endDate}.</p>
        
        <h2 className="text-lg font-semibold">4. RENT</h2>
        <p>The Tenant shall pay rent in the amount of {documentData.rentalAmount} per month, due on the first day of each month.</p>
        
        <h2 className="text-lg font-semibold">5. SECURITY DEPOSIT</h2>
        <p>The Tenant shall provide a security deposit in the amount of {documentData.securityDeposit}.</p>
        
        {documentData.terms && (
          <>
            <h2 className="text-lg font-semibold">6. ADDITIONAL TERMS</h2>
            <p>{documentData.terms}</p>
          </>
        )}
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-300">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold mb-2">LANDLORD:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
          <div>
            <p className="font-semibold mb-2">TENANT:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessContract = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif font-bold text-center uppercase">BUSINESS CONTRACT</h1>
      
      <p className="text-sm">THIS BUSINESS CONTRACT (hereinafter referred to as the "Contract") is made and entered into on {documentData.date ? format(documentData.date, 'MMMM d, yyyy') : 'the date of signing'}, by and between the parties identified in this contract (hereinafter referred to collectively as the "Parties").</p>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">1. PARTIES</h2>
        <p>{documentData.parties}</p>
        
        <h2 className="text-lg font-semibold">2. SCOPE OF WORK</h2>
        <p>{documentData.scope}</p>
        
        <h2 className="text-lg font-semibold">3. PAYMENT TERMS</h2>
        <p>{documentData.payment}</p>
        
        <h2 className="text-lg font-semibold">4. DELIVERABLES</h2>
        <p>{documentData.deliverables}</p>
        
        <h2 className="text-lg font-semibold">5. PROJECT TIMELINE</h2>
        <p>{documentData.timeline}</p>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-300">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold mb-2">PARTY A:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
          <div>
            <p className="font-semibold mb-2">PARTY B:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAffidavit = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif font-bold text-center uppercase">AFFIDAVIT</h1>
      
      <p className="text-center">STATE OF ___________________</p>
      <p className="text-center">COUNTY OF ___________________</p>
      
      <p className="italic">Before me, the undersigned authority, personally appeared the affiant named below, who being by me duly sworn, deposed as follows:</p>
      
      <div className="space-y-4">
        <p>I, {documentData.affiantName}, residing at {documentData.affiantAddress}, being of sound mind and legal age, hereby state under oath:</p>
        
        <p>{documentData.statement}</p>
        
        <p className="italic">I understand that this statement is made under oath, subject to the penalties of perjury.</p>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-300">
        <div className="flex flex-col items-center">
          <div className="h-16 border-b border-black w-64 mb-1"></div>
          <p>Signature of Affiant</p>
          <p className="mt-4">Sworn to and subscribed before me this _____ day of _______________, 20____.</p>
          <div className="h-16 border-b border-black w-64 mt-6 mb-1"></div>
          <p>Notary Public</p>
        </div>
      </div>
    </div>
  );

  const renderNDA = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif font-bold text-center uppercase">NON-DISCLOSURE AGREEMENT</h1>
      
      <p className="text-sm">THIS NON-DISCLOSURE AGREEMENT (hereinafter referred to as the "Agreement") is made and entered into on {documentData.date ? format(documentData.date, 'MMMM d, yyyy') : 'the date of signing'}, by and between the parties identified in this agreement (hereinafter referred to collectively as the "Parties").</p>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">1. PARTIES</h2>
        <p>{documentData.parties}</p>
        
        <h2 className="text-lg font-semibold">2. PURPOSE</h2>
        <p>{documentData.purpose}</p>
        
        <h2 className="text-lg font-semibold">3. DEFINITION OF CONFIDENTIAL INFORMATION</h2>
        <p>{documentData.confidentialInfo}</p>
        
        <h2 className="text-lg font-semibold">4. OBLIGATIONS OF RECEIVING PARTY</h2>
        <p>{documentData.obligations}</p>
        
        <h2 className="text-lg font-semibold">5. TERM</h2>
        <p>This Agreement shall remain in effect for a period of {documentData.duration} months from the effective date.</p>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-300">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold mb-2">DISCLOSING PARTY:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
          <div>
            <p className="font-semibold mb-2">RECEIVING PARTY:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGenericDocument = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif font-bold text-center uppercase">{getDocumentTitle()}</h1>
      
      <p className="text-sm">THIS DOCUMENT is made and entered into on {documentData.date ? format(documentData.date, 'MMMM d, yyyy') : 'the date of signing'}, by and between the parties identified herein.</p>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">1. PARTIES</h2>
        <p>{documentData.parties}</p>
        
        <h2 className="text-lg font-semibold">2. DETAILS</h2>
        <p>{documentData.details}</p>
        
        {documentData.termLength && (
          <>
            <h2 className="text-lg font-semibold">3. TERM</h2>
            <p>This document shall remain in effect for a period of {documentData.termLength} months from the effective date.</p>
          </>
        )}
        
        {documentData.additionalTerms && (
          <>
            <h2 className="text-lg font-semibold">4. ADDITIONAL TERMS</h2>
            <p>{documentData.additionalTerms}</p>
          </>
        )}
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-300">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold mb-2">PARTY A:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
          <div>
            <p className="font-semibold mb-2">PARTY B:</p>
            <div className="h-16 border-b border-black mb-1"></div>
            <p>Date: _________________</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="bg-legal-navy p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-xl font-serif font-bold text-white">{getDocumentTitle()} Preview</h2>
        <div className="flex space-x-2">
          <Button variant="ghost" className="h-8 px-2 text-white hover:bg-legal-navy hover:bg-opacity-80">
            <Printer className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Print</span>
          </Button>
          <Button variant="ghost" className="h-8 px-2 text-white hover:bg-legal-navy hover:bg-opacity-80">
            <FileDown className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Download</span>
          </Button>
          <Button variant="ghost" className="h-8 px-2 text-white hover:bg-legal-navy hover:bg-opacity-80">
            <Share2 className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Share</span>
          </Button>
        </div>
      </div>
      
      <Card className="rounded-t-none">
        <CardContent className="p-8 bg-legal-paper min-h-[70vh]">
          {getDocumentTemplate()}
        </CardContent>
      </Card>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          className="border-legal-navy text-legal-navy"
          onClick={onBack}
        >
          Back to Edit
        </Button>
        <Button className="bg-legal-gold text-legal-navy hover:bg-opacity-90">
          <Check className="h-4 w-4 mr-2" />
          Finalize Document
        </Button>
      </div>
    </div>
  );
};

export default DocumentPreview;
