const hamburgerIcon = document.querySelector("nav .hamburger-icon");
const menuPrimary = document.querySelector("nav .menu-primary");

const aboutUs = document.querySelector(".about-us");
const aboutUsSecondaryMenu = document.querySelector(
  "nav .about-us .secondary-menu"
);
const aboutUsA = document.querySelector(".about-us a");

hamburgerIcon.addEventListener("click", () => {
  const styleMenuPrimary = getComputedStyle(menuPrimary);
  const display = styleMenuPrimary.display;

  if (display === "none") {
    menuPrimary.style.display = "flex";
    aboutUsA.removeAttribute("href");

    aboutUs.addEventListener("click", handleSecondaryMenu);
  } else {
    menuPrimary.style.display = "none";
  }
});

function handleSecondaryMenu() {
  const styleMenuSecondary = getComputedStyle(aboutUsSecondaryMenu);
  const displayMenuSecondary = styleMenuSecondary.getPropertyValue("display");

  //   aboutUsSecondaryMenu.style.display = "block";

  console.log(displayMenuSecondary);
  if (window.innerWidth <= 768) {
    if (displayMenuSecondary === "block") {
      aboutUsSecondaryMenu.style.display = "none";
    } else {
      aboutUsSecondaryMenu.style.display = "block";
    }
  }
}
