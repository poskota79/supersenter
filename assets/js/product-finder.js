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
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter untuk aktivitas Diving / Bawah Air. Produk apa yang paling cocok?'
    },
    'tangan': {
      categoryName: 'Senter Tangan (Handheld)',
      message: 'Senter Tangan adalah senter genggam paling fleksibel: dari EDC harian isi ulang USB sampai taktis 4000 lumens dengan mode strobo dan SOS.',
      recommendedSlug: 'senter-tangan',
      recommendedUrl: 'senter-tangan.html',
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter tangan. Produk apa yang paling cocok?'
    },
    'ultraviolet': {
      categoryName: 'Senter Ultraviolet (UV)',
      message: 'Senter ultraviolet mengungkap hal tak terlihat: cek keaslian uang dan dokumen, deteksi noda dan urin hewan, hingga berburu kalajengking di malam hari.',
      recommendedSlug: 'senter-ultraviolet',
      recommendedUrl: 'senter-ultraviolet.html',
      waText: 'Halo SUPERSENTER, saya butuh senter ultraviolet untuk keperluan deteksi. Ada rekomendasi?'
    },
    'pekerjaan': {
      categoryName: 'Senter Kepala & Taktis',
      message: 'Kombinasi fleksibilitas hands-free dan bodi tahan banting sangat ideal untuk kebutuhan perbengkelan, teknisi, dan proyek malam.',
      recommendedSlug: 'senter-kepala',
      recommendedUrl: 'senter-kepala.html',
      waText: 'Halo SUPERSENTER, saya butuh rekomendasi senter untuk kebutuhan pekerjaan malam / teknisi.'
    },
    'sehari-hari': {
      categoryName: 'Senter Kepala (Headlamp)',
      message: 'Penerangan andal untuk kebutuhan rumah tangga, mati lampu, siaga di bagasi kendaraan, hingga jalan santai di malam hari.',
      recommendedSlug: 'senter-kepala',
      recommendedUrl: 'senter-kepala.html',
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
