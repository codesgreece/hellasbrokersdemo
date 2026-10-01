"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Αρχική" },
  { href: "/properties", label: "Ακίνητα" },
  { href: "/#services", label: "Υπηρεσίες" },
  { href: "/#about", label: "Η Εταιρεία" },
  { href: "/#contact", label: "Επικοινωνία" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-navy-dark/95 backdrop-blur-md shadow-[0_10px_40px_rgba(3,19,38,0.35)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-8 lg:py-4">
        <Link href="/" className="relative z-10 shrink-0" aria-label="Hellas Brokers">
          <Image
            src="/images/logo.jpg"
            alt="Hellas Brokers Real Estate"
            width={220}
            height={73}
            priority
            className="h-10 w-auto md:h-12 lg:h-[52px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium tracking-[0.16em] uppercase text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#contact" variant="gold" className="px-6 py-3">
            Ζητήστε Συμβουλή
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="border-t border-white/10 bg-navy-dark lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/8 py-4 text-sm tracking-[0.18em] uppercase text-white/85"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5">
                <Button
                  href="/#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Ζητήστε Συμβουλή
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
