import AnimatedCoffeeIcon from '../components/AnimatedCoffeeIcon'
import BatikBackground from '../components/BatikBackground'
import FloatingBeans from '../components/FloatingBeans'

const STEPS = [
  { title: 'Tear open the bag', text: 'No need for extra equipment.' },
  { title: 'Pour hot water', text: 'Let it steep for 3-5 minutes.' },
  { title: 'Enjoy', text: 'Like a pour-over, but easier.' },
]

const DIFFERENCES = [
  'Better than instant coffee – real specialty beans',
  'No complicated brewing gear needed',
  'Perfect for travel, office, or home',
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-brown-900 text-cream-100 relative overflow-hidden"
    >
      <BatikBackground variant="red" opacity={0.1} />
      <FloatingBeans count={4} />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1
            return (
              <div
                key={step.title}
                className={`text-center flex flex-col items-center ${isLast ? '' : 'relative'}`}
              >
                <div
                  className={`bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110 hover:rotate-3 ${
                    isLast ? '' : 'relative z-10'
                  }`}
                >
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                {/* Connector line to the next step (desktop only) */}
                {!isLast && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-amber-600/30" />
                )}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-cream-200">{step.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-brown-800 rounded-2xl p-8 max-w-3xl mx-auto transform transition duration-500 hover:shadow-xl relative">
          <h3 className="text-xl font-bold mb-4 text-center relative z-10">Why It&apos;s Different</h3>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {DIFFERENCES.map((text) => (
              <div key={text} className="flex flex-col items-center text-center">
                <AnimatedCoffeeIcon size={32} className="mb-3" />
                <p className="text-cream-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
