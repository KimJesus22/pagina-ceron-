# Página Web — Adrián Cerón López, Abogado

Sitio web profesional de una sola página (landing page) para el Lic. Adrián Cerón López, recién egresado de la Licenciatura en Derecho, con base en Jaral del Progreso, Guanajuato. Diseñada para reemplazar tarjetas de presentación y conseguir primeros clientes en la región.

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
| **Hero** | Nombre, título, ubicación (Jaral del Progreso, Gto.) y botón WhatsApp |
| **Sobre mí** | Foto, presentación, chips de especialidad y cédula profesional |
| **Servicios** | 6 tarjetas: Familiar, Civil, Penal, Laboral, Preventiva, Inmobiliario |
| **Tarifas** | 8 tarjetas de precios orientativos + botón de cotización por WhatsApp |
| **¿Por qué yo?** | 4 valores: atención, transparencia, comunicación, ética |
| **Redes sociales** | Botones de Facebook, WhatsApp y Gmail + guía de 5 tips para conseguir clientes |
| **Contacto** | Datos completos (tel, ubicación, cobertura, email, horario) + formulario → WhatsApp |

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

### Cambiar o agregar tarifas
Copia uno de los bloques `.tarifa-card` en `index.html` y edita el nombre, precio y descripción. Para destacar una tarjeta agrega la clase `tarifa-destacada`.

### Cambiar municipios de cobertura
Busca `Atención también en Valle de Santiago` en `index.html` y edita la lista de municipios.

### Cambiar enlaces de redes sociales
- **Facebook:** busca `facebook.com/adrian.ceron.7509` y reemplaza con el nuevo perfil
- **Gmail:** busca `ceronadrian770@gmail.com` y reemplaza (aparece en dos lugares: el botón de redes y el contacto)

---

## Datos de contacto configurados

| Canal | Valor |
|---|---|
| WhatsApp | 456-126-6998 (`+52 456 126 6998`) |
| Gmail | ceronadrian770@gmail.com |
| Facebook | facebook.com/adrian.ceron.7509 |
| Ubicación | Jaral del Progreso, Guanajuato |
| Cobertura | Valle de Santiago, Yuriria, Salvatierra, Uriangato, Moroleón, Salamanca |

---

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas y diseño responsive
- JavaScript vanilla (sin dependencias ni frameworks)
- Compatible con todos los navegadores modernos
