import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { OneTrust } from "@/components/OneTrust";
import { oneTrustConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barber Dario – Link in Bio | Premium Barbershop Düsseldorf",
  description:
    "Premium Barbershop in Düsseldorf – moderne Cuts, Fades & Bartpflege bei Barber Dario. Jetzt online Termin buchen!",
  keywords: [
    "Barber Dario",
    "Barbershop Düsseldorf",
    "Barber Düsseldorf",
    "Friseur Düsseldorf",
    "Fade Haircut",
    "Bartpflege",
    "Herrenfriseur",
    "Berliner Allee",
  ],
  openGraph: {
    title: "Barber Dario – Premium Barbershop Düsseldorf",
    description:
      "Premium Barbershop in Düsseldorf – moderne Cuts, Fades & Bartpflege. Jetzt online buchen!",
    type: "website",
    locale: "de_DE",
    siteName: "Barber Dario",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Dario – Premium Barbershop Düsseldorf",
    description:
      "Premium Barbershop in Düsseldorf – moderne Cuts, Fades & Bartpflege. Online buchen!",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* OneTrust Cookie Consent */}
        <OneTrust domainId={oneTrustConfig.domainId} />
      </head>
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
