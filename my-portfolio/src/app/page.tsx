import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
