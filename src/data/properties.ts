export type Property = {
  id: string;
  title: string;
  location: string;
  status: string;
  price: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "modern-apartment-kolonaki",
    title: "Modern Apartment Kolonaki",
    location: "Κολωνάκι, Αθήνα",
    status: "ΠΡΟΣ ΕΝΟΙΚΙΑΣΗ",
    price: "€1.450 / μήνα",
    size: 85,
    bedrooms: 2,
    bathrooms: 1,
    description:
      "Φωτεινό και πλήρως ανακαινισμένο διαμέρισμα στο Κολωνάκι, σε προνομιακό σημείο κοντά σε καταστήματα, εστιατόρια και μέσα μεταφοράς.",
    features: [
      "Πλήρως ανακαινισμένο",
      "Φυσικός φωτισμός",
      "Κλιματισμός",
      "Κοντά σε μετρό",
      "Επιπλωμένο",
      "Ασφαλής είσοδος",
    ],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3bea3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "elegant-residence-glyfada",
    title: "Elegant Residence Glyfada",
    location: "Γλυφάδα, Αθήνα",
    status: "ΠΡΟΣ ΕΝΟΙΚΙΑΣΗ",
    price: "€1.800 / μήνα",
    size: 105,
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Μοντέρνα κατοικία σε ήσυχη περιοχή της Γλυφάδας, με μεγάλους χώρους, φυσικό φωτισμό και εύκολη πρόσβαση στην αγορά και τη θάλασσα.",
    features: [
      "Μεγάλοι χώροι",
      "2 μπάνια",
      "Θέα ανοιχτή",
      "Parking",
      "Κοντά στη θάλασσα",
      "Σύγχρονη κουζίνα",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "urban-apartment-pangrati",
    title: "Urban Apartment Pangrati",
    location: "Παγκράτι, Αθήνα",
    status: "ΠΡΟΣ ΕΝΟΙΚΙΑΣΗ",
    price: "€1.150 / μήνα",
    size: 72,
    bedrooms: 2,
    bathrooms: 1,
    description:
      "Σύγχρονο διαμέρισμα στο Παγκράτι, ιδανικό για ζευγάρι ή επαγγελματία, σε κοντινή απόσταση από καφέ, εστιατόρια και το κέντρο της Αθήνας.",
    features: [
      "Κεντρική τοποθεσία",
      "Ανακαινισμένο",
      "Ησυχία",
      "Εύκολη πρόσβαση",
      "Μπαλκόνι",
      "Ιδανικό για επαγγελματίες",
    ],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
  },
  {
    id: "premium-residence-marousi",
    title: "Premium Residence Marousi",
    location: "Μαρούσι, Αθήνα",
    status: "ΠΡΟΣ ΕΝΟΙΚΙΑΣΗ",
    price: "€1.650 / μήνα",
    size: 98,
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Άνετη και σύγχρονη κατοικία στο Μαρούσι με ποιοτικά υλικά, μεγάλους χώρους και εύκολη πρόσβαση στις βασικές επιχειρηματικές περιοχές.",
    features: [
      "Ποιοτικά υλικά",
      "2 υπνοδωμάτια",
      "2 μπάνια",
      "Κοντά σε επιχειρήσεις",
      "Parking",
      "Αποθήκη",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((property) => property.featured).slice(0, 3);
}
