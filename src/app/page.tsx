import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { TechStack } from "@/components/home/TechStack";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <TechStack />
      <CTA />
    </>
  );
}
