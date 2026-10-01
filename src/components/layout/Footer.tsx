import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Αρχική" },
  { href: "/properties", label: "Ακίνητα" },
  { href: "/#services", label: "Υπηρεσίες" },
  { href: "/#about", label: "Η Εταιρεία" },
  { href: "/#contact", label: "Επικοινωνία" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4A1.65 1.65 0 1 0 5.12 7.3 1.65 1.65 0 0 0 5.1 4zM20.3 20h-2.8v-5.6c0-1.5-.6-2-1.5-2s-1.7.7-1.7 2.1V20h-2.8V9.5h2.8v1.4c.5-.9 1.6-1.7 3.1-1.7 2.1 0 3.9 1.3 3.9 4.3V20z" />
    </svg>
  );
}

const socialIcons = [
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <Image
            src="/images/logo.jpg"
            alt="Hellas Brokers"
            width={260}
            height={87}
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            Σύμβουλοι ακινήτων στην Αθήνα. Premium real estate υπηρεσίες για
            ιδιοκτήτες, αγοραστές και επενδυτές.
          </p>
          <p className="mt-6 text-[11px] font-medium tracking-[0.28em] uppercase text-gold">
            Athens Property Trust
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-medium tracking-[0.24em] uppercase text-gold">
            Πλοήγηση
          </h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-medium tracking-[0.24em] uppercase text-gold">
            Επικοινωνία
          </h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-gold" />
              <span>Athens, Greece</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-gold" />
              <a href="tel:+302100000000" className="hover:text-gold">
                +30 210 000 0000
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-gold" />
              <a href="mailto:info@hellasbrokers.gr" className="hover:text-gold">
                info@hellasbrokers.gr
              </a>
            </li>
          </ul>

          <div className="mt-7 flex items-center gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Hellas Brokers. All rights reserved.</p>
          <p className="tracking-[0.16em] uppercase">Demo Presentation Website</p>
        </div>
      </div>
    </footer>
  );
}
