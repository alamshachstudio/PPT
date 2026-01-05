'use client';

import type { ButtonProps } from '@/types';

const variantClasses = {
  primary:
    'bg-[var(--primary)] text-white hover:bg-[var(--primary-light)] shadow-lg hover:shadow-xl',
  secondary:
    'bg-[var(--accent)] text-white hover:bg-[var(--primary-light)] shadow-md hover:shadow-lg',
  outline:
    'bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center rounded-lg font-semibold
    transition-all duration-300 ease-in-out
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
