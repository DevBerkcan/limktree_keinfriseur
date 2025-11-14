"use client";

import { ProfileCard } from "@/components/ProfileCard";
import { LinkButton } from "@/components/LinkButton";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useAnalytics } from "@/hooks/useAnalytics";
import {
  Calendar,
  Instagram,
  Phone,
  MapPin,
  MessageCircle,
  Video,
} from "lucide-react";

/**
 * Link configuration
 * This can be moved to a separate config file or fetched from a CMS
 */
const links = [
  {
    label: "Online buchen",
    href: "https://deine-buchung.de",
    icon: Calendar,
    variant: "primary" as const,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/keinfraiseur",
    icon: Instagram,
    variant: "secondary" as const,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@keinfraiseur",
    icon: Video,
    variant: "secondary" as const,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/49123456789",
    icon: MessageCircle,
    variant: "secondary" as const,
  },
  {
    label: "Anrufen",
    href: "tel:+49123456789",
    icon: Phone,
    variant: "secondary" as const,
  },
  {
    label: "Adresse in Google Maps öffnen",
    href: "https://maps.google.com/?q=Düsseldorf+Barber",
    icon: MapPin,
    variant: "secondary" as const,
  },
];

export default function Home() {
  // Initialize analytics (tracks page view and time on page)
  useAnalytics();

  return (
    <div className="relative min-h-screen bg-barber-stripes">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-barber-cream via-barber-grey-50 to-barber-white" />

      {/* Main content */}
      <main className="relative flex min-h-screen items-center justify-center px-4 py-12">
        {/* Main card container */}
        <div className="w-full max-w-md">
          {/* White card with shadow */}
          <div className="rounded-3xl bg-barber-white p-8 shadow-2xl ring-1 ring-barber-grey-100">
            {/* Profile section */}
            <ProfileCard />

            {/* Links section */}
            <div className="space-y-3">
              {links.map((link, index) => (
                <LinkButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  position={index}
                  variant={link.variant}
                />
              ))}
            </div>

            {/* Footer */}
            <Footer />
          </div>

          {/* Decorative glow effects */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-barber-red/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-barber-gold/20 blur-3xl" />
        </div>
      </main>

      {/* Cookie consent banner */}
      <CookieBanner />
    </div>
  );
}
