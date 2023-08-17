import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Scroll to target section smoothly
function scrollToSection(target) {
  gsap.to(window, {
    duration: 1,
    scrollTo: target,
    ease: "power4.Out",
  });
}

// Get the navigation links
const navLinks = document.querySelectorAll("#navigationtop a");

// Add click event listeners to the navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor link behavior

    const target = link.getAttribute("href"); // Get the target section

    if (target) {
      scrollToSection(target); // Scroll to the target section
    }
  });
});

//header motion
gsap.fromTo(
  ".name",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 2, ease: "circ.in" }
);
gsap.fromTo(
  ".tag",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 2, ease: "circ.in" }
);
gsap.fromTo(
  ".nav",
  { opacity: 0, x: 10 },
  { opacity: 1, x: 0, duration: 2, ease: "circ.in" }
);

//showcase motion
gsap.fromTo(
  ".reveal",
  { opacity: 0, y: 20 },
  {
    y: 0,
    opacity: 1,
    duration: 3,
    ease: "circ.in",
  }
);

gsap.fromTo(
  ".scroll-down",
  { opacity: 0 },
  { opacity: 1, duration: 2, ease: "circ.in" }
);

// select elements to reveal
const elements = document.querySelectorAll(".revealscroll");

// reveal elements when they come into view
elements.forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 20 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "circ.inout",
      scrollTrigger: {
        trigger: el,
        start: "clamp(top 100%)",
        end: "clamp(top 60%)",
        scrub: true,
        fastScrollEnd: true,
        preventOverlaps: true,
      },
    }
  );
});
