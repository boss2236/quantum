  // Toggle mobile menu
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Animate elements on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.1 });

            fadeElements.forEach(element => {
                fadeInObserver.observe(element);
            });
        });

        document.addEventListener('DOMContentLoaded', function () {
            const isLoggedIn = document.body.getAttribute('data-logged-in') === 'true';
            const cartIcon = document.getElementById('cartIcon');

            if (isLoggedIn) {
                cartIcon.classList.remove('hidden');
            } else {
                cartIcon.classList.add('hidden');
            }
        });