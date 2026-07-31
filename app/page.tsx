import ContactForm from "./ContactForm";
import ImmersiveExperience from "./ImmersiveExperience";

const capabilities = [
  "React & Next.js",
  "Automatización con IA",
  "APIs & datos",
  "Docker & Cloud",
];

const services = [
  {
    number: "01",
    symbol: "⌘",
    title: "Aplicaciones web a medida",
    description:
      "Diseñamos plataformas claras, rápidas y escalables para centralizar información y transformar procesos esenciales.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    symbol: "✦",
    title: "Automatización e IA",
    description:
      "Conectamos herramientas, datos e inteligencia artificial para reducir tareas repetitivas y acelerar decisiones.",
    tags: ["n8n", "APIs", "OpenAI"],
  },
  {
    number: "03",
    symbol: "⬡",
    title: "Infraestructura digital",
    description:
      "Construimos entornos seguros y mantenibles para desplegar servicios con estabilidad, trazabilidad y control.",
    tags: ["Docker", "Cloudflare", "Linux"],
  },
];

const principles = [
  {
    number: "01",
    title: "Comprendemos",
    copy: "Analizamos el contexto, los usuarios y las restricciones antes de definir la solución.",
  },
  {
    number: "02",
    title: "Diseñamos",
    copy: "Convertimos la complejidad en una experiencia clara, medible y preparada para crecer.",
  },
  {
    number: "03",
    title: "Construimos",
    copy: "Desarrollamos de forma incremental, documentada y conectada con la operación real.",
  },
  {
    number: "04",
    title: "Evolucionamos",
    copy: "Observamos el uso, medimos resultados y mejoramos continuamente cada solución.",
  },
];

const toolbox = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "n8n",
  "Git",
  "Cloudflare",
];

const whatsappUrl =
  "https://wa.me/573248360548?text=Hola%2C%20queremos%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20SOSDEV.";

export default function Home() {
  return (
    <main>
      <ImmersiveExperience />

      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="SOSDEV, volver al inicio">
          <span className="brand-mark">S</span>
          <span className="brand-name">SOSDEV</span>
          <span className="brand-dot">.</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Conversemos <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            Medellín · Colombia · Soluciones digitales
          </div>

          <h1>
            Creamos sistemas digitales que hacen
            <span> avanzar su operación.</span>
          </h1>

          <p className="hero-lead">
            En SOSDEV unimos desarrollo web, automatización e inteligencia
            artificial para convertir procesos complejos en soluciones simples,
            conectadas y preparadas para crecer.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">
              Iniciar una conversación <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#servicios">
              Conocer lo que hacemos
            </a>
          </div>

          <div className="capability-list" aria-label="Áreas de experiencia">
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay" aria-hidden="true">
          <div className="system-stage">
            <div className="system-grid" />
            <div className="core-halo halo-one" />
            <div className="core-halo halo-two" />
            <div className="core-orbit orbit-one">
              <span />
            </div>
            <div className="core-orbit orbit-two">
              <span />
            </div>

            <div className="core-module">
              <span className="core-overline">SOSDEV / DIGITAL SYSTEMS</span>
              <div className="core-symbol">S</div>
              <strong>Ideas conectadas.</strong>
              <small>Soluciones en movimiento.</small>
              <div className="core-signal">
                <i />
                Sistema activo
              </div>
            </div>

            <div className="signal-card signal-web">
              <span>01</span>
              <strong>Web</strong>
              <small>Experiencias claras</small>
            </div>
            <div className="signal-card signal-ai">
              <span>02</span>
              <strong>IA</strong>
              <small>Operación inteligente</small>
            </div>
            <div className="signal-card signal-cloud">
              <span>03</span>
              <strong>Cloud</strong>
              <small>Escala confiable</small>
            </div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Explore</span>
          <i />
        </div>
      </section>

      <section className="marquee-shell" aria-label="Especialidades">
        <div className="marquee-content">
          <span>Aplicaciones web</span><i>✦</i>
          <span>Automatización</span><i>✦</i>
          <span>Inteligencia artificial</span><i>✦</i>
          <span>Infraestructura</span><i>✦</i>
          <span>Diseño de producto</span>
        </div>
      </section>

      <section className="content-section section-shell" id="servicios">
        <div className="section-heading reveal">
          <div>
            <span className="section-kicker">Lo que hacemos</span>
            <h2>Tecnología con propósito, de la estrategia a producción.</h2>
          </div>
          <p>
            Integramos diseño, desarrollo e infraestructura para resolver el
            problema completo y generar valor sostenible.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className="service-card glass-card reveal"
              style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
              key={service.number}
            >
              <div className="card-number">{service.number}</div>
              <div className="service-icon" aria-hidden="true">
                {service.symbol}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-row">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="immersive-statement">
        <div className="statement-depth" aria-hidden="true">
          <span>SOSDEV</span>
          <span>SOSDEV</span>
          <span>SOSDEV</span>
        </div>
        <div className="section-shell statement-content reveal">
          <span className="section-kicker">Nuestro diferencial</span>
          <p>
            No entregamos piezas aisladas.
            <strong> Construimos sistemas que conectan personas, datos y decisiones.</strong>
          </p>
          <div className="statement-metrics">
            <div>
              <span>01</span>
              <p>Visión integral</p>
            </div>
            <div>
              <span>02</span>
              <p>Ejecución clara</p>
            </div>
            <div>
              <span>03</span>
              <p>Evolución continua</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="nosotros">
        <div className="about-grid">
          <div className="about-copy reveal">
            <span className="section-kicker">Sobre SOSDEV</span>
            <h2>Entendemos el código, pero comenzamos por el proceso.</h2>
            <p>
              Somos una empresa de desarrollo de software y automatización.
              Conectamos la operación diaria con soluciones digitales fáciles de
              usar, medibles y preparadas para crecer.
            </p>
            <p>
              Trabajamos con una visión integral que reúne experiencia de
              usuario, datos, integraciones, servidores e inteligencia
              artificial. Así detectamos cuellos de botella y los convertimos
              en oportunidades de evolución.
            </p>
            <a className="text-link" href="#contacto">
              Conocer cómo podemos ayudar <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-panel glass-card reveal reveal-delay">
            <div className="about-profile">
              <div className="profile-monogram">SOS</div>
              <div>
                <strong>SOSDEV</strong>
                <span>DESARROLLO · AUTOMATIZACIÓN · INFRAESTRUCTURA</span>
              </div>
            </div>
            <div className="principles">
              <div>
                <span>01</span>
                <p>Primero comprendemos, después construimos.</p>
              </div>
              <div>
                <span>02</span>
                <p>Diseñamos menos fricción para las personas y la operación.</p>
              </div>
              <div>
                <span>03</span>
                <p>Entregamos soluciones documentadas, seguras y escalables.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="toolbox reveal">
          <span className="toolbox-label">Tecnologías</span>
          <div>
            {toolbox.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section process-section" id="proceso">
        <div className="section-shell">
          <div className="section-heading process-heading reveal">
            <div>
              <span className="section-kicker">Nuestra forma de trabajo</span>
              <h2>Un proceso claro para avanzar sin improvisaciones.</h2>
            </div>
          </div>
          <div className="process-grid">
            {principles.map((principle, index) => (
              <article
                className="reveal"
                style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                key={principle.number}
              >
                <span>{principle.number} / {principle.title}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contacto">
        <div className="contact-heading reveal">
          <span className="section-kicker">Hablemos</span>
          <h2>Convirtamos su próximo reto en una solución que avance.</h2>
          <p>
            Cuéntenos qué necesita mejorar, automatizar o conectar. Nuestro
            equipo responderá por el canal que prefiera.
          </p>
        </div>

        <div className="contact-layout">
          <ContactForm />

          <aside className="contact-channels reveal reveal-delay" aria-label="Canales de contacto directo">
            <span className="channel-kicker">Contacto directo</span>
            <h3>Estamos a un mensaje de distancia.</h3>
            <p>
              Escríbanos directamente o comparta los detalles mediante el
              formulario.
            </p>

            <a className="channel-card channel-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="channel-icon">W</span>
              <span>
                <small>WhatsApp</small>
                <strong>+57 324 836 0548</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>

            <a className="channel-card" href="mailto:contacto@sosdev.com.co">
              <span className="channel-icon">@</span>
              <span>
                <small>Correo oficial</small>
                <strong>contacto@sosdev.com.co</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>

            <a className="channel-card" href="tel:+573248360548">
              <span className="channel-icon">T</span>
              <span>
                <small>Llamada directa</small>
                <strong>+57 324 836 0548</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>

            <div className="response-note">
              <span className="status-dot" />
              Respondemos en el menor tiempo posible.
            </div>
          </aside>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#inicio" aria-label="SOSDEV, volver al inicio">
          <span className="brand-mark">S</span>
          <span className="brand-name">SOSDEV</span>
          <span className="brand-dot">.</span>
        </a>
        <p>Desarrollo web, automatización e IA desde Colombia para el mundo.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar con SOSDEV por WhatsApp"
      >
        <span>W</span>
        <strong>WhatsApp</strong>
      </a>
    </main>
  );
}
