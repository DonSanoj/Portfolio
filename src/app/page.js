import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Project";
import Skills from "@/components/layout/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
