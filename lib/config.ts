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
    href: "/booking",
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
