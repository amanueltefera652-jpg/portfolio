// SCROLL ANIMATION
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));


// CONTACT FORM SAFE
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", () => {
        console.log("Message sending...");
    });
}


// 🔥 TYPING EFFECT
const textArray = [
    "Amanuel Tefera",
    "Full Stack Developer",
    "ASP.NET Developer",
    "Database Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentText = textArray[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % textArray.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();