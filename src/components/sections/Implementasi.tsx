import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { implementasiContent } from '@/data/content';

export default function Implementasi() {
  return (
    <Section id="implementasi" background="white">
      <SectionTitle
        title="Implementasi Sistem"
        subtitle="Teknologi dan metodologi pengembangan"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Description Card */}
        <Card>
          <p className="text-[var(--text-dark)] leading-relaxed text-lg">
            {implementasiContent.description}
          </p>
        </Card>

        {/* Tech Stack */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {implementasiContent.techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-xl p-6 text-center text-white card-hover"
            >
              <div className="text-3xl mb-2">
                {tech.name === 'React Native' && '⚛️'}
                {tech.name === 'Express.js' && '🚀'}
                {tech.name === 'Node.js' && '💚'}
                {tech.name === 'MySQL' && '🐬'}
              </div>
              <h4 className="font-bold mb-1">{tech.name}</h4>
              <p className="text-white/70 text-sm">{tech.category}</p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <Card title="Metodologi Pengembangan" icon={<span>📐</span>}>
          <p className="text-[var(--text-dark)] leading-relaxed mb-6">
            {implementasiContent.methodology}
          </p>

          {/* Waterfall phases */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Perencanaan', 'Analisis', 'Perancangan', 'Implementasi', 'Pengujian', 'Finalisasi'].map(
              (phase, index) => (
                <div key={phase} className="flex items-center">
                  <div className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {phase}
                  </div>
                  {index < 5 && (
                    <svg
                      className="w-6 h-6 text-[var(--primary)] mx-1 hidden sm:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              )
            )}
          </div>
        </Card>
      </div>
    </Section>
  );
}
