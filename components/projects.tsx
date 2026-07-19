'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'ShopVibe — E-Commerce Platform',
    description: 'A full-featured online store with product catalog, cart, checkout, and admin dashboard built with Next.js and Stripe.',
    image: '/images/project-ecommerce.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Metrics Pro — Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, KPI tracking, and customizable widgets for SaaS businesses.',
    image: '/images/project-saas.png',
    tags: ['React', 'Recharts', 'TypeScript', 'REST API'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'DevFolio — Portfolio Template',
    description: 'A fully animated, production-ready developer portfolio template with dark mode, smooth transitions, and SEO optimization.',
    image: '/images/project-portfolio.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'ClientHub — CRM System',
    description: 'Customer relationship management tool with contact tracking, deal pipeline, and task management for small businesses.',
    image: '/images/project-crm.png',
    tags: ['Next.js', 'Prisma', 'TypeScript', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Inkwell — Publishing Platform',
    description: 'A modern blog and content publishing platform with a rich text editor, categories, and reader analytics.',
    image: '/images/project-blog.png',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'BookEase — Scheduling App',
    description: 'Appointment booking system with calendar integration, email notifications, and a clean mobile-first interface.',
    image: '/images/project-booking.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    demo: '#',
    repo: '#',
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 text-balance">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A selection of real-world projects that demonstrate my skills and attention to detail.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="glass border border-border rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20" />
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    aria-label="GitHub Repository"
                  >
                    <GitBranch size={16} />
                  </a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-foreground font-semibold text-base leading-snug">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors border border-primary/15"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg glass border border-border text-muted-foreground text-xs font-medium hover:text-foreground hover:border-border/80 transition-colors"
                  >
                    <GitBranch size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
