const active = document.querySelector("[active=true]");
// const navLinks = document.querySelectorAll("#nav-link");

navLinks.forEach((links) => {
  links.addEventListener("click", (linkClicked) => {
    linkClicked.target.style.color = "red";
  });
});
