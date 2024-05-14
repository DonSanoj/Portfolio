import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanoj Aminda",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=' overflow-x-hidden bg-black text-white scroll-smooth'>
          <ChakraProvider>
            <Header />
            {children}
            <Footer />
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
