(() => {
  const config = window.LUCE_CONFIG || {};
  const menu = document.querySelector('[data-menu-link]');
  try {
    const url = new URL(config.links?.menu);
    if (menu && url.protocol === 'https:' && !url.username && !url.password) {
      menu.href = url.href; menu.target = '_blank'; menu.rel = 'noopener noreferrer';
    }
  } catch {}
  const referralUrls = [config.links?.aquabank, config.links?.sim, config.links?.kyosaiApply];
  document.querySelectorAll('a[href]').forEach(link => {
    if (referralUrls.includes(link.href)) link.rel = 'noopener noreferrer sponsored';
  });
  if (config.bookingChannel === 'line') {
    const note = document.querySelector('.link-reservation-note');
    if (note) note.textContent = '施術・セルフケアレッスンのご予約、お問い合わせは公式LINEへ。';
    const future = document.querySelector('.line-future-note'); if (future) future.hidden = true;
  }
})();
