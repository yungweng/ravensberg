import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Willkommen } from "@/components/Willkommen";
import { Prinzipien } from "@/components/Prinzipien";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Willkommen />
      <Prinzipien />
      {/* More sections to come */}
    </>
  );
}
