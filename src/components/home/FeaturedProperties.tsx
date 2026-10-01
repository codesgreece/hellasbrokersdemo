import Link from "next/link";
import { getFeaturedProperties } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="Επιλεγμένα Ακίνητα"
            subtitle="Ανακαλύψτε επιλεγμένες προτάσεις στην Αθήνα."
          />
        </FadeIn>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex text-[11px] font-medium tracking-[0.2em] text-navy uppercase transition-colors hover:text-gold"
          >
            Δείτε όλα τα ακίνητα →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
