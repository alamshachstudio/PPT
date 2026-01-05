'use client';

import type { SectionProps } from '@/types';

const backgroundClasses = {
  cream: 'bg-[var(--cream)]',
  white: 'bg-[var(--cream-light)]',
  primary: 'bg-[var(--primary)] text-white',
};

export default function Section({
  id,
  className = '',
  children,
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
