// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Dismissible recall bar
const recallBar = document.getElementById('recallBar');
if (recallBar) {
  const dismissed = sessionStorage.getItem('recallBarDismissed');
  if (dismissed === 'true') {
    recallBar.style.display = 'none';
  }
}

// Contact form (demo only — no backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    formNote.textContent = `Thanks${name ? ', ' + name : ''}! Your request has been received. Our team will contact you shortly.`;
    contactForm.reset();
  });
}
