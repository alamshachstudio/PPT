import type { CardProps } from '@/types';

export default function Card({
  title,
  icon,
  children,
  className = '',
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-md border border-[var(--cream-dark)]
        ${hoverable ? 'card-hover' : ''}
        ${className}
      `}
    >
      {(icon || title) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-2xl">{icon}</div>}
          {title && (
            <h3 className="text-lg font-semibold text-[var(--primary)]">
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
