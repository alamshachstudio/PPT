import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { analisisKebutuhanContent } from '@/data/content';

export default function AnalisisKebutuhan() {
  return (
    <Section id="analisis-kebutuhan" background="white">
      <SectionTitle
        title="Analisis Kebutuhan"
        subtitle="Metode pengumpulan data dan hasil analisis"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Metode */}
        <Card title="Metode Pengumpulan Data" icon={<span>📊</span>}>
          <div className="space-y-4">
            {analisisKebutuhanContent.metode.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 bg-[var(--cream-light)] rounded-lg"
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-[var(--text-dark)] font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Hasil */}
        <Card title="Hasil Analisis" icon={<span>📋</span>}>
          <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-xl p-6 border border-[var(--primary)]/10">
            <p className="text-[var(--text-dark)] leading-relaxed">
              {analisisKebutuhanContent.hasil}
            </p>
          </div>

          {/* Key requirements badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Autentikasi', 'Kas RT', 'Tabungan', 'Laporan'].map((req) => (
              <span
                key={req}
                className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium"
              >
                {req}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
