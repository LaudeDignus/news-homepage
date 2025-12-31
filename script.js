const body = document.querySelector("body");
const navBtn = document.querySelector(".nav__btn");
const nav = document.querySelector(".nav");
const img = navBtn.querySelector(".nav__icon");

navBtn.addEventListener("click", () => {
  const isExpanded = nav.getAttribute("aria-expanded") === "true";
  nav.setAttribute("aria-expanded", String(!isExpanded));
  if (isExpanded) {
    img.setAttribute("src", "./assets/images/icon-menu.svg");
  } else {
    img.setAttribute("src", "./assets/images/icon-menu-close.svg");
  }
});
