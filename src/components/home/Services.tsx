import { Building2, Handshake, KeyRound, LineChart } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Αγοραπωλησίες Ακινήτων",
    description:
      "Ολοκληρωμένη υποστήριξη σε κάθε στάδιο αγοράς ή πώλησης, με έμφαση στην αξία και την ασφάλεια της συναλλαγής.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Μισθώσεις",
    description:
      "Επιλεγμένες προτάσεις ενοικίασης και σωστή αντιστοίχιση ιδιοκτητών με αξιόπιστους ενοικιαστές.",
    icon: KeyRound,
  },
  {
    number: "03",
    title: "Επενδυτικές Ευκαιρίες",
    description:
      "Ανάλυση αγοράς και στοχευμένες επενδυτικές προτάσεις σε στρατηγικές περιοχές της Αθήνας.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "Συμβουλευτική Ακινήτων",
    description:
      "Εξειδικευμένες συμβουλές για αξιοποίηση, τιμολόγηση και στρατηγική διαχείριση ακίνητης περιουσίας.",
    icon: Handshake,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Expertise" title="Υπηρεσίες" />
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.number} delay={index * 0.06}>
                <article className="group h-full border border-navy/8 bg-white p-7 transition-all duration-300 hover:border-gold/40 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-3xl text-gold/80">
                      {service.number}
                    </span>
                    <Icon
                      size={22}
                      className="text-navy/40 transition-colors group-hover:text-gold"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
