import type {
  NavItem,
  ContentItem,
  FeatureItem,
  ScreenshotItem,
  TestingTableItem,
  TujuanManfaatData,
  FiturSistemData,
  AnalisisKebutuhanData,
} from '@/types';

// Navigation items
export const navItems: NavItem[] = [
  { id: 'hero', label: 'Beranda' },
  { id: 'latar-belakang', label: 'Latar Belakang' },
  { id: 'rumusan-masalah', label: 'Rumusan Masalah' },
  { id: 'tujuan-manfaat', label: 'Tujuan & Manfaat' },
  { id: 'fitur-sistem', label: 'Fitur' },
  { id: 'implementasi', label: 'Implementasi' },
  { id: 'pengujian', label: 'Pengujian' },
  { id: 'download', label: 'Download' },
];

// Hero section content
export const heroContent = {
  title: 'Dompet Warga',
  subtitle: 'Sistem Informasi Keuangan RT Berbasis Digital',
  description:
    'Dompet Warga merupakan solusi digital untuk membantu pengelolaan kas RT dan tabungan warga secara rapi, efisien, dan transparan.',
  primaryButton: 'Lihat Proyek',
  secondaryButton: 'Download Aplikasi',
};

// Latar Belakang content
export const latarBelakangContent = {
  paragraphs: [
    'Pengelolaan keuangan di tingkat Rukun Tetangga (RT) memiliki peran penting dalam menunjang kegiatan sosial dan administrasi warga. Namun, pencatatan keuangan RT masih sering dilakukan secara manual menggunakan buku catatan, sehingga rawan kesalahan pencatatan, memerlukan waktu lama dalam proses rekapitulasi, serta menyulitkan warga dalam mengakses informasi keuangan.',
    'Berdasarkan hasil observasi dan wawancara di RT 03/RW 09 Desa Klapagading, pencatatan kas RT dan tabungan warga masih dilakukan secara manual. Kondisi ini menyebabkan proses pelaporan keuangan menjadi kurang efisien dan transparansi informasi kepada warga belum optimal. Oleh karena itu, diperlukan sistem informasi keuangan berbasis digital yang mampu membantu pengelolaan keuangan RT secara lebih efektif dan terstruktur.',
  ],
};

// Rumusan Masalah content
export const rumusanMasalahContent: ContentItem[] = [
  { id: 1, text: 'Pencatatan kas RT dan tabungan warga masih manual', icon: '📋' },
  { id: 2, text: 'Rekapitulasi keuangan memakan waktu lama', icon: '⏰' },
  { id: 3, text: 'Risiko kesalahan dan kehilangan data', icon: '⚠️' },
  { id: 4, text: 'Warga belum memiliki akses langsung ke laporan', icon: '🔒' },
];

// Batasan Masalah content
export const batasanMasalahContent: ContentItem[] = [
  { id: 1, text: 'Hanya untuk RT 03/RW 09 Desa Klapagading', icon: '📍' },
  { id: 2, text: 'Pengelolaan data hanya oleh admin', icon: '👤' },
  { id: 3, text: 'Fokus kas RT dan tabungan warga', icon: '💰' },
  { id: 4, text: 'Tidak untuk RT lain', icon: '🚫' },
];

// Tujuan & Manfaat content
export const tujuanManfaatContent: TujuanManfaatData = {
  tujuan: [
    { id: 1, text: 'Mengembangkan aplikasi mobile pengelolaan keuangan RT' },
    { id: 2, text: 'Mempermudah pencatatan dan pelaporan' },
    { id: 3, text: 'Memberikan akses informasi keuangan kepada warga' },
  ],
  manfaatWarga: [
    { id: 1, text: 'Akses informasi digital' },
    { id: 2, text: 'Transparansi meningkat' },
  ],
  manfaatPengurus: [
    { id: 1, text: 'Pencatatan rapi' },
    { id: 2, text: 'Mengurangi kesalahan' },
  ],
};

// Analisis Kebutuhan content
export const analisisKebutuhanContent: AnalisisKebutuhanData = {
  metode: [
    { id: 1, text: 'Wawancara pengurus RT', icon: '🎤' },
    { id: 2, text: 'Wawancara warga', icon: '👥' },
    { id: 3, text: 'Observasi langsung', icon: '👁️' },
  ],
  hasil:
    'Sistem membutuhkan autentikasi pengguna, pengelolaan kas RT, tabungan warga, dan laporan keuangan.',
};

// Fitur Sistem content
export const fiturSistemContent: FiturSistemData = {
  admin: [
    { id: 1, title: 'Login & Logout', icon: '🔐', description: 'Autentikasi aman untuk admin' },
    { id: 2, title: 'Manajemen Akun Warga', icon: '👥', description: 'Kelola data akun warga' },
    { id: 3, title: 'Kelola Kas RT', icon: '💵', description: 'Catat pemasukan dan pengeluaran' },
    { id: 4, title: 'Kelola Tabungan Warga', icon: '🏦', description: 'Atur tabungan setiap warga' },
    { id: 5, title: 'Kelola Kegiatan RT', icon: '📅', description: 'Manajemen kegiatan RT' },
    { id: 6, title: 'Scan QR Tabungan', icon: '📱', description: 'Verifikasi cepat dengan QR' },
  ],
  warga: [
    { id: 1, title: 'Login & Logout', icon: '🔐', description: 'Akses akun pribadi' },
    { id: 2, title: 'Melihat Kas RT', icon: '📊', description: 'Pantau kas RT real-time' },
    { id: 3, title: 'Melihat Tabungan', icon: '💰', description: 'Cek saldo tabungan' },
    { id: 4, title: 'Riwayat Transaksi', icon: '📜', description: 'Lihat histori transaksi' },
    { id: 5, title: 'Kelola Profil', icon: '⚙️', description: 'Ubah data profil' },
  ],
};

// Implementasi content
export const implementasiContent = {
  description:
    'Aplikasi Dompet Warga dikembangkan menggunakan React Native sebagai frontend dan Express.js dengan Node.js sebagai backend. Basis data menggunakan MySQL untuk menyimpan data keuangan secara terpusat.',
  methodology:
    'Pengembangan sistem mengikuti pendekatan waterfall yang meliputi perencanaan, analisis kebutuhan, perancangan sistem, implementasi, pengujian, dan finalisasi.',
  techStack: [
    { name: 'React Native', category: 'Frontend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'MySQL', category: 'Database' },
  ],
};

// Hasil Implementasi screenshots
export const hasilImplementasiContent: ScreenshotItem[] = [
  { id: 1, src: '/images/hasil/login.png', alt: 'Halaman Login', title: 'Login' },
  { id: 2, src: '/images/hasil/dashboard-admin.png', alt: 'Dashboard Admin', title: 'Dashboard Admin' },
  { id: 3, src: '/images/hasil/kelola-kas.png', alt: 'Kelola Kas RT', title: 'Kelola Kas RT' },
  { id: 4, src: '/images/hasil/kelola-tabungan.png', alt: 'Kelola Tabungan', title: 'Kelola Tabungan' },
  { id: 5, src: '/images/hasil/halaman-warga.png', alt: 'Halaman Warga', title: 'Halaman Warga' },
  { id: 6, src: '/images/hasil/riwayat-transaksi.png', alt: 'Riwayat Transaksi', title: 'Riwayat Transaksi' },
];

// Pengujian content
export const pengujianContent = {
  functionalTesting: {
    title: 'Functional Testing',
    tables: [
      { id: 1, src: '/images/testing/functional-user.png', alt: 'Functional Testing User', title: 'Functional Testing User' },
      { id: 2, src: '/images/testing/functional-admin.png', alt: 'Functional Testing Admin', title: 'Functional Testing Admin' },
    ] as TestingTableItem[],
  },
  usabilityTesting: {
    title: 'Usability Testing',
    tables: [
      { id: 1, src: '/images/testing/usability-warga.png', alt: 'Task Success Warga', title: 'Task Success Warga' },
      { id: 2, src: '/images/testing/usability-admin.png', alt: 'Task Success Admin', title: 'Task Success Admin' },
    ] as TestingTableItem[],
  },
  conclusion: 'Aplikasi memenuhi kebutuhan pengguna dan layak digunakan.',
};

// Kesimpulan content
export const kesimpulanContent = {
  text: 'Dompet Warga berhasil dikembangkan sebagai solusi digital pengelolaan keuangan RT yang meningkatkan efisiensi, transparansi, dan kemudahan akses informasi.',
};

// Download QR content
export const downloadContent = {
  title: 'Download Aplikasi',
  description: 'Scan QR Code untuk mengunduh aplikasi Dompet Warga.',
  qrImage: '/images/qr-download.png',
};

// Footer content
export const footerContent = {
  title: 'Capstone Project',
  program: 'Program Studi Teknologi Informasi',
  university: 'Universitas Muhammadiyah Yogyakarta',
  year: '2026',
};
