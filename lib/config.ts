import {
  Calendar,
  Instagram,
  Phone,
  MapPin,
  MessageCircle,
  Video,
  type LucideIcon,
} from "lucide-react";

export interface LinkConfig {
  label: string;
  href: string;
  icon: LucideIcon;
  variant: "primary" | "secondary";
}

export const profileConfig = {
  name: "Barber Dario",
  title: "Barber Shop Düsseldorf",
  description: "Premium Herrenfriseur & Barbershop",
  address: "Berliner Allee 43, 40212 Düsseldorf",
  image: "/profile.jpg", // Platziere dein Bild im public Ordner
};

export const socialLinks: LinkConfig[] = [
  {
    label: "Online buchen",
    href: "https://booking.termin2go.com/#!/barber-dario/services",
    icon: Calendar,
    variant: "primary",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/barberdario/",
    icon: Instagram,
    variant: "secondary",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@barberdario",
    icon: Video,
    variant: "secondary",
  },
  {
    label: "Route zu uns (Google Maps)",
    href: "https://www.google.com/maps/dir/?api=1&destination=Berliner+Allee+43,+40212+Düsseldorf",
    icon: MapPin,
    variant: "secondary",
  },
];

export const siteConfig = {
  name: "Barber Dario - Link in Bio",
  description: "Premium Barbershop in Düsseldorf - Online Termin buchen bei Barber Dario",
  url: "https://barberdario.vercel.app", // Wird nach Vercel Deployment aktualisiert
};

/**
 * OneTrust Konfiguration
 *
 * So bekommst du deine OneTrust Domain ID:
 * 1. Gehe zu https://www.onetrust.com/
 * 2. Erstelle einen kostenlosen Account
 * 3. Navigiere zu: Admin > Data Domain Scripts
 * 4. Kopiere deine "Data Domain Script ID"
 * 5. Füge sie hier ein
 *
 * Beispiel: "01234567-89ab-cdef-0123-456789abcdef"
 *
 * WICHTIG: Ersetze die Beispiel-ID mit deiner echten OneTrust Domain ID!
 */
export const oneTrustConfig = {
  // HIER DEINE ONETRUST DOMAIN ID EINFÜGEN
  domainId: process.env.NEXT_PUBLIC_ONETRUST_DOMAIN_ID || "",

  // Cookie-Kategorien (OneTrust Standard)
  categories: {
    strictlyNecessary: "C0001", // Technisch notwendig
    performance: "C0002", // Performance & Analytics
    functional: "C0003", // Funktional
    targeting: "C0004", // Targeting & Werbung
    socialMedia: "C0005", // Social Media
  },
};

/**
 * Hilfsfunktion: Prüft ob User Consent für eine Kategorie gegeben hat
 */
export const hasConsent = (category: string): boolean => {
  if (typeof window === "undefined") return false;

  try {
    // @ts-ignore - OneTrust global object
    const OneTrust = window.OneTrust;
    if (!OneTrust) return false;

    // @ts-ignore
    const activeGroups = window.OnetrustActiveGroups || "";
    return activeGroups.includes(category);
  } catch (error) {
    console.error("Error checking OneTrust consent:", error);
    return false;
  }
};
