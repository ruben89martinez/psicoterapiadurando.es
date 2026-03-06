// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
    menuToggle.textContent = mobileMenu.classList.contains('menu-open') ? '✕' : '☰';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('menu-open');
      menuToggle.textContent = '☰';
    });
  });
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ===== ACORDEÓN SERVICIOS (multi-select) =====
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.services-column');
    const content = button.nextElementSibling;
    const isActive = button.classList.contains('active');

    button.classList.toggle('active', !isActive);
    card.classList.toggle('active', !isActive);

    if (content) {
      content.classList.toggle('open', !isActive);
    }
  });
});

// ===== ACORDEÓN FAQ (single-select) =====
document.querySelectorAll('.faq-question').forEach((question, index, all) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-icon');
    const isActive = question.classList.contains('active');

    // Cierra todas las preguntas
    all.forEach(q => {
      q.classList.remove('active');
      const a = q.nextElementSibling;
      const i = q.querySelector('.faq-icon');
      if (a) a.classList.remove('open');
      if (i) i.textContent = '+';
    });

    // Abre la seleccionada si estaba cerrada
    if (!isActive) {
      question.classList.add('active');
      if (answer) answer.classList.add('open');
      if (icon) icon.textContent = '−';
    }
  });
});

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById('contact-form');
const feedbackMsg = document.getElementById('feedback-message');

if (contactForm && feedbackMsg) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    feedbackMsg.textContent = 'Enviando...';
    feedbackMsg.className = 'feedback-message visible';

    const formData = new FormData(event.target);
    formData.append('access_key', 'cd0dcb7d-946b-4117-8051-3e1f2d6d45c3');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        feedbackMsg.textContent = '¡Correo enviado correctamente! Gracias por contactarnos.';
        feedbackMsg.className = 'feedback-message visible';
        event.target.reset();
      } else {
        feedbackMsg.textContent = 'Hubo un error. Por favor, intenta de nuevo.';
        feedbackMsg.className = 'feedback-message visible error';
      }
    } catch {
      feedbackMsg.textContent = 'Hubo un error de conexión. Por favor, intenta de nuevo.';
      feedbackMsg.className = 'feedback-message visible error';
    }
  });
}

// ===== WIDGET DOCTORALIA (solo página contacto) =====
if (document.getElementById('zl-url')) {
  const script = document.createElement('script');
  script.src = '//platform.docplanner.com/js/widget.js';
  script.id = 'zl-widget-s';
  document.body.appendChild(script);
}
