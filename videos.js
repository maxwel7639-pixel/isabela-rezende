// Only client-owned, approved videos belong here. Never insert third-party testimonials.
// Public Storage URLs are not credentials. Keep service keys out of this repository.
const videos = [
  { title: 'Gabriela', src: 'https://ydbzqpkwfxybrdmadckm.supabase.co/storage/v1/object/public/videos-isabela/DRdR3LiDVD_.mp4', poster: 'https://ydbzqpkwfxybrdmadckm.supabase.co/storage/v1/object/public/videos-isabela/DRdR3LiDVD_-poster.webp' },
  { title: 'Iasmim', src: 'https://ydbzqpkwfxybrdmadckm.supabase.co/storage/v1/object/public/videos-isabela/DQ7oodrj3k0.mp4', poster: 'https://ydbzqpkwfxybrdmadckm.supabase.co/storage/v1/object/public/videos-isabela/DQ7oodrj3k0-poster.webp' },
  { title: 'Rafaela', src: 'https://ydbzqpkwfxybrdmadckm.supabase.co/storage/v1/object/public/videos-isabela/DQoexbLjazm.mp4', poster: 'https://ydbzqpkwfxybrdmadckm.supabase.co/storage/v1/object/public/videos-isabela/DQoexbLjazm-poster.webp' },
];

const section = document.getElementById('videos');
const list = document.getElementById('video-list');
const isPublicStorageUrl = value => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname.endsWith('.supabase.co') &&
      url.pathname.startsWith('/storage/v1/object/public/') && !url.username && !url.password;
  } catch { return false; }
};

for (const entry of videos) {
  if (!entry.title || !entry.poster || !isPublicStorageUrl(entry.src)) continue;
  const card = document.createElement('figure');
  card.className = 'video-card glow';
  const player = document.createElement('video');
  player.controls = true;
  player.preload = 'none';
  player.playsInline = true;
  player.poster = entry.poster;
  player.setAttribute('aria-label', entry.title);
  player.src = entry.src;
  const caption = document.createElement('figcaption');
  caption.textContent = entry.title;
  card.append(player, caption);
  list.append(card);
}
section.hidden = list.childElementCount === 0;
