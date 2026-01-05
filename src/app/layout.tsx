import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Dompet Warga - Sistem Informasi Keuangan RT',
  description:
    'Dompet Warga merupakan solusi digital untuk membantu pengelolaan kas RT dan tabungan warga secara rapi, efisien, dan transparan. Capstone Project Program Studi Teknologi Informasi Universitas Muhammadiyah Yogyakarta.',
  keywords: [
    'Dompet Warga',
    'Sistem Informasi Keuangan RT',
    'Capstone Project',
    'Teknologi Informasi',
    'UMY',
    'Universitas Muhammadiyah Yogyakarta',
    'Kas RT',
    'Tabungan Warga',
  ],
  authors: [
    {
      name: 'Program Studi Teknologi Informasi UMY',
    },
  ],
  openGraph: {
    title: 'Dompet Warga - Sistem Informasi Keuangan RT',
    description:
      'Solusi digital untuk pengelolaan kas RT dan tabungan warga secara rapi, efisien, dan transparan.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
