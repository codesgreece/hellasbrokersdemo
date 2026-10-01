"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bath, BedDouble, Maximize } from "lucide-react";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
  index?: number;
};

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col bg-white"
    >
      <Link href={`/properties/${property.id}`} className="block overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/45 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 bg-navy/90 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] text-gold uppercase backdrop-blur-sm">
            {property.status}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col border border-t-0 border-navy/8 px-5 py-6 md:px-6">
        <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
          {property.location}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-snug text-navy">
          <Link
            href={`/properties/${property.id}`}
            className="transition-colors hover:text-gold"
          >
            {property.title}
          </Link>
        </h3>
        <p className="mt-3 text-lg font-medium text-gold">{property.price}</p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-navy/8 pt-5 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Maximize size={14} className="text-gold" />
            {property.size} m²
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={14} className="text-gold" />
            {property.bedrooms} Υπνοδωμάτια
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath size={14} className="text-gold" />
            {property.bathrooms} Μπάνι{property.bathrooms === 1 ? "ο" : "α"}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={`/properties/${property.id}`}
            className="inline-flex text-[11px] font-medium tracking-[0.18em] text-navy uppercase transition-colors hover:text-gold"
          >
            Προβολή Ακινήτου →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
