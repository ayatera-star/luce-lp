(() => {
  const config = window.LUCE_CONFIG || {};
  const safeUrl = value => {
    try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; } catch { return null; }
  };
  if (config.salonImage) document.querySelectorAll('img[data-salon-image], img[src="assets/salon.webp"]').forEach(img => img.src = config.salonImage);
  const useLine = config.bookingChannel === 'line';
  const bookingUrl = safeUrl(useLine ? config.lineUrl : config.instagramUrl);
  const bookingLabel = useLine ? '公式LINEで予約・相談する' : 'InstagramのDMで予約・相談する';
  const status = document.querySelector('#booking-status');
  if (status) status.textContent = useLine
    ? (bookingUrl ? '公式LINEから、施術・セルフケアレッスンのご予約やお問い合わせを承ります。' : '公式LINEのご案内を準備しています。受付先の掲載までお待ちください。')
    : (bookingUrl ? 'Instagramを開き、DMでご希望のメニュー・日時をお知らせください。' : '現在、ご予約・ご相談はInstagramのDMで承っています。このページを開いたLuceのInstagramプロフィールに戻り、「メッセージ」からご連絡ください。');
  document.querySelectorAll('.booking-link').forEach(link => {
    const label = link.querySelector('[data-booking-label]');
    if (label) label.textContent = bookingLabel;
    if (bookingUrl) { link.href = bookingUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else { link.href = '#booking-status'; link.addEventListener('click', () => status?.classList.add('emphasized')); }
  });
  const urls = { ...config.links, line: config.lineUrl };
  document.querySelectorAll('[data-external-link]').forEach(button => {
    const key = button.dataset.externalLink;
    const url = safeUrl(urls[key]);
    if (!url) return;
    const link = document.createElement('a');
    link.className = button.className;
    link.innerHTML = button.innerHTML;
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.querySelector('.link-status')?.remove();
    const arrow = link.querySelector('.link-arrow'); if (arrow) arrow.textContent = '↗';
    button.replaceWith(link);
  });
  const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.08});
    document.querySelectorAll('.reveal').forEach(el => { el.classList.add('animate'); observer.observe(el); });
  }
})();
