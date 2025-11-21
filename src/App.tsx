import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-900 antialiased">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-blue-300 font-extrabold text-xl">CB</div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Clinicabot</h1>
              <p className="text-xs text-gray-500">WhatsApp health companion</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#features" className="text-gray-600 hover:text-primary transition">Features</a>
            <a href="#how" className="text-gray-600 hover:text-primary transition">How it works</a>
            <a href="#contact" className="bg-accent text-blue-300 px-5 py-2.5 rounded-full shadow-lg shadow-accent/30 hover:bg-accent/90 transition transform hover:scale-[1.01]">Get Started</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App