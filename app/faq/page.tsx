import FaqAccordion from "@/components/faq-accordion"

export default function FaqPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        <FaqAccordion />
      </div>
    </div>
  )
}
