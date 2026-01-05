import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { fiturSistemContent } from '@/data/content';

export default function FiturSistem() {
  return (
    <Section id="fitur-sistem" background="cream">
      <SectionTitle
        title="Fitur Sistem"
        subtitle="Fitur-fitur yang tersedia untuk Admin dan Warga"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Admin Features */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)] flex items-center justify-center">
              <span className="text-white text-2xl">👤</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--primary)]">
              Fitur Admin
            </h3>
          </div>

          <div className="grid gap-4">
            {fiturSistemContent.admin.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[var(--cream-dark)] card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warga Features */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--accent)]">
              Fitur Warga
            </h3>
          </div>

          <div className="grid gap-4">
            {fiturSistemContent.warga.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-[var(--cream-dark)] card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
