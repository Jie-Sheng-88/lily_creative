/** Thin horizontal colour fade placed between sections. */
export default function SectionDivider({ variant = 'blue', className = '' }) {
  const color = variant === 'blue' ? '#f0f4f8' : '#fff5f5'

  return (
    <div className={`relative h-16 w-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />
    </div>
  )
}
