import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../app/components/Navbar';

export const metadata: Metadata = {
  title: 'Najmieh Portfolio',
  description: 'Personal portfolio showcasing reproducible workflows and technical projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}