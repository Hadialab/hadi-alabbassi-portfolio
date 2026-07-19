'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'PostgreSQL', level: 98 },
      { name: 'Rest APIS', level: 80 },
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vercel', level: 75 },
      { name: 'Docker', level: 88 },
      { name: 'Vite', level: 85 },
    ],
  },
]

const badges = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS',
  'HTML5', 'CSS3', 'Git', 'GitHub', 'Vite', 'REST API', 'Figma',
  'Redux', 'React Query', 'Framer Motion', 'Node.js',
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 text-balance">Skills & Technologies</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            A curated toolkit I&apos;ve mastered over years of building real-world projects.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass border border-border rounded-2xl p-6 flex flex-col gap-5"
            >
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">{cat.category}</h3>
              {cat.skills.map((skill, si) => (
                <div key={skill.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-primary font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05 + 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
              className="px-4 py-2 rounded-xl glass border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default font-mono"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
