document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('mobile-menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('open');
      var open = menu.classList.contains('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      var icon = btn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = open ? 'close' : 'menu';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        var icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) return;
      var get = function (n) {
        var el = form.querySelector('[name="' + n + '"]');
        return el ? (el.value || '').trim() : '';
      };
      var name = get('name');
      var email = get('email');
      var company = get('company');
      var service = get('service');
      var message = get('message');
      if (!name || !email || !message) {
        status.textContent = 'Please complete name, email, and message.';
        status.className = 'font-label-md text-error';
        return;
      }
      var subject = 'New enquiry from ' + name + (company ? ' (' + company + ')' : '');
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Company: ' + company + '\n' +
        'Service: ' + service + '\n\n' +
        'Message:\n' + message + '\n';
      var href = 'mailto:hello@hights.co.uk?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      status.textContent = 'Opening your email app…';
      status.className = 'font-label-md text-on-surface-variant';
      window.location.href = href;
    });
  }
});
