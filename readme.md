# Página Web — Adrián Cerón López, Abogado

Sitio web profesional de una sola página (landing page) para el Lic. Adrián Cerón López, recién egresado de la Licenciatura en Derecho.

---

## Archivos del proyecto

```
pagina ceron/
├── index.html                                    # Estructura HTML
├── styles.css                                    # Estilos CSS
├── script.js                                     # Lógica JS (menú y formulario)
├── WhatsApp Image 2026-03-11 at 12.42.47 PM.jpeg # Foto de perfil
└── cedula profecional Adrian Ceron.pdf           # Cédula profesional
```

---

## Secciones de la página

| Sección | Descripción |
|---|---|
| **Hero** | Nombre, título y botón de contacto directo por WhatsApp |
| **Sobre mí** | Foto, presentación, chips de especialidad y cédula profesional |
| **Servicios** | 6 tarjetas: Familiar, Civil, Penal, Laboral, Preventiva, Inmobiliario |
| **¿Por qué yo?** | 4 valores: atención, transparencia, comunicación, ética |
| **Contacto** | Botón WhatsApp + formulario que genera mensaje pre-llenado |

---

## Cómo abrir la página

Abre el archivo `index.html` directamente en cualquier navegador (Chrome, Edge, Firefox).
No requiere servidor, instalaciones ni conexión a internet para verse localmente.

---

## Cómo publicarla gratis en internet

### Opción 1 — Netlify Drop (más fácil, sin registro)
1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra toda la carpeta `pagina ceron/` al área indicada
3. Netlify genera una URL pública en segundos

### Opción 2 — GitHub Pages
1. Crea un repositorio en [github.com](https://github.com)
2. Sube todos los archivos de la carpeta
3. Ve a **Settings → Pages → Branch: main → Save**
4. La página queda en `https://tu-usuario.github.io/nombre-repositorio`

---

## Personalización rápida

### Cambiar número de WhatsApp
Busca `524561266998` en `index.html` y `script.js` y reemplázalo por el nuevo número (con código de país, sin espacios ni guiones).

### Cambiar foto de perfil
Reemplaza el archivo de imagen o edita esta línea en `index.html`:
```html
<img src="WhatsApp Image 2026-03-11 at 12.42.47 PM.jpeg" alt="Adrián Cerón López — Abogado" />
```

### Cambiar horario de atención
Busca `Lunes a viernes, 9:00 – 18:00` en `index.html` y edítalo.

### Cambiar o agregar servicios
Copia uno de los bloques `.servicio-card` en `index.html` y edita el emoji, título y descripción.

---

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas y diseño responsive
- JavaScript vanilla (sin dependencias ni frameworks)
- Compatible con todos los navegadores modernos
