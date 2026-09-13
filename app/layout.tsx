import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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