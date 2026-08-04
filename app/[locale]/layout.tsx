import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { uiContent } from "../content";
import {
  getWhatsappUrl,
  isLocale,
  locales,
  siteUrl,
  type Locale,
} from "../site-config";
import "../globals.css";

const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem("sosdev-theme");
      var theme = saved === "dark" || saved === "light" ? saved : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "SOSDEV",
  authors: [{ name: "SOSDEV", url: siteUrl }],
  creator: "SOSDEV",
  publisher: "SOSDEV",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#07110d" },
  ],
  colorScheme: "light dark",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale: Locale = value;
  const copy = uiContent[locale];

  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">{copy.skip}</a>
        <SiteHeader locale={locale} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={locale} />
        <a
          className="whatsapp-float"
          href={getWhatsappUrl(locale)}
          target="_blank"
          rel="noreferrer"
          aria-label={locale === "es" ? "Conversar con SOSDEV por WhatsApp" : "Chat with SOSDEV on WhatsApp"}
          data-analytics="whatsapp_click"
        >
          <span aria-hidden="true">W</span>
          <strong>WhatsApp</strong>
        </a>
      </body>
    </html>
  );
}
