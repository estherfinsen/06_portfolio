window.addEventListener("scroll", function () {
  var footer = document.querySelector("footer");
  var windowHeight = window.innerHeight;
  var scrollThreshold = 0.6 * windowHeight;

  if (window.scrollY > scrollThreshold) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
