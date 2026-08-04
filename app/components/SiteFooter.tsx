import Link from "next/link";
import { uiContent } from "../content";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneHref,
  getPath,
  getWhatsappUrl,
  type Locale,
} from "../site-config";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const copy = uiContent[locale];

  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand-block">
          <Link className="brand" href={getPath(locale, "home")} aria-label="SOSDEV">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40">
                <path d="M10 13.5 20 7l10 6.5v13L20 33l-10-6.5Z" />
                <path d="m15.5 22.5 3 3 6-9" />
              </svg>
            </span>
            <span className="brand-word">SOSDEV</span>
          </Link>
          <p>{copy.footerSummary}</p>
          <span>{copy.remote}</span>
        </div>

        <div className="footer-column">
          <strong>{copy.solutions}</strong>
          <Link href={getPath(locale, "services")}>{copy.services}</Link>
          <Link href={getPath(locale, "ecommerce")}>{copy.ecommerce}</Link>
          <Link href={getPath(locale, "sales")}>{copy.sales}</Link>
          <Link href={getPath(locale, "automations")}>{copy.automations}</Link>
        </div>

        <div className="footer-column">
          <strong>SOSDEV</strong>
          <Link href={getPath(locale, "pricing")}>{copy.pricing}</Link>
          <Link href={getPath(locale, "faq")}>{copy.faq}</Link>
          <Link href={getPath(locale, "contact")}>{copy.contact}</Link>
          <a href={getWhatsappUrl(locale)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="footer-column footer-contact">
          <strong>{copy.contact}</strong>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`tel:${contactPhoneHref}`}>{contactPhoneDisplay}</a>
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} SOSDEV</span>
        <span>{copy.legalNote}</span>
      </div>
    </footer>
  );
}
