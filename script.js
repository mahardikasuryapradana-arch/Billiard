document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".animate-fade, .animate-slide-left, .animate-slide-right"
  );

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85; // 85% dari tinggi layar

    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show"); // kalau mau tetap muncul, hapus baris ini
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // cek saat pertama kali load
});
