"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getPageKey, getPath, type Locale, type PageKey } from "../site-config";
import { uiContent } from "../content";

type Theme = "light" | "dark";

const solutionPages: PageKey[] = [
  "services",
  "ecommerce",
  "sales",
  "automations",
];

function Brand({ locale }: { locale: Locale }) {
  return (
    <Link className="brand" href={getPath(locale, "home")} aria-label="SOSDEV">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="img">
          <path d="M10 13.5 20 7l10 6.5v13L20 33l-10-6.5Z" />
          <path d="m15.5 22.5 3 3 6-9" />
        </svg>
      </span>
      <span className="brand-word">SOSDEV</span>
    </Link>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === "light" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function SiteHeader({ locale }: { locale: Locale }) {
  const copy = uiContent[locale];
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[1] ?? "";
  const currentPage = getPageKey(locale, slug) ?? "home";
  const nextLocale: Locale = locale === "es" ? "en" : "es";
  const languageHref = getPath(nextLocale, currentPage);
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const applied = document.documentElement.dataset.theme;
      setTheme(applied === "dark" ? "dark" : "light");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const trigger = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    first?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("sosdev-theme", nextTheme);
    setTheme(nextTheme);
  };

  const isSolutionActive = solutionPages.includes(currentPage);
  const solutionLinks = [
    ["services", copy.services],
    ["ecommerce", copy.ecommerce],
    ["sales", copy.sales],
    ["automations", copy.automations],
  ] as const;

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand locale={locale} />

          <nav className="desktop-navigation" aria-label={copy.navLabel}>
            <Link
              href={getPath(locale, "home")}
              aria-current={currentPage === "home" ? "page" : undefined}
            >
              {copy.home}
            </Link>
            <details className="solutions-menu" key={pathname}>
              <summary className={isSolutionActive ? "is-active" : undefined}>
                {copy.solutions}
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="m4 6 4 4 4-4" />
                </svg>
              </summary>
              <div className="solutions-panel">
                {solutionLinks.map(([page, label]) => (
                  <Link
                    key={page}
                    href={getPath(locale, page)}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    <span>{label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </details>
            <Link
              href={getPath(locale, "pricing")}
              aria-current={currentPage === "pricing" ? "page" : undefined}
            >
              {copy.pricing}
            </Link>
            <Link
              href={getPath(locale, "faq")}
              aria-current={currentPage === "faq" ? "page" : undefined}
            >
              {copy.faq}
            </Link>
          </nav>

          <div className="header-actions">
            <button
              className="icon-control theme-control"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? copy.themeDark : copy.themeLight}
              title={theme === "light" ? copy.dark : copy.light}
              data-analytics="theme_toggle"
            >
              <ThemeIcon theme={theme} />
              <span>{theme === "light" ? copy.dark : copy.light}</span>
            </button>
            <Link
              className="language-control"
              href={languageHref}
              hrefLang={nextLocale}
              lang={nextLocale}
              aria-label={copy.language}
              data-analytics="language_switch"
            >
              {nextLocale.toUpperCase()}
            </Link>
            <Link className="button button-small header-quote" href={getPath(locale, "contact")}>
              {copy.quote}
            </Link>
            <button
              ref={menuButtonRef}
              className="icon-control menu-control"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu-layer">
          <button
            className="menu-backdrop"
            type="button"
            aria-label={copy.menuClose}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="mobile-menu"
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={copy.navLabel}
          >
            <div className="mobile-menu-head">
              <Brand locale={locale} />
              <button
                className="icon-control"
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={copy.menuClose}
              >
                <MenuIcon open />
              </button>
            </div>
            <nav
              className="mobile-navigation"
              aria-label={copy.navLabel}
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
              }}
            >
              <Link
                href={getPath(locale, "home")}
                aria-current={currentPage === "home" ? "page" : undefined}
              >{copy.home}</Link>
              <span className="mobile-nav-label">{copy.solutions}</span>
              {solutionLinks.map(([page, label]) => (
                <Link
                  key={page}
                  href={getPath(locale, page)}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {label}<span aria-hidden="true">↗</span>
                </Link>
              ))}
              <Link
                href={getPath(locale, "pricing")}
                aria-current={currentPage === "pricing" ? "page" : undefined}
              >{copy.pricing}</Link>
              <Link
                href={getPath(locale, "faq")}
                aria-current={currentPage === "faq" ? "page" : undefined}
              >{copy.faq}</Link>
              <Link
                href={getPath(locale, "contact")}
                aria-current={currentPage === "contact" ? "page" : undefined}
              >{copy.contact}</Link>
            </nav>
            <div className="mobile-menu-actions">
              <button type="button" className="menu-setting" onClick={toggleTheme}>
                <ThemeIcon theme={theme} />
                {theme === "light" ? copy.themeDark : copy.themeLight}
              </button>
              <Link className="menu-setting" href={languageHref} lang={nextLocale}>
                <span className="language-badge">{nextLocale.toUpperCase()}</span>
                {copy.language}
              </Link>
              <Link className="button button-primary" href={getPath(locale, "contact")}>
                {copy.quote}<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
