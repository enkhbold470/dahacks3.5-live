"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { hackathonData } from "@/lib/data"

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {hackathonData.faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-300">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
