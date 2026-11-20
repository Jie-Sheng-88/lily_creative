import { useEffect } from 'react'

/**
 * Intercepts clicks on in-page "#section" links and scrolls smoothly,
 * leaving 80px of room for the sticky header.
 */
export default function useSmoothHashScroll(offset = 80) {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a')
      if (!link?.hash || link.origin !== window.location.origin) return

      const target = document.getElementById(link.hash.substring(1))
      if (!target) return

      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [offset])
}
