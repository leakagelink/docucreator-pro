
import React, { useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface AdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  adSlot: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdInterstitial = ({ isOpen, onClose, adSlot }: AdInterstitialProps) => {
  useEffect(() => {
    if (isOpen) {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (error) {
        console.error('AdSense Interstitial error:', error);
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-white">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
          >
            ×
          </button>
          <div className="p-4">
            <ins
              className="adsbygoogle"
              style={{ display: 'block', minHeight: '400px' }}
              data-ad-client="ca-pub-2211398170597117"
              data-ad-slot={adSlot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdInterstitial;
