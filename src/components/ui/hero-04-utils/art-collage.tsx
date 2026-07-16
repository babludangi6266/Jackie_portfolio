'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { Image } from '@/components/ui/Image'

export interface ArtCollageProps {
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
}

export function ArtCollage({
  primaryImage,
  secondaryImage,
  primaryAlt = 'Primary Image',
  secondaryAlt = 'Secondary Image',
}: Readonly<ArtCollageProps>) {
  return (
    <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center p-6 select-none">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 pointer-events-none" />

      {/* Primary Image Card */}
      <motion.div
        className="absolute left-6 top-8 w-[68%] aspect-[3/4] rounded-2xl overflow-hidden border border-primary-200 bg-white p-2.5 shadow-2xl z-10"
        style={{ rotate: '-4deg' }}
        whileHover={{ 
          rotate: '-2deg', 
          scale: 1.02, 
          y: -4,
          transition: { duration: 0.3, ease: 'easeOut' } 
        }}
      >
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50">
          <Image
            src={primaryImage}
            alt={primaryAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Secondary Image Card */}
      <motion.div
        className="absolute right-6 bottom-8 w-[48%] aspect-[4/5] rounded-2xl overflow-hidden border border-dark-100 bg-white p-2 shadow-xl z-20"
        style={{ rotate: '6deg' }}
        whileHover={{ 
          rotate: '4deg', 
          scale: 1.04, 
          y: -6,
          transition: { duration: 0.3, ease: 'easeOut' } 
        }}
      >
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50">
          <Image
            src={secondaryImage}
            alt={secondaryAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}
export default ArtCollage;
