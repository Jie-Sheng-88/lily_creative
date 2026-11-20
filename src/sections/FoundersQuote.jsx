import BatikFrame from '../components/BatikFrame'
import LazyImage from '../components/LazyImage'
import TintOverlay from '../components/TintOverlay'
import { IMAGES } from '../data/site'

export default function FoundersQuote() {
  return (
    <section className="py-16 md:py-24 bg-cream-50 relative overflow-hidden">
      <TintOverlay variant="red" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-full mb-4">
            <BatikFrame variant="red">
              <LazyImage
                src={IMAGES.founders}
                alt="Founders of Kopi Bukit Kepayang"
                width={800}
                height={800}
                className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 relative z-10"
              />
            </BatikFrame>
          </div>

          <div className="text-center mt-12 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-amber-600 opacity-20 text-6xl font-serif">
              &quot;
            </div>
            <p className="text-lg text-brown-700 italic relative z-10">
              &quot;We hope you will enjoy our coffee, as much as we enjoy making it ❤️&quot;
            </p>
            <p className="mt-4 text-brown-900 font-medium">- Adam &amp; Nabilah, Founders</p>
          </div>
        </div>
      </div>
    </section>
  )
}
