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
  
    // Form validation
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(e) {
        let valid = true;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
    })
  })