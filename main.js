// ─── HAMBURGER MENU ───────────────────────────────────────────
// Toggles .open on the nav links list and syncs aria-expanded.
// Closes the menu when any nav link is clicked or when the user
// taps outside the nav. Works on any page with #navHamburger + #navLinks.
(function () {
  const hamburger = document.getElementById("navHamburger");
  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  // Use both "click" and "touchend" for maximum mobile compatibility
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close when a nav link is tapped/clicked
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close when tapping outside the nav
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });
})();

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────────
// Intercepts clicks on same-page anchor links (href="#...") and
// scrolls smoothly instead of jumping. Safe to include on any page.
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
