 document.addEventListener('DOMContentLoaded', () => {
   const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
   const navMenu = document.getElementById('nav-menu');
 
   // Toggle mobile menu
   mobileMenuToggle.addEventListener('click', (e) => {
     e.stopPropagation();
     navMenu.classList.toggle('hidden');
   });
 
   // Close menu when clicking outside
   document.addEventListener('click', (event) => {
     if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
       navMenu.classList.add('hidden');
     }
   });
 
   // Ensure menu visibility on larger screens
   window.addEventListener('resize', () => {
     if (window.innerWidth >= 640) {
       navMenu.classList.remove('hidden');
     }
   });
 });