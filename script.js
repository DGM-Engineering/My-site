// Hamburger Menü
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
        navLinks.classList.remove('active');
    });
});

// Modal Aç/Kapa
const projectCards = document.querySelectorAll('.project-card');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById(card.dataset.modal);
        modal.style.display = 'flex';
    });
});

closes.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', e => {
    modals.forEach(modal => {
        if(e.target == modal) modal.style.display = 'none';
    });
});
