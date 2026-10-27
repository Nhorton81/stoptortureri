// Mobile menu toggle
document.querySelectorAll('.menu-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Email sign-up: FormSubmit emails each sign-up to the address in data-endpoint.
document.querySelectorAll('form.signup').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = form.querySelector('input[type=email]').value;
    var button = form.querySelector('button');
    var thanks = form.querySelector('.thanks');
    button.disabled = true;
    fetch(form.dataset.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        email: email,
        message: email + ' would like to sign up for the Stop Torture newsletter.',
        _subject: 'Stop Torture newsletter sign-up',
        _template: 'basic',
        _captcha: 'false'
      })
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok || String(data.success) !== 'true') throw new Error(data.message);
      });
    }).then(function () {
      thanks.textContent = 'Thanks for signing up!';
      form.reset();
    }).catch(function () {
      thanks.textContent = 'Sorry, that did not go through. Please try again later.';
    }).then(function () {
      thanks.hidden = false;
      button.disabled = false;
    });
  });
});
