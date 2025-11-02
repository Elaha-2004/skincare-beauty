
    // Simple Add to Cart functionality
    const cart = [];
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const product = btn.closest('.card').querySelector('.card-title').innerText;
        cart.push(product);
        alert(product + " added to cart!");
      });
    });

    // Login form handler
    document.getElementById('loginForm').addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      alert("Logged in as " + email);
    });
     // Bootstrap custom validation
  (function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
