"use client";

import { useEffect, useRef } from "react";

export default function SystemMap({
  label,
  title,
  nodes,
  coreLabel,
}: {
  label: string;
  title: string;
  nodes: string[];
  coreLabel: string;
}) {
  const mapRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (event.pointerType === "touch") return;
    const element = mapRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty("--map-x", `${x.toFixed(2)}px`);
      element.style.setProperty("--map-y", `${y.toFixed(2)}px`);
    });
  };

  const resetPosition = () => {
    const element = mapRef.current;
    if (!element) return;
    element.style.setProperty("--map-x", "0px");
    element.style.setProperty("--map-y", "0px");
  };

  return (
    <figure
      className="system-map"
      ref={mapRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      aria-labelledby="system-map-title"
    >
      <figcaption className="system-map-caption">
        <span>{label}</span>
        <strong id="system-map-title">{title}</strong>
      </figcaption>

      <div className="map-stage">
        <div className="map-grid" aria-hidden="true" />
        <svg className="map-connections" viewBox="0 0 600 440" aria-hidden="true">
          <path d="M300 220C225 220 210 102 126 102" />
          <path d="M300 220C375 220 390 102 474 102" />
          <path d="M300 220C225 220 210 338 126 338" />
          <path d="M300 220C375 220 390 338 474 338" />
          <circle cx="300" cy="220" r="96" />
        </svg>

        <div className="map-core">
          <span>SOSDEV</span>
          <strong>S</strong>
          <small>{coreLabel}</small>
        </div>

        {nodes.map((node, index) => (
          <div className={`map-node map-node-${index + 1}`} key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
    </figure>
  );
}
