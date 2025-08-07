
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface LegalDisclaimerProps {
  variant?: 'banner' | 'inline' | 'compact';
  showIcon?: boolean;
}

const LegalDisclaimer = ({ variant = 'inline', showIcon = true }: LegalDisclaimerProps) => {
  const getBannerContent = () => {
    switch (variant) {
      case 'banner':
        return (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              {showIcon && <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />}
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Important Legal Notice</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  This service provides AI-assisted document creation and is not a substitute for professional legal advice. 
                  Generated documents may require legal review and customization for your specific situation. 
                  Always consult with a qualified attorney for important legal matters.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'compact':
        return (
          <p className="text-xs text-gray-600 text-center">
            <strong>Legal Disclaimer:</strong> AI-assisted document creation - Not legal advice. 
            Professional review recommended.
          </p>
        );
      
      case 'inline':
      default:
        return (
          <Alert className="border-yellow-200 bg-yellow-50">
            {showIcon && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
            <AlertDescription className="text-yellow-800">
              <strong>Legal Disclaimer:</strong> This AI-powered service provides document templates and automation tools, 
              but does not constitute legal advice. Documents generated may require professional legal review and 
              customization. Always consult with qualified legal counsel for important legal matters.
            </AlertDescription>
          </Alert>
        );
    }
  };

  return getBannerContent();
};

export default LegalDisclaimer;
