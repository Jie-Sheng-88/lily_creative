import BatikFrame from '../components/BatikFrame'
import LazyImage from '../components/LazyImage'
import TintOverlay from '../components/TintOverlay'
import { IMAGES } from '../data/site'

export default function LogoMeaning() {
  return (
    <section className="py-16 bg-cream-100 relative overflow-hidden">
      <TintOverlay variant="blue" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="relative max-w-[800px] w-full mx-auto">
            <BatikFrame variant="blue">
              <LazyImage
                src={IMAGES.logoMeaning}
                alt="The meaning behind our logo"
                width={800}
                height={800}
                className="rounded-2xl w-full shadow-lg transition-all duration-500 hover:scale-105 filter hover:brightness-105 relative z-10"
              />
            </BatikFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
