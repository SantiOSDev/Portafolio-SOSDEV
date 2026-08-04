import Link from "next/link";
import ContactForm from "./ContactForm";
import SystemMap from "./SystemMap";
import {
  contactContent,
  faqContent,
  homeContent,
  pricingContent,
  servicesContent,
  solutionPages,
  uiContent,
} from "../content";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneHref,
  getPath,
  getWhatsappUrl,
  type Locale,
  type PageKey,
} from "../site-config";

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function PageHero({
  eyebrow,
  title,
  description,
  locale,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  locale: Locale;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const ui = uiContent[locale];
  return (
    <section className="page-hero section-shell">
      <div className="page-hero-copy" data-reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href={getPath(locale, "contact")}>
            {ui.quote}<Arrow />
          </Link>
          <Link className="button button-secondary" href={secondaryHref ?? getPath(locale, "pricing")}>
            {secondaryLabel ?? ui.viewPricing}
          </Link>
        </div>
      </div>
      <div className="page-hero-graphic" aria-hidden="true">
        <span>01</span><i /><span>02</span><i /><span>03</span>
      </div>
    </section>
  );
}

function CallToAction({
  locale,
  title,
  copy,
}: {
  locale: Locale;
  title: string;
  copy?: string;
}) {
  const ui = uiContent[locale];
  return (
    <section className="section-shell cta-section" data-reveal>
      <div>
        <span className="eyebrow">SOSDEV</span>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
      <div className="cta-actions">
        <Link className="button button-inverse" href={getPath(locale, "contact")}>
          {ui.quote}<Arrow />
        </Link>
        <a
          className="button button-ghost-inverse"
          href={getWhatsappUrl(locale)}
          target="_blank"
          rel="noreferrer"
          data-analytics="whatsapp_click"
        >
          WhatsApp ↗
        </a>
      </div>
    </section>
  );
}

function DirectChannels({ locale }: { locale: Locale }) {
  const copy = contactContent[locale];
  return (
    <aside className="direct-contact-card" aria-labelledby="direct-contact-title">
      <span className="eyebrow">SOSDEV / {copy.location}</span>
      <h2 id="direct-contact-title">{copy.directTitle}</h2>
      <p>{copy.directCopy}</p>
      <div className="contact-channel-list">
        <a
          href={getWhatsappUrl(locale)}
          target="_blank"
          rel="noreferrer"
          data-analytics="whatsapp_click"
        >
          <span className="channel-symbol">W</span>
          <span><small>{copy.whatsappLabel}</small><strong>{contactPhoneDisplay}</strong></span>
          <i aria-hidden="true">↗</i>
        </a>
        <a href={`mailto:${contactEmail}`} data-analytics="email_click">
          <span className="channel-symbol">@</span>
          <span><small>{copy.emailLabel}</small><strong>{contactEmail}</strong></span>
          <i aria-hidden="true">↗</i>
        </a>
        <a href={`tel:${contactPhoneHref}`}>
          <span className="channel-symbol">T</span>
          <span><small>{copy.phoneLabel}</small><strong>{contactPhoneDisplay}</strong></span>
          <i aria-hidden="true">↗</i>
        </a>
      </div>
      <div className="privacy-note">
        <span aria-hidden="true">i</span>
        <p>{copy.privacyNote}</p>
      </div>
    </aside>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeContent[locale];
  const ui = uiContent[locale];
  const prices = pricingContent[locale];
  const faqs = faqContent[locale].clusters.flatMap((cluster) => cluster.items).slice(0, 3);

  return (
    <>
      <section className="home-hero section-shell">
        <div className="home-hero-copy" data-reveal>
          <span className="eyebrow"><i className="status-dot" />{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={getPath(locale, "contact")}>
              {copy.primaryCta}<Arrow />
            </Link>
            <Link className="button button-secondary" href={getPath(locale, "services")}>
              {copy.secondaryCta}
            </Link>
          </div>
          <div className="hero-facts" aria-label={locale === "es" ? "Información de servicio" : "Service information"}>
            <span>Colombia</span>
            <span>{locale === "es" ? "Atención remota" : "Remote delivery"}</span>
            <span>{locale === "es" ? "Contacto directo" : "Direct contact"}</span>
          </div>
        </div>
        <div className="home-hero-visual" data-reveal>
          <SystemMap
            label={copy.visualLabel}
            title={copy.visualTitle}
            nodes={copy.visualNodes}
            coreLabel={locale === "es" ? "Sistemas conectados" : "Connected systems"}
          />
        </div>
      </section>

      <section className="trust-band">
        <div className="section-shell trust-band-inner" data-reveal>
          <span className="section-number">01</span>
          <h2>{copy.trustTitle}</h2>
          <p>{copy.trustCopy}</p>
        </div>
      </section>

      <section className="content-section section-shell" id="solutions">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow">{copy.servicesKicker}</span><h2>{copy.servicesTitle}</h2></div>
          <Link className="text-link" href={getPath(locale, "services")}>{ui.services}<Arrow /></Link>
        </div>
        <div className="solution-card-grid">
          {copy.serviceCards.map((card) => (
            <Link className="solution-card" href={getPath(locale, card.key)} key={card.number} data-reveal>
              <div className="card-topline"><span>{card.number}</span><i aria-hidden="true">↗</i></div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <div className="card-path" aria-hidden="true"><i /><i /><i /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section process-section">
        <div className="section-shell">
          <div className="section-heading" data-reveal>
            <div><span className="eyebrow">{copy.processKicker}</span><h2>{copy.processTitle}</h2></div>
          </div>
          <div className="process-grid">
            {copy.process.map(([number, title, description]) => (
              <article key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-shell">
        <div className="split-intro" data-reveal>
          <div><span className="eyebrow">{copy.pricingKicker}</span><h2>{copy.pricingTitle}</h2></div>
          <div><p>{copy.pricingCopy}</p><Link className="text-link" href={getPath(locale, "pricing")}>{ui.viewPricing}<Arrow /></Link></div>
        </div>
        <div className="price-preview-grid">
          {prices.plans.slice(0, 3).map((plan) => (
            <article className="price-preview" key={plan.id} data-reveal>
              <span>{plan.name}</span>
              <div className="price-line"><small>{plan.suffix}</small><strong>{plan.price}</strong><i>{plan.currency}</i></div>
              <p>{plan.description}</p>
              <Link href={`${getPath(locale, "contact")}?service=${plan.id}`}>{ui.quote}<Arrow /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section faq-preview-section">
        <div className="section-shell faq-preview-layout">
          <div className="faq-preview-intro" data-reveal>
            <span className="eyebrow">{copy.faqKicker}</span>
            <h2>{copy.faqTitle}</h2>
            <p>{copy.faqCopy}</p>
            <Link className="button button-secondary" href={getPath(locale, "faq")}>{ui.faq}<Arrow /></Link>
          </div>
          <div className="faq-list compact-faq">
            {faqs.map((item, index) => (
              <details key={item.q} data-reveal open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<i aria-hidden="true">+</i></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallToAction locale={locale} title={copy.finalTitle} copy={copy.finalCopy} />
    </>
  );
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const copy = servicesContent[locale];
  const ui = uiContent[locale];
  return (
    <>
      <PageHero locale={locale} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <section className="content-section section-shell">
        <div className="services-list">
          {copy.items.map((item, index) => (
            <article className="service-row" key={`${item.key}-${index}`} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{item.title}</h2><p>{item.copy}</p></div>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <Link
                href={item.key === "services" ? `${getPath(locale, "contact")}?service=web_app` : getPath(locale, item.key)}
                aria-label={`${ui.learnMore}: ${item.title}`}
              >↗</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section section-shell method-panel" data-reveal>
        <div><span className="eyebrow">SOSDEV / {locale === "es" ? "Tecnología" : "Technology"}</span><h2>{copy.methodTitle}</h2><p>{copy.methodCopy}</p></div>
        <div className="capability-cloud">{copy.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div>
      </section>
      <CallToAction locale={locale} title={copy.ctaTitle} />
    </>
  );
}

export function SolutionPage({ locale, page }: { locale: Locale; page: "ecommerce" | "sales" | "automations" }) {
  const copy = solutionPages[page][locale];
  return (
    <>
      <PageHero locale={locale} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <section className="content-section section-shell solution-intro">
        <div data-reveal><span className="section-number">01</span><h2>{copy.introTitle}</h2></div>
        <p data-reveal>{copy.introCopy}</p>
      </section>
      <section className="content-section section-shell">
        <div className="pillar-grid">
          {copy.pillars.map(([number, title, description]) => (
            <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>
      <section className="content-section scope-section">
        <div className="section-shell scope-layout">
          <div data-reveal><span className="eyebrow">SOSDEV / {locale === "es" ? "Alcance" : "Scope"}</span><h2>{copy.scopeTitle}</h2><p className="scope-disclaimer">{copy.disclaimer}</p></div>
          <ul data-reveal>{copy.scope.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
        </div>
      </section>
      <CallToAction locale={locale} title={copy.ctaTitle} />
    </>
  );
}

export function PricingPage({ locale }: { locale: Locale }) {
  const copy = pricingContent[locale];
  const ui = uiContent[locale];
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        secondaryHref="#plans"
        secondaryLabel={locale === "es" ? "Comparar opciones" : "Compare options"}
      />
      <section id="plans" className="content-section section-shell pricing-section">
        <div className="pricing-update"><span className="status-dot" />{copy.updated}</div>
        <div className="pricing-grid">
          {copy.plans.map((plan) => (
            <article id={plan.id} className={`pricing-card${plan.featured ? " is-featured" : ""}`} key={plan.id} data-reveal>
              {plan.featured ? <span className="featured-label">{locale === "es" ? "Base recomendada para un MVP" : "Recommended base for an MVP"}</span> : null}
              <div className="pricing-card-head"><span>{plan.name}</span><small>{plan.suffix}</small></div>
              <div className="pricing-value"><strong>{plan.price}</strong>{plan.currency ? <span>{plan.currency}</span> : null}</div>
              <p>{plan.description}</p>
              <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
              <p className="pricing-exclusions"><strong>{locale === "es" ? "No incluido:" : "Not included:"}</strong> {plan.exclusions}</p>
              <Link
                className={`button ${plan.featured ? "button-primary" : "button-secondary"}`}
                href={`${getPath(locale, "contact")}?service=${plan.id === "custom" ? "other" : plan.id}`}
                data-analytics="pricing_cta_click"
              >
                {ui.quote}<Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section section-shell compare-section">
        <div data-reveal><span className="eyebrow">SOSDEV / {locale === "es" ? "Comparativa" : "Checklist"}</span><h2>{copy.compareTitle}</h2></div>
        <ol data-reveal>{copy.compare.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
      </section>
      <section className="section-shell price-note" data-reveal><span aria-hidden="true">i</span><div><h2>{copy.noteTitle}</h2><p>{copy.note}</p></div></section>
      <CallToAction locale={locale} title={copy.ctaTitle} />
    </>
  );
}

export function FaqPage({ locale }: { locale: Locale }) {
  const copy = faqContent[locale];
  return (
    <>
      <PageHero locale={locale} eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <section className="content-section section-shell faq-page-layout">
        <nav className="faq-cluster-nav" aria-label={locale === "es" ? "Categorías de preguntas" : "Question categories"}>
          <span>{locale === "es" ? "Categorías" : "Categories"}</span>
          {copy.clusters.map((cluster, index) => <a href={`#${cluster.id}`} key={cluster.id}><i>{String(index + 1).padStart(2, "0")}</i>{cluster.title}</a>)}
        </nav>
        <div className="faq-clusters">
          {copy.clusters.map((cluster, clusterIndex) => (
            <section id={cluster.id} key={cluster.id} data-reveal>
              <div className="faq-cluster-heading"><span>{String(clusterIndex + 1).padStart(2, "0")}</span><h2>{cluster.title}</h2></div>
              <div className="faq-list">
                {cluster.items.map((item, itemIndex) => (
                  <details key={item.q} open={clusterIndex === 0 && itemIndex === 0}>
                    <summary>{item.q}<i aria-hidden="true">+</i></summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          <p className="content-review-note">{copy.note}</p>
        </div>
      </section>
      <CallToAction locale={locale} title={copy.ctaTitle} />
    </>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const copy = contactContent[locale];
  return (
    <>
      <section className="page-hero section-shell contact-page-hero">
        <div className="page-hero-copy" data-reveal><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.description}</p></div>
        <div className="contact-hero-signal" aria-hidden="true"><span>S</span><i /><i /><i /></div>
      </section>
      <section id="contact-form" className="content-section section-shell contact-layout">
        <ContactForm locale={locale} sourcePage="contact" />
        <DirectChannels locale={locale} />
      </section>
    </>
  );
}

export default function MarketingPage({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  switch (page) {
    case "home": return <HomePage locale={locale} />;
    case "services": return <ServicesPage locale={locale} />;
    case "ecommerce": return <SolutionPage locale={locale} page="ecommerce" />;
    case "sales": return <SolutionPage locale={locale} page="sales" />;
    case "automations": return <SolutionPage locale={locale} page="automations" />;
    case "pricing": return <PricingPage locale={locale} />;
    case "faq": return <FaqPage locale={locale} />;
    case "contact": return <ContactPage locale={locale} />;
  }
}
