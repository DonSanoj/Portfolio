import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import FloatingNavigationBox from "@/components/layout/FloatingNavigationBox";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Project";
import Skills from "@/components/layout/Skills";
import Head from "next/head";
import Image from "next/image";

import { FaHouse } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";

export default function Home() {

  const navLinks = [
    { label: <FaHouse />, href: '/' },
    { label: <IoAddCircle />, href: '/addFeedback' },
    { label: <MdFeedback />, href: '/feedbacks' },
    // { label: 'Contact', href: '/contact' },
  ];

  return (
    <>

      <Head>
        <meta name="description" content="Sanoj Aminda Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanoj-portfolio.vercel.app/" />
      </Head>

      <FloatingNavigationBox links={navLinks} />

      <main className="h-full w-full bg-contain">
        <div className="flex flex-col gap-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
