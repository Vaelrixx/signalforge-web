const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

for (const trigger of document.querySelectorAll('[data-copy-email]')) {
  trigger.addEventListener('click', async () => {
    const email = 'avenixlabss@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const original = trigger.textContent;
      trigger.textContent = 'Email copied';
      setTimeout(() => { trigger.textContent = original; }, 1400);
    } catch {
      window.location.href = `mailto:${email}?subject=SignalForge%20Founding%20Pilot`;
    }
  });
}
