// Scroll ke section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Navbar berubah saat scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("nav-scrolled", window.scrollY > 50);
});

// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Form handler
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Permintaan berhasil dikirim! Kami akan segera menghubungi Anda.");
});
