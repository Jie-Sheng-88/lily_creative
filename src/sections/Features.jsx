import { Check, Clock, CupSoda, Leaf } from 'lucide-react'

const FEATURES = [
  { icon: Check, title: 'Specialty coffee made easy' },
  { icon: Clock, title: 'Roasted fresh every Friday' },
  { icon: CupSoda, title: 'No machine needed – just hot water' },
  { icon: Leaf, title: 'Portable & convenient' },
]

export default function Features() {
  return (
    <section className="py-12 bg-cream-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {FEATURES.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-cream-100 rounded-xl p-6 text-center hover:shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-lg flex flex-col items-center"
            >
              <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-white" />
              </div>
              <h3 className="font-medium text-brown-800">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
