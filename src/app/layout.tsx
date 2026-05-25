import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeonX — Creative Design Agency',
  description:
    'NeonX is a futuristic creative design agency specializing in UI/UX, branding, logos, packaging, and social media design.',
  keywords: ['design agency', 'UI UX', 'branding', 'logo design', 'creative agency'],
  authors: [{ name: 'NeonX Agency' }],
  openGraph: {
    title: 'NeonX — Creative Design Agency',
    description: 'We craft bold digital experiences that leave a mark.',
    type: 'website',
    url: 'https://neonx.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeonX — Creative Design Agency',
    description: 'We craft bold digital experiences that leave a mark.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0d0d1a',
              color: '#f0e6ff',
              border: '1px solid rgba(139,92,246,0.3)',
              fontFamily: 'DM Sans, sans-serif',
            },
            success: {
              iconTheme: { primary: '#8b5cf6', secondary: '#040408' },
            },
          }}
        />
      </body>
    </html>
  );
}