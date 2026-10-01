import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-montserrat",
  subsets: ["latin", "greek"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hellasbrokers.gr"),
  title: {
    default: "Hellas Brokers | Real Estate Αθήνα",
    template: "%s | Hellas Brokers",
  },
  description:
    "Hellas Brokers Real Estate. Σύμβουλοι ακινήτων στην Αθήνα με επιλεγμένες προτάσεις για αγορά, πώληση και μίσθωση ακινήτων.",
  openGraph: {
    title: "Hellas Brokers | Real Estate Αθήνα",
    description:
      "Hellas Brokers Real Estate. Σύμβουλοι ακινήτων στην Αθήνα με επιλεγμένες προτάσεις για αγορά, πώληση και μίσθωση ακινήτων.",
    locale: "el_GR",
    type: "website",
    siteName: "Hellas Brokers",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1600,
        height: 533,
        alt: "Hellas Brokers Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellas Brokers | Real Estate Αθήνα",
    description:
      "Σύμβουλοι ακινήτων στην Αθήνα με επιλεγμένες προτάσεις ακινήτων.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${ebGaramond.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-warm-white font-sans text-dark-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
