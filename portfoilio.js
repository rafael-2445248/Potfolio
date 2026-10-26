const cursor = document.querySelector(".cursor");
const hoverTargets = document.querySelectorAll("a, .project-card, .service-item, .button");

if (cursor) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
}

hoverTargets.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    if (cursor) {
      cursor.style.width = "28px";
      cursor.style.height = "28px";
      cursor.style.background = "rgba(200, 180, 255, 0.8)";
    }
  });

  element.addEventListener("mouseleave", () => {
    if (cursor) {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      cursor.style.background = "rgba(255, 110, 168, 0.7)";
    }
  });
});
