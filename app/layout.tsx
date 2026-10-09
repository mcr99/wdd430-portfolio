import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className="border h-screen flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      );
}

export const metadata: Metadata = {
  title: {
    default: 'Marvin | Project Portfolio',
    template: '%s | Project Portfolio',
  },
  description:
    'A portfolio of web development projects.',
  metadataBase: new URL('https://wdd430-portfolio-neon.vercel.app/'),
};