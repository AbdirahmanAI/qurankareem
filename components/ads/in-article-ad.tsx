'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface InArticleAdProps {
  className?: string;
}

export default function InArticleAd({ className }: InArticleAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(adRef);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView && adRef.current && !isLoaded) {
      try {
        const adsbygoogle = (window.adsbygoogle = window.adsbygoogle || []);
        adsbygoogle.push({});
        setIsLoaded(true);
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [isInView, isLoaded]);

  return (
    <div ref={adRef} className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4289944399243370"
        data-ad-slot="9275169494"
      />
    </div>
  );
}