import AnimatedCoffeeIcon from '../components/AnimatedCoffeeIcon'
import BatikFrame from '../components/BatikFrame'
import LazyImage from '../components/LazyImage'
import TintOverlay from '../components/TintOverlay'
import { IMAGES } from '../data/site'

export default function PerfectBag() {
  return (
    <section className="py-16 bg-cream-100 overflow-hidden relative">
      <TintOverlay variant="red" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-6">
                The Perfect Coffee Bag
              </h2>
              <p className="text-lg text-brown-700 mb-6">
                The idea to create specialty coffee sachets is to help our parents enjoy delicious
                coffee without the fuss of brewing methods like V60 or espresso.
              </p>
              <p className="text-lg text-brown-700 mb-6">
                Each coffee bag is carefully filled with freshly ground specialty coffee, sealed to
                preserve flavor, and designed for maximum convenience.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <AnimatedCoffeeIcon size={32} iconClassName="text-amber-600" />
                <span className="text-lg font-medium text-brown-900">Premium coffee, simplified</span>
              </div>
            </div>

            <div className="relative">
              <BatikFrame variant="blue">
                <LazyImage
                  src={IMAGES.perfectBag}
                  alt="Kopi Bukit Kepayang coffee bag and cup"
                  width={600}
                  height={600}
                  className="rounded-2xl relative z-10 shadow-xl transition-all duration-500 hover:scale-105"
                />
              </BatikFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
