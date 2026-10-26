document.addEventListener("DOMContentLoaded", () => {
  const yearTarget = document.querySelector("#year");

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
});
