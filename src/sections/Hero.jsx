import { ArrowRight } from 'lucide-react'
import BatikBackground from '../components/BatikBackground'
import FloatingBeans from '../components/FloatingBeans'
import ScrollIndicator from '../components/ScrollIndicator'
import { LINKS } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <BatikBackground variant="red" opacity={0.1} />
      <div className="absolute inset-0 bg-gradient-to-b from-brown-900/70 to-brown-900/90" />
      <FloatingBeans count={6} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream-100 mb-6 opacity-0 animate-[fadeIn_0.5s_0.1s_forwards]">
            Specialty Coffee Made Simple
          </h1>
          <p className="text-xl text-cream-200 mb-8 opacity-0 animate-[fadeIn_0.5s_0.3s_forwards]">
            Introducing our coffee bag – crafted for those who want a premium coffee experience,
            anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeIn_0.5s_0.5s_forwards]">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-500 transition duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transform"
            >
              Order Now <ArrowRight size={18} className="animate-pulse" />
            </a>
            <a
              href="#products"
              className="bg-transparent border-2 border-cream-200 text-cream-100 px-6 py-3 rounded-full text-lg hover:bg-cream-100/10 transition duration-300 hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <ScrollIndicator />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  )
}
