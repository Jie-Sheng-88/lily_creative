import BatikFrame from '../components/BatikFrame'
import LazyImage from '../components/LazyImage'
import TintOverlay from '../components/TintOverlay'
import { IMAGES } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <TintOverlay variant="blue" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-brown-700 mb-6">
                Kopi Bukit Kepayang is a micro-roaster based in Seremban, dedicated to bringing
                specialty coffee to everyone in the simplest way possible.
              </p>
              <p className="text-lg text-brown-700 mb-6">
                We believe great coffee should be effortless. Our coffee bag bridges the gap
                between instant coffee and specialty coffee, so you can enjoy fresh, high-quality
                coffee anywhere, every day.
              </p>
              <p className="text-lg text-brown-700 font-medium">
                Orders are roasted fresh every Friday to ensure the best flavor.
              </p>
            </div>

            <div className="relative">
              <BatikFrame variant="blue">
                <LazyImage
                  src={IMAGES.about}
                  alt="Founders of Kopi Bukit Kepayang"
                  width={600}
                  height={600}
                  className="rounded-2xl relative z-10 transition-all duration-500 hover:scale-105"
                />
              </BatikFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
