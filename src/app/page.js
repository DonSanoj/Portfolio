import Contact from "@/components/layout/Contact";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Skills from "@/components/layout/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Contact />
    </>
  );
}
