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

    // FunciÃ³n para cambiar la imagen y textos del visor principal
    function selectThumbnail(card) {
        if (!card) return;

        // Actualizar miniatura activa
        thumbCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Extraer rutas y metadatos desde atributos data-*
        const fullSrc = card.getAttribute('data-full-src') || card.querySelector('img')?.src;
        const altText = card.querySelector('img')?.alt || 'Air Jordan 1';
        const title = card.getAttribute('data-title') || 'Air Jordan 1 High OG';
        const desc = card.getAttribute('data-desc') || 'Silueta clÃ¡sica en cuero de alta gama.';
        const badge = card.getAttribute('data-badge') || 'Vista Principal';

        if (fullSrc) {
            mainImg.src = fullSrc;
            mainImg.alt = altText;
        }

        // Sincronizar tÃ­tulo, pie y badge en el visor
        if (captionTitle) captionTitle.textContent = title;
        if (captionDesc) captionDesc.textContent = desc;
        if (mainBadge) mainBadge.textContent = badge;
    }

    // Escuchar eventos de clic en cada miniatura
    thumbCards.forEach(card => {
        card.addEventListener('click', () => selectThumbnail(card));
    });

    // Filtrado interactivo por categorÃ­a
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');

            // Actualizar botones de filtro
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            let firstVisibleCard = null;

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const card = item.querySelector('.gallery-thumb-card');

                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = '';
                    if (!firstVisibleCard && card) {
                        firstVisibleCard = card;
                    }
                } else {
                    item.style.display = 'none';
                }
            });

            // Si la miniatura activa quedÃ³ oculta, activar la primera visible
            const activeCard = document.querySelector('.gallery-thumb-card.active');
            if (activeCard && activeCard.closest('.gallery-item')?.style.display === 'none' && firstVisibleCard) {
                selectThumbnail(firstVisibleCard);
            }
        });
    });
});
