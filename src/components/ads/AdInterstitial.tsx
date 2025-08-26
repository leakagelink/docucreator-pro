
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Recreate the <ins> node each time to avoid "already have ads" error
      setRenderKey((k) => k + 1);

      // Push after layout for better size calculation
      setTimeout(() => {
        try {
          if (typeof window !== 'undefined' && window.adsbygoogle) {
            window.adsbygoogle.push({});
          }
        } catch (error) {
          console.error('AdSense Interstitial error:', error);
        }
      }, 250);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-white">
        <DialogHeader>
          <DialogTitle className="sr-only">Advertisement</DialogTitle>
          <DialogDescription className="sr-only">
            Interstitial ad content
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
            aria-label="Close ad"
          >
            ×
          </button>
          <div className="p-4">
            <ins
              key={renderKey}
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', minHeight: '400px' }}
              data-ad-client="ca-pub-8658337038682012"
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

