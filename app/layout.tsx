import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),

  // Open Graph Metadata: This metadata enhances the way a webpage is represented when shared on social media platforms, providing information such as the title, description, and preview image.
  // openGraph: {
  //   title: '',
  //   description: '',
  //   images: '',
  // },

  // icons:"path/to/favicon.ico"
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
