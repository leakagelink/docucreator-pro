
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface AdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  adSlot: string;
}

// This component is now disabled - only AdMob will be used
const AdInterstitial = ({ isOpen, onClose, adSlot }: AdInterstitialProps) => {
  // AdSense removed - returning null for web
  return null;
};

export default AdInterstitial;
