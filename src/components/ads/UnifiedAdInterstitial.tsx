
import React, { useEffect } from 'react';
import { usePlatform } from '@/hooks/use-platform';
import { AdMobService } from '@/services/admob';

interface UnifiedAdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  adSlot: string;
}

const UnifiedAdInterstitial = ({ isOpen, onClose, adSlot }: UnifiedAdInterstitialProps) => {
  const { isNative } = usePlatform();

  useEffect(() => {
    if (isNative && isOpen) {
      // Show AdMob interstitial for native platforms only
      AdMobService.initialize().then(() => {
        AdMobService.showInterstitial().then(() => {
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
