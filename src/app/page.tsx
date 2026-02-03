import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Willkommen } from "@/components/Willkommen";
import { Prinzipien } from "@/components/Prinzipien";
import { Vorstand } from "@/components/Vorstand";
import { UnserHaus } from "@/components/UnserHaus";
import { UeberUns } from "@/components/UeberUns";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Willkommen />
      <SectionDivider />
      <Prinzipien />
      <SectionDivider />
      <Vorstand />
      <SectionDivider />
      <UnserHaus />
      <UeberUns />
      <SectionDivider />
      <InstagramFeed />
      <Footer />
    </>
  );
}
