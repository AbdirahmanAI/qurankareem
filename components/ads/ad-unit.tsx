'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { adSenseService } from '@/lib/services/adsense';

interface AdUnitProps {
  adSlot: string;
  className?: string;
  format?: 'auto' | 'fluid' | 'in-article';
  layout?: string | 'in-article';
  textAlign?: 'left' | 'center' | 'right';
}

export default function AdUnit({ 
  adSlot, 
  className, 
  format = 'auto', 
  layout,
  textAlign = 'left'
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(adRef);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check if this is the first ad
  const isFirstAd = useRef(false);
  useEffect(() => {
    if (!window.__adsLoaded) {
      isFirstAd.current = true;
      window.__adsLoaded = true;
    }
  }, []);

  useEffect(() => {
    // Only proceed if element is in view and not already loaded
    if (isInView && adRef.current && !isLoaded) {
      // Check if we can add more ads
      if (!adSenseService.canAddMoreAds()) {
        console.warn('Maximum number of ads per page reached');
        return;
      }

      try {
        const adsbygoogle = (window.adsbygoogle = window.adsbygoogle || []);
        adsbygoogle.push({});
        setIsLoaded(true);
        adSenseService.incrementAdsCount();
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [isInView, isLoaded]);

  // Reset ads count when component unmounts
  useEffect(() => {
    return () => {
      if (isLoaded) {
        adSenseService.resetAdsCount();
      }
    };
  }, [isLoaded]);

  return (
    <div ref={adRef} className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign }}
        data-ad-client="ca-pub-4289944399243370"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive="true"
      />
    </div>
  );
}