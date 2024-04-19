import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ApolloWrapper } from '@/lib/apollo-wrapper';
import './globals.css';
import Side from '@/components/layout/side';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '유키즈',
  description: '엠제이 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <ApolloWrapper>
            <Side />
            <div className="flex flex-col flex-1 h-full sm:gap-4 pb-14 sm:py-4 sm:pl-14">{children}</div>
          </ApolloWrapper>
        </div>
      </body>
    </html>
  );
}
