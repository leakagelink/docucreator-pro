import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface ReadingProgressProps {
  readTime: string; // e.g., "12 min read"
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ readTime }) => {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Extract minutes from readTime string
  const totalMinutes = parseInt(readTime.match(/\d+/)?.[0] || '5', 10);

  useEffect(() => {
    const calculateProgress = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate how much of the article has been scrolled past
      const scrolledPast = scrollY - articleTop + windowHeight * 0.3;
      const readableHeight = articleHeight - windowHeight * 0.5;
      
      const currentProgress = Math.min(Math.max((scrolledPast / readableHeight) * 100, 0), 100);
      setProgress(currentProgress);

      // Calculate remaining time
      const remainingPercent = (100 - currentProgress) / 100;
      const remainingMinutes = Math.ceil(totalMinutes * remainingPercent);
      
      if (remainingMinutes <= 0 || currentProgress >= 98) {
        setTimeRemaining('Done!');
      } else if (remainingMinutes === 1) {
        setTimeRemaining('1 min left');
      } else {
        setTimeRemaining(`${remainingMinutes} min left`);
      }

      // Show progress bar after scrolling past header
      setIsVisible(scrollY > 200);
    };

    calculateProgress();
    window.addEventListener('scroll', calculateProgress, { passive: true });
    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [totalMinutes]);

  return (
    <>
      {/* Fixed Progress Bar at Top */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-legal-accent to-legal-navy transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Time Remaining Badge */}
        <div 
          className={`absolute right-4 top-3 transition-all duration-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 text-xs font-medium text-legal-navy">
            <Clock className="w-3 h-3 text-legal-accent" />
            <span>{timeRemaining}</span>
            <span className="text-legal-gray">• {Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Inline Progress Indicator (visible at article start) */}
      <div className={`mb-6 transition-opacity duration-300 ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-3 text-sm text-legal-gray">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-legal-accent/30 rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadingProgress;
