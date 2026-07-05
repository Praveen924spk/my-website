// =========================
// LOADER
// =========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// =========================
// MOBILE MENU
// =========================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// close menu on click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// =========================
// SMOOTH ACTIVE NAV LINK
// =========================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});

// =========================
// TYPING EFFECT
// =========================
const typedText = document.getElementById("typed");

const texts = [
    "UAV Systems Engineer",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = texts[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedText.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// =========================
// AOS INIT
// =========================
AOS.init({
    duration: 1000,
    once: true
});