import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function AthensTrust() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-5 md:px-8 lg:grid-cols-2">
        <FadeIn className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1800&q=80"
            alt="Athens cityscape"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-navy/25" />
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="flex flex-col justify-center bg-navy px-8 py-14 md:px-12 lg:px-16"
        >
          <p className="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
            Statement
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-white md:text-5xl">
            ATHENS PROPERTY TRUST
          </h2>
          <div className="gold-line mt-7 w-20" />
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/70">
            Η Αθήνα εξελίσσεται. Εμείς γνωρίζουμε τον χώρο, τις περιοχές και τις
            ευκαιρίες που δημιουργούνται.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
