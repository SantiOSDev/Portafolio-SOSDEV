import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sosdev.com.co"),
  title: "SOSDEV | Software, automatización e inteligencia artificial",
  description:
    "Creamos aplicaciones web, automatizaciones e infraestructura digital que convierten procesos complejos en soluciones simples y escalables.",
  keywords: [
    "desarrollo de software",
    "automatización",
    "inteligencia artificial",
    "aplicaciones web",
    "infraestructura digital",
    "SOSDEV",
  ],
  openGraph: {
    title: "SOSDEV | Sistemas digitales que hacen avanzar su operación",
    description:
      "Desarrollo web, automatización e inteligencia artificial para empresas que quieren evolucionar.",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 909,
        alt: "SOSDEV, sistemas digitales que hacen avanzar su operación",
      },
    ],
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "SOSDEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOSDEV | Sistemas digitales que hacen avanzar su operación",
    description:
      "Desarrollo web, automatización e inteligencia artificial para empresas que quieren evolucionar.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
