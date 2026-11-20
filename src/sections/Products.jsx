import { ArrowRight } from 'lucide-react'
import LazyImage from '../components/LazyImage'
import TintOverlay from '../components/TintOverlay'
import { IMAGES, LINKS } from '../data/site'

const PRODUCTS = [
  {
    image: IMAGES.product1,
    tag: 'Signature Blend',
    name: 'Kopi Bukit Kepayang Coffee Bag',
    description:
      'Low acidity, clean and smooth. Dark Roast. Brazil cerrado, Brazil santos, Java arabica and Excelsa.',
    pack: '10 sachets per pack',
  },
  {
    image: IMAGES.product2,
    tag: 'Uncang Quick & Bold',
    name: 'Kopi Bukit Kepayang Coffee Bag',
    description:
      'Recommended for Hot Brew, Low Acidity, Heavy Body. Dark Roast. Brazil cerrado, Brazil santos, Java arabica and Excelsa.',
    pack: '10 sachets per pack',
  },
]

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl flex flex-col items-center relative">
      <div className="p-8 w-full relative z-10">
        <LazyImage
          src={product.image}
          alt={product.tag}
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <div className="pt-6 text-center">
          <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
            {product.tag}
          </div>
          <h3 className="text-xl font-bold mb-2 text-brown-900">{product.name}</h3>
          <p className="text-brown-700 mb-4">{product.description}</p>
          <p className="text-brown-900 font-medium mb-6">{product.pack}</p>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-500 transition duration-300 inline-flex items-center gap-1 hover:shadow-md"
          >
            Order Now <ArrowRight size={16} className="animate-pulse" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 relative overflow-hidden">
      <TintOverlay variant="red" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-6 text-center">
          Our Products
        </h2>
        <p className="text-lg text-brown-700 mb-12 text-center max-w-3xl mx-auto">
          A specialty coffee experience with the ease of instant coffee. Just steep, sip, and enjoy.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.tag} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
