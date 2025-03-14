// Theme switcher functionality from your ptj.js file
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Logos
const logoLight = document.getElementById("logo-light");
const logoDark = document.getElementById("logo-dark");

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Function to change logos based on theme
function changeLogoBasedOnTheme() {
  if (document.body.classList.contains(darkTheme)) {
    logoLight.style.display = "none"; // Hide light theme logo
    logoDark.style.display = "block"; // Show dark theme logo
  } else {
    logoLight.style.display = "block"; // Show light theme logo
    logoDark.style.display = "none"; // Hide dark theme logo
  }
}

// We validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we apply the selected theme and icon
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );

  // Also apply the logo change
  changeLogoBasedOnTheme();
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Change logo based on theme
  changeLogoBasedOnTheme();

  // Save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Get current theme
function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
}

// Get current icon
function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
}

/*==================== SKILLS ACCORDION ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const skillsContent = document.getElementsByClassName("skills__content");
  const skillsHeader = document.querySelectorAll(".skills__header");

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    // Close all skill sections first
    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills__content skills__close";
    }

    // Then open the clicked one if it was closed
    if (itemClass === "skills__content skills__close") {
      this.parentNode.className = "skills__content skills__open";
    }
  }

  skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
  });
});

/*==================== QUALIFICATION MODAL ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const modalViews = document.querySelectorAll(".services__modal");
  const modalBtns = document.querySelectorAll(".services__button");
  const modalCloses = document.querySelectorAll(".services__modal-close");

  // Function to open modal
  function openModal(modalIndex) {
    modalViews[modalIndex].classList.add("active-modal");
  }

  // Add click event to all modal buttons
  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      openModal(i);
    });
  });

  // Function to close modal when clicking the X button
  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove("active-modal");
      });
    });
  });

  // Close modal when clicking outside the modal content
  modalViews.forEach((modalView) => {
    modalView.addEventListener("click", (e) => {
      if (e.target === modalView) {
        modalView.classList.remove("active-modal");
      }
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
document.addEventListener("DOMContentLoaded", function () {
  let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*==================== TESTIMONIAL SWIPER  ====================*/
  let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);
});

/*==================== SHOW SCROLL UP ====================*/
document.addEventListener("DOMContentLoaded", function () {
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }

  window.addEventListener("scroll", scrollUp);
});

/*==================== MOBILE NAV MENU ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  // Show menu
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // Hide menu
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // Hide menu when clicking on nav links
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });
});
