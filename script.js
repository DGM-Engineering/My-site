// Basit DOM seçicileri
const cta = document.getElementById('cta');
const form = document.getElementById('contact-form');
const navToggle = document.getElementById('nav-toggle');

cta?.addEventListener('click', () => {
  // CTA ile özellikler bölümüne yumuşak scroll
  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
});

// Form submit (demo: sayfayı yenilemeden mesaj göster)
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'Ziyaretçi';
  alert(`${name}, mesajın alındı! (Bu sadece demo)`);
  form.reset();
});

// Basit mobil menü toggling
navToggle?.addEventListener('click', () => {
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.style.display === 'inline-block') a.style.display = 'none';
    else a.style.display = 'inline-block';
  });
});
