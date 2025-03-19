// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Form validation
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
      let valid = true;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message