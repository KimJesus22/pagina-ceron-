// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Form → WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  let text = `Hola Adrián, me llamo *${nombre || 'un visitante'}* y necesito asesoría legal.`;
  if (asunto) text += `\n*Área:* ${asunto}`;
  if (telefono) text += `\n*Teléfono:* ${telefono}`;
  if (mensaje) text += `\n*Detalle:* ${mensaje}`;

  window.open(`https://wa.me/524561266998?text=${encodeURIComponent(text)}`, '_blank');
});
