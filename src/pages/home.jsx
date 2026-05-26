import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from '../components/sections/Hero/Hero'

import AOS from '../components/sections/AOS/AOS'
import Products from '../components/sections/Products/Products'
import PracticeAreas from '../components/sections/PracticeAreas/PracticeAreas'
import Stats from '../components/sections/Stats/Stats'
import ROIStats from '../components/sections/ROIStats/ROIStats'
import Vision from '../components/sections/Vision/Vision'
import Security from '../components/sections/Security/Security'
import CTA from '../components/sections/CTA/CTA'


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <AOS />
        <Products />
        <PracticeAreas />
        <Stats />
        <ROIStats />
        <Vision />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  )
}