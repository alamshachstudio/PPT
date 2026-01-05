import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { latarBelakangContent } from '@/data/content';

export default function LatarBelakang() {
  return (
    <Section id="latar-belakang" background="white">
      <SectionTitle
        title="Latar Belakang"
        subtitle="Mengapa Dompet Warga dikembangkan?"
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-[var(--cream)] rounded-2xl p-8 md:p-10 border border-[var(--cream-dark)] shadow-sm">
          {latarBelakangContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-[var(--text-dark)] leading-relaxed text-justify ${
                index < latarBelakangContent.paragraphs.length - 1 ? 'mb-6' : ''
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Location badge */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-medium">
            <span>📍</span>
            <span>RT 03/RW 09 Desa Klapagading</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
