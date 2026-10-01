import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    number: "01",
    title: "Γνώση της αγοράς",
    text: "Σε βάθος κατανόηση των περιοχών, των τάσεων και των πραγματικών αξιών στην Αθήνα.",
  },
  {
    number: "02",
    title: "Προσωπική προσέγγιση",
    text: "Κάθε συνεργασία είναι εξατομικευμένη, με προσοχή στις ανάγκες και τους στόχους σας.",
  },
  {
    number: "03",
    title: "Επαγγελματισμός",
    text: "Διαφάνεια, συνέπεια και υψηλά πρότυπα σε κάθε στάδιο της διαδικασίας.",
  },
  {
    number: "04",
    title: "Σχέσεις εμπιστοσύνης",
    text: "Χτίζουμε μακροχρόνιες σχέσεις με ιδιοκτήτες, αγοραστές και επενδυτές.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-navy-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading light title="Γιατί Hellas Brokers" />
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {reasons.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08}>
              <div className="border-l border-gold/40 pl-6 md:pl-8">
                <p className="font-serif text-4xl text-gold/70 md:text-5xl">
                  {item.number}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
