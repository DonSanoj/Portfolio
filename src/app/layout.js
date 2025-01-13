import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import StarsCanvas from "@/components/StarsBackground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanoj Aminda",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" !scroll-smooth">
      <body className={inter.className}>
        <main className=' overflow-x-hidden bg-black text-white scroll-smooth'>
          <ChakraProvider>
            <StarsCanvas />
            <Header />
            <ToastContainer theme="dark" position="top-center" autoClose={3000} />
            {children}
            <Footer />
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
