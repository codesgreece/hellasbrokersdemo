import type { Metadata } from "next";
import Image from "next/image";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Ακίνητα",
  description:
    "Επιλεγμένες προτάσεις ακινήτων στην Αθήνα από την Hellas Brokers Real Estate.",
};

export default function PropertiesPage() {
  return (
    <div className="bg-warm-white">
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=80"
            alt="Athens properties"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="navy-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
              Hellas Brokers
            </p>
            <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl">
              Ακίνητα
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Επιλεγμένες προτάσεις ακινήτων στην Αθήνα.
            </p>
            <div className="gold-line mt-8 w-20" />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              Όλες οι προτάσεις
            </h2>
            <p className="mt-2 text-sm text-muted">
              {properties.length} διαθέσιμα ακίνητα για παρουσίαση
            </p>
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
