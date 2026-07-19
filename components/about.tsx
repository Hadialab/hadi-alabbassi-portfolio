'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'React & Next.js',
  'JavaScript / TypeScript',
  'Tailwind CSS',
  'Git & GitHub',
  'Responsive Design',
  'API Integration',
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass border border-border p-8">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <span className="text-5xl font-bold text-primary">HA</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">Hadi Al Abbassi</h3>
                <p className="text-primary text-sm mt-1 font-mono">Full Stack Developer</p>
                <p className="text-muted-foreground text-sm mt-3">Based in Lebanon</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  { value: '3+', label: 'Yrs Exp' },
                  { value: '50+', label: 'Projects' },
                  { value: '30+', label: 'Clients' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-1 rounded-2xl bg-primary/5 blur-xl -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">About Me</span>
              <h2 className="text-4xl font-bold text-foreground mt-3 text-balance">
                Passionate About Crafting Digital Experiences
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"Hi! I'm Hadi, a Full Stack Developer with 3+ years of experience building modern, performant web applications. I care deeply about clean code, pixel-perfect design, and seamless user experiences."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in turning complex UI/UX designs into reality using React, TypeScript, and Tailwind CSS.
              Whether it&apos;s a landing page, a full-stack SaaS product, or a complex dashboard — I deliver results.
            </p>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Core Competencies</h4>
              <ul className="grid grid-cols-2 gap-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                See My Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg glass border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
