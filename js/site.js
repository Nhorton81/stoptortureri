// Mobile menu toggle
document.querySelectorAll('.menu-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Email sign-up: opens a pre-filled email to the coalition inbox.
document.querySelectorAll('form.signup').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = form.querySelector('input[type=email]').value;
    var body = 'Please add me to the email list: ' + email;
    window.location.href = 'mailto:' + form.dataset.to +
      '?subject=' + encodeURIComponent('Email updates sign-up') +
      '&body=' + encodeURIComponent(body);
    form.querySelector('.thanks').hidden = false;
  });
});
