# SOSDEV — Sitio corporativo

Sitio corporativo bilingüe de SOSDEV construido con Next.js 16. Incluye páginas
de servicios, ecommerce, ventas, automatización, precios, FAQ y contacto;
tema claro/oscuro; experiencia visual inmersiva; SEO técnico; y envío privado
del formulario mediante SMTP.

## Requisitos

- Node.js 22.13 o superior
- npm
- Un servidor SMTP autorizado para el remitente configurado

## Ejecutar localmente

```bash
npm install
npm run dev
```

En Windows PowerShell puede usar `npm.cmd` si la política de ejecución bloquea
el wrapper de npm.

La raíz redirige a `http://localhost:3000/es`. Las variantes principales son:

- `/es` y `/en`
- `/es/servicios` y `/en/services`
- `/es/ecommerce` y `/en/ecommerce`
- `/es/ventas` y `/en/sales`
- `/es/automatizaciones` y `/en/automations`
- `/es/precios` y `/en/pricing`
- `/es/preguntas-frecuentes` y `/en/faq`
- `/es/contacto` y `/en/contact`

## Configurar el formulario

Copie `.env.example` como `.env.local` y complete las credenciales en su equipo.
Nunca exponga `SMTP_PASS` en código cliente, Git, capturas o conversaciones.

```bash
SMTP_HOST=smtp.su-proveedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario_smtp
SMTP_PASS=clave_o_token
SMTP_FROM="SOSDEV Web <contacto@sosdev.com.co>"
CONTACT_TO=contacto@sosdev.com.co
```

Use `SMTP_SECURE=true` para TLS implícito, normalmente en el puerto 465. Para
hosts adicionales de staging puede definir `CONTACT_ALLOWED_ORIGINS` con una
lista separada por comas. `sosdev.com.co`, `www.sosdev.com.co`, `localhost:3000`
y `127.0.0.1:3000` ya se contemplan según el entorno.

Cloudflare Email Routing recibe y reenvía correo, pero no entrega por sí solo
credenciales SMTP salientes. El formulario necesita Cloudflare Email Sending,
un relay propio o un proveedor transaccional compatible.

## Estructura principal

- `app/[locale]/`: layout y páginas estáticas localizadas.
- `app/components/`: navbar, páginas, formulario, footer y experiencia visual.
- `app/content.ts`: contenido tipado completo en español e inglés.
- `app/site-config.ts`: idiomas, rutas y datos públicos de contacto.
- `app/api/contact/route.ts`: validación, controles antiabuso y envío SMTP.
- `app/api/health/route.ts`: healthcheck sin dependencia de SMTP.
- `app/robots.ts`, `app/sitemap.ts`: rastreo e indexación.
- `app/globals.css`: tokens de tema y diseño responsive.
- `public/`: favicon y tarjeta social.

## Verificación

```bash
npm run lint
npm run build
npm start
```

La compilación genera 16 páginas localizadas como HTML estático. Las rutas de
contacto y salud permanecen dinámicas en el servidor.

## Docker

```bash
docker build -t sosdev-profesional .
docker run --rm --env-file .env.local -p 8080:3000 sosdev-profesional
```

La imagen usa la salida `standalone`, ejecuta Next.js como usuario no root y
comprueba `/api/health`. Detrás de Traefik, enrute el servicio al puerto interno
3000; no es necesario publicar ese puerto al host cuando ambos comparten una
red Docker.

## Publicación pendiente

El código local no actualiza automáticamente el sitio público. Antes de
publicar, valide el SMTP de extremo a extremo, políticas legales, analítica,
Search Console y variables reales del contenedor.
