export const toggleMobileNav = () => {
  var navBar = document.getElementById("mobileNav") as HTMLElement;
  var toggleIcon = document.getElementById("toggleIcon") as HTMLElement;

  if (navBar.classList.contains("active")) {
    navBar.classList.remove("active");
    toggleIcon.classList.remove("fa-xmark");
    toggleIcon.classList.add("fa-bars");
  } else {
    navBar.classList.add("active");
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-xmark");
  }
};

export const closeMobileNav = () => {
  var navBar = document.getElementById("mobileNav") as HTMLElement;
  var toggleIcon = document.getElementById("toggleIcon") as HTMLElement;
  navBar.classList.remove("active");
  toggleIcon.classList.remove("fa-xmark");
  toggleIcon.classList.add("fa-bars");
};

export const closeLinks = () => {
  var links = document.querySelectorAll(".mobileNav li a ");
  links.forEach((el) => {
    el.addEventListener("click", () => {
      closeMobileNav();
    });
  });
};
