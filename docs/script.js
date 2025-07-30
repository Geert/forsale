document.addEventListener('DOMContentLoaded', () => {
  const domain = window.location.hostname;
  const titleEl = document.getElementById('title');
  const cta = document.getElementById('cta');

  titleEl.textContent = `${domain} is te koop`;
  const subject = `Bod voor ${domain}`;
  const body = `Beste verkoper,%0D%0A%0D%0AIk wil graag een bod doen op ${domain}.%0D%0A%0D%0AMijn bod: `;
  cta.href = `mailto:info@${domain}?subject=${encodeURIComponent(subject)}&body=${body}`;
});
