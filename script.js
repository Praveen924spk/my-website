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


// =========================================
// CERTIFICATE POPUP
// =========================================

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

const certificates =
    document.querySelectorAll(".certificate-card img");

certificates.forEach(img => {

    img.addEventListener("click", () => {

        popupImage.src = img.src;

        popup.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeCertificatePopup() {

    popup.classList.remove("show");

    document.body.style.overflow = "auto";

}


if (closePopup) {
    closePopup.addEventListener(
        "click",
        closeCertificatePopup
    );
}


if (popup) {

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {
            closeCertificatePopup();
        }

    });

}


// =========================================
// PROJECT IMAGE LIGHTBOX
// =========================================

let projectImages = [];
let currentProjectImage = 0;


// Open project image
function openLightbox(image) {

    // Get every project gallery image
    projectImages = Array.from(
        document.querySelectorAll(".project-gallery .gallery-image img")
    );

    // Find the clicked image
    currentProjectImage =
        projectImages.indexOf(image);

    updateProjectLightbox();

    const lightbox =
        document.getElementById("imageLightbox");

    if (lightbox) {

        lightbox.classList.add("active");

        // Stop website from scrolling
        document.body.style.overflow = "hidden";
    }

}


// Update displayed image
function updateProjectLightbox() {

    if (!projectImages.length) return;

    const image =
        projectImages[currentProjectImage];

    const lightboxImage =
        document.getElementById("lightboxImage");

    const caption =
        document.getElementById("lightboxCaption");

    if (lightboxImage) {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

    }

    if (caption) {

        caption.textContent = image.alt;

    }

}


// Close lightbox
function closeLightbox() {

    const lightbox =
        document.getElementById("imageLightbox");

    if (lightbox) {

        lightbox.classList.remove("active");

    }

    // Enable website scrolling again
    document.body.style.overflow = "auto";

}


// Previous / Next image
function changeImage(direction) {

    if (!projectImages.length) return;

    currentProjectImage += direction;


    // If we go past the last image
    if (currentProjectImage >= projectImages.length) {

        currentProjectImage = 0;

    }


    // If we go before the first image
    if (currentProjectImage < 0) {

        currentProjectImage =
            projectImages.length - 1;

    }


    updateProjectLightbox();

}


// =========================================
// PROJECT LIGHTBOX - CLICK OUTSIDE TO CLOSE
// =========================================

const projectLightbox =
    document.getElementById("imageLightbox");

if (projectLightbox) {

    projectLightbox.addEventListener("click", (e) => {

        // Only close when clicking the dark background
        if (e.target === projectLightbox) {

            closeLightbox();

        }

    });

}


// =========================================
// KEYBOARD CONTROLS
// =========================================

document.addEventListener("keydown", (e) => {

    const lightbox =
        document.getElementById("imageLightbox");

    // Lightbox not open
    if (
        !lightbox ||
        !lightbox.classList.contains("active")
    ) {
        return;
    }


    // ESC = close
    if (e.key === "Escape") {

        closeLightbox();

    }


    // LEFT ARROW = previous
    if (e.key === "ArrowLeft") {

        changeImage(-1);

    }


    // RIGHT ARROW = next
    if (e.key === "ArrowRight") {

        changeImage(1);

    }

});