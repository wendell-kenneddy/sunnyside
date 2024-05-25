const menuToggleButton = document.getElementById("menu-toggle");
const menuWrapper = document.getElementById("menu");

function toggleMenuVisibility() {
  menuWrapper.classList.contains("active")
    ? menuWrapper.classList.remove("active")
    : menuWrapper.classList.add("active");
}

window.addEventListener("click", (event) => {
  const shouldToggleVisibility =
    (event.target.tagName != "A" &&
      event.target.parentElement != menuWrapper &&
      menuWrapper.classList.contains("active")) ||
    event.target.parentElement == menuToggleButton;

  if (shouldToggleVisibility) toggleMenuVisibility();
});
