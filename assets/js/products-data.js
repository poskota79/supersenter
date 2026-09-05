/**
 * SUPERSENTER — Master Product & Category Database
 * Brand: SUPERSENTER (supersenter.com)
 * WhatsApp CS: 0838-8140200 (+628388140200)
 * 
 * CATATAN PENTING:
 * Data teknis belum final dari pabrikan. Semua field dibuat modular,
 * terstruktur rapi, dan mudah disesuaikan ketika spesifikasi final tersedia.
 */

const SUPERSENTER_CONFIG = {
  brandName: "SUPERSENTER",
  domain: "supersenter.com",
  whatsappNumber: "628388140200",
  whatsappFormatted: "0838-8140200",
  googleMapsUrl: "https://share.google/KKaNF1L4Yz8fQzmoQ",
  defaultWaMessage: "Halo SUPERSENTER, saya ingin konsultasi mengenai pilihan senter yang sesuai dengan kebutuhan saya.",
  getWaUrl: function(customText) {
    const text = customText || this.defaultWaMessage;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
  getProductWaUrl: function(productName) {
    const message = `Halo SUPERSENTER, saya tertarik dengan produk ${productName}. Bisa info harga dan detail produknya?`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
};

const SUPERSENTER_CATEGORIES = [
  {
    id: "senter-kepala",
    number: "01",
    name: "Senter Kepala",
    englishName: "Headlamp",
    slug: "senter-kepala",
    url: "senter-kepala.html",
    tagline: "Hands-Free Lighting",
    description: "Hands-free lighting untuk hiking, camping, kerja, dan aktivitas malam tanpa mengganggu pergerakan tangan.",
    image: "assets/images/categories/cat-headlamp.jpg",
    alt: "Penggunaan Senter Kepala Headlamp SUPERSENTER di Malam Hari",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"></circle><path d="M12 9v6"></path><path d="M9 12h6"></path><path d="M4 10h1"></path><path d="M19 10h1"></path><path d="M5 6l1 1"></path><path d="M18 6l-1 1"></path></svg>`,
    highlights: ["Sistem strap elastis nyaman", "Sudut sorot fleksibel", "Cocok untuk aktivitas aktif"]
  },
  {
    id: "senter-selam",
    number: "02",
    name: "Senter Selam",
    englishName: "Diving Flashlight",
    slug: "senter-selam",
    url: "senter-selam.html",
    tagline: "Underwater Illumination",
    description: "Dirancang khusus untuk menerangi kedalaman air laut dan tawar dengan proteksi kedap air tingkat tinggi.",
    image: "assets/images/categories/cat-diving.jpg",
    alt: "Penyelam menggunakan Senter Selam SUPERSENTER di Bawah Laut",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
    highlights: ["Segel ganda anti rembesan", "Penerangan spektrum jernih", "Handling aman di bawah air"]
  },
  {
    id: "senter-terang",
    number: "03",
    name: "Senter Terang",
    englishName: "High Power / Ultra Bright",
    slug: "senter-terang",
    url: "senter-terang.html",
    tagline: "Ultra Bright Illumination",
    description: "Powerful illumination untuk jarak jauh dan area luas. Solusi pencarian, patroli malam, dan keamanan.",
    image: "assets/images/categories/cat-highpower.jpg",
    alt: "Sorotan Senter Terang High Power SUPERSENTER Jarak Jauh",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    highlights: ["Sorotan tajam jarak jauh", "Material aluminium kokoh", "Body solid standar taktis"]
  },
  {
    id: "senter-memancing",
    number: "04",
    name: "Senter Memancing",
    englishName: "Fishing Flashlight",
    slug: "senter-memancing",
    url: "senter-memancing.html",
    tagline: "Night Fishing Specialist",
    description: "Teman terbaik untuk memancing malam hari. Cahaya stabil dan terarah untuk memantau joran dan perairan.",
    image: "assets/images/categories/cat-fishing.jpg",
    alt: "Aktivitas Memancing Malam Hari dengan Senter SUPERSENTER",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>`,
    highlights: ["Sorot fokus permukaan air", "Durasi pemakaian prima", "Tahan percikan air sungai & laut"]
  }
];

const SUPERSENTER_PRODUCTS = [
  {
    id: "supersenter-x1",
    slug: "supersenter-x1",
    name: "SUPERSENTER X1",
    tagline: "High Power Tactical Flashlight",
    category: "Senter Terang",
    categorySlug: "senter-terang",
    categoryUrl: "senter-terang.html",
    badge: "BEST SELLER",
    badgeType: "best-seller",
    price: "Rp 389.000",
    oldPrice: "Rp 499.000",
    image: "assets/images/products/supersenter-x1.jpg",
    gallery: [
      "assets/images/products/supersenter-x1.jpg",
      "assets/images/hero/hero-flashlight.jpg",
      "assets/images/categories/cat-highpower.jpg"
    ],
    alt: "Senter Terang Taktis SUPERSENTER X1",
    rating: {
      score: "5.0",
      reviewsCount: 86
    },
    shortDescription: "Senter taktis berdaya tinggi dengan rancangan bodi tangguh dan pencahayaan intens untuk kebutuhan outdoor dan pengamanan.",
    fullDescription: "SUPERSENTER X1 dirancang bagi Anda yang menginginkan pencahayaan maksimal dengan ketahanan bodi tinggi. Menggunakan konstruksi aerospace-grade aluminium dengan tekstur knurled grip anti-selip, senter ini memberikan pegangan mantap di berbagai medan dan cuaca. Dilengkapi sistem optik presisi untuk menghasilkan beam tajam terarah baik untuk eksplorasi alam bebas, patroli malam, maupun kebutuhan siaga di kendaraan.",
    keyFeatures: [
      "Penerangan bertenaga tinggi untuk jangkauan luas & jarak jauh",
      "Bodi kokoh bertekstur anti-slip dengan perlindungan benturan",
      "Sistem pendingin terintegrasi untuk menjaga performa cahaya stabil",
      "Mendukung pengisian ulang praktis dan efisien",
      "Bezel depan kokoh untuk perlindungan lensa maksimal",
      "Tombol taktis responsif dengan akses mode instan"
    ],
    specifications: [
      { label: "Kategori Produk", value: "Senter Terang / Tactical Flashlight" },
      { label: "Kode Model", value: "SS-X1-TAC" },
      { label: "Sistem Daya", value: "Rechargeable Battery System" },
      { label: "Material Bodi", value: "Hard-Anodized Aluminum Alloy" },
      { label: "Ketahanan Cuaca", value: "Outdoor Water-Resistant Seal" },
      { label: "Mode Pencahayaan", value: "Multi-Mode (High, Med, Low, Strobe)" },
      { label: "Rekomendasi Pakai", value: "Outdoor, Camping, Patroli, Keamanan, Mobil" },
      { label: "Status Ketersediaan", value: "Ready Stock — Konsultasi via WhatsApp" }
    ],
    included: [
      "1x Unit SUPERSENTER X1",
      "1x Kabel Pengisian Daya Cepat",
      "1x Tali Gantungan (Lanyard) Taktis",
      "1x Buku Panduan Penggunaan & Garansi Layanan"
    ]
  },
  {
    id: "supersenter-head-pro",
    slug: "supersenter-head-pro",
    name: "SUPERSENTER HEAD PRO",
    tagline: "Rechargeable LED Headlamp",
    category: "Senter Kepala",
    categorySlug: "senter-kepala",
    categoryUrl: "senter-kepala.html",
    badge: "POPULAR",
    badgeType: "popular",
    price: "Rp 279.000",
    oldPrice: "Rp 350.000",
    image: "assets/images/products/supersenter-head-pro.jpg",
    gallery: [
      "assets/images/products/supersenter-head-pro.jpg",
      "assets/images/categories/cat-headlamp.jpg",
      "assets/images/hero/hero-flashlight.jpg"
    ],
    alt: "Senter Kepala Headlamp SUPERSENTER HEAD PRO",
    rating: {
      score: "4.9",
      reviewsCount: 64
    },
    shortDescription: "Senter kepala ergonomis bertenaga dengan strap elastis nyaman. Pilihan hands-free terbaik untuk hiking, camping, dan pekerjaan teknis.",
    fullDescription: "Bebaskan kedua tangan Anda untuk mendaki gunung, memasang tenda, memperbaiki mesin, atau bersepeda malam. SUPERSENTER HEAD PRO menghadirkan distribusi bobot yang seimbang dengan headband bernapas (breathable) yang tidak menekan kepala. Sudut kemiringan lampu dapat disesuaikan hingga 60 derajat untuk mengarahkan cahaya tepat pada pijakan atau area kerja Anda.",
    keyFeatures: [
      "Desain hands-free ergonomis dengan distribusi berat optimal",
      "Strap kepala elastis berkualitas tinggi yang dapat disesuaikan",
      "Sudut tilt lampu fleksibel hingga 60 derajat",
      "Dua pilihan mode sorotan: fokus jarak jauh & sebaran jarak dekat",
      "Baterai isi ulang hemat energi dengan indikator level daya",
      "Tahan terhadap cipratan air hujan dan debu outdoor"
    ],
    specifications: [
      { label: "Kategori Produk", value: "Senter Kepala / Headlamp" },
      { label: "Kode Model", value: "SS-HP-PRO" },
      { label: "Sistem Daya", value: "Rechargeable Lithium Battery" },
      { label: "Pengaturan Sudut", value: "Multi-Angle Tilt Mechanism (60°)" },
      { label: "Material Headband", value: "Washable Elastic Breathable Strap" },
      { label: "Ketahanan Cuaca", value: "Splash Proof Weather Seal" },
      { label: "Rekomendasi Pakai", value: "Hiking, Camping, Trail Run, Mekanik, Pekerjaan Malam" },
      { label: "Status Ketersediaan", value: "Ready Stock — Konsultasi via WhatsApp" }
    ],
    included: [
      "1x Unit SUPERSENTER HEAD PRO",
      "1x Premium Elastic Headband",
      "1x Kabel Pengisian Daya USB",
      "1x Petunjuk Penggunaan & Konsultasi"
    ]
  },
  {
    id: "supersenter-dive-x",
    slug: "supersenter-dive-x",
    name: "SUPERSENTER DIVE X",
    tagline: "Professional Diving Flashlight",
    category: "Senter Selam",
    categorySlug: "senter-selam",
    categoryUrl: "senter-selam.html",
    badge: "RECOMMENDED",
    badgeType: "recommended",
    price: "Rp 549.000",
    oldPrice: "Rp 699.000",
    image: "assets/images/products/supersenter-dive-x.jpg",
    gallery: [
      "assets/images/products/supersenter-dive-x.jpg",
      "assets/images/categories/cat-diving.jpg",
      "assets/images/products/supersenter-x1.jpg"
    ],
    alt: "Senter Selam Menyelam SUPERSENTER DIVE X",
    rating: {
      score: "5.0",
      reviewsCount: 42
    },
    shortDescription: "Senter selam profesional dengan proteksi segel ganda bertekanan tinggi untuk menerangi keindahan bawah laut dengan kejernihan maksimal.",
    fullDescription: "Menjelajahi dunia bawah air membutuhkan senter yang tidak hanya terang, tetapi juga memiliki keandalan mutlak dalam menahan tekanan air. SUPERSENTER DIVE X dibekali sistem insulasi O-ring ganda serta magnetic switch yang aman dari rembesan air laut. Sorotan optik khusus dirancang untuk menembus partikel air keruh dan merefleksikan warna terumbu karang secara natural.",
    keyFeatures: [
      "Proteksi kedap air ganda dirancang untuk penyelaman",
      "Switch magnetik anti-bocor yang mudah dioperasikan dengan sarung tangan",
      "Beam penetrasi tinggi untuk kejernihan di air tawar maupun laut",
      "Lapisan anti-korosi tahan terhadap paparan garam air laut",
      "Dilengkapi wrist lanyard tebal untuk keamanan penyelam",
      "Kaca tempered anti-pecah berdaya tahan tekanan tinggi"
    ],
    specifications: [
      { label: "Kategori Produk", value: "Senter Selam / Diving Flashlight" },
      { label: "Kode Model", value: "SS-DX-MARIN" },
      { label: "Tipe Switch", value: "Magnetic Slide / Rotary Switch" },
      { label: "Segel Kedap Air", value: "Dual High-Pressure O-Ring System" },
      { label: "Material Bodi", value: "Marine-Grade Corrosion Resistant Alloy" },
      { label: "Tipe Lensa", value: "Toughened Ultra-Clear Glass Lens" },
      { label: "Rekomendasi Pakai", value: "Scuba Diving, Snorkeling, Spear Fishing, Cave Diving" },
      { label: "Status Ketersediaan", value: "Ready Stock — Konsultasi via WhatsApp" }
    ],
    included: [
      "1x Unit SUPERSENTER DIVE X",
      "1x Tali Pengaman Pergelangan Tangan (Wrist Lanyard)",
      "2x Cadangan O-Ring Kedap Air",
      "1x Kabel Charger Cepat",
      "1x Kotak Pelindung & Panduan"
    ]
  },
  {
    id: "supersenter-fisher-pro",
    slug: "supersenter-fisher-pro",
    name: "SUPERSENTER FISHER PRO",
    tagline: "Fishing & Outdoor Flashlight",
    category: "Senter Memancing",
    categorySlug: "senter-memancing",
    categoryUrl: "senter-memancing.html",
    badge: "NEW",
    badgeType: "new",
    price: "Rp 329.000",
    oldPrice: "Rp 420.000",
    image: "assets/images/products/supersenter-fisher-pro.jpg",
    gallery: [
      "assets/images/products/supersenter-fisher-pro.jpg",
      "assets/images/categories/cat-fishing.jpg",
      "assets/images/hero/hero-flashlight.jpg"
    ],
    alt: "Senter Memancing Malam Hari SUPERSENTER FISHER PRO",
    rating: {
      score: "4.9",
      reviewsCount: 39
    },
    shortDescription: "Sahabat pemancing malam hari dengan ketahanan baterai ekstra panjang, spektrum cahaya ramah air, dan bodi tahan cipratan ombak.",
    fullDescription: "Sesi memancing malam membutuhkan senter yang dapat diandalkan berjam-jam tanpa khawatir redup. SUPERSENTER FISHER PRO menawarkan efisiensi konsumsi daya superior dengan mode cahaya lembut untuk memasang umpan serta sorotan kuat saat memantau sambaran ikan di air. Tahan lembap, cipratan air, serta mudah dipasang pada tripod atau diletakkan stabil di bebatuan.",
    keyFeatures: [
      "Manajemen daya hemat energi untuk sesi memancing semalaman",
      "Pilihan cahaya terarah yang tidak membuat silau pantulan air",
      "Ketahanan terhadap cipratan air sungai, embun pagi, dan laut",
      "Bodi ergonomis dengan dudukan stabil untuk diletakkan di tepi joran",
      "Pengisian daya USB praktis yang kompatibel dengan power bank",
      "Bahan komposit kokoh dan ringan dibawa kemanapun"
    ],
    specifications: [
      { label: "Kategori Produk", value: "Senter Memancing & Outdoor" },
      { label: "Kode Model", value: "SS-FP-NIGHT" },
      { label: "Sistem Daya", value: "High-Capacity Long-Run Rechargeable Cell" },
      { label: "Kompatibilitas", value: "Support Power Bank Charging" },
      { label: "Ketahanan Cuaca", value: "Splash & Moisture Resistant" },
      { label: "Mode Khusus", value: "Low Water Glare Mode & High Search" },
      { label: "Rekomendasi Pakai", value: "Mancing Kolam/Laut/Sungai, Berkemah, Ronda Malam" },
      { label: "Status Ketersediaan", value: "Ready Stock — Konsultasi via WhatsApp" }
    ],
    included: [
      "1x Unit SUPERSENTER FISHER PRO",
      "1x Kabel Pengisian Micro-USB/Type-C",
      "1x Klip Penjepit Portabel",
      "1x Petunjuk Penggunaan & Garansi Layanan"
    ]
  }
];

// Helper Functions
function getAllProducts() {
  return SUPERSENTER_PRODUCTS;
}

function getProductBySlug(slug) {
  if (!slug) return null;
  return SUPERSENTER_PRODUCTS.find(p => p.slug.toLowerCase() === slug.toLowerCase()) || null;
}

function getProductsByCategory(categorySlug) {
  if (!categorySlug) return SUPERSENTER_PRODUCTS;
  return SUPERSENTER_PRODUCTS.filter(p => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

function getCategoryBySlug(slug) {
  if (!slug) return null;
  return SUPERSENTER_CATEGORIES.find(c => c.slug.toLowerCase() === slug.toLowerCase()) || null;
}

// Global Export
window.SUPERSENTER = {
  config: SUPERSENTER_CONFIG,
  categories: SUPERSENTER_CATEGORIES,
  products: SUPERSENTER_PRODUCTS,
  getAllProducts: getAllProducts,
  getProductBySlug: getProductBySlug,
  getProductsByCategory: getProductsByCategory,
  getCategoryBySlug: getCategoryBySlug
};
