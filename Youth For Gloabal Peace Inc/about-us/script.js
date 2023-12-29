ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal("#about-cards", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal("#content", { delay: 500, origin: "right" });
ScrollReveal().reveal("#about-side-img", { delay: 400, origin: "left" });
ScrollReveal().reveal("#about-side-content", { delay: 400, origin: "bottom" });
ScrollReveal().reveal("#bootom-txt", { delay: 400, origin: "top" });
