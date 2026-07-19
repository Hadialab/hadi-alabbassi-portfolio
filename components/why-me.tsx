'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Smartphone, Gauge, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I write maintainable, well-documented code that follows best practices — easy to hand off or scale.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Every project looks and works flawlessly across all screen sizes — mobile, tablet, and desktop.',
  },
  {
    icon: Gauge,
    title: 'Fast Performance',
    description: 'Optimized for Core Web Vitals with lazy loading, code splitting, and minimal bundle sizes.',
  },
  {
    icon: Sparkles,
    title: 'Modern UI/UX',
    description: 'Polished interfaces with smooth animations, intuitive interactions, and pixel-perfect execution.',
  },
]

export default function WhyMe() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-me" ref={ref} className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Advantages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 text-balance">Why Work With Me?</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            I bring more than just code — I bring clarity, craftsmanship, and commitment to every project.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass border border-border rounded-2xl p-6 text-center group hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
