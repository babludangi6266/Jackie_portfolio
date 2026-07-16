import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLSectionElement> {
  id?: string;
}

export const Section = forwardRef<HTMLSectionElement, SectionProps>(
  ({ className = '', id, children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`py-16 sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = 'Section';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader = ({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-dark-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};