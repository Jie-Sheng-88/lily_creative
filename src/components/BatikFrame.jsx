import { IMAGES } from '../data/site'

const corner = 'absolute w-12 h-12 border-amber-600/30 z-10'

/** Wraps an image with a soft batik backdrop and four amber corner brackets. */
export default function BatikFrame({ variant = 'blue', children, className = '' }) {
  const image = variant === 'blue' ? IMAGES.batikBlue : IMAGES.batikRed

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')`, opacity: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
      </div>

      <div className={`${corner} top-0 left-0 border-t-4 border-l-4 rounded-tl-lg -translate-x-2 -translate-y-2`} />
      <div className={`${corner} top-0 right-0 border-t-4 border-r-4 rounded-tr-lg translate-x-2 -translate-y-2`} />
      <div className={`${corner} bottom-0 left-0 border-b-4 border-l-4 rounded-bl-lg -translate-x-2 translate-y-2`} />
      <div className={`${corner} bottom-0 right-0 border-b-4 border-r-4 rounded-br-lg translate-x-2 translate-y-2`} />

      <div className="relative z-20">{children}</div>
    </div>
  )
}
