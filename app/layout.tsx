import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madeira Explorer',
  description: 'Explore the beautiful island of Madeira',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/libs/swiper/swiper-bundle.min.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/libs/btn/anim-menu-btn.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
