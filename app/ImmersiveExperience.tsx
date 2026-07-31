"use client";

import { useEffect } from "react";

export default function ImmersiveExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty(
        "--scroll-shift",
        `${Math.max(-70, -progress * 110).toFixed(1)}px`,
      );
    };

    const scheduleScrollUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScroll);
      }
    };

    const updatePointer = (event: PointerEvent) => {
      const horizontal = event.clientX / window.innerWidth - 0.5;
      const vertical = event.clientY / window.innerHeight - 0.5;

      root.style.setProperty("--pointer-x", `${(horizontal * 18).toFixed(1)}px`);
      root.style.setProperty("--pointer-y", `${(vertical * 18).toFixed(1)}px`);
      root.style.setProperty("--pointer-rx", `${(vertical * -3.5).toFixed(2)}deg`);
      root.style.setProperty("--pointer-ry", `${(horizontal * 4.5).toFixed(2)}deg`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    revealElements.forEach((element) => observer.observe(element));
    updateScroll();
    window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
    window.addEventListener("resize", scheduleScrollUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleScrollUpdate);
      window.removeEventListener("resize", scheduleScrollUpdate);
      window.removeEventListener("pointermove", updatePointer);
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="immersive-chrome" aria-hidden="true">
      <span>Scroll experience</span>
      <div className="scroll-progress-track">
        <i className="scroll-progress-fill" />
      </div>
    </div>
  );
}
