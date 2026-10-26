/**
 * SUPERSENTER — Interactive Product Finder Quiz
 * "BUTUH BANTUAN MEMILIH SENTER?"
 */

document.addEventListener('DOMContentLoaded', () => {
  const optionsGrid = document.querySelector('.finder-options-grid');
  const resultBox = document.querySelector('#finderResult');

  if (!optionsGrid || !resultBox) return;

  const recommendations = {
    'camping': {
      categoryName: 'Senter Kepala (Headlamp)',
      message: 'Senter Kepala adalah pilihan terbaik untuk aktivitas hands-free saat mendaki, mendirikan tenda, dan memasak di alam bebas.',
      recommendedSlug: 'senter-kepala',
      recommendedUrl: 'senter-kepala.html',
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter untuk aktivitas Camping / Hiking. Produk apa yang paling cocok?'
    },
    'diving': {
      categoryName: 'Senter Selam (Diving Flashlight)',
      message: 'Senter Selam dengan segel ganda bertekanan tinggi adalah keharusan mutlak untuk visibilitas optimal di bawah air.',
      recommendedSlug: 'senter-selam',
      recommendedUrl: 'senter-selam.html',
      featuredProduct: 'SUPERSENTER DIVE X',
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter untuk aktivitas Diving / Bawah Air. Produk apa yang paling cocok?'
    },
    'memancing': {
      categoryName: 'Senter Memancing',
      message: 'Senter Memancing menghadirkan daya tahan baterai panjang serta pencahayaan ramah pantulan air untuk memantau joran semalaman.',
      recommendedSlug: 'senter-memancing',
      recommendedUrl: 'senter-memancing.html',
      featuredProduct: 'SUPERSENTER FISHER PRO',
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter untuk aktivitas Memancing Malam. Produk apa yang paling cocok?'
    },
    'jarak-jauh': {
      categoryName: 'Senter Terang (High Power)',
      message: 'Senter Terang bertenaga tinggi memberikan jangkauan sorotan ekstra jauh untuk patroli keamanan, pencarian, dan area terbuka luas.',
      recommendedSlug: 'senter-terang',
      recommendedUrl: 'senter-terang.html',
      featuredProduct: 'SUPERSENTER X1',
      waText: 'Halo SUPERSENTER, saya butuh senter dengan penerangan jarak jauh ekstra terang. Ada rekomendasi?'
    },
    'pekerjaan': {
      categoryName: 'Senter Kepala & Taktis',
      message: 'Kombinasi fleksibilitas hands-free dan bodi tahan banting sangat ideal untuk kebutuhan perbengkelan, teknisi, dan proyek malam.',
      recommendedSlug: 'senter-kepala',
      recommendedUrl: 'senter-kepala.html',
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter untuk kebutuhan pekerjaan malam / teknisi.'
    },
    'sehari-hari': {
      categoryName: 'Senter Kompak Bertenaga',
      message: 'Penerangan andal untuk kebutuhan rumah tangga, mati lampu, siaga di bagasi kendaraan, hingga jalan santai di malam hari.',
      recommendedSlug: 'senter-terang',
      recommendedUrl: 'senter-terang.html',
      featuredProduct: 'SUPERSENTER X1',
      waText: 'Halo SUPERSENTER, saya butuh senter serbaguna untuk kebutuhan sehari-hari dan siaga di rumah/mobil.'
    }
  };

  const optionButtons = optionsGrid.querySelectorAll('.finder-option-btn');

  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle Active State
      optionButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const activityKey = btn.getAttribute('data-activity');
      const rec = recommendations[activityKey];

      if (rec) {
        const waLink = window.SUPERSENTER && window.SUPERSENTER.config 
          ? window.SUPERSENTER.config.getWaUrl(rec.waText)
          : `https://wa.me/628388140200?text=${encodeURIComponent(rec.waText)}`;

        resultBox.innerHTML = `
          <div class="finder-result-text">
            <h4>💡 Rekomendasi: ${rec.categoryName}</h4>
            <p>${rec.message}${rec.featuredProduct ? ` Pilihan unggulan: <strong>${rec.featuredProduct}</strong>.` : ''}</p>
          </div>
          <div class="finder-result-actions">
            <a href="${rec.recommendedUrl}" class="btn btn-primary btn-sm">
              LIHAT REKOMENDASI →
            </a>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              KONSULTASI DI WHATSAPP
            </a>
          </div>
        `;
      }
    });
  });
});
