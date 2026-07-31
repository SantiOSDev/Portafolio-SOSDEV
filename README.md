# SOSDEV — Sitio corporativo

Sitio corporativo de SOSDEV desarrollado con Next.js. Incluye una experiencia
visual inmersiva, formulario de contacto con envío mediante SMTP y canales de
comunicación directa.

## Requisitos

- Node.js 22.13 o superior
- npm

## Editar y ejecutar

```bash
npm install
npm run dev
```

Cree primero un archivo `.env.local` tomando `.env.example` como referencia y
complete los datos del servidor SMTP:

```bash
SMTP_HOST=smtp.su-proveedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contacto@sosdev.com.co
SMTP_PASS=clave_de_aplicacion
SMTP_FROM="SOSDEV Web <contacto@sosdev.com.co>"
CONTACT_TO=contacto@sosdev.com.co
```

Después ejecute:

```bash
npm run dev
```

Abre `http://localhost:3000`. Los archivos principales están en:

- `app/page.tsx`: contenido y estructura de la página
- `app/globals.css`: diseño, colores y adaptación móvil
- `app/ContactForm.tsx`: formulario de contacto
- `app/api/contact/route.ts`: validación y envío SMTP
- `app/layout.tsx`: título, descripción y configuración general
- `public/`: imágenes e iconos

## Comprobar la versión de producción

```bash
npm run build
npm start
```

La aplicación necesita un servidor Node.js en producción porque el envío SMTP
se realiza de forma privada desde el backend.

## Publicar

### Servidor propio con Docker

```bash
docker build -t sosdev-profesional .
docker run --rm --env-file .env.local -p 8080:3000 sosdev-profesional
```

El sitio quedará disponible en `http://localhost:8080`.

Si se publica detrás de Traefik, el servicio interno debe apuntar al puerto
`3000`. Las variables SMTP deben configurarse en el entorno del contenedor y
nunca incluirse en la imagen.

## Nota

Esta copia no contiene credenciales. Los cambios realizados aquí no modifican
automáticamente una versión publicada.
