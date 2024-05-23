import AOS from "aos";
import GLightbox from "glightbox";

export function initializeAOS() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

export function initializeGLightbox() {
  GLightbox({
    selector: ".glightbox",
  });
}

export function handlePreloader() {
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
}

export function handleScroll() {
  const selectBody = document.querySelector("body");
  const selectHeader = document.querySelector("#header");
  const scrollTopButton = document.querySelector(".scroll-top");

  if (
    selectHeader &&
    (selectHeader.classList.contains("scroll-up-sticky") ||
      selectHeader.classList.contains("sticky-top") ||
      selectHeader.classList.contains("fixed-top"))
  ) {
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  if (scrollTopButton) {
    window.scrollY > 100
      ? scrollTopButton.classList.add("active")
      : scrollTopButton.classList.remove("active");
  }
}

export function initializeScrollTopButton() {
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

export function initializeMobileNavToggle() {
  // Sélectionnez l'icône de menu mobile
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  // Fonction pour basculer le menu de navigation mobile
  function mobileNavToggle() {
    // Ajoutez ou supprimez la classe pour activer le menu de navigation mobile
    document.querySelector("body").classList.toggle("mobile-nav-active");
    // Basculer entre l'icône de menu et l'icône de fermeture
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  // Vérifiez si l'icône de menu mobile existe
  if (mobileNavToggleBtn) {
    // Ajoutez un écouteur d'événements pour le clic sur l'icône de menu mobile
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  // Ajoutez des écouteurs d'événements pour les liens du menu de navigation mobile
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      // Fermez le menu de navigation mobile lorsqu'un lien est cliqué
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  // Ajoutez des écouteurs d'événements pour les éléments de menu déroulant mobile
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      if (document.querySelector(".mobile-nav-active")) {
        e.preventDefault();
        // Basculer l'état actif du menu déroulant
        this.parentNode.classList.toggle("active");
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      }
    });
  });
}

export function initializeFAQToggle() {
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });
}
