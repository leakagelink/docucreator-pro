
import React, { useEffect } from 'react';
import { usePlatform } from '@/hooks/use-platform';
import { FacebookAdsService } from '@/services/facebook-ads';

interface UnifiedAdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  adSlot: string;
}

const UnifiedAdInterstitial = ({ isOpen, onClose, adSlot }: UnifiedAdInterstitialProps) => {
  const { isNative } = usePlatform();

  useEffect(() => {
    if (isNative && isOpen) {
      // Show Facebook Audience Network interstitial for native platforms only
      FacebookAdsService.initialize().then(() => {
        FacebookAdsService.showInterstitial().then(() => {
          onClose();
        });
      });
    } else if (!isNative && isOpen) {
      // No ads on web - just close immediately
      onClose();
    }
  }, [isNative, isOpen, onClose]);

  // No UI needed - ads are handled natively or skipped
  return null;
};

export default UnifiedAdInterstitial;
