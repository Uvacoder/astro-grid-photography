// hide the scroll down indicator after 9 seconds
setTimeout(() => {
  document.querySelector(".scroll-down").style.display = "none";
}, 9000);

// show the scroll down indicator if the page is reloaded at the top
window.onload = function () {
  if (window.scrollY == 0) {
    document.querySelector(".scroll-down").style.display = "block";
  }
};

// hide the scroll down indicator when the user starts scrolling
window.addEventListener("scroll", () => {
  document.querySelector(".scroll-down").style.display = "none";
});
