
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, ExternalLink, Coins } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsPWA } from '@/hooks/use-pwa';

const GoldLoanTool = () => {
  const isMobile = useIsMobile();
  const isPWA = useIsPWA();

  // Hide on mobile devices or when running as PWA/app
  if (isMobile || isPWA) {
    return null;
  }

  return (
    <div className="bg-white py-10 md:py-16 px-4 hidden md:block">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-amber-100 rounded-full mb-4 md:mb-6">
            <Coins className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-legal-navy mb-3 md:mb-4">
            Gold Loan Calculator India
          </h2>
          <p className="text-base md:text-lg text-legal-gray max-w-3xl mx-auto">
            Instantly calculate your eligible gold loan amount and EMI based on current market rates.
          </p>
        </div>
        
        <Card className="border-2 border-amber-200 shadow-lg max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
            <CardTitle className="text-center text-legal-navy font-serif text-xl md:text-2xl">Gold Loan Calculator</CardTitle>
            <CardDescription className="text-center">
              Calculate how much loan you can get against your gold
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Calculator className="h-10 w-10 md:h-12 md:w-12 text-amber-600" />
            </div>
            <p className="text-legal-gray text-center text-sm md:text-base mb-4 md:mb-6">
              Our calculator provides accurate estimates based on current gold rates, weight, and purity of your gold jewelry or coins.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pb-4 md:pb-6">
            <Button 
              onClick={() => window.open('https://goldloantool.online/', '_blank')}
              className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Gold Loan Calculator
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GoldLoanTool;
