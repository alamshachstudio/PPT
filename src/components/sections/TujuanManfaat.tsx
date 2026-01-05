import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { tujuanManfaatContent } from '@/data/content';

export default function TujuanManfaat() {
  return (
    <Section id="tujuan-manfaat" background="cream">
      <SectionTitle
        title="Tujuan & Manfaat"
        subtitle="Tujuan pengembangan dan manfaat bagi pengguna"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tujuan */}
        <Card
          title="Tujuan"
          icon={<span>🎯</span>}
          className="lg:col-span-1"
        >
          <ul className="space-y-3">
            {tujuanManfaatContent.tujuan.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[var(--primary)] text-xs font-bold">
                    {item.id}
                  </span>
                </div>
                <span className="text-[var(--text-dark)]">{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Manfaat Warga */}
        <Card
          title="Manfaat untuk Warga"
          icon={<span>👥</span>}
        >
          <ul className="space-y-3">
            {tujuanManfaatContent.manfaatWarga.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--text-dark)]">{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Manfaat Pengurus */}
        <Card
          title="Manfaat untuk Pengurus RT"
          icon={<span>👔</span>}
        >
          <ul className="space-y-3">
            {tujuanManfaatContent.manfaatPengurus.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[var(--text-dark)]">{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
