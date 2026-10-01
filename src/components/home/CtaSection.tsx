import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2200&q=80"
        alt="Luxury Athens residence"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="navy-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl text-balance">
            Το επόμενο ακίνητό σας ξεκινά εδώ.
          </h2>
          <div className="gold-line mx-auto mt-8 w-24" />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/properties" variant="primary">
              Δείτε τα Ακίνητα
            </Button>
            <Button href="/#contact" variant="secondary">
              Επικοινωνήστε μαζί μας
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
