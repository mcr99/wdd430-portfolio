import "../globals.css";
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="border h-screen flex flex-col justify-between">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
