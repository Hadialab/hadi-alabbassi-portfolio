'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Building2, Layout, BarChart3, Palette, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Full-featured websites built with modern frameworks — fast, scalable, and production-ready.',
  },
  {
    icon: Building2,
    title: 'Business Websites',
    description: 'Professional business sites that establish credibility and convert visitors into customers.',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting landing pages with compelling copy and stunning visuals that drive results.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & CRM Development',
    description: 'Complex data-driven dashboards and CRM interfaces with intuitive UX and real-time updates.',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description: 'Pixel-perfect translation of Figma and design mockups into clean, responsive components.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: "Auditing and improving load times, Core Web Vitals, and overall app performance to boost your site's rankings.",
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 text-balance">Services I Offer</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From idea to deployment — I handle the full frontend stack so you can focus on your business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass border border-border rounded-2xl p-6 group hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
