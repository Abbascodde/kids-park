 document.addEventListener('DOMContentLoaded', function() {
     const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
     const navMenu = document.getElementById('nav-menu');
 
     mobileMenuToggle.addEventListener('click', function() {
         navMenu.classList.toggle('-translate-x-full');
         // Optional: Toggle menu icon
         this.classList.toggle('active');
     });
 
     // Close mobile menu when clicking outside
     document.addEventListener('click', function(event) {
         if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
             navMenu.classList.add('-translate-x-full');
             mobileMenuToggle.classList.remove('active');
         }
     });
 
     // Close mobile menu when a link is clicked
     const navLinks = navMenu.querySelectorAll('a');
     navLinks.forEach(link => {
         link.addEventListener('click', function() {
             navMenu.classList.add('-translate-x-full');
             mobileMenuToggle.classList.remove('active');
         });
     });
 });