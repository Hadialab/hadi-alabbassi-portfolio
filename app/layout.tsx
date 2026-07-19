import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hadi Al Abbassi — Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Tailwind CSS, and modern UI/UX. I create fast, responsive, and beautiful web experiences.',
  generator: 'v0.app',
  keywords: ['Frontend Developer', 'React', 'TypeScript', 'Tailwind CSS', 'Web Development'],
  authors: [{ name: 'Hadi Al Abbassi' }],
  openGraph: {
    title: 'Hadi Al Abbassi — Full Stack Developer',
    description: 'Building fast, responsive, and beautiful web experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased font-sans">{children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
