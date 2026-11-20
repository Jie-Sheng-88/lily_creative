import { useEffect, useState } from 'react'
import { Coffee } from 'lucide-react'

/**
 * Coffee cup icon that tilts every 3 seconds and flashes a small amber "ping" dot.
 * Colour is inherited from the parent unless `iconClassName` sets one.
 */
export default function AnimatedCoffeeIcon({ size = 24, iconClassName = '', className = '' }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let timeout
    const interval = setInterval(() => {
      setActive(true)
      timeout = setTimeout(() => setActive(false), 1000)
    }, 3000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <Coffee
        size={size}
        className={`${iconClassName} transition-all duration-700 ${
          active ? 'transform -rotate-12 scale-110' : ''
        }`}
      />
      {active && (
        <div className="absolute -top-2 -right-1 w-2 h-2 rounded-full bg-amber-500 opacity-80">
          <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping" />
        </div>
      )}
    </div>
  )
}
