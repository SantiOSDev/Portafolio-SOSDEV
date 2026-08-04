export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const pageKeys = [
  "home",
  "services",
  "ecommerce",
  "sales",
  "automations",
  "pricing",
  "faq",
  "contact",
] as const;

export type PageKey = (typeof pageKeys)[number];

export const siteUrl = "https://sosdev.com.co";
export const contactEmail = "contacto@sosdev.com.co";
export const contactPhoneDisplay = "+57 324 836 0548";
export const contactPhoneHref = "+573248360548";

export const routeSegments: Record<PageKey, Record<Locale, string>> = {
  home: { es: "", en: "" },
  services: { es: "servicios", en: "services" },
  ecommerce: { es: "ecommerce", en: "ecommerce" },
  sales: { es: "ventas", en: "sales" },
  automations: { es: "automatizaciones", en: "automations" },
  pricing: { es: "precios", en: "pricing" },
  faq: { es: "preguntas-frecuentes", en: "faq" },
  contact: { es: "contacto", en: "contact" },
};

export function getPath(locale: Locale, page: PageKey) {
  const segment = routeSegments[page][locale];
  return `/${locale}${segment ? `/${segment}` : ""}`;
}

export function getPageKey(locale: Locale, slug?: string): PageKey | null {
  const normalizedSlug = slug ?? "";
  return (
    pageKeys.find((page) => routeSegments[page][locale] === normalizedSlug) ??
    null
  );
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getWhatsappUrl(locale: Locale) {
  const message =
    locale === "es"
      ? "Hola, queremos conocer más sobre los servicios de SOSDEV."
      : "Hello, we would like to learn more about SOSDEV's services.";

  return `https://wa.me/573248360548?text=${encodeURIComponent(message)}`;
}
