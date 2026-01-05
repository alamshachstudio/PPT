import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { kesimpulanContent } from '@/data/content';

export default function Kesimpulan() {
  return (
    <Section id="kesimpulan" background="cream">
      <SectionTitle
        title="Kesimpulan"
        subtitle="Ringkasan hasil pengembangan sistem"
      />

      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>

          {/* Text */}
          <p className="text-xl md:text-2xl leading-relaxed font-medium">
            {kesimpulanContent.text}
          </p>

          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Efisiensi', 'Transparansi', 'Kemudahan Akses'].map((point) => (
              <span
                key={point}
                className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
              >
                ✓ {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
