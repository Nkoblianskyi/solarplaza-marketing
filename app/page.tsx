import HeroSection from "@/components/sections/hero-section"
import AboutShortSection from "@/components/sections/about-short-section"
import ServiceOverviewSection from "@/components/sections/service-overview-section"
import WorkPreviewSection from "@/components/sections/work-preview-section"
import CreativeProcessSection from "@/components/sections/creative-process-section"
import QuoteBlockSection from "@/components/sections/quote-block-section"
import ArticlePreviewSection from "@/components/sections/article-preview-section"
import FAQSection from "@/components/sections/faq-section"
import CTASection from "@/components/sections/cta-section"
import UrbanImpactGallery from "@/components/sections/urban-impact-gallery"
import MaterialesFormatos from "@/components/sections/materiales-formatos"
import ProyectosTemporales from "@/components/sections/proyectos-temporales"
import NuestroEnfoque from "@/components/sections/nuestro-enfoque"

export default async function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HeroSection />
      <AboutShortSection />
      <ServiceOverviewSection />
      <WorkPreviewSection />
      <UrbanImpactGallery />
      <CreativeProcessSection />
      <MaterialesFormatos />
      <QuoteBlockSection />
      <NuestroEnfoque />
      <ArticlePreviewSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
