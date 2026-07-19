'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, Link2, Mail } from 'lucide-react'

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${5 + (i * 4.7) % 90}%`,
            top: `${10 + (i * 7.3) % 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: (i * 0.3) % 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <AnimatedGrid />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for freelance work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance"
        >
          I Build{' '}
          <span className="text-primary">Modern</span>{' '}
          Websites &amp;{' '}
          <br className="hidden md:block" />
          Web Applications.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="max-w-2xl text-muted-foreground text-lg leading-relaxed text-pretty"
        >
          Full Stack Developer specializing in React, Tailwind CSS, and modern UI/UX.
          I create fast, responsive, and beautiful web experiences that users love.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-7 py-3 rounded-lg glass border border-border text-foreground font-medium hover:border-primary/40 hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center gap-4 pt-2">
          {[
            { icon: GitBranch, href: 'https://github.com/Hadialab', label: 'GitHub' },
            { icon: Link2, href: 'https://www.linkedin.com/in/hadialabbassi/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hadialabbassi01@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-8 pt-6">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
