
import React, { useEffect } from 'react';
import { usePlatform } from '@/hooks/use-platform';
import { AdMobService } from '@/services/admob';
import AdInterstitial from './AdInterstitial';

interface UnifiedAdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  adSlot: string;
}

const UnifiedAdInterstitial = ({ isOpen, onClose, adSlot }: UnifiedAdInterstitialProps) => {
  const { isNative, isWeb } = usePlatform();

  useEffect(() => {
    if (isNative && isOpen) {
      // Show AdMob interstitial for native platforms
      AdMobService.initialize().then(() => {
        AdMobService.showInterstitial().then(() => {
          onClose();
        });
      });
    }
  }, [isNative, isOpen, onClose]);

  // For web platforms, use AdSense interstitial
  if (isWeb) {
    return (
      <AdInterstitial
        isOpen={isOpen}
        onClose={onClose}
        adSlot={adSlot}
      />
    );
  }

  // For native platforms, interstitial is handled natively
  return null;
};

export default UnifiedAdInterstitial;
