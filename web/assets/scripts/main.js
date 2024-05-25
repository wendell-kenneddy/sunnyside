const menuToggleButton = document.getElementById("menu-toggle");
const menuWrapper = document.getElementById("menu");

function toggleMenuVisibility() {
  menuWrapper.classList.contains("active")
    ? menuWrapper.classList.remove("active")
    : menuWrapper.classList.add("active");
}

window.addEventListener("click", (event) => {
  const shouldToggleVisibility =
    (!menuWrapper.contains(event.target) &&
      menuWrapper.classList.contains("active")) ||
    event.target.parentElement == menuToggleButton;

  if (shouldToggleVisibility) toggleMenuVisibility();
});
