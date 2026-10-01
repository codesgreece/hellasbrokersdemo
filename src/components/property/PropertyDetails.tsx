"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bath, BedDouble, Check, Maximize } from "lucide-react";
import type { Property } from "@/data/properties";
import { Button } from "@/components/ui/Button";

type PropertyDetailsProps = {
  property: Property;
};

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const [activeImage, setActiveImage] = useState(property.gallery[0] ?? property.image);

  return (
    <div className="bg-warm-white">
      <section className="relative h-[48vh] min-h-[320px] overflow-hidden md:h-[58vh]">
        <Image
          src={activeImage}
          alt={property.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="navy-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-10 md:px-8 md:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block border border-gold/50 bg-navy-dark/40 px-3 py-1.5 text-[10px] tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
                {property.status}
              </span>
              <h1 className="mt-4 font-serif text-3xl text-white md:text-5xl">
                {property.title}
              </h1>
              <p className="mt-3 text-sm tracking-[0.14em] text-white/70 uppercase">
                {property.location}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-14 lg:py-20">
        <div>
          <div className="grid grid-cols-3 gap-3">
            {property.gallery.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                  activeImage === image
                    ? "border-gold"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${property.title} gallery`}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </button>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-3xl text-navy">Περιγραφή</h2>
            <div className="gold-line mt-4 w-16" />
            <p className="mt-6 text-base leading-relaxed text-muted">
              {property.description}
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-3xl text-navy">Χαρακτηριστικά</h2>
            <div className="gold-line mt-4 w-16" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border border-navy/8 bg-white px-4 py-3 text-sm text-navy"
                >
                  <Check size={16} className="text-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit border border-navy/10 bg-white p-7 md:p-8 lg:sticky lg:top-28">
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Τιμή</p>
          <p className="mt-2 font-serif text-3xl text-navy md:text-4xl">
            {property.price}
          </p>

          <div className="mt-8 space-y-4 border-y border-navy/8 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2 text-muted">
                <Maximize size={16} className="text-gold" />
                Εμβαδόν
              </span>
              <span className="font-medium text-navy">{property.size} m²</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2 text-muted">
                <BedDouble size={16} className="text-gold" />
                Υπνοδωμάτια
              </span>
              <span className="font-medium text-navy">{property.bedrooms}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2 text-muted">
                <Bath size={16} className="text-gold" />
                Μπάνια
              </span>
              <span className="font-medium text-navy">{property.bathrooms}</span>
            </div>
          </div>

          <Button href="/#contact" variant="primary" className="mt-8 w-full">
            Επικοινωνήστε για το ακίνητο
          </Button>
          <Button href="/properties" variant="ghost" className="mt-3 w-full">
            Πίσω στα Ακίνητα
          </Button>
          <p className="mt-5 text-center text-xs leading-relaxed text-muted">
            Demo παρουσίαση — η επικοινωνία είναι ενδεικτική για τον πελάτη.
          </p>
        </aside>
      </section>
    </div>
  );
}
