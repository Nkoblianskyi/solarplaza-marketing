"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqData from "@/data/faq.json"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value)
  }

  return (
    <section className="py-16 container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Preguntas Frecuentes</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Respuestas a las dudas más comunes sobre nuestros servicios
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible value={openItem || undefined}>
          {faqData.preguntas.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                onClick={() => handleItemClick(`item-${index}`)}
                className="text-left font-medium text-lg"
              >
                {item.pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
