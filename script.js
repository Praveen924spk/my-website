// =========================
// LOADER
// =========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("fade-out");
        }, 1200);
    }
});

// =========================
// MOBILE MENU
// =========================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-xmark");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            if (menuIcon) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }

        });
    });

}

// =========================
// ACTIVE NAV
// =========================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// TYPING EFFECT
// =========================
const typed = document.getElementById("typed");

if (typed) {

    const text = "UAV Systems Engineer";
    let i = 0;

    function type() {

        if (i < text.length) {
            typed.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }

    }

    type();

}

// =========================
// AOS
// =========================
AOS.init({
    duration: 1000,
    once: true
});