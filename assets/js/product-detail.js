/**
 * SUPERSENTER — Product Detail Page Dynamic Loader
 * Handles URL query params (?id=slug), gallery switching, and WhatsApp purchase link generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!window.SUPERSENTER) return;

  const urlParams = new URLSearchParams(window.location.search);
  const requestedSlug = urlParams.get('id') || 'supersenter-x1';

  let product = window.SUPERSENTER.getProductBySlug(requestedSlug);
  if (!product) {
    product = window.SUPERSENTER.products[0]; // fallback
  }

  // Update Page Meta & Title
  document.title = `${product.name} — SUPERSENTER Flashlight`;

  // Update Breadcrumbs
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  const breadcrumbProduct = document.getElementById('breadcrumbProduct');
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = product.categoryUrl;
  }
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = product.name;
  }

  // Update Gallery Main Image
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryThumbsContainer = document.getElementById('galleryThumbs');

  if (galleryMainImg && galleryThumbsContainer) {
    galleryMainImg.src = product.image;
    galleryMainImg.alt = product.alt || product.name;

    // Render Thumbnails
    const galleryItems = (product.gallery && product.gallery.length > 0) ? product.gallery : [product.image];
    galleryThumbsContainer.innerHTML = '';

    galleryItems.forEach((imgSrc, index) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.className = `gallery-thumb-btn ${index === 0 ? 'is-active' : ''}`;
      thumbBtn.setAttribute('type', 'button');
      thumbBtn.setAttribute('aria-label', `Lihat foto ${index + 1}`);
      thumbBtn.innerHTML = `<img src="${imgSrc}" alt="${product.name} Thumbnail ${index + 1}">`;

      thumbBtn.addEventListener('click', () => {
        galleryThumbsContainer.querySelectorAll('.gallery-thumb-btn').forEach(btn => btn.classList.remove('is-active'));
        thumbBtn.classList.add('is-active');
        galleryMainImg.src = imgSrc;
      });

      galleryThumbsContainer.appendChild(thumbBtn);
    });
  }

  // Product Badges & Category
  const badgeEl = document.getElementById('productDetailBadge');
  const categoryEl = document.getElementById('productDetailCategory');
  if (badgeEl) {
    badgeEl.textContent = product.badge || 'RECOMMENDED';
    badgeEl.className = `product-card-badge badge-${product.badgeType || 'recommended'}`;
  }
  if (categoryEl) {
    categoryEl.textContent = product.category;
    categoryEl.href = product.categoryUrl;
  }

  // Title & Tagline
  const titleEl = document.getElementById('productDetailTitle');
  const taglineEl = document.getElementById('productDetailTagline');
  if (titleEl) titleEl.textContent = product.name;
  if (taglineEl) taglineEl.textContent = product.tagline;

  // Rating
  const ratingScoreEl = document.getElementById('productRatingScore');
  const ratingCountEl = document.getElementById('productRatingCount');
  if (ratingScoreEl && product.rating) ratingScoreEl.textContent = product.rating.score;
  if (ratingCountEl && product.rating) ratingCountEl.textContent = `(${product.rating.reviewsCount} Ulasan Terverifikasi)`;

  // Price
  const priceCurrentEl = document.getElementById('productPriceCurrent');
  const priceOldEl = document.getElementById('productPriceOld');
  if (priceCurrentEl) priceCurrentEl.textContent = product.price;
  if (priceOldEl) priceOldEl.textContent = product.oldPrice || '';

  // Descriptions
  const shortDescEl = document.getElementById('productShortDesc');
  const fullDescEl = document.getElementById('productFullDesc');
  if (shortDescEl) shortDescEl.textContent = product.shortDescription;
  if (fullDescEl) fullDescEl.textContent = product.fullDescription;

  // Key Features Checklist
  const featuresListEl = document.getElementById('productFeaturesList');
  if (featuresListEl && product.keyFeatures) {
    featuresListEl.innerHTML = product.keyFeatures.map(feature => `
      <li class="feature-check-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${feature}</span>
      </li>
    `).join('');
  }

  // Big WhatsApp CTA Button
  const waCtaBtn = document.getElementById('productWaCta');
  const mobileBarPrice = document.getElementById('mobileBarPrice');
  const mobileBarWaBtn = document.getElementById('mobileBarWaBtn');
  const waUrl = window.SUPERSENTER.config.getProductWaUrl(product.name);

  if (waCtaBtn) {
    waCtaBtn.href = waUrl;
  }
  if (mobileBarPrice) {
    mobileBarPrice.textContent = product.price;
  }
  if (mobileBarWaBtn) {
    mobileBarWaBtn.href = waUrl;
  }

  // Specifications Table
  const specsTableBody = document.getElementById('productSpecsBody');
  if (specsTableBody && product.specifications) {
    specsTableBody.innerHTML = product.specifications.map(spec => `
      <tr>
        <td class="spec-label">${spec.label}</td>
        <td class="spec-val">${spec.value}</td>
      </tr>
    `).join('');
  }

  // What's In The Box
  const boxListEl = document.getElementById('productBoxList');
  if (boxListEl && product.included) {
    boxListEl.innerHTML = product.included.map(item => `
      <div class="box-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // Render Related Products
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
    const otherProducts = window.SUPERSENTER.products.filter(p => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = otherProducts.map(p => `
      <div class="product-card">
        <span class="product-card-badge badge-${p.badgeType}">${p.badge}</span>
        <a href="produk-detail.html?id=${p.slug}" class="product-card-thumb">
          <img src="${p.image}" alt="${p.alt}" loading="lazy">
        </a>
        <div class="product-card-body">
          <span class="product-card-category">${p.category}</span>
          <h3 class="product-card-title"><a href="produk-detail.html?id=${p.slug}">${p.name}</a></h3>
          <p class="product-card-desc">${p.shortDescription}</p>
          <div class="product-card-price-row">
            <span class="product-card-price">${p.price}</span>
            <span class="product-card-old-price">${p.oldPrice}</span>
          </div>
          <div class="product-card-actions">
            <a href="${window.SUPERSENTER.config.getProductWaUrl(p.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              BELI VIA WHATSAPP
            </a>
            <a href="produk-detail.html?id=${p.slug}" class="btn btn-outline btn-sm">
              DETAIL PRODUK
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
});
