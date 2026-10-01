import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-warm-white px-5 text-center">
      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">404</p>
      <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
        Η σελίδα δεν βρέθηκε
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        Το ακίνητο ή η σελίδα που ζητήσατε δεν είναι διαθέσιμη σε αυτό το demo.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary">
          Αρχική
        </Button>
        <Button href="/properties" variant="ghost">
          Ακίνητα
        </Button>
      </div>
      <Link href="/" className="sr-only">
        Home
      </Link>
    </div>
  );
}
