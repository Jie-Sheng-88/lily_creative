import AnimatedCoffeeIcon from '../components/AnimatedCoffeeIcon'
import BatikBackground from '../components/BatikBackground'
import BatikFrame from '../components/BatikFrame'
import LazyImage from '../components/LazyImage'
import { IMAGES } from '../data/site'

export default function CoffeeBeans() {
  return (
    <section className="py-16 bg-brown-800 text-cream-100 relative overflow-hidden">
      <BatikBackground variant="red" opacity={0.1} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-1 order-2 relative">
              <BatikFrame variant="red">
                <LazyImage
                  src={IMAGES.beans}
                  alt="Fresh coffee beans on traditional tray"
                  width={600}
                  height={400}
                  className="rounded-2xl relative z-10 shadow-xl transition-all duration-500 hover:scale-105"
                />
              </BatikFrame>
            </div>

            <div className="md:order-2 order-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Coffee Beans</h2>
              <p className="text-lg mb-6">
                We carefully select the finest coffee beans from Brazil cerrado, Brazil santos, Java
                arabica, and Excelsa.
              </p>
              <p className="text-lg mb-6">
                Each bean is meticulously sorted and roasted to perfection to create our signature
                blends that deliver a smooth, low-acidity coffee experience.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <AnimatedCoffeeIcon size={32} />
                <span className="text-lg font-medium">Roasted with passion, brewed with ease</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
