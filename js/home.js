(() => {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.site-nav a')];
  const sections = links.map(link => document.querySelector(link.hash));
  let framePending = false;
  let anchorTarget = sections.find(section => `#${section.id}` === window.location.hash);

  // Native anchors work without JavaScript; this adds a reading-position cue.
  function updateNavigation() {
    const headerHeight = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    const anchorLine = headerHeight + 65;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= anchorLine) current = section;
    }
    // A short last section may never reach the header at the end of the page.
    if (window.scrollY > 0 && Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    if (anchorTarget) current = anchorTarget;
    for (const link of links) {
      if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    framePending = false;
  }
  function scheduleUpdate() {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  // Keep the chosen link active when the final sections cannot scroll to the top.
  for (const link of links) {
    link.addEventListener('click', () => {
      anchorTarget = sections.find(section => `#${section.id}` === link.hash);
      scheduleUpdate();
    });
  }
  window.addEventListener('hashchange', () => {
    anchorTarget = sections.find(section => `#${section.id}` === window.location.hash);
    scheduleUpdate();
  });
  function resumeReadingPosition() { anchorTarget = null; scheduleUpdate(); }
  window.addEventListener('wheel', resumeReadingPosition, { passive: true });
  window.addEventListener('touchstart', resumeReadingPosition, { passive: true });
  window.addEventListener('pointerdown', event => {
    if (!event.target.closest('.site-nav')) resumeReadingPosition();
  });
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) resumeReadingPosition();
  });
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
  updateNavigation();
})();
