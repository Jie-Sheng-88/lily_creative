import { useState } from 'react'

function makeBeans(count) {
  return Array.from({ length: count }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 20 + Math.random() * 15,
    delay: Math.random() * 5,
  }))
}

/** Randomly placed oval "coffee beans" that drift slowly behind a section. */
export default function FloatingBeans({ count = 5 }) {
  const [beans] = useState(() => makeBeans(count))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="absolute"
          style={{
            left: `${bean.x}%`,
            top: `${bean.y}%`,
            transform: `rotate(${bean.rotation}deg)`,
            animation: `float 15s ease-in-out ${bean.delay}s infinite alternate`,
          }}
        >
          <div
            className="bg-brown-600 rounded-full"
            style={{ width: `${bean.size}px`, height: `${bean.size / 2}px` }}
          />
        </div>
      ))}
    </div>
  )
}
