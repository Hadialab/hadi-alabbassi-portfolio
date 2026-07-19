'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rami Haddad',
    role: '',
    initials: 'RH',
    rating: 5,
    content:
      "Working with Hadi was an excellent experience. He delivered a modern, responsive website that perfectly matched our vision. Communication was smooth, and the final result exceeded our expectations.",
  },
  {
    name: 'Maya Khoury',
    role: '',
    initials: 'MK',
    rating: 5,
    content:
      'Hadi was professional from start to finish. He paid attention to every detail, met every deadline, and built a website that significantly improved our online presence.',
  },
  {
    name: 'Karim Nasser',
    role: '',
    initials: 'KN',
    rating: 5,
    content:
      "Hadi's technical skills and eye for design are outstanding. Our new platform is fast, easy to use, and has received amazing feedback from our clients. I highly recommend working with him.",
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" ref={ref} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 text-balance">What Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            {"Don't just take my word for it — here's what people who've worked with me have to say."}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass border border-border rounded-2xl p-6 flex flex-col gap-5 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-primary/30" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{t.initials}</span>
                </div>
                <div>
                  <div className="text-foreground text-sm font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
