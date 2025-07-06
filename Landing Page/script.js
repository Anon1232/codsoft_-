function toggleDropdown(id) {
  const section = document.getElementById(id);
  section.classList.toggle('active');
}

window.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".fill");
  bars.forEach(bar => {
    const section = bar.closest("section");
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      bar.style.width = bar.style.width;
    }
  });
});

function enterGarden() {
  const entry = document.getElementById("entry-screen");
  entry.style.opacity = 0;
  setTimeout(() => {
    entry.style.display = "none";
  }, 1000);
}
