
import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';

export const usePlatform = () => {
  const [platform, setPlatform] = useState<'web' | 'android' | 'ios'>('web');
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    const currentPlatform = Capacitor.getPlatform();
    setPlatform(currentPlatform as 'web' | 'android' | 'ios');
    setIsNative(Capacitor.isNativePlatform());
  }, []);

  return {
    platform,
    isNative,
    isAndroid: platform === 'android',
    isIOS: platform === 'ios',
    isWeb: platform === 'web'
  };
};
