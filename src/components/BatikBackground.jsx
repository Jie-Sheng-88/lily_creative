import { IMAGES } from '../data/site'

/** Full-bleed batik photo laid behind a section at low opacity. */
export default function BatikBackground({ variant = 'red', opacity = 0.05, className = '' }) {
  const image = variant === 'blue' ? IMAGES.batikBlue : IMAGES.batikRed

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})`, opacity }}
      />
    </div>
  )
}
