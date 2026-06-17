import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Areas from './components/Areas'
import Palestras from './components/Palestras'
import ParaQuem from './components/ParaQuem'
import Contato from './components/Contato'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Areas />
        <Palestras />
        <ParaQuem />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
