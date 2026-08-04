import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import MarketingPage from "../../components/MarketingPages";
import { faqContent, pricingContent, seoContent, uiContent } from "../../content";
import {
  contactEmail,
  contactPhoneHref,
  getPageKey,
  getPath,
  isLocale,
  locales,
  pageKeys,
  siteUrl,
  type Locale,
  type PageKey,
} from "../../site-config";

type RouteParams = {
  locale: string;
  slug?: string[];
};

type PageProps = {
  params: Promise<RouteParams>;
};

function resolveRoute(params: RouteParams): { locale: Locale; page: PageKey } | null {
  if (!isLocale(params.locale) || (params.slug?.length ?? 0) > 1) return null;
  const page = getPageKey(params.locale, params.slug?.[0]);
  return page ? { locale: params.locale, page } : null;
}

function localizedUrls(page: PageKey) {
  return {
    es: `${siteUrl}${getPath("es", page)}`,
    en: `${siteUrl}${getPath("en", page)}`,
    "x-default": `${siteUrl}${getPath("es", page)}`,
  };
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageKeys.map((page) => {
      const path = getPath(locale, page).split("/").filter(Boolean);
      return { locale, slug: path.length > 1 ? [path[1]] : [] };
    }),
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const route = resolveRoute(await params);
  if (!route) return {};
  const { locale, page } = route;
  const seo = seoContent[locale][page];
  const canonical = `${siteUrl}${getPath(locale, page)}`;
  const alternates = localizedUrls(page);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: seo.title,
      description: seo.description,
      siteName: "SOSDEV",
      locale: locale === "es" ? "es_CO" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CO"],
      images: [
        {
          url: "/og-v2.jpg",
          width: 1200,
          height: 630,
          alt: locale === "es" ? "SOSDEV, software para empresas" : "SOSDEV, software for businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-v2.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

function getSchemas(locale: Locale, page: PageKey) {
  const url = `${siteUrl}${getPath(locale, page)}`;
  const seo = seoContent[locale][page];
  const schemas: Record<string, unknown>[] = [];

  if (page === "home") {
    schemas.push(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "SOSDEV",
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        email: contactEmail,
        telephone: contactPhoneHref,
        areaServed: "Latin America",
        knowsAbout: [
          "Web development",
          "Ecommerce",
          "Business process automation",
          "Artificial intelligence",
          "Cloud infrastructure",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}${getPath(locale, "home")}`,
        name: "SOSDEV",
        description: seo.description,
        inLanguage: locale,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    );
  }

  if (["services", "ecommerce", "sales", "automations"].includes(page)) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: seo.title.replace(" | SOSDEV", ""),
      description: seo.description,
      url,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Latin America",
      availableLanguage: ["Spanish", "English"],
    });
  }

  if (page === "pricing") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: seo.title.replace(" | SOSDEV", ""),
      url,
      itemListElement: pricingContent[locale].plans.slice(0, 3).map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        priceCurrency: "COP",
        price: plan.id === "landing" ? "750000" : plan.id === "ecommerce" ? "2500000" : "6000000",
        url: `${url}#${plan.id}`,
        seller: { "@id": `${siteUrl}/#organization` },
      })),
    });
  }

  if (page === "faq") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqContent[locale].clusters.flatMap((cluster) =>
        cluster.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      ),
    });
  }

  if (page !== "home") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: uiContent[locale].home,
          item: `${siteUrl}${getPath(locale, "home")}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: seo.title.replace(" | SOSDEV", ""),
          item: url,
        },
      ],
    });
  }

  return schemas;
}

export default async function LocalizedPage({ params }: PageProps) {
  const route = resolveRoute(await params);
  if (!route) notFound();
  const schemas = getSchemas(route.locale, route.page);

  return (
    <>
      <JsonLd data={schemas} />
      <MarketingPage locale={route.locale} page={route.page} />
    </>
  );
}
