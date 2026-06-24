'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import PlaygroundSection from '@/components/PlaygroundSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const FloatingElements = dynamic(
  () => import('@/components/ui/FloatingElements'),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <PlaygroundSection />
      <ContactSection />
      <Footer />
      <FloatingElements />
    </main>
  )
}
