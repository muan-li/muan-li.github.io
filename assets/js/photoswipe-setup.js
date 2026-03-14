import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js';

const galleries = document.querySelectorAll('.pswp-gallery');

galleries.forEach((gallery, index) => {
  if (!gallery.id) {
    gallery.id = `pswp-gallery-${index + 1}`;
  }

  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${gallery.id}`,
    children: 'a',
    pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js'),
  });

  lightbox.init();
});
