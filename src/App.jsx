import SectionDivider from './components/SectionDivider'
import useSmoothHashScroll from './hooks/useSmoothHashScroll'
import About from './sections/About'
import CoffeeBeans from './sections/CoffeeBeans'
import Features from './sections/Features'
import Footer from './sections/Footer'
import FoundersQuote from './sections/FoundersQuote'
import Header from './sections/Header'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import LogoMeaning from './sections/LogoMeaning'
import OrderCTA from './sections/OrderCTA'
import PerfectBag from './sections/PerfectBag'
import Products from './sections/Products'

export default function App() {
  useSmoothHashScroll(80)

  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Features />
        <SectionDivider variant="blue" />
        <About />
        <SectionDivider variant="red" />
        <CoffeeBeans />
        <LogoMeaning />
        <SectionDivider variant="blue" />
        <Products />
        <SectionDivider variant="red" />
        <PerfectBag />
        <HowItWorks />
        <SectionDivider variant="blue" />
        <FoundersQuote />
        <SectionDivider variant="red" />
        <OrderCTA />
      </main>

      <Footer />
    </div>
  )
}
