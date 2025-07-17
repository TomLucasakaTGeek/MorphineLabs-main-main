import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Morphine Labs - Web3 Growth Agency | APAC Expansion',
  description: 'Leading Web3 growth agency specializing in community building, dev campaigns, IRL events, and user acquisition across APAC markets. Scale your Web3 project with proven strategies.',
  keywords: 'Web3, growth agency, APAC, community building, blockchain, cryptocurrency, DeFi, NFT, dev campaigns, user acquisition',
  authors: [{ name: 'Morphine Labs' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/logo.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Morphine Labs - Premier Web3 Growth Agency',
    description: 'Scale your Web3 project with proven growth strategies across APAC markets.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Morphine Labs - Web3 Growth Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morphine Labs - Premier Web3 Growth Agency',
    description: 'Scale your Web3 project with proven growth strategies across APAC markets.',
    images: ['/logo.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: 'index, follow',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#c4f82a" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}