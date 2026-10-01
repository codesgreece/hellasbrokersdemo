import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPropertyById, properties } from "@/data/properties";
import { PropertyDetails } from "@/components/property/PropertyDetails";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return { title: "Ακίνητο" };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: `${property.title} | Hellas Brokers`,
      description: property.description,
      images: [{ url: property.image, alt: property.title }],
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}
