'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { Cta, type CtaProps } from '@/components/ui/hero-04-utils/cta'

export interface Hero04Props {
  title: string
  washImage?: string
  titleLine2?: string
  description: string
  primaryImage: string
  primaryAlt?: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  variant?: 'standard' | 'compact'
}

const variantStyles = {
  standard: {
    section: 'pt-10 pb-16 sm:pt-14 sm:pb-24',
    title: 'text-4xl sm:text-5xl md:text-6xl',
    description: 'max-w-md text-sm sm:text-base',
    header: 'gap-5',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-3xl sm:text-4xl md:text-5xl',
    description: 'max-w-sm text-sm',
    header: 'gap-4',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero04({
  title,
  titleLine2,
  description,
  washImage,
  primaryImage,
  primaryAlt = '',
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
}: Readonly<Hero04Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const backgroundElement = (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Premium dark grid overlay */}
      <div className="absolute inset-0 bg-[#080b11] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Animating spotlight lights */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-primary-500/10 to-blue-500/0 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-blue-500/10 to-primary-500/0 rounded-full blur-3xl" />
    </div>
  )

  const badgeElement = (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950/40 border border-primary-500/30 text-primary-300 text-[10px] sm:text-xs font-semibold mb-2 tracking-wide uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 block animate-pulse" />
      Available for Advisory & Software Consulting
    </div>
  )

  const titleElement = title && (
    <div className="space-y-2">
      <h1
        className={cn(
          'text-white font-serif font-bold tracking-tight text-balance leading-none',
          vs.title,
        )}
      >
        <Balancer>{title}</Balancer>
      </h1>
      {titleLine2 && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-blue-400 font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight block pt-1">
          {titleLine2}
        </span>
      )}
    </div>
  )

  const descriptionElement = description && (
    <p className={cn('text-dark-300 leading-relaxed max-w-lg mt-4 text-xs sm:text-sm md:text-base', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctasElement = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'glassOutline' }}
        />
      )}
    </div>
  )

  // Single portrait media element - styled cleanly with neon backing glow
  const mediaElement = (
    <div className="relative w-full max-w-[260px] sm:max-w-[290px] aspect-[3/4] select-none mx-auto lg:mr-0 lg:ml-auto group">
      {/* Glow shadow behind image */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-500" />
      
      {/* Portrait Image directly */}
      <img
        src={primaryImage}
        alt={primaryAlt || "Jackie Mohanty"}
        className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Floating decorative capsule badge */}
      <div className="absolute -bottom-4 -left-4 bg-dark-950/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 shadow-lg z-20 flex items-center gap-2">
        <span className="text-base leading-none">📈</span>
        <div>
          <p className="text-[8px] text-dark-400 font-semibold uppercase leading-none">Consulting</p>
          <p className="text-[10px] font-bold text-white mt-0.5 leading-none">10+ Projects Delivered</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#080b11]">
      {backgroundElement}

      <motion.div
        className={cn(
          'relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-12 items-center px-6 gap-10 lg:gap-12',
          vs.section,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Left Column (65% to 70% content width) */}
        <Reveal
          active={animate}
          className={cn('flex flex-col items-start lg:col-span-8', vs.header)}
        >
          {badgeElement}
          {titleElement}
          {descriptionElement}
          {ctasElement}
        </Reveal>

        {/* Right Column (30% width portrait card) */}
        <Reveal 
          active={animate} 
          variants={mediaItem} 
          className="w-full lg:col-span-4 flex justify-center lg:justify-end"
        >
          {mediaElement}
        </Reveal>
      </motion.div>
    </section>
  )
}

export default Hero04;
