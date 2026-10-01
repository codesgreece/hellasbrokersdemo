"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?auto=format&fit=crop&w=2200&q=80"
        alt="Premium Athens property"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="navy-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,169,54,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8">
            <p className="font-sans text-2xl font-semibold tracking-[0.22em] text-white sm:text-3xl md:text-4xl">
              HELLAS <span className="text-gold">BROKERS</span>
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-10 bg-gold/70" />
              <p className="text-[11px] font-medium tracking-[0.35em] text-white/85 uppercase">
                Real Estate
              </p>
              <span className="h-px w-10 bg-gold/70" />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.28em] text-white/55 uppercase">
              Σύμβουλοι Ακινήτων
            </p>
          </div>

          <h1 className="font-serif text-3xl leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-[3.35rem] text-balance">
            Βρίσκουμε τον χώρο που ταιριάζει στο μέλλον σας.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/72 md:text-base">
            Σύγχρονες λύσεις real estate στην Αθήνα, με επαγγελματισμό,
            εμπιστοσύνη και γνώση της αγοράς ακινήτων.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/properties" variant="primary">
              Δείτε τα Ακίνητα
            </Button>
            <Button href="/#contact" variant="secondary">
              Επικοινωνήστε μαζί μας
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
