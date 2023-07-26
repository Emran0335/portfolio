import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Image from "next/image";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </main>
  );
}
