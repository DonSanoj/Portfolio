import About from "@/components/layout/About";
import Faq from "@/components/layout/Faq";
import Hero, { SectionHeaders } from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Faq />
    </>
  );
}