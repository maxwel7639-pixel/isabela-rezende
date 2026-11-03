// Efeitos visuais. Sem JS o site continua completo, só sem animação.
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

// Estrelas que piscam nas seções escuras
document.querySelectorAll('.stars').forEach(box => {
  const count = box.dataset.stars ? Number(box.dataset.stars) : 36;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    const size = Math.random() < 0.25 ? 3 : 2;
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-delay:${(Math.random() * 4).toFixed(2)}s;animation-duration:${(2.4 + Math.random() * 2).toFixed(2)}s`;
    box.append(s);
  }
});

if (!reduced) {
  // Entrada suave ao rolar
  root.classList.add('js');
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  document.querySelectorAll('.sr').forEach(el => io.observe(el));
}

if (!reduced && finePointer) {
  // Inclinação 3D com brilho que segue o mouse
  document.querySelectorAll('[data-tilt]').forEach(el => {
    const max = Number(el.dataset.tilt) || 8;
    el.addEventListener('pointermove', ev => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width;
      const y = (ev.clientY - r.top) / r.height;
      el.style.setProperty('--ry', ((x - 0.5) * 2 * max).toFixed(2) + 'deg');
      el.style.setProperty('--rx', ((0.5 - y) * 2 * max).toFixed(2) + 'deg');
      el.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
    });
  });
  // Linha de borda roxa que acompanha o cursor
  document.addEventListener('pointermove', ev => {
    const card = ev.target.closest && ev.target.closest('.glow');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--bx', (ev.clientX - r.left).toFixed(0) + 'px');
    card.style.setProperty('--by', (ev.clientY - r.top).toFixed(0) + 'px');
  });
  // Reflexo do vidro nos botões
  document.querySelectorAll('.button').forEach(b => {
    b.addEventListener('pointermove', ev => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--mx', ((ev.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      b.style.setProperty('--my', ((ev.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    });
  });
}

// Pilha de cards: o topo de cada card depende da altura da tela, para o card nunca ficar cortado
const stackCards = [...document.querySelectorAll('.stack .service')];
const placeStack = () => {
  const on = matchMedia('(min-width: 900px)').matches;
  stackCards.forEach((c, i) => {
    c.style.top = on ? Math.max(84, Math.min(92 + i * 22, innerHeight - c.offsetHeight - 16)) + 'px' : '';
  });
};
placeStack();
addEventListener('resize', placeStack);
addEventListener('load', placeStack);
