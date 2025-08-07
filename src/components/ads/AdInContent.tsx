
import React from 'react';
import AdBanner from './AdBanner';

interface AdInContentProps {
  adSlot: string;
  className?: string;
}

const AdInContent = ({ adSlot, className = '' }: AdInContentProps) => {
  return (
    <div className={`w-full my-8 ${className}`}>
      <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
      <div className="flex justify-center">
        <AdBanner
          adSlot={adSlot}
          adFormat="auto"
          style={{ maxWidth: '728px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default AdInContent;
