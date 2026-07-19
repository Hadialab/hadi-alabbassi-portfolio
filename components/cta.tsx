'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, GitBranch, Link2 } from 'lucide-react'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

          <div className="relative glass border border-border rounded-3xl p-12 md:p-16">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">{"Let's Connect"}</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance leading-tight">
              {"Let's Build Something"}{' '}
              <span className="text-primary">Amazing</span>{' '}
              Together.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {"Have a project in mind or want to explore collaboration? I'd love to hear from you. Let's create something great."}
            </p>

            {/* Primary CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="mailto:hadialabbassi01@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Mail size={20} />
                Contact Me
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">or reach out directly</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <GitBranch size={18} />
                github.com/Hadialab
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Link2 size={18} />
                linkedin.com/in/hadialabbassi
              </a>
              <a
                href="mailto:hadialabbassi01@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail size={18} />
                hadialabbassi01@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
