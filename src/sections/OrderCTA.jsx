import { ArrowRight } from 'lucide-react'
import BatikBackground from '../components/BatikBackground'
import FloatingBeans from '../components/FloatingBeans'
import { LINKS } from '../data/site'

export default function OrderCTA() {
  return (
    <section id="order-now" className="py-16 md:py-24 bg-amber-600 text-white relative overflow-hidden">
      <BatikBackground variant="red" opacity={0.1} />
      <FloatingBeans count={6} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for Fresh Coffee?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Order via WhatsApp and get freshly roasted coffee bags every Friday.
        </p>
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-cream-100 transition duration-300 inline-flex items-center gap-2 hover:shadow-xl hover:-translate-y-1 transform"
        >
          Order Now on WhatsApp <ArrowRight size={20} className="animate-pulse" />
        </a>
        <p className="mt-6 text-amber-100">Each pack contains 10 coffee bags</p>
      </div>
    </section>
  )
}
