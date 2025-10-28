// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // header yüksekliğini düşerek ayarla
            behavior: 'smooth'
        });
    });
});
