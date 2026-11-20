import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

/** Bouncing "Scroll to explore" hint; hides once the user scrolls past 100px. */
export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY <= 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <p className="text-cream-100 text-sm mb-2">Scroll to explore</p>
      <ChevronDown className="text-cream-100" size={24} />
    </div>
  )
}
