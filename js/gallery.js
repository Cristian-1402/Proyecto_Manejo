/**
 * InteracciÃ³n y Dinamismo de la GalerÃ­a - Joel
 * Proyecto Landing Page Air Jordan 1 (UTA)
 */

document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('gallery-main-img');
    const mainBadge = document.getElementById('gallery-badge');
    const captionTitle = document.getElementById('gallery-caption-title');
    const captionDesc = document.getElementById('gallery-caption-desc');
    const thumbCards = document.querySelectorAll('.gallery-thumb-card');
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!mainImg || thumbCards.length === 0) return;

    // FunciÃ³n para cambiar la imagen del visor principal
    function selectThumbnail(card) {
        if (!card) return;

        // Actualizar miniatura activa
        thumbCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Extraer rutas y atributos
        const fullSrc = card.getAttribute('data-full-src') || card.querySelector('img')?.src;
        const altText = card.querySelector('img')?.alt || 'Air Jordan 1';

        if (fullSrc) {
            mainImg.src = fullSrc;
            mainImg.alt = altText;
        }
    }

    // Escuchar eventos de clic en cada miniatura
    thumbCards.forEach(card => {
        card.addEventListener('click', () => selectThumbnail(card));
    });
});
