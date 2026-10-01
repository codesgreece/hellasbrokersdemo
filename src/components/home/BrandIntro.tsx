import { FadeIn } from "@/components/ui/FadeIn";

export function BrandIntro() {
  return (
    <section id="about" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">
            Η Εταιρεία
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-navy md:text-5xl text-balance">
            Η ακίνητη περιουσία, με άλλη οπτική.
          </h2>
          <div className="gold-line mt-7 w-20" />
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Στην Hellas Brokers αντιμετωπίζουμε κάθε ακίνητο ως μια ξεχωριστή
            ευκαιρία. Συνδυάζουμε γνώση της τοπικής αγοράς, προσωπική εξυπηρέτηση
            και σύγχρονη προσέγγιση για να δημιουργούμε ουσιαστικές λύσεις για
            ιδιοκτήτες, αγοραστές και επενδυτές.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
