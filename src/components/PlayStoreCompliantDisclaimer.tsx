
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface PlayStoreCompliantDisclaimerProps {
  variant?: 'prominent' | 'inline' | 'compact';
  className?: string;
}

const PlayStoreCompliantDisclaimer = ({ variant = 'inline', className = '' }: PlayStoreCompliantDisclaimerProps) => {
  if (variant === 'prominent') {
    return (
      <div className={`bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6 ${className}`}>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Notice</h3>
            <p className="text-sm text-yellow-700 leading-relaxed">
              <strong>DocuCreator Pro is an AI-assisted document creation tool and does not provide legal advice.</strong> 
              All documents are AI-generated templates based on commonly used clauses and standard formats. 
              Professional legal review is strongly recommended before using any document for official or legal purposes. 
              Please consult a qualified lawyer for legal advice specific to your situation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <p className={`text-xs text-gray-600 text-center py-2 ${className}`}>
        <AlertTriangle className="inline h-3 w-3 mr-1" />
        <strong>Not Legal Advice:</strong> AI-assisted document templates. Professional legal review recommended.
      </p>
    );
  }

  return (
    <Alert className={`border-yellow-200 bg-yellow-50 ${className}`}>
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800 text-sm">
        <strong>Legal Notice:</strong> This AI-powered service provides document templates based on standard formats 
        and commonly used clauses. Documents generated are not guaranteed to be legally binding or valid. 
        Always consult with qualified legal counsel for important legal matters.
      </AlertDescription>
    </Alert>
  );
};

export default PlayStoreCompliantDisclaimer;
