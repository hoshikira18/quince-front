import { Inter } from 'next/font/google';
import './globals.css';
import '@mantine/carousel/styles.css';
import Layout from '@/components/layouts/layout';
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quince',
  description: 'Cửa hàng bán chăn ga gối đen uy tín tại Hà Nội',
};

const ClientWrapper = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <ClientWrapper>{children}</ClientWrapper>
        </Layout>
      </body>
    </html>
  );
}
