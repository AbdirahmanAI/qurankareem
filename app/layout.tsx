import './globals.css';
import { Inter, Plus_Jakarta_Sans, Noto_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import { SITE_CONFIG } from '@/lib/constants';
import Script from 'next/script';
import type { Metadata } from 'next';
import GoogleTagManager from '@/components/analytics/google-tag-manager';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s - ${SITE_CONFIG.name} | Read, Learn & Study Quran Online`,
  },
  description: SITE_CONFIG.description,
  keywords: ['quran online', 'quran reading', 'quran study', 'quran memorization', 'islamic studies', 'learn quran', 'quran translation', 'quran tafsir', 'quran audio'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`],
    creator: '@qurankareem'
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: ['/icons/icon-192x192.png']
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_CONFIG.name
  },
  formatDetection: {
    telephone: false
  },
  other: {
    'mobile-web-app-capable': 'yes'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${notoSans.variable}`} suppressHydrationWarning>
      <head>
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4289944399243370"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <link rel="preload" as="style" href="/_next/static/css/app/layout.css" />
        <GoogleTagManager />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}