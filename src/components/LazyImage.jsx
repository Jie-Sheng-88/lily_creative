import { useState } from 'react'

/** Image that shows a cream shimmer until it loads, then fades/scales in. */
export default function LazyImage({ src, alt, width, height, className = '', priority = false }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden flex justify-center items-center ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 bg-cream-100 animate-pulse">
          <div
            className="h-full w-full bg-gradient-to-r from-cream-100 via-cream-200 to-cream-100 animate-shimmer"
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`transition-all duration-700 mx-auto object-contain ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  )
}
