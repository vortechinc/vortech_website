import Footer from '@/components/common/Footer';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Vortech'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Vortech</title>
        <link rel="image" href="/images/logo-white.png" />
        <meta name="fragment" content="!" />
        <meta name="description" content="Vortech" />
        <meta property="og:title" content="Vortech" />
        <meta name="twitter:title" content="Vortech" />
        <meta property="og:site_name" content="Vortech" />
        <meta name="twitter:site_name" content="Vortech" />
        <meta property="og:description" content="Vortech" />
        <meta name="twitter:description" content="Vortech" />
      </head>
      <body className={roboto.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
