import { footerContent } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">DW</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2">{footerContent.title}</h3>
          <p className="text-white/80 mb-1">{footerContent.program}</p>
          <p className="text-white/80 mb-1">{footerContent.university}</p>
          <p className="text-white/60 text-sm mt-4">
            © Tahun {footerContent.year}
          </p>

          {/* Decorative line */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              Dibuat dengan ❤️ untuk Capstone Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
