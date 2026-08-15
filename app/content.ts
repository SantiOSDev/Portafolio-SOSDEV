import type { Locale, PageKey } from "./site-config";

export type SeoEntry = {
  title: string;
  description: string;
};

export const seoContent: Record<Locale, Record<PageKey, SeoEntry>> = {
  es: {
    home: {
      title: "SOSDEV | Desarrollo web, ecommerce y automatización",
      description:
        "Creamos páginas web, ecommerce, aplicaciones y automatizaciones para convertir procesos empresariales en crecimiento medible.",
    },
    services: {
      title: "Servicios de desarrollo de software | SOSDEV",
      description:
        "Desarrollo web, ecommerce, sistemas para ventas, automatización con IA e infraestructura digital desde Colombia.",
    },
    ecommerce: {
      title: "Desarrollo de páginas web ecommerce | SOSDEV",
      description:
        "Diseñamos tiendas online rápidas, administrables e integradas con pagos, inventario, envíos y procesos comerciales.",
    },
    sales: {
      title: "Soluciones digitales para ventas | SOSDEV",
      description:
        "Landing pages, formularios, integraciones con CRM y WhatsApp y automatizaciones para ordenar el proceso comercial.",
    },
    automations: {
      title: "Automatización de procesos e IA | SOSDEV",
      description:
        "Conectamos herramientas, datos e inteligencia artificial para reducir tareas repetitivas y mejorar la operación.",
    },
    pricing: {
      title: "Precios de desarrollo web en Colombia | SOSDEV",
      description:
        "Precios orientativos para landing pages, ecommerce y aplicaciones web. Conozca qué incluye cada punto de partida.",
    },
    faq: {
      title: "Preguntas frecuentes sobre desarrollo web | SOSDEV",
      description:
        "Respuestas claras sobre precios, ecommerce, IA, plataformas, hosting y contratación de desarrollo web en Colombia y Latinoamérica.",
    },
    contact: {
      title: "Solicitar cotización de software | SOSDEV",
      description:
        "Cuéntenos su necesidad de desarrollo web, ecommerce o automatización. Contacte a SOSDEV por formulario, WhatsApp o correo.",
    },
  },
  en: {
    home: {
      title: "SOSDEV | Web development, ecommerce and automation",
      description:
        "We build websites, ecommerce, web applications, and automation that turn business processes into measurable growth.",
    },
    services: {
      title: "Software development services | SOSDEV",
      description:
        "Web development, ecommerce, digital sales systems, AI automation, and cloud infrastructure from Colombia.",
    },
    ecommerce: {
      title: "Ecommerce website development | SOSDEV",
      description:
        "We design fast, manageable online stores integrated with payments, inventory, shipping, and commercial workflows.",
    },
    sales: {
      title: "Digital systems for sales | SOSDEV",
      description:
        "Landing pages, forms, CRM and WhatsApp integrations, and automation for a clearer commercial process.",
    },
    automations: {
      title: "Process automation and AI | SOSDEV",
      description:
        "We connect tools, data, and artificial intelligence to reduce repetitive work and improve operations.",
    },
    pricing: {
      title: "Web development pricing | SOSDEV",
      description:
        "Indicative starting prices for landing pages, ecommerce, and web applications, with a clear view of what each option includes.",
    },
    faq: {
      title: "Web development frequently asked questions | SOSDEV",
      description:
        "Clear answers about pricing, ecommerce, AI, platforms, hosting, and hiring web development services in Latin America.",
    },
    contact: {
      title: "Request a software quote | SOSDEV",
      description:
        "Tell us about your web development, ecommerce, or automation needs. Contact SOSDEV by form, WhatsApp, or email.",
    },
  },
};

export const uiContent = {
  es: {
    skip: "Saltar al contenido",
    navLabel: "Navegación principal",
    home: "Inicio",
    solutions: "Soluciones",
    services: "Todos los servicios",
    ecommerce: "Ecommerce",
    sales: "Ventas",
    automations: "Automatizaciones",
    pricing: "Precios",
    faq: "FAQ",
    contact: "Contacto",
    quote: "Solicitar cotización",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    themeLight: "Activar modo claro",
    themeDark: "Activar modo oscuro",
    language: "Cambiar a inglés",
    dark: "Oscuro",
    light: "Claro",
    remote: "Colombia · Atención remota",
    footerSummary:
      "Desarrollo web, ecommerce y automatización para empresas que quieren operar mejor.",
    legalNote: "Precios orientativos. Cada alcance se confirma mediante cotización.",
    backHome: "Volver al inicio",
    learnMore: "Conocer más",
    viewPricing: "Ver precios",
    whatsapp: "WhatsApp",
  },
  en: {
    skip: "Skip to content",
    navLabel: "Main navigation",
    home: "Home",
    solutions: "Solutions",
    services: "All services",
    ecommerce: "Ecommerce",
    sales: "Sales",
    automations: "Automation",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    quote: "Request a quote",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    language: "Switch to Spanish",
    dark: "Dark",
    light: "Light",
    remote: "Colombia · Remote delivery",
    footerSummary:
      "Web development, ecommerce, and automation for companies that want to operate better.",
    legalNote: "Indicative pricing. Every scope is confirmed through a proposal.",
    backHome: "Back to home",
    learnMore: "Learn more",
    viewPricing: "View pricing",
    whatsapp: "WhatsApp",
  },
} satisfies Record<Locale, Record<string, string>>;

export const homeContent = {
  es: {
    eyebrow: "Software estratégico para empresas",
    title: "Construimos software que convierte procesos en crecimiento.",
    description:
      "Diseñamos experiencias web, ecommerce y automatizaciones que conectan personas, datos y decisiones en una operación más clara.",
    primaryCta: "Solicitar cotización",
    secondaryCta: "Explorar soluciones",
    visualLabel: "Sistema digital SOSDEV",
    visualTitle: "Una arquitectura. Cuatro frentes de crecimiento.",
    visualNodes: ["Web", "Ventas", "Ecommerce", "Automatización"],
    trustTitle: "Tecnología pensada para el negocio, no para la vitrina.",
    trustCopy:
      "Partimos del proceso real, definimos prioridades y construimos una solución mantenible. Sin métricas inventadas ni promesas imposibles.",
    servicesKicker: "Soluciones conectadas",
    servicesTitle: "Unimos la experiencia del cliente con la operación interna.",
    serviceCards: [
      {
        key: "services" as PageKey,
        number: "01",
        title: "Desarrollo web",
        copy: "Sitios y aplicaciones rápidas, accesibles y preparadas para integrarse con su operación.",
      },
      {
        key: "ecommerce" as PageKey,
        number: "02",
        title: "Ecommerce",
        copy: "Tiendas online enfocadas en una compra clara y una administración sostenible.",
      },
      {
        key: "sales" as PageKey,
        number: "03",
        title: "Sistemas para ventas",
        copy: "Landing pages, formularios e integraciones que ordenan la captura y seguimiento de oportunidades.",
      },
      {
        key: "automations" as PageKey,
        number: "04",
        title: "Automatización e IA",
        copy: "Flujos que conectan herramientas, reducen tareas repetitivas y hacen visibles los datos importantes.",
      },
    ],
    processKicker: "Cómo trabajamos",
    processTitle: "Claridad antes de código.",
    process: [
      ["01", "Diagnóstico", "Comprendemos objetivos, usuarios, restricciones y contexto."],
      ["02", "Diseño", "Definimos alcance, arquitectura y una experiencia coherente."],
      ["03", "Construcción", "Desarrollamos, integramos y validamos de forma incremental."],
      ["04", "Evolución", "Desplegamos y dejamos una ruta clara para mejorar."],
    ],
    pricingKicker: "Inversión transparente",
    pricingTitle: "Puntos de partida para planear con criterio.",
    pricingCopy:
      "Publicamos referencias iniciales para reducir incertidumbre. La cifra final depende del alcance, las integraciones y los costos recurrentes.",
    faqKicker: "Decidir con información",
    faqTitle: "Preguntas antes de comenzar.",
    faqCopy:
      "Explicamos cómo cotizamos, qué plataformas consideramos y qué debe comparar antes de contratar.",
    finalTitle: "Conversemos sobre el sistema que su negocio necesita ahora.",
    finalCopy:
      "Cuéntenos el reto y le responderemos con preguntas concretas, no con una propuesta genérica.",
  },
  en: {
    eyebrow: "Strategic software for businesses",
    title: "We build software that turns processes into growth.",
    description:
      "We design web experiences, ecommerce, and automation that connect people, data, and decisions in a clearer operation.",
    primaryCta: "Request a quote",
    secondaryCta: "Explore solutions",
    visualLabel: "SOSDEV digital system",
    visualTitle: "One architecture. Four growth fronts.",
    visualNodes: ["Web", "Sales", "Ecommerce", "Automation"],
    trustTitle: "Technology built for the business, not just the showcase.",
    trustCopy:
      "We start with the real process, define priorities, and build a maintainable solution. No invented metrics or impossible promises.",
    servicesKicker: "Connected solutions",
    servicesTitle: "We connect customer experience with internal operations.",
    serviceCards: [
      {
        key: "services" as PageKey,
        number: "01",
        title: "Web development",
        copy: "Fast, accessible websites and applications ready to integrate with your operations.",
      },
      {
        key: "ecommerce" as PageKey,
        number: "02",
        title: "Ecommerce",
        copy: "Online stores focused on a clear buying experience and sustainable management.",
      },
      {
        key: "sales" as PageKey,
        number: "03",
        title: "Sales systems",
        copy: "Landing pages, forms, and integrations that organize lead capture and follow-up.",
      },
      {
        key: "automations" as PageKey,
        number: "04",
        title: "Automation and AI",
        copy: "Workflows that connect tools, reduce repetitive tasks, and surface important data.",
      },
    ],
    processKicker: "How we work",
    processTitle: "Clarity before code.",
    process: [
      ["01", "Discovery", "We understand goals, users, constraints, and context."],
      ["02", "Design", "We define scope, architecture, and a coherent experience."],
      ["03", "Build", "We develop, integrate, and validate incrementally."],
      ["04", "Evolve", "We deploy and leave a clear path for improvement."],
    ],
    pricingKicker: "Transparent investment",
    pricingTitle: "Starting points for better planning.",
    pricingCopy:
      "We publish initial references to reduce uncertainty. Final pricing depends on scope, integrations, and recurring costs.",
    faqKicker: "Make informed decisions",
    faqTitle: "Questions to ask before starting.",
    faqCopy:
      "We explain how we quote, which platforms we consider, and what to compare before hiring a provider.",
    finalTitle: "Let’s discuss the system your business needs now.",
    finalCopy:
      "Tell us about the challenge and we will respond with concrete questions, not a generic proposal.",
  },
};

export const servicesContent = {
  es: {
    eyebrow: "Servicios de desarrollo de software",
    title: "Soluciones digitales diseñadas como un sistema.",
    description:
      "Combinamos estrategia, producto, integración e infraestructura para evitar piezas aisladas que después nadie puede mantener.",
    items: [
      {
        key: "services" as PageKey,
        title: "Aplicaciones web a medida",
        copy: "Portales, paneles, herramientas internas y productos digitales adaptados a usuarios, permisos y datos reales.",
        bullets: ["Diseño responsive", "Integraciones y APIs", "Accesibilidad y rendimiento"],
      },
      {
        key: "ecommerce" as PageKey,
        title: "Ecommerce",
        copy: "Tiendas online y flujos de compra conectados con la operación comercial.",
        bullets: ["Catálogo y administración", "Pagos y envíos", "Analítica preparada"],
      },
      {
        key: "sales" as PageKey,
        title: "Ventas digitales",
        copy: "Páginas y flujos que capturan solicitudes y las llevan al canal correcto.",
        bullets: ["Landing pages", "CRM y WhatsApp", "Automatización comercial"],
      },
      {
        key: "automations" as PageKey,
        title: "Automatización e IA",
        copy: "Procesos conectados para reducir trabajo manual y aprovechar mejor la información.",
        bullets: ["Flujos e integraciones", "Asistentes y clasificación", "Monitoreo operativo"],
      },
    ],
    methodTitle: "Una base técnica que puede evolucionar.",
    methodCopy:
      "Definimos cada arquitectura según el alcance. No forzamos una plataforma cuando otra resuelve mejor el problema.",
    capabilities: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Cloudflare", "n8n", "APIs"],
    ctaTitle: "¿Qué parte de su operación necesita conectar?",
  },
  en: {
    eyebrow: "Software development services",
    title: "Digital solutions designed as one system.",
    description:
      "We combine strategy, product, integrations, and infrastructure to avoid isolated pieces that become difficult to maintain.",
    items: [
      {
        key: "services" as PageKey,
        title: "Custom web applications",
        copy: "Portals, dashboards, internal tools, and digital products adapted to real users, permissions, and data.",
        bullets: ["Responsive design", "Integrations and APIs", "Accessibility and performance"],
      },
      {
        key: "ecommerce" as PageKey,
        title: "Ecommerce",
        copy: "Online stores and buying flows connected to commercial operations.",
        bullets: ["Catalog and management", "Payments and shipping", "Analytics-ready"],
      },
      {
        key: "sales" as PageKey,
        title: "Digital sales",
        copy: "Pages and workflows that capture requests and send them to the right channel.",
        bullets: ["Landing pages", "CRM and WhatsApp", "Sales automation"],
      },
      {
        key: "automations" as PageKey,
        title: "Automation and AI",
        copy: "Connected processes that reduce manual work and make better use of information.",
        bullets: ["Workflows and integrations", "Assistants and classification", "Operational monitoring"],
      },
    ],
    methodTitle: "A technical foundation that can evolve.",
    methodCopy:
      "We define each architecture according to scope. We do not force one platform when another is a better fit.",
    capabilities: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Cloudflare", "n8n", "APIs"],
    ctaTitle: "Which part of your operation needs to be connected?",
  },
};

export const solutionPages = {
  ecommerce: {
    es: {
      eyebrow: "Desarrollo de páginas web ecommerce",
      title: "Una tienda online debe vender con claridad y operar sin caos.",
      description:
        "Diseñamos la experiencia de compra y la conectamos con catálogo, pagos, inventario, envíos y seguimiento según el alcance real.",
      introTitle: "Ecommerce más allá del carrito.",
      introCopy:
        "La plataforma se selecciona después de entender productos, mercados, reglas comerciales y capacidad operativa. Shopify, WooCommerce o una solución a medida pueden ser correctos en contextos distintos.",
      pillars: [
        ["01", "Experiencia de compra", "Navegación, producto, confianza y checkout adaptados a móvil."],
        ["02", "Operación", "Administración de catálogo, pedidos, inventario y roles según necesidad."],
        ["03", "Integraciones", "Pasarelas, envíos, facturación o sistemas internos validados por país."],
        ["04", "Evolución", "Base medible y mantenible para mejorar sin reconstruir todo."],
      ],
      scopeTitle: "Lo que definimos antes de cotizar",
      scope: ["Cantidad y variantes de productos", "Países, monedas e impuestos", "Pagos, envíos e inventario", "Roles y administración", "Integraciones y migración de datos", "Soporte y costos recurrentes"],
      disclaimer:
        "No gestionamos campañas publicitarias ni garantizamos ventas. Construimos la plataforma y los flujos digitales acordados.",
      ctaTitle: "Convirtamos su catálogo en una experiencia de compra clara.",
    },
    en: {
      eyebrow: "Ecommerce website development",
      title: "An online store should sell clearly and operate without chaos.",
      description:
        "We design the buying experience and connect it with catalog, payments, inventory, shipping, and follow-up according to the actual scope.",
      introTitle: "Ecommerce beyond the cart.",
      introCopy:
        "We choose the platform after understanding products, markets, commercial rules, and operational capacity. Shopify, WooCommerce, or a custom solution can each be right in different contexts.",
      pillars: [
        ["01", "Buying experience", "Mobile-first navigation, product pages, trust, and checkout."],
        ["02", "Operations", "Catalog, order, inventory, and role management as required."],
        ["03", "Integrations", "Payment, shipping, invoicing, or internal systems validated by country."],
        ["04", "Evolution", "A measurable, maintainable foundation that can improve over time."],
      ],
      scopeTitle: "What we define before quoting",
      scope: ["Product count and variants", "Countries, currencies, and taxes", "Payments, shipping, and inventory", "Roles and administration", "Integrations and data migration", "Support and recurring costs"],
      disclaimer:
        "We do not manage advertising campaigns or guarantee sales. We build the agreed platform and digital workflows.",
      ctaTitle: "Let’s turn your catalog into a clear buying experience.",
    },
  },
  sales: {
    es: {
      eyebrow: "Sistemas digitales para ventas",
      title: "Menos oportunidades perdidas entre formularios, chats y hojas de cálculo.",
      description:
        "Construimos páginas y automatizaciones que capturan una solicitud, la enriquecen y la llevan al equipo o herramienta correctos.",
      introTitle: "Tecnología para ordenar el proceso comercial.",
      introCopy:
        "Esta línea cubre experiencia digital, captura de leads e integración operativa. No sustituye una estrategia comercial ni incluye pauta publicitaria salvo acuerdo independiente.",
      pillars: [
        ["01", "Landing pages", "Mensajes claros, formularios breves y llamados a la acción medibles."],
        ["02", "Captura", "Validación y organización de solicitudes antes de llegar al equipo."],
        ["03", "Enrutamiento", "Integración con correo, WhatsApp, CRM o herramientas disponibles."],
        ["04", "Seguimiento", "Eventos y estados preparados para medir el recorrido comercial."],
      ],
      scopeTitle: "Aplicaciones habituales",
      scope: ["Campañas y páginas de servicio", "Cotizadores y formularios guiados", "Alertas a equipos comerciales", "Sincronización con CRM", "Seguimientos automáticos", "Paneles de solicitudes"],
      disclaimer:
        "El software puede reducir fricción y mejorar trazabilidad; no garantiza resultados de ventas.",
      ctaTitle: "Diseñemos un recorrido comercial más claro.",
    },
    en: {
      eyebrow: "Digital systems for sales",
      title: "Fewer opportunities lost between forms, chats, and spreadsheets.",
      description:
        "We build pages and automation that capture a request, enrich it, and route it to the right team or tool.",
      introTitle: "Technology that organizes the commercial process.",
      introCopy:
        "This service covers digital experience, lead capture, and operational integration. It does not replace a sales strategy or include paid advertising unless separately agreed.",
      pillars: [
        ["01", "Landing pages", "Clear messages, concise forms, and measurable calls to action."],
        ["02", "Capture", "Validation and organization before requests reach the team."],
        ["03", "Routing", "Integration with email, WhatsApp, CRM, or available tools."],
        ["04", "Follow-up", "Events and states prepared to measure the commercial journey."],
      ],
      scopeTitle: "Common applications",
      scope: ["Campaign and service pages", "Guided forms and quote tools", "Sales team alerts", "CRM synchronization", "Automated follow-up", "Request dashboards"],
      disclaimer:
        "Software can reduce friction and improve traceability; it cannot guarantee sales outcomes.",
      ctaTitle: "Let’s design a clearer commercial journey.",
    },
  },
  automations: {
    es: {
      eyebrow: "Automatización de procesos e IA",
      title: "Conectamos el trabajo repetitivo para que el equipo se concentre en decidir.",
      description:
        "Diseñamos flujos entre herramientas, reglas y modelos de IA con revisión humana, trazabilidad y límites claros.",
      introTitle: "Automatizar no es ocultar el proceso.",
      introCopy:
        "Primero entendemos excepciones, datos y responsables. Después decidimos qué conviene automatizar, qué debe aprobar una persona y cómo observar fallos.",
      pillars: [
        ["01", "Integración", "APIs, webhooks y flujos entre las herramientas existentes."],
        ["02", "Datos", "Validación, transformación y movimiento controlado de información."],
        ["03", "IA aplicada", "Clasificación, extracción, búsqueda o asistentes cuando aportan valor."],
        ["04", "Control", "Registros, alertas y puntos de revisión para operar con confianza."],
      ],
      scopeTitle: "Procesos que podemos evaluar",
      scope: ["Recepción y clasificación de solicitudes", "Sincronización entre sistemas", "Generación de documentos", "Alertas y aprobaciones", "Procesamiento de datos", "Asistentes internos"],
      disclaimer:
        "La precisión, privacidad, seguridad y costo de cualquier función de IA se validan para cada caso.",
      ctaTitle: "Identifiquemos la automatización con mejor impacto operativo.",
    },
    en: {
      eyebrow: "Process automation and AI",
      title: "We connect repetitive work so teams can focus on decisions.",
      description:
        "We design workflows across tools, rules, and AI models with human review, traceability, and clear boundaries.",
      introTitle: "Automation should not hide the process.",
      introCopy:
        "We first understand exceptions, data, and ownership. Then we decide what to automate, what requires human approval, and how failures will be observed.",
      pillars: [
        ["01", "Integration", "APIs, webhooks, and workflows across existing tools."],
        ["02", "Data", "Controlled validation, transformation, and movement of information."],
        ["03", "Applied AI", "Classification, extraction, search, or assistants when they add value."],
        ["04", "Control", "Logs, alerts, and review points for reliable operation."],
      ],
      scopeTitle: "Processes we can assess",
      scope: ["Request intake and classification", "System synchronization", "Document generation", "Alerts and approvals", "Data processing", "Internal assistants"],
      disclaimer:
        "Accuracy, privacy, security, and cost for every AI feature are validated for each use case.",
      ctaTitle: "Let’s identify the automation with the strongest operational impact.",
    },
  },
};

export const pricingContent = {
  es: {
    eyebrow: "Precios de desarrollo web",
    title: "Referencias claras para iniciar la conversación.",
    description:
      "Estos valores son puntos de partida orientativos en pesos colombianos. Una cotización válida exige confirmar alcance, contenido, integraciones y operación.",
    updated: "Referencias actualizadas en agosto de 2026",
    plans: [
      {
        id: "landing",
        name: "Landing page",
        price: "$750.000",
        currency: "COP",
        suffix: "desde",
        description: "Para presentar una oferta y captar solicitudes con claridad.",
        features: ["Diseño responsive", "Hasta 5 secciones", "Formulario de contacto", "SEO técnico esencial", "Integración con analítica preparada"],
        exclusions: "Dominio, hosting, contenido, licencias e impuestos se cotizan aparte cuando correspondan.",
      },
      {
        id: "ecommerce",
        name: "Ecommerce",
        price: "$2.500.000",
        currency: "COP",
        suffix: "desde",
        description: "Para vender un catálogo inicial mediante una operación definida.",
        features: ["Diseño de tienda", "Catálogo inicial", "Flujo de compra", "Integración de pago acordada", "Panel administrativo según plataforma"],
        exclusions: "Productos, comisiones, envíos, facturación, licencias e integraciones especiales se cotizan aparte.",
      },
      {
        id: "web_app",
        name: "Aplicación web o MVP",
        price: "$6.000.000",
        currency: "COP",
        suffix: "desde",
        description: "Para digitalizar un proceso con usuarios, datos y reglas propias.",
        features: ["Diagnóstico funcional", "Experiencia responsive", "Autenticación y roles básicos", "Base de datos", "Despliegue inicial"],
        exclusions: "Módulos avanzados, infraestructura, proveedores externos y soporte continuo se definen por alcance.",
        featured: true,
      },
      {
        id: "custom",
        name: "Solución empresarial",
        price: "A medida",
        currency: "",
        suffix: "cotización",
        description: "Para procesos críticos, múltiples integraciones o una hoja de ruta por fases.",
        features: ["Descubrimiento técnico", "Arquitectura por fases", "Integraciones complejas", "Plan de despliegue", "Ruta de evolución"],
        exclusions: "La inversión se define después del diagnóstico y puede expresarse por fases.",
      },
    ],
    compareTitle: "Qué debe comparar, además del precio",
    compare: ["Alcance e inclusiones", "Diseño propio o plantilla", "Propiedad del código y cuentas", "Accesibilidad y pruebas", "Integraciones y seguridad", "Costos recurrentes y soporte"],
    noteTitle: "Antes de contratar",
    note:
      "Confirme por escrito moneda, impuestos, entregables, revisiones, propiedad, soporte, licencias y costos recurrentes. SOSDEV documentará estos puntos en cada propuesta.",
    ctaTitle: "Obtenga una cotización basada en su alcance real.",
  },
  en: {
    eyebrow: "Web development pricing",
    title: "Clear references to start the conversation.",
    description:
      "These values are indicative starting points in Colombian pesos. A valid quote requires confirming scope, content, integrations, and operations.",
    updated: "References updated in August 2026",
    plans: [
      {
        id: "landing",
        name: "Landing page",
        price: "COP 750,000",
        currency: "",
        suffix: "from",
        description: "For presenting an offer and capturing requests clearly.",
        features: ["Responsive design", "Up to 5 sections", "Contact form", "Essential technical SEO", "Analytics-ready integration"],
        exclusions: "Domain, hosting, content, licenses, and taxes are quoted separately when applicable.",
      },
      {
        id: "ecommerce",
        name: "Ecommerce",
        price: "COP 2,500,000",
        currency: "",
        suffix: "from",
        description: "For selling an initial catalog through a defined operation.",
        features: ["Store design", "Initial catalog", "Buying flow", "Agreed payment integration", "Platform management panel"],
        exclusions: "Products, fees, shipping, invoicing, licenses, and special integrations are quoted separately.",
      },
      {
        id: "web_app",
        name: "Web application or MVP",
        price: "COP 6,000,000",
        currency: "",
        suffix: "from",
        description: "For digitizing a process with its own users, data, and rules.",
        features: ["Functional discovery", "Responsive experience", "Basic authentication and roles", "Database", "Initial deployment"],
        exclusions: "Advanced modules, infrastructure, external providers, and ongoing support depend on scope.",
        featured: true,
      },
      {
        id: "custom",
        name: "Enterprise solution",
        price: "Custom",
        currency: "",
        suffix: "quote",
        description: "For critical processes, multiple integrations, or a phased roadmap.",
        features: ["Technical discovery", "Phased architecture", "Complex integrations", "Deployment plan", "Evolution roadmap"],
        exclusions: "Investment is defined after discovery and may be structured in phases.",
      },
    ],
    compareTitle: "What to compare beyond price",
    compare: ["Scope and inclusions", "Custom design or template", "Ownership of code and accounts", "Accessibility and testing", "Integrations and security", "Recurring costs and support"],
    noteTitle: "Before hiring",
    note:
      "Confirm currency, taxes, deliverables, revisions, ownership, support, licenses, and recurring costs in writing. SOSDEV will document these items in every proposal.",
    ctaTitle: "Get a quote based on your actual scope.",
  },
};

export const faqContentLegacy = {
  es: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas útiles antes de invertir en software.",
    description:
      "Agrupamos las preguntas por decisión, no por repetición de palabras clave. Lo que depende del alcance se responde con transparencia.",
    clusters: [
      {
        id: "proceso",
        title: "Proceso y contratación",
        items: [
          {
            q: "¿Qué incluye un proyecto profesional de desarrollo web con SOSDEV?",
            a: "Comenzamos por comprender objetivos, usuarios y restricciones. Definimos alcance y arquitectura, diseñamos la experiencia adaptable, desarrollamos e integramos, probamos y desplegamos. Los entregables, el plazo, el soporte y los costos recurrentes quedan definidos en la cotización de cada proyecto.",
          },
          {
            q: "¿Dónde puedo contratar servicios profesionales de desarrollo web cerca de mí?",
            a: "SOSDEV atiende desde Colombia por correo y WhatsApp y puede trabajar de forma remota. Antes de contratar, conviene comparar alcance, propiedad del código y las cuentas, seguridad, pruebas, soporte y costos recurrentes. No afirmamos tener oficinas fuera de Colombia.",
          },
          {
            q: "¿SOSDEV desarrolla páginas web para clientes de Perú y Paraguay?",
            a: "Podemos evaluar proyectos remotos para Colombia, Perú, Paraguay y otros mercados. El idioma, la moneda, las pasarelas de pago, los impuestos y las integraciones locales se validan durante el diagnóstico. No afirmamos presencia física ni asesoría fiscal local en Perú o Paraguay.",
          },
          {
            q: "¿Cómo saber quién desarrolló una página web?",
            a: "Revise los créditos o avisos legales y, si tiene acceso autorizado, los contratos, facturas, repositorios, usuarios del CMS y registros de despliegue. Las herramientas de detección pueden identificar tecnologías, pero no atribuyen de forma fiable la autoría; la confirmación depende del propietario o de registros contractuales.",
          },
        ],
      },
      {
        id: "ecommerce-ventas",
        title: "Ecommerce y ventas",
        items: [
          {
            q: "¿SOSDEV desarrolla tiendas online y soluciones para apoyar ventas?",
            a: "Sí. La oferta puede incluir ecommerce, landing pages orientadas a conversión, formularios, integraciones con WhatsApp o CRM y automatización comercial. El alcance depende del catálogo, pagos, envíos, inventario, roles e integraciones. No incluye gestión de publicidad ni garantiza ventas, salvo acuerdo independiente.",
          },
        ],
      },
      {
        id: "precios",
        title: "Precios y presupuesto",
        items: [
          {
            q: "¿Cuánto cuesta desarrollar una landing page, una tienda online o una aplicación web?",
            a: "Como referencias iniciales de SOSDEV: landing page desde $750.000 COP, ecommerce desde $2.500.000 COP y aplicación web o MVP desde $6.000.000 COP. Son valores orientativos, no una cotización final. El contenido, las integraciones, la complejidad y el plazo pueden modificarlos.",
          },
          {
            q: "¿Cómo comparar precios de desarrollo web para una pequeña empresa?",
            a: "Compare propuestas con el mismo alcance: diseño propio o plantilla, número de páginas, contenido, SEO técnico, accesibilidad, integraciones, pruebas, propiedad del código y las cuentas, soporte y costos recurrentes. Un precio menor no representa mejor valor si omite entregables esenciales.",
          },
        ],
      },
      {
        id: "plataformas-ia",
        title: "IA, plataformas y CMS",
        items: [
          {
            q: "¿Cómo se utiliza la IA en el desarrollo de una página web?",
            a: "La IA puede apoyar el proceso de desarrollo o incorporarse al producto mediante asistentes, búsqueda, clasificación, extracción de datos y automatizaciones. En ambos casos mantenemos revisión humana, pruebas y controles de privacidad, seguridad y costo. No prometemos precisión o resultados sin validarlos para el caso concreto.",
          },
          {
            q: "¿Cuál es la mejor plataforma para crear una página web en Colombia sin programar?",
            a: "No existe una única mejor opción. Wix, Squarespace o Webflow sirven para sitios informativos rápidos; WordPress prioriza edición y ecosistema; Shopify o WooCommerce se orientan a ecommerce; Next.js conviene cuando se necesitan rendimiento e integraciones a medida. En Colombia también importan las pasarelas, la facturación, el soporte y el costo total.",
          },
          {
            q: "¿Qué CMS conviene para un proyecto corporativo?",
            a: "WordPress ofrece autonomía editorial y un gran ecosistema, con mantenimiento continuo; Webflow combina edición visual y hosting gestionado, con dependencia de plataforma; un CMS headless con Next.js ofrece control, rendimiento y publicación multicanal, con mayor inversión inicial. Shopify y WooCommerce son alternativas cuando el núcleo es ecommerce.",
          },
        ],
      },
      {
        id: "infraestructura",
        title: "Infraestructura",
        items: [
          {
            q: "¿Qué hosting económico conviene para emprendedores?",
            a: "Un sitio informativo puede funcionar en una plataforma gestionada o un hosting compartido. Un ecommerce o aplicación debe evaluar base de datos, copias de seguridad, seguridad, soporte y tráfico. SOSDEV puede diseñar y desplegar infraestructura, pero no existe un plan propio de hosting confirmado; estos costos se cotizan aparte.",
          },
        ],
      },
    ],
    note: "Última revisión: agosto de 2026. Revisamos esta información cuando cambian los servicios, precios o plataformas mencionadas.",
    ctaTitle: "¿Su pregunta depende de un caso concreto?",
  },
  en: {
    eyebrow: "Frequently asked questions",
    title: "Useful answers before investing in software.",
    description:
      "We group questions by decision rather than keyword repetition. When an answer depends on scope, we say so clearly.",
    clusters: [
      {
        id: "process",
        title: "Process and hiring",
        items: [
          {
            q: "What does a professional web development project with SOSDEV include?",
            a: "We begin by understanding goals, users, and constraints. We define the scope and architecture, design a responsive experience, build and integrate the solution, test it, and deploy it. Deliverables, timelines, support, and recurring costs are documented in each project proposal.",
          },
          {
            q: "Where can I hire professional web development services near me?",
            a: "SOSDEV operates from Colombia and works remotely through email and WhatsApp. Before hiring a provider, compare the exact scope, ownership of code and accounts, security, testing, support, and recurring costs. We do not claim to have offices outside Colombia.",
          },
          {
            q: "Does SOSDEV build websites for clients in Peru and Paraguay?",
            a: "We can assess remote projects for clients in Colombia, Peru, Paraguay, and other markets. Language, currency, payment gateways, taxes, and local integrations are validated during discovery. We do not claim local offices or local tax advisory services in Peru or Paraguay.",
          },
          {
            q: "How can I find out who developed a website?",
            a: "Check the site credits or legal notices and, when authorized, contracts, invoices, repositories, CMS users, and deployment records. Technology-detection tools may identify the stack, but they cannot reliably identify the developer; confirmation requires the owner or contractual records.",
          },
        ],
      },
      {
        id: "ecommerce-sales",
        title: "Ecommerce and sales",
        items: [
          {
            q: "Does SOSDEV build online stores and solutions that support sales?",
            a: "Yes. The offering may include ecommerce, conversion-focused landing pages, forms, WhatsApp or CRM integrations, and sales workflow automation. Scope depends on the catalog, payments, shipping, inventory, roles, and integrations. It does not include advertising management or guarantee sales unless separately agreed.",
          },
        ],
      },
      {
        id: "pricing",
        title: "Pricing and budget",
        items: [
          {
            q: "How much does a landing page, online store, or web application cost?",
            a: "SOSDEV’s initial reference prices are landing pages from COP 750,000, ecommerce from COP 2,500,000, and web applications or MVPs from COP 6,000,000. These are indicative starting prices rather than final quotes. Content, integrations, complexity, and timelines may change them.",
          },
          {
            q: "How should a small business compare web development prices?",
            a: "Compare proposals using the same scope: custom design or template, number of pages, content, technical SEO, accessibility, integrations, testing, ownership of code and accounts, support, and recurring costs. A lower price does not offer better value when essential deliverables are excluded.",
          },
        ],
      },
      {
        id: "platforms-ai",
        title: "AI, platforms, and CMS",
        items: [
          {
            q: "How is AI used in website development?",
            a: "AI can support the development process or become part of the product through assistants, search, classification, data extraction, and automation. In both cases, we maintain human review, testing, and privacy, security, and cost controls. We do not promise accuracy or outcomes without project-specific validation.",
          },
          {
            q: "What is the best no-code website platform in Colombia?",
            a: "There is no single best platform. Wix, Squarespace, or Webflow suit quick informational sites; WordPress emphasizes editorial flexibility and ecosystem; Shopify or WooCommerce focus on ecommerce; Next.js is appropriate when custom performance and integrations are required. In Colombia, payment gateways, invoicing, support, and total cost also matter.",
          },
          {
            q: "Which CMS is best for a corporate project?",
            a: "WordPress provides editorial autonomy and a large ecosystem but requires ongoing maintenance; Webflow combines visual editing and managed hosting with platform dependency; a headless CMS with Next.js provides control, performance, and multichannel publishing at a higher initial cost. Shopify and WooCommerce are alternatives when ecommerce is the core requirement.",
          },
        ],
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        items: [
          {
            q: "Which affordable hosting option works for entrepreneurs?",
            a: "An informational website may work well on a managed platform or shared hosting. Ecommerce and web applications require evaluation of databases, backups, security, support, and traffic. SOSDEV can design and deploy infrastructure, but no proprietary hosting plan is currently confirmed; recurring costs are quoted separately.",
          },
        ],
      },
    ],
    note: "Last reviewed: August 2026. We review this information when the services, prices, or platforms mentioned change.",
    ctaTitle: "Does your question depend on a specific case?",
  },
};

export const faqContent = {
  es: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas claras sobre software y aplicaciones web.",
    description:
      "Priorizamos las preguntas que más se repiten al buscar desarrollo de software, aplicaciones web y páginas web en Medellín y Colombia. Respondemos desde el alcance real de SOSDEV, sin promesas genéricas.",
    clusters: [
      {
        id: "software-medida",
        title: "Desarrollo de software a medida",
        items: [
          {
            q: "¿Qué es el desarrollo de software a medida y cuándo conviene?",
            a: "Es la construcción de una solución alrededor de los procesos, usuarios y datos de una empresa. Conviene cuando una herramienta genérica obliga a trabajar con limitaciones, cuando hay información dispersa o cuando se necesita integrar sistemas existentes. En SOSDEV comenzamos por validar si una solución a medida realmente aporta valor antes de construirla.",
          },
          {
            q: "¿Cuánto cuesta desarrollar software a medida en Colombia?",
            a: "El costo depende de módulos, usuarios, integraciones, seguridad, datos, diseño, pruebas y operación. Nuestra referencia publicada para una aplicación web o MVP comienza en $6.000.000 COP; una solución empresarial con más alcance se cotiza después de entender el proceso y sus restricciones.",
          },
          {
            q: "¿Cuánto tiempo tarda un desarrollo de software?",
            a: "Una primera versión depende del alcance y de la disponibilidad de decisiones, contenido, accesos e integraciones. En lugar de prometer una fecha sin diagnóstico, definimos una primera entrega verificable, hitos, dependencias y criterios de aceptación en la cotización.",
          },
          {
            q: "¿Cómo es el proceso de desarrollo de software con SOSDEV?",
            a: "Comprendemos el objetivo, levantamos requisitos, priorizamos una primera versión, definimos arquitectura y experiencia, desarrollamos, probamos y desplegamos. Documentamos entregables, responsables, soporte y costos recurrentes para que la solución pueda mantenerse después de la entrega.",
          },
          {
            q: "¿Quién conserva el código, las cuentas y los datos?",
            a: "La propiedad y los accesos deben quedar explícitos en la cotización y el acuerdo comercial. Recomendamos que la empresa conserve sus dominios, cuentas de nube, repositorios y datos, con permisos administrados de forma segura. SOSDEV no presenta una transferencia de propiedad como incluida si no se acuerda expresamente.",
          },
        ],
      },
      {
        id: "aplicaciones-web",
        title: "Aplicaciones web",
        items: [
          {
            q: "¿Qué diferencia hay entre una página web y una aplicación web?",
            a: "Una página web comunica información y orienta al visitante; una aplicación web permite iniciar sesión, gestionar datos, ejecutar procesos o trabajar con roles. SOSDEV puede evaluar desde una landing page hasta un panel, portal, cotizador o MVP según el problema que deba resolver.",
          },
          {
            q: "¿Pueden desarrollar una aplicación web para una empresa?",
            a: "Sí. Podemos evaluar portales, paneles, herramientas internas, formularios guiados, cotizadores y flujos conectados con sistemas existentes. Primero definimos usuarios, permisos, datos, integraciones y operación para evitar construir funcionalidades que no resuelvan una necesidad concreta.",
          },
          {
            q: "¿Una aplicación web funciona en celular y computador?",
            a: "Diseñamos interfaces responsivas para los tamaños de pantalla definidos en el alcance. Si la operación requiere capacidades específicas del dispositivo, notificaciones avanzadas o trabajo sin conexión, evaluamos una PWA o una aplicación móvil como una decisión separada.",
          },
          {
            q: "¿Pueden integrar una aplicación web con CRM, ERP, pagos o WhatsApp?",
            a: "Podemos evaluar integraciones mediante APIs, webhooks o conectores disponibles. La viabilidad depende de la documentación, límites, permisos, costos y políticas de cada proveedor. WhatsApp, CRM, pagos, inventario y facturación se especifican por separado en la cotización.",
          },
          {
            q: "¿Qué seguridad necesita una aplicación web?",
            a: "Como mínimo se deben considerar autenticación, autorización por roles, validación de entradas, protección de secretos, copias de seguridad, registros, actualizaciones y manejo responsable de datos personales. La profundidad se define según el riesgo y el tipo de información; no afirmamos cumplimiento legal o certificación sin una evaluación específica.",
          },
        ],
      },
      {
        id: "medellin-colombia",
        title: "Páginas web en Medellín y Colombia",
        items: [
          {
            q: "¿Dónde contratar desarrollo de software o páginas web en Medellín?",
            a: "SOSDEV opera desde Colombia y atiende de forma remota por correo y WhatsApp. Para elegir proveedor, compare alcance, experiencia demostrable, acceso a cuentas, soporte, seguridad, rendimiento y costos recurrentes, no solo la ubicación o el precio inicial.",
          },
          {
            q: "¿SOSDEV desarrolla páginas web para negocios de Medellín?",
            a: "Sí, podemos evaluar páginas corporativas, landings, ecommerce y aplicaciones para empresas de Medellín y otras ciudades. La estrategia local debe incluir la información real del negocio, zonas atendidas, contacto, oferta y medición; no creamos una dirección física ficticia ni garantizamos posiciones.",
          },
          {
            q: "¿Cuánto cuesta una página web profesional en Medellín?",
            a: "Nuestra referencia para una landing page comienza en $750.000 COP y una tienda online en $2.500.000 COP. Son valores iniciales y pueden cambiar por contenido, páginas, diseño, catálogo, pagos, integraciones, SEO, soporte e impuestos. La cotización final requiere revisar el alcance.",
          },
          {
            q: "¿Pueden trabajar con clientes de Perú, Paraguay u otros países?",
            a: "Podemos evaluar trabajo remoto para Colombia, Perú, Paraguay y otros mercados. Antes de cotizar validamos idioma, moneda, impuestos, pasarelas, envíos, privacidad, horarios e integraciones locales. No afirmamos oficinas ni asesoría fiscal fuera de Colombia.",
          },
        ],
      },
      {
        id: "ecommerce-ventas",
        title: "Ecommerce y ventas",
        items: [
          {
            q: "¿Cuánto cuesta crear una tienda online en Colombia?",
            a: "Nuestra referencia de entrada para ecommerce es $2.500.000 COP. El valor puede cambiar por cantidad y variantes de productos, pagos, inventario, envíos, impuestos, facturación, migración, roles, diseño e integraciones. Comparamos plataformas y alcance antes de recomendar una implementación.",
          },
          {
            q: "¿Qué necesita una tienda online para vender?",
            a: "Necesita catálogo, información de producto, carrito, checkout, medios de pago, reglas de envío, inventario, políticas, atención y medición. También hay que definir quién administra pedidos, devoluciones, contenido y soporte. SOSDEV puede organizar estos flujos, pero la operación comercial sigue siendo responsabilidad de la empresa.",
          },
          {
            q: "¿Pueden conectar ecommerce con pagos, inventario y facturación?",
            a: "Sí, podemos evaluar las conexiones disponibles para el país y la plataforma elegida. Confirmamos previamente comisiones, credenciales, webhooks, impuestos, facturación, inventario y límites del proveedor; ninguna pasarela o integración se considera incluida sin especificarla.",
          },
          {
            q: "¿Una página web garantiza más ventas?",
            a: "No. Una solución puede mejorar claridad, velocidad, confianza y seguimiento, pero las ventas dependen también de oferta, precio, tráfico, atención, logística y mercado. No prometemos resultados comerciales ni gestionamos publicidad salvo un acuerdo independiente.",
          },
        ],
      },
      {
        id: "ia-plataformas",
        title: "IA, plataformas y decisiones técnicas",
        items: [
          {
            q: "¿Se puede usar inteligencia artificial en el desarrollo de software?",
            a: "Sí. La IA puede apoyar análisis, prototipos, búsqueda, clasificación, extracción de datos, asistentes y automatizaciones. Mantenemos revisión humana, pruebas, controles de privacidad y límites de costo; no presentamos una salida generada por IA como correcta sin validarla.",
          },
          {
            q: "¿Qué plataforma es mejor para crear una página web sin programar?",
            a: "Depende del objetivo. Wix, Squarespace o Webflow pueden servir para sitios informativos rápidos; WordPress ofrece un ecosistema editorial amplio; Shopify o WooCommerce se enfocan en ecommerce; Next.js conviene cuando se necesitan rendimiento e integraciones a medida. Comparamos costo total, propiedad, mantenimiento y escalabilidad.",
          },
          {
            q: "¿Qué tecnología recomienda SOSDEV para una aplicación web?",
            a: "No imponemos una tecnología por moda. Elegimos según requisitos, equipo que mantendrá la solución, integraciones, rendimiento, seguridad, presupuesto y evolución esperada. Para una solución concreta documentamos la arquitectura y sus compromisos antes de implementarla.",
          },
          {
            q: "¿Pueden migrar una página o aplicación existente?",
            a: "Podemos evaluar migraciones de contenido, CMS, datos, dominios o componentes. Antes de mover información revisamos dependencias, copias de seguridad, redirecciones, integraciones, permisos y plan de reversa. No iniciamos una migración sin acceso autorizado y respaldo verificable.",
          },
        ],
      },
      {
        id: "seo-rendimiento-operacion",
        title: "SEO, rendimiento y operación",
        items: [
          {
            q: "¿El desarrollo de una página web incluye SEO?",
            a: "Incluimos fundamentos técnicos según el alcance: estructura rastreable, títulos, descripciones, contenido claro, enlaces internos, datos estructurados cuando aplican, sitemap y rendimiento. El posicionamiento no se puede garantizar y requiere contenido útil, autoridad, medición y trabajo continuo.",
          },
          {
            q: "¿Cómo aparecer en Google y en respuestas de inteligencia artificial?",
            a: "Google recomienda contenido útil, confiable y creado para personas, además de una estructura rastreable y una buena experiencia. SOSDEV puede preparar la base técnica y el contenido de servicios, pero la indexación, las respuestas generativas y las posiciones no están garantizadas; se deben medir con Search Console y analítica.",
          },
          {
            q: "¿Cómo hacen una página web rápida?",
            a: "Reducimos dependencias innecesarias, optimizamos imágenes, cuidamos el JavaScript, usamos renderizado apropiado, medimos en dispositivos reales y revisamos Core Web Vitals. La velocidad final también depende del contenido, hosting, terceros, red y cambios posteriores.",
          },
          {
            q: "¿Quién mantiene la página o aplicación después de publicarla?",
            a: "Definimos en cada cotización quién administra contenido, actualizaciones, infraestructura, copias, monitoreo, incidentes y nuevas funcionalidades. SOSDEV puede evaluar soporte y mantenimiento, pero no se entiende incluido si no aparece explícitamente en el acuerdo.",
          },
          {
            q: "¿Qué hosting, dominio y certificado necesita una página web?",
            a: "Toda solución pública necesita un dominio, alojamiento y HTTPS; una aplicación puede requerir además base de datos, almacenamiento, correo, copias y monitoreo. Podemos diseñar y desplegar la infraestructura, pero los servicios recurrentes y sus cuentas deben quedar identificados y presupuestados.",
          },
        ],
      },
    ],
    note:
      "Investigación y revisión: 14 de agosto de 2026. Las preguntas se agruparon por intención a partir de resultados actuales sobre desarrollo de software, aplicaciones web, páginas web en Medellín, precios, plataformas, SEO y operación. Las consultas y respuestas deben revisarse cuando cambien los servicios o el mercado.",
    ctaTitle: "¿Su caso necesita una respuesta más precisa?",
  },
  en: {
    eyebrow: "Frequently asked questions",
    title: "Clear answers about software and web applications.",
    description:
      "We prioritize recurring questions about software development, web applications, and websites in Medellin and Colombia. We answer from SOSDEV's actual scope, without generic promises.",
    clusters: [
      {
        id: "custom-software",
        title: "Custom software development",
        items: [
          {
            q: "What is custom software development and when is it useful?",
            a: "It is building a solution around a company's processes, users, and data. It makes sense when generic tools create limitations, information is scattered, or existing systems must work together. At SOSDEV we first validate whether custom software creates enough value before building it.",
          },
          {
            q: "How much does custom software development cost in Colombia?",
            a: "Cost depends on modules, users, integrations, security, data, design, testing, and operations. Our published starting reference for a web application or MVP is COP 6,000,000; larger business solutions are quoted after we understand the process and constraints.",
          },
          {
            q: "How long does software development take?",
            a: "A first release depends on scope and on the availability of decisions, content, access, and integrations. Instead of promising a date without discovery, we define a verifiable first release, milestones, dependencies, and acceptance criteria in the proposal.",
          },
          {
            q: "What is SOSDEV's software development process?",
            a: "We understand the goal, gather requirements, prioritize a first release, define architecture and experience, build, test, and deploy. Deliverables, responsibilities, support, and recurring costs are documented so the solution can be maintained after launch.",
          },
          {
            q: "Who owns the code, accounts, and data?",
            a: "Ownership and access should be explicit in the commercial agreement. We recommend that the business keeps its domains, cloud accounts, repositories, and data, with permissions managed securely. SOSDEV does not describe ownership transfer as included unless it is expressly agreed.",
          },
        ],
      },
      {
        id: "web-applications",
        title: "Web applications",
        items: [
          {
            q: "What is the difference between a website and a web application?",
            a: "A website communicates information and guides visitors; a web application lets people sign in, manage data, run processes, or work with roles. SOSDEV can assess anything from a landing page to a dashboard, portal, quote tool, or MVP based on the problem to solve.",
          },
          {
            q: "Can you develop a web application for a business?",
            a: "Yes. We can assess portals, dashboards, internal tools, guided forms, quote tools, and workflows connected to existing systems. We first define users, permissions, data, integrations, and operations so the build addresses a real need.",
          },
          {
            q: "Will a web application work on phones and computers?",
            a: "We design responsive interfaces for the screen sizes included in scope. If the operation needs device-specific capabilities, advanced notifications, or offline work, we assess a PWA or mobile application as a separate decision.",
          },
          {
            q: "Can you integrate a web application with a CRM, ERP, payments, or WhatsApp?",
            a: "We can assess integrations through APIs, webhooks, or available connectors. Feasibility depends on each provider's documentation, limits, permissions, costs, and policies. WhatsApp, CRM, payments, inventory, and invoicing are scoped separately.",
          },
          {
            q: "What security does a web application need?",
            a: "At minimum, consider authentication, role authorization, input validation, secret protection, backups, logs, updates, and responsible handling of personal data. Depth depends on risk and information type; we do not claim legal compliance or certification without a specific assessment.",
          },
        ],
      },
      {
        id: "medellin-colombia",
        title: "Websites in Medellin and Colombia",
        items: [
          {
            q: "Where can I hire software or web development in Medellin?",
            a: "SOSDEV operates from Colombia and works remotely by email and WhatsApp. When choosing a provider, compare scope, demonstrated experience, account access, support, security, performance, and recurring costs, not just location or the initial price.",
          },
          {
            q: "Does SOSDEV build websites for Medellin businesses?",
            a: "Yes, we can assess corporate websites, landing pages, ecommerce, and applications for businesses in Medellin and other cities. Local strategy should use real business information, service areas, contact details, offer, and measurement; we do not create a fictional physical address or guarantee rankings.",
          },
          {
            q: "How much does a professional website cost in Medellin?",
            a: "Our starting reference for a landing page is COP 750,000 and for an online store COP 2,500,000. Content, pages, design, catalog, payments, integrations, SEO, support, and taxes can change the value. A final quote requires reviewing scope.",
          },
          {
            q: "Can you work with clients in Peru, Paraguay, or other countries?",
            a: "We can assess remote work for Colombia, Peru, Paraguay, and other markets. Before quoting, we validate language, currency, taxes, gateways, shipping, privacy, time zones, and local integrations. We do not claim offices or tax advice outside Colombia.",
          },
        ],
      },
      {
        id: "ecommerce-sales",
        title: "Ecommerce and sales",
        items: [
          {
            q: "How much does it cost to create an online store in Colombia?",
            a: "Our ecommerce starting reference is COP 2,500,000. Product quantity and variants, payments, inventory, shipping, taxes, invoicing, migration, roles, design, and integrations can change the value. We compare platforms and scope before recommending an implementation.",
          },
          {
            q: "What does an online store need to sell?",
            a: "It needs a catalog, product information, cart, checkout, payment methods, shipping rules, inventory, policies, support, and measurement. It is also important to define who manages orders, returns, content, and support. SOSDEV can organize these flows, while commercial operations remain the business's responsibility.",
          },
          {
            q: "Can you connect ecommerce with payments, inventory, and invoicing?",
            a: "We can assess available connections for the selected country and platform. We confirm commissions, credentials, webhooks, taxes, invoicing, inventory, and provider limits first; no gateway or integration is included unless specified.",
          },
          {
            q: "Does a website guarantee more sales?",
            a: "No. A solution can improve clarity, speed, trust, and follow-up, but sales also depend on the offer, price, traffic, service, logistics, and market. We do not promise commercial results or manage advertising unless separately agreed.",
          },
        ],
      },
      {
        id: "ai-platforms",
        title: "AI, platforms, and technical choices",
        items: [
          {
            q: "Can artificial intelligence be used in software development?",
            a: "Yes. AI can support analysis, prototypes, search, classification, data extraction, assistants, and automation. We keep human review, testing, privacy controls, and cost limits; we do not treat generated output as correct without validation.",
          },
          {
            q: "What is the best no-code platform for a website?",
            a: "It depends on the goal. Wix, Squarespace, or Webflow can suit quick informational sites; WordPress offers a broad editorial ecosystem; Shopify or WooCommerce focus on ecommerce; Next.js fits custom performance and integrations. We compare total cost, ownership, maintenance, and scalability.",
          },
          {
            q: "Which technology does SOSDEV recommend for a web application?",
            a: "We do not impose technology because it is fashionable. We choose according to requirements, the team maintaining it, integrations, performance, security, budget, and expected evolution. For a specific solution, we document architecture and trade-offs before implementation.",
          },
          {
            q: "Can you migrate an existing website or application?",
            a: "We can assess migrations of content, CMS, data, domains, or components. Before moving information we review dependencies, backups, redirects, integrations, permissions, and a rollback plan. We do not start without authorized access and a verifiable backup.",
          },
        ],
      },
      {
        id: "seo-performance-operations",
        title: "SEO, performance, and operations",
        items: [
          {
            q: "Does web development include SEO?",
            a: "We include technical foundations according to scope: crawlable structure, titles, descriptions, clear content, internal links, applicable structured data, sitemap, and performance. Rankings cannot be guaranteed and require useful content, authority, measurement, and ongoing work.",
          },
          {
            q: "How can a website appear in Google and AI answers?",
            a: "Google recommends useful, trustworthy, people-first content, a crawlable structure, and a good page experience. SOSDEV can prepare the technical foundation and service content, but indexing, generative answers, and rankings are not guaranteed; they should be measured with Search Console and analytics.",
          },
          {
            q: "How do you make a website fast?",
            a: "We reduce unnecessary dependencies, optimize images, control JavaScript, use appropriate rendering, measure on real devices, and review Core Web Vitals. Final speed also depends on content, hosting, third parties, network, and later changes.",
          },
          {
            q: "Who maintains the website or application after launch?",
            a: "Each quote defines who manages content, updates, infrastructure, backups, monitoring, incidents, and new features. SOSDEV can assess support and maintenance, but they are not included unless explicitly stated.",
          },
          {
            q: "What hosting, domain, and certificate does a website need?",
            a: "Every public solution needs a domain, hosting, and HTTPS; an application may also need a database, storage, email, backups, and monitoring. We can design and deploy infrastructure, while recurring services and account ownership should be identified and budgeted.",
          },
        ],
      },
    ],
    note:
      "Research and review: August 14, 2026. Questions were grouped by intent from current results about software development, web applications, websites in Medellin, pricing, platforms, SEO, and operations. Review this content when services or the market change.",
    ctaTitle: "Does your case need a more precise answer?",
  },
};

export const contactContent = {
  es: {
    eyebrow: "Solicitar cotización",
    title: "Cuéntenos el reto antes de hablar de una solución.",
    description:
      "Comparta el contexto, el resultado esperado y las herramientas actuales. Nuestro equipo revisará la solicitud y responderá por el canal indicado.",
    directTitle: "También puede escribirnos directamente.",
    directCopy:
      "El formulario organiza mejor el contexto; WhatsApp y correo siguen disponibles para una conversación inicial.",
    emailLabel: "Correo oficial",
    phoneLabel: "Llamada directa",
    whatsappLabel: "Conversar por WhatsApp",
    locationLabel: "Base de operación",
    location: "Colombia · Servicio remoto",
    privacyNote:
      "Usaremos los datos únicamente para responder la solicitud. La política formal de tratamiento de datos está pendiente de publicación.",
  },
  en: {
    eyebrow: "Request a quote",
    title: "Tell us about the challenge before discussing a solution.",
    description:
      "Share the context, expected outcome, and current tools. Our team will review the request and reply through the selected channel.",
    directTitle: "You can also contact us directly.",
    directCopy:
      "The form helps organize context; WhatsApp and email remain available for an initial conversation.",
    emailLabel: "Official email",
    phoneLabel: "Direct call",
    whatsappLabel: "Chat on WhatsApp",
    locationLabel: "Operating base",
    location: "Colombia · Remote service",
    privacyNote:
      "We will only use the data to respond to this request. The formal data processing policy is pending publication.",
  },
};

export const formContent = {
  es: {
    kicker: "Formulario seguro",
    title: "Describa su necesidad.",
    required: "Los campos marcados con * son obligatorios.",
    name: "Nombre *",
    namePlaceholder: "Nombre completo",
    company: "Empresa",
    companyPlaceholder: "Nombre de la empresa",
    email: "Correo electrónico *",
    phone: "Teléfono",
    service: "Servicio de interés *",
    select: "Seleccione una opción",
    message: "Mensaje *",
    messagePlaceholder: "Contexto, problema y resultado esperado.",
    consent: "Autorizo a SOSDEV a utilizar estos datos exclusivamente para responder esta solicitud. *",
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    loadingMessage: "Enviando su mensaje de forma segura…",
    success: "Mensaje enviado. Nuestro equipo se pondrá en contacto.",
    errors: {
      INVALID_FORM: "Revise los campos obligatorios e intente nuevamente.",
      RATE_LIMITED: "Se alcanzó el límite temporal. Puede escribirnos por WhatsApp.",
      TOO_LARGE: "El mensaje supera el tamaño permitido.",
      SMTP_UNAVAILABLE: "El canal de correo no está disponible. Puede escribirnos por WhatsApp.",
      SEND_FAILED: "No fue posible enviar el mensaje. Puede escribirnos por WhatsApp.",
      NETWORK: "No hay conexión con el servidor. Revise su red e intente nuevamente.",
    },
    services: [
      ["landing", "Landing page"],
      ["ecommerce", "Ecommerce"],
      ["web_app", "Aplicación web o MVP"],
      ["sales_automation", "Sistema para ventas"],
      ["automation_ai", "Automatización e IA"],
      ["infrastructure", "Infraestructura digital"],
      ["consulting", "Consultoría tecnológica"],
      ["other", "Otra necesidad"],
    ],
  },
  en: {
    kicker: "Secure form",
    title: "Describe what you need.",
    required: "Fields marked with * are required.",
    name: "Name *",
    namePlaceholder: "Full name",
    company: "Company",
    companyPlaceholder: "Company name",
    email: "Email address *",
    phone: "Phone",
    service: "Service of interest *",
    select: "Select an option",
    message: "Message *",
    messagePlaceholder: "Context, problem, and expected outcome.",
    consent: "I authorize SOSDEV to use this data solely to respond to this request. *",
    submit: "Send request",
    submitting: "Sending…",
    loadingMessage: "Sending your message securely…",
    success: "Message sent. Our team will get in touch.",
    errors: {
      INVALID_FORM: "Review the required fields and try again.",
      RATE_LIMITED: "The temporary limit has been reached. You can contact us on WhatsApp.",
      TOO_LARGE: "The message exceeds the allowed size.",
      SMTP_UNAVAILABLE: "The email channel is unavailable. You can contact us on WhatsApp.",
      SEND_FAILED: "The message could not be sent. You can contact us on WhatsApp.",
      NETWORK: "The server could not be reached. Check your connection and try again.",
    },
    services: [
      ["landing", "Landing page"],
      ["ecommerce", "Ecommerce"],
      ["web_app", "Web application or MVP"],
      ["sales_automation", "Sales system"],
      ["automation_ai", "Automation and AI"],
      ["infrastructure", "Digital infrastructure"],
      ["consulting", "Technology consulting"],
      ["other", "Another need"],
    ],
  },
};
