// Animate progress bars on scroll
window.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".fill");
  bars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("style").match(/width:\s*(\d+%)/)[1];
    }
  });
});
