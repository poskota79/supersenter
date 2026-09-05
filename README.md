# SUPERSENTER — Official E-Commerce Website

Website e-commerce modern, premium, responsive, dan conversion-focused untuk brand **SUPERSENTER** (domain: `supersenter.com`), spesialis senter berkualitas tinggi untuk outdoor, camping, diving, memancing, pekerjaan, dan aktivitas malam hari.

Seluruh konversi diarahkan langsung ke WhatsApp resmi Customer Service: **0838-8140200** (`https://wa.me/628388140200`).

---

## 🚀 Fitur & Keunggulan Website

1. **Design Direction Premium & Maskulin**:
   - Dark stealth aesthetic (`#080A0D`, `#11151A`, `#151A22`) dipadukan dengan aksen *Electric Yellow* (`#FFE600`) yang presisi untuk CTA dan sorotan cahaya.
   - Tipografi modern dan tegas menggunakan Google Fonts *Plus Jakarta Sans*.
   - Transisi halus, glassmorphism navbar dengan backdrop blur, subtle glow pada tombol CTA, dan efek interaktif yang cepat.

2. **Conversion Funnel Berfokus WhatsApp**:
   - Sticky navbar dengan tombol CTA "BELI VIA WHATSAPP".
   - Hero section dengan ganda CTA ("LIHAT PRODUK" & "BELI VIA WHATSAPP").
   - Halaman produk detail dengan tombol "TANYAKAN PRODUK VIA WHATSAPP" yang secara otomatis meng-encode nama produk ke parameter URL WhatsApp:
     `https://wa.me/628388140200?text=Halo%20SUPERSENTER%2C%20saya%20tertarik%20dengan%20produk%20[NAMA%20PRODUK]...`
   - Floating WhatsApp button di sudut kanan bawah dengan efek denyut halus (pulse) tanpa menutupi konten penting.

3. **Struktur Halaman Lengkap (Multi-Page)**:
   - `index.html` — Homepage utama (Hero, Value Bar 4 Pilar, Kategori Unggulan, Produk Pilihan, Kenapa SUPERSENTER, Use Cases "Satu Senter Banyak Petualangan", Quiz Product Finder, Testimoni Pelanggan, FAQ Accordion, Final CTA, Footer).
   - `produk.html` — Katalog lengkap seluruh produk dengan tombol filter kategori instan.
   - `senter-kepala.html` — Landing page khusus kategori Senter Kepala (Headlamp).
   - `senter-selam.html` — Landing page khusus kategori Senter Selam (Diving).
   - `senter-terang.html` — Landing page khusus kategori Senter Terang (High Power).
   - `senter-memancing.html` — Landing page khusus kategori Senter Memancing (Fishing).
   - `produk-detail.html` — Halaman detail produk dinamis (Galeri foto & thumbnails, harga, fitur utama, tabel spesifikasi teknis, kelengkapan box, CTA WhatsApp dinamis, dan produk terkait).
   - `tentang-kami.html` — Cerita brand, visi "Terang Lebih Jauh", dan filosofi kualitas.
   - `faq.html` — Halaman pusat bantuan dengan 8 tanya jawab accordion.
   - `kontak.html` — Halaman kontak resmi dan 4 langkah panduan pemesanan via WhatsApp.

4. **Komponen Interaktif**:
   - **Product Finder ("Butuh Bantuan Memilih Senter?")**: Kuis aktivitas interaktif yang langsung memberikan rekomendasi produk dan tombol konsultasi WA tanpa reload.
   - **Accordion FAQ**: Desain accordion bersih, responsif, dan accessible (`aria-expanded`).
   - **Galeri Produk Dinamis**: Thumbnail switcher yang responsif saat diklik.
   - **Filter Katalog**: Pengelompokan produk secara instan berdasarkan kategori.

5. **Pemisahan Data & UI (Maintainability)**:
   - Seluruh data produk tersimpan di `assets/js/products-data.js`. Anda dapat dengan mudah mengubah nama produk, harga, deskripsi, foto, maupun spesifikasi tanpa perlu mengubah kode HTML di banyak tempat.

---

## 📁 Struktur Berkas

```
supersenter github/
├── index.html                   # Beranda Utama
├── produk.html                  # Katalog Produk dengan Filter
├── senter-kepala.html           # Halaman Kategori Senter Kepala
├── senter-selam.html            # Halaman Kategori Senter Selam
├── senter-terang.html           # Halaman Kategori Senter Terang
├── senter-memancing.html        # Halaman Kategori Senter Memancing
├── produk-detail.html           # Template Halaman Detail Produk Dinamis
├── tentang-kami.html            # Halaman Tentang Brand & Visi
├── faq.html                     # Halaman FAQ & Bantuan
├── kontak.html                  # Halaman Kontak Resmi & Panduan Order
├── README.md                    # Dokumentasi Proyek
├── assets/
│   ├── css/
│   │   ├── variables.css        # Variabel Warna, Tipografi & Spacing
│   │   ├── main.css             # Base Reset, Navbar, Hero & Footer
│   │   ├── components.css       # Cards, Buttons, Finder, Testimoni, Floating WA
│   │   └── pages.css            # Style Halaman Detail Produk & Katalog
│   ├── js/
│   │   ├── products-data.js     # Master Database Produk & Helper WA
│   │   ├── navbar.js            # Sticky Header & Mobile Drawer
│   │   ├── product-finder.js    # Logika Interaktif Pemilih Senter
│   │   ├── faq.js               # Logika Accordion FAQ
│   │   ├── product-detail.js    # Galeri Thumbnail & Parser URL Produk
│   │   └── main.js              # Inisialisasi Filter Katalog & Footer
│   └── images/
│       ├── hero/
│       │   └── hero-flashlight.jpg
│       ├── categories/
│       │   ├── cat-headlamp.jpg
│       │   ├── cat-diving.jpg
│       │   ├── cat-highpower.jpg
│       │   └── cat-fishing.jpg
│       └── products/
│           ├── supersenter-x1.jpg
│           ├── supersenter-head-pro.jpg
│           ├── supersenter-dive-x.jpg
│           └── supersenter-fisher-pro.jpg
```

---

## 🛠️ Cara Menjalankan & Menguji Website

Website ini menggunakan **Vanilla Web Standards (Pure HTML5, CSS3, ES6+ JS)** tanpa memerlukan node_modules atau build tools.

1. **Buka Langsung di Browser**:
   - Cukup klik ganda (double-click) berkas `index.html` pada File Explorer untuk membukanya di Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari.

2. **Deploy ke GitHub Pages**:
   - Push folder ini ke repositori GitHub Anda (`supersenter`).
   - Masuk ke menu **Settings > Pages** pada repositori GitHub.
   - Pada opsi *Build and deployment*, pilih branch `main` (atau `master`) dan folder `/ (root)`, lalu klik **Save**.
   - Website akan langsung live dalam beberapa detik di URL GitHub Pages Anda.

3. **Deploy ke Vercel / Netlify**:
   - Drag & drop folder repositori ini ke dashboard Netlify atau import di Vercel, website langsung aktif 100% tanpa build script.

---

## ✏️ Cara Mengubah / Menambah Produk

Cukup buka berkas `assets/js/products-data.js` dan tambahkan atau ubah objek produk pada array `SUPERSENTER_PRODUCTS`:

```javascript
{
  id: "nama-produk-baru",
  slug: "nama-produk-baru",
  name: "SUPERSENTER BARU",
  tagline: "High Performance Flashlight",
  category: "Senter Terang",
  categorySlug: "senter-terang",
  categoryUrl: "senter-terang.html",
  badge: "NEW",
  badgeType: "new",
  price: "Rp 350.000",
  oldPrice: "Rp 450.000",
  image: "assets/images/products/nama-foto.jpg",
  gallery: [
    "assets/images/products/nama-foto.jpg"
  ],
  rating: { score: "5.0", reviewsCount: 12 },
  shortDescription: "Deskripsi singkat produk.",
  fullDescription: "Deskripsi lengkap produk.",
  keyFeatures: [
    "Fitur 1",
    "Fitur 2"
  ],
  specifications: [
    { label: "Kategori Produk", value: "Senter Terang" }
  ],
  included: [
    "1x Unit Senter",
    "1x Kabel USB"
  ]
}
```

Website akan secara otomatis merender produk baru tersebut di katalog, halaman detail, dan menghubungkan pesan WhatsApp dengan nama produk yang sesuai.
