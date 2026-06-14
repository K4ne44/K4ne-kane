"use client";

import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      <ParticleBackground />
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <AboutSection />
      <SkillsSection />
      <LanguagesSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <FloatingSocials />
    </main>
  );
}
