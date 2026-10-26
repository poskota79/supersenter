/**
 * SUPERSENTER — Main Site Controller
 * Initializes dynamic catalogs, filters, and global conversion triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Catalog Dynamic Rendering & Category Filter
  const catalogGrid = document.getElementById('catalogProductsGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const catalogCounter = document.getElementById('catalogCounter');

  if (catalogGrid && window.SUPERSENTER) {
    const renderCatalog = (filterCategory = 'all') => {
      const allProducts = window.SUPERSENTER.products;
      const filtered = filterCategory === 'all' 
        ? allProducts 
        : allProducts.filter(p => p.categorySlug === filterCategory);

      if (catalogCounter) {
        catalogCounter.textContent = `Menampilkan ${filtered.length} produk`;
      }

      catalogGrid.innerHTML = filtered.map(p => `
        <div class="product-card">
          <span class="product-card-badge badge-${p.badgeType}">${p.badge}</span>
          <a href="${p.detailPage || 'produk-detail.html?id=' + p.slug}" class="product-card-thumb">
            <img src="${p.image}" alt="${p.alt}" loading="lazy">
          </a>
          <div class="product-card-body">
            <span class="product-card-category">${p.category}</span>
            <h3 class="product-card-title"><a href="${p.detailPage || 'produk-detail.html?id=' + p.slug}">${p.name}</a></h3>
            <p class="product-card-desc">${p.shortDescription}</p>
            <div class="product-card-price-row">
              <span class="product-card-price">${p.price}</span>
              <span class="product-card-old-price">${p.oldPrice}</span>
            </div>
            <div class="product-card-actions">
              <a href="${window.SUPERSENTER.config.getProductWaUrl(p.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                BELI VIA WHATSAPP
              </a>
              <a href="${p.detailPage || 'produk-detail.html?id=' + p.slug}" class="btn btn-outline btn-sm">
                DETAIL PRODUK
              </a>
            </div>
          </div>
        </div>
      `).join('');
    };

    // Check if URL has ?cat= parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('cat') || 'all';

    // Set initial filter active state
    filterPills.forEach(pill => {
      const cat = pill.getAttribute('data-filter');
      if (cat === initialCat) {
        pill.classList.add('is-active');
      } else {
        pill.classList.remove('is-active');
      }

      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        renderCatalog(cat);
      });
    });

    renderCatalog(initialCat);
  }
});
