import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Willkommen } from "@/components/Willkommen";
import { Prinzipien } from "@/components/Prinzipien";
import { Vorstand } from "@/components/Vorstand";
import { UnserHaus } from "@/components/UnserHaus";
import { UeberUns } from "@/components/UeberUns";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Willkommen />
      <Prinzipien />
      <Vorstand />
      <UnserHaus />
      <UeberUns />
      <InstagramFeed />
      <Footer />
    </>
  );
}
