import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { rumusanMasalahContent } from '@/data/content';

export default function RumusanMasalah() {
  return (
    <Section id="rumusan-masalah" background="cream">
      <SectionTitle
        title="Rumusan Masalah"
        subtitle="Permasalahan yang dihadapi dalam pengelolaan keuangan RT"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {rumusanMasalahContent.map((item, index) => (
          <Card key={item.id} className="relative overflow-hidden">
            {/* Number badge */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
              <span className="text-[var(--primary)] font-bold text-sm">
                {index + 1}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">{item.icon}</div>
              <p className="text-[var(--text-dark)] leading-relaxed pr-8">
                {item.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
