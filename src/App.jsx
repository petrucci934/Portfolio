
import './index.css'
import Cta from './sections/Cta'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'

const App=() =>  {
  return (
    <div className='bg-themeBlack min-h-screen'>
      <Header/>
      <Hero/>
      <Services/>
      <Pricing/>
      <Projects/>
      <Testimonials/>
      <Cta/>
      <Footer />
    </div>
   

  )
}

export default App
