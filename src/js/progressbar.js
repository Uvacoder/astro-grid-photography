// Get the progress bar and progress elements
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");

// Hide the progress bar initially
progressBar.style.display = "none";

// Update the width of the progress element based on the current scroll position
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressWidth = (scrollY / totalHeight) * 100;
  progress.style.width = `${progressWidth}%`;

  // Show the progress bar when the user scrolls
  if (scrollY > 0) {
    progressBar.style.display = "block";
  }
});
