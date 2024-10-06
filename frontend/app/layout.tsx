import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from "./StoreProvider";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aravinda Nawarathna",
  description: "RefCoins Assessment - Aravinda Nawarathna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <StoreProvider>
            <Navbar/>
            {children}
            <Footer/>
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
