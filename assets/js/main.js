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
/* SEO-Product-Injector v2: structured data produk + ItemList kategori.
   - Halaman detail statis: Product (brand "Super Senter" sesuai spek,
     sku dari nama file, harga, IDR, InStock, url kanonis).
   - Halaman katalog/kategori: ItemList berisi Product tiap kartu.
   - Google memproses JSON-LD yang disuntik lewat JavaScript.
   - produk-detail.html dilewati (sudah noindex).
   - Tambahan performa: loading lazy runtime untuk thumbnail galeri dan
     kartu terkait di halaman detail. Tidak mengubah tampilan. */
(function () {
  function run() {
    try {
      var path = window.location.pathname.split('/').pop();
      if (!path || path === 'produk-detail.html') return;
      var canon = 'https://supersenter.com/' + path;
      var titleEl = document.getElementById('productDetailTitle');
      var priceEl = document.getElementById('productPriceCurrent');
      if (titleEl && priceEl) {
        var name = titleEl.textContent.trim();
        var priceNum = priceEl.textContent.replace(/[^0-9]/g, '');
        if (name && priceNum) {
          var descMeta = document.querySelector('meta[name="description"]');
          var desc = descMeta ? descMeta.getAttribute('content') : '';
          desc = desc.replace(/ Beli langsung via WhatsApp.*$/, '')
                     .replace(/ Beli via WhatsApp.*$/, '');
          var sku = path.replace(/^produk-/, '').replace(/\.html$/, '');
          var data = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': name,
            'description': desc,
            'brand': { '@type': 'Brand', 'name': 'Super Senter' },
            'sku': sku,
            'offers': {
              '@type': 'Offer',
              'price': priceNum,
              'priceCurrency': 'IDR',
              'availability': 'https://schema.org/InStock',
              'url': canon
            }
          };
          var s = document.createElement('script');
          s.type = 'application/ld+json';
          s.text = JSON.stringify(data);
          document.head.appendChild(s);
          var link = document.createElement('link');
          link.rel = 'canonical';
          link.href = canon;
          document.head.appendChild(link);
        }
        document.querySelectorAll('.gallery-thumb-btn img, .product-card img').forEach(function (img) {
          if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
        });
        return;
      }
      var cards = document.querySelectorAll('.product-card');
      if (cards.length) {
        var items = [];
        cards.forEach(function (card, i) {
          var a = card.querySelector('.product-card-title a');
          var p = card.querySelector('.product-card-price');
          if (!a || !p) return;
          var pr = p.textContent.replace(/[^0-9]/g, '');
          if (!pr) return;
          var href = a.getAttribute('href') || '';
          items.push({
            '@type': 'ListItem',
            'position': items.length + 1,
            'item': {
              '@type': 'Product',
              'name': a.textContent.trim(),
              'brand': { '@type': 'Brand', 'name': 'Super Senter' },
              'url': 'https://supersenter.com/' + href,
              'offers': {
                '@type': 'Offer',
                'price': pr,
                'priceCurrency': 'IDR',
                'availability': 'https://schema.org/InStock',
                'url': 'https://supersenter.com/' + href
              }
            }
          });
        });
        if (items.length) {
          var s2 = document.createElement('script');
          s2.type = 'application/ld+json';
          s2.text = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': items
          });
          document.head.appendChild(s2);
        }
      }
    } catch (e) { /* SEO tambahan: jangan ganggu halaman */ }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
