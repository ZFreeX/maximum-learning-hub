
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedCourses from '../components/FeaturedCourses'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedCourses />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
