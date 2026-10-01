import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { AthensTrust } from "@/components/home/AthensTrust";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProperties />
      <Services />
      <WhyUs />
      <AthensTrust />
      <CtaSection />
    </>
  );
}
