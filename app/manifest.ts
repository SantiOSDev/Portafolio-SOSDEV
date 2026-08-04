import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SOSDEV — Desarrollo de software",
    short_name: "SOSDEV",
    description:
      "Desarrollo web, ecommerce, sistemas para ventas y automatización para empresas.",
    start_url: "/es",
    display: "standalone",
    background_color: "#f6f9f7",
    theme_color: "#087443",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
