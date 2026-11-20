/** Very faint blue or red wash over a section. */
export default function TintOverlay({ variant = 'blue', opacity = 0.05, className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: variant === 'blue' ? '#f0f4f8' : '#fff5f5', opacity }}
      />
    </div>
  )
}
