const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const message = document.querySelector('#message').value.trim();

  const subject = 'Portfolio inquiry from ' + name;
  const body = [
    'Name: ' + name,
    'Email: ' + email,
    'Cell: ' + phone,
    '',
    message
  ].join('\r\n');

  window.location.href = contactForm.action
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);
});