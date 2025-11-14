import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KEINFRISEUR. – Link in Bio",
  description:
    "Dein Barber & Hairstylist in Düsseldorf – moderne Cuts, Fades & Bartpflege. Jetzt online buchen!",
  keywords: [
    "Barber",
    "Friseur",
    "Düsseldorf",
    "Hairstylist",
    "Fade",
    "Bartpflege",
    "Herrenfriseur",
  ],
  openGraph: {
    title: "KEINFRISEUR. – Link in Bio",
    description:
      "Dein Barber & Hairstylist in Düsseldorf – moderne Cuts, Fades & Bartpflege.",
    type: "website",
    locale: "de_DE",
    siteName: "KEINFRISEUR.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KEINFRISEUR. – Link in Bio",
    description:
      "Dein Barber & Hairstylist in Düsseldorf – moderne Cuts, Fades & Bartpflege.",
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
      <body className={inter.className}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
