// Scroll animations
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Contact form
document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
});