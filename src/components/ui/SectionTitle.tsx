import type { SectionTitleProps } from '@/types';

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`decorative-line mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
