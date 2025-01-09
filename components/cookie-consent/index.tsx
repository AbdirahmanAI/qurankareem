'use client';

import { useEffect, useState } from 'react';
import { CookieConsent as CookieConsentType, getConsentCookie } from '@/lib/utils/cookies';
import CookieBanner from './cookie-banner';
import { initializeAnalytics } from '@/lib/analytics/google-analytics';

export default function CookieConsentManager() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getConsentCookie();
    if (!consent) {
      // Small delay to prevent flash on initial load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent.analytics) {
      initializeAnalytics();
    }
  }, []);

  const handleConsent = (consent: CookieConsentType) => {
    setShowBanner(false);
    if (consent.analytics) {
      initializeAnalytics();
    }
  };

  if (!showBanner) return null;

  return <CookieBanner onConsent={handleConsent} />;
}