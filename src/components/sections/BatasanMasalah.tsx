import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { batasanMasalahContent } from '@/data/content';

export default function BatasanMasalah() {
  return (
    <Section id="batasan-masalah" background="white">
      <SectionTitle
        title="Batasan Masalah"
        subtitle="Ruang lingkup pengembangan sistem"
      />

      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-2xl p-8 md:p-10 text-white shadow-xl">
          <ul className="space-y-4">
            {batasanMasalahContent.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <span className="text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
