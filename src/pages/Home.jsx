import React, { lazy, Suspense } from 'react';
import Hero from '../sections/Hero';

// Lazy load below-fold sections for performance
const TrustSection = lazy(() => import('../sections/TrustSection'));
const ServicesSection = lazy(() => import('../sections/ServicesSection'));
const ProblemsSection = lazy(() => import('../sections/ProblemsSection'));
const ProjectsSection = lazy(() => import('../sections/ProjectsSection'));
const ProcessSection = lazy(() => import('../sections/ProcessSection'));
const WhyUsSection = lazy(() => import('../sections/WhyUsSection'));
const FAQSection = lazy(() => import('../sections/FAQSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

function SectionFallback() {
  return <div className="h-32 bg-cream-50" />;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <TrustSection />
        <ServicesSection />
        <ProblemsSection />
        <ProjectsSection />
        <ProcessSection />
        <WhyUsSection />
        <FAQSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}
