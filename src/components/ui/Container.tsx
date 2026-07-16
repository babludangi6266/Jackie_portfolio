import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', size = 'lg', children, ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[90rem]',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className = '', id, children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`py-10 sm:py-12 lg:py-16 ${className}`}
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