// Navigation stays visible without JavaScript; enhancement enables the mobile menu.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
document.documentElement.classList.add('js');
function closeMenu() {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const copyButton = document.querySelector('.copy-button');
const status = document.querySelector('.contact-status');
let resetCopy;
copyButton.addEventListener('click', async () => {
  clearTimeout(resetCopy);
  try {
    await navigator.clipboard.writeText('+63 976 413 0718');
    copyButton.textContent = 'Copied';
    status.textContent = 'Phone number copied. Let’s keep in touch!';
    resetCopy = setTimeout(() => {
      copyButton.textContent = 'Copy';
      status.textContent = '';
    }, 4000);
  } catch {
    status.textContent = 'Please select and copy this number: +63 976 413 0718';
  }
});
