import { ArrowRight } from 'lucide-react'
import { IMAGES, NAV_ITEMS } from '../data/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-brown-900/95 backdrop-blur supports-[backdrop-filter]:bg-brown-900/80">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <img
              src={IMAGES.logo}
              alt="Kopi Bukit Kepayang Logo"
              width={50}
              height={50}
              className="w-12 h-12 hover:scale-105 transition-transform"
            />
            <span className="text-lg md:text-xl font-serif font-bold text-cream-100">
              Kopi Bukit Kepayang
            </span>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-cream-100 hover:text-cream-300 font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#order-now"
              className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-500 transition duration-300 flex items-center gap-1 whitespace-nowrap text-sm md:text-base hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Order Now <ArrowRight size={16} className="animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
