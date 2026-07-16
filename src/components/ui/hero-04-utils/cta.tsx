import * as React from 'react'
import { Button } from '@/components/ui/Button'

export interface CtaProps {
  ctaEnabled: boolean
  text: string
  link: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'md'
}

export function Cta({ cta }: { cta: CtaProps }) {
  if (!cta || !cta.ctaEnabled) return null

  const isExternal = cta.link.startsWith('http') || cta.link.startsWith('mailto:') || cta.link.startsWith('tel:')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cta.link.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(cta.link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Button
      asChild
      variant={cta.variant === 'default' ? 'primary' : (cta.variant as any)}
      size={cta.size === 'default' ? 'lg' : (cta.size as any)}
    >
      <a
        href={cta.link}
        onClick={handleClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {cta.text}
      </a>
    </Button>
  )
}
