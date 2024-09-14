// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault(); // Mencegah default behavior
  navbarNav.classList.toggle("active"); // Toggle open/close
};

// Event listener untuk link di dalam menu
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.onclick = (e) => {
    // Biarkan browser menangani scroll, jadi tidak perlu scrollIntoView
    navbarNav.classList.remove("active"); // Menutup side bar ketika link diklik
    // Browser akan otomatis menggulir ke target section berdasarkan href
  };
});

// Klik di luar elemen untuk menutup navbar
document.addEventListener("click", function (e) {
  const hm = document.querySelector("#hamburger-menu");

  if (!navbarNav.contains(e.target) && !hm.contains(e.target)) {
    navbarNav.classList.remove("active"); // Tutup side bar saat klik di luar
  }
});
