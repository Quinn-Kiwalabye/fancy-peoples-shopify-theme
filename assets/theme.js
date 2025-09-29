document.addEventListener("DOMContentLoaded", function () {
  // Mega Menu functionality
  const menuToggle = document.getElementById("menuToggle");
  const megaMenu = document.getElementById("megaMenu");
  const megaMenuClose = document.getElementById("megaMenuClose");
  const megaMenuBack = document.getElementById("megaMenuBack");
  const megaMenuMain = document.getElementById("megaMenuMain");
  const megaMenuLinks = document.querySelectorAll(
    ".mega-menu-link[data-submenu]"
  );
  const megaMenuOverlay = document.querySelector(".mega-menu-overlay");

  // Open mega menu
  if (menuToggle && megaMenu) {
    menuToggle.addEventListener("click", function () {
      megaMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  // Close mega menu
  if (megaMenuClose && megaMenu) {
    megaMenuClose.addEventListener("click", function () {
      closeMegaMenu();
    });
  }

  // Close when clicking overlay
  if (megaMenuOverlay && megaMenu) {
    megaMenuOverlay.addEventListener("click", function () {
      closeMegaMenu();
    });
  }

  // Open submenu when clicking category
  if (megaMenuLinks && megaMenuLinks.length) {
    megaMenuLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const submenuId =
          "submenu" +
          this.dataset.submenu.charAt(0).toUpperCase() +
          this.dataset.submenu.slice(1);
        const submenu = document.getElementById(submenuId);

        if (submenu) {
          submenu.classList.add("active");
          megaMenuMain.classList.add("hidden");
          megaMenuBack.style.display = "flex";
        }
      });
    });
  }

  // Back button functionality
  if (megaMenuBack) {
    megaMenuBack.addEventListener("click", function () {
      const activeSubmenu = document.querySelector(".mega-menu-submenu.active");

      if (activeSubmenu) {
        activeSubmenu.classList.remove("active");
        megaMenuMain.classList.remove("hidden");
        megaMenuBack.style.display = "none";
      }
    });
  }

  function closeMegaMenu() {
    if (megaMenu) {
      megaMenu.classList.remove("active");
      document.body.style.overflow = "";

      // Reset submenu state
      const activeSubmenu = document.querySelector(".mega-menu-submenu.active");
      if (activeSubmenu) {
        activeSubmenu.classList.remove("active");
      }

      if (megaMenuMain) {
        megaMenuMain.classList.remove("hidden");
      }

      if (megaMenuBack) {
        megaMenuBack.style.display = "none";
      }
    }
  }
});
