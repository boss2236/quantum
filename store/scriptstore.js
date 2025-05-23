document.addEventListener('DOMContentLoaded', function () {
      const isLoggedIn = document.body.getAttribute('data-logged-in') === 'true';
      const cartIcon = document.getElementById('cartIcon');
      if (isLoggedIn) {
        cartIcon.classList.remove('hidden');
      } else {
        cartIcon.classList.add('hidden');
      }

      const menuToggle = document.getElementById('menuToggle');
      const mobileMenu = document.getElementById('mobileMenu');

      menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    });