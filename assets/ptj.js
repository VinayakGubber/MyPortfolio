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
    logoLight.style.display = "none";  // Hide light theme logo
    logoDark.style.display = "block";  // Show dark theme logo
  } else {
    logoLight.style.display = "block";  // Show light theme logo
    logoDark.style.display = "none";   // Hide dark theme logo
  }
}

// We validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we apply the selected theme and icon
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
  
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
