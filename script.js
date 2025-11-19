// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Efeito no banner (hero) ao rolar
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero"); // corrigido
    if (!hero) return;

    if (window.scrollY > 50) {
        hero.classList.add("scrolled");
    } else {
        hero.classList.remove("scrolled");
    }
});
/* CARROSSEL DE PROJETOS */
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (track && nextBtn && prevBtn) {
    const slides = Array.from(track.children);
    let index = 0;

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    });
}
document.addEventListener("DOMContentLoaded", () => {

    let index = 0;
    const slides = document.querySelectorAll(".carousel-inner img");
    const inner = document.querySelector(".carousel-inner");

    function showSlide(i) {
        index = (i + slides.length) % slides.length;
        inner.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector(".next").onclick = () => showSlide(index + 1);
    document.querySelector(".prev").onclick = () => showSlide(index - 1);

});
