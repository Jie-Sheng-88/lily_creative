import { Instagram, Mail, Phone } from 'lucide-react'
import TintOverlay from '../components/TintOverlay'
import { IMAGES, LINKS } from '../data/site'

const iconLink =
  'text-cream-300 hover:text-cream-100 transition-all duration-300 hover:scale-110 transform'

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-200 py-12 relative overflow-hidden">
      <TintOverlay variant="blue" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img
              src={IMAGES.logo}
              alt="Kopi Bukit Kepayang Logo"
              width={60}
              height={60}
              className="transition-transform duration-300 hover:scale-110"
            />
            <div>
              <h3 className="text-xl font-serif font-bold text-cream-100">Kopi Bukit Kepayang</h3>
              <p className="text-sm text-cream-300">Specialty Coffee Made Simple</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2">📍 Based in: Seremban, Malaysia</p>
            <div className="flex gap-4">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="WhatsApp">
                <Phone size={24} />
              </a>
              <a href={LINKS.email} className={iconLink} aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-800 pt-6 text-center">
          <p className="text-sm">© 2025 Kopi Bukit Kepayang. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
