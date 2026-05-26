import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/home'
import LegoraLanding from './pages/LegoraLanding'
import Expertis from './pages/expertis'
import Kundcase from './pages/Kundcase'
import OmOss from './pages/OmOss'
import Demo from './pages/Demo'
import Webbutveckling from './pages/webbutveckling'
import Apputveckling from './pages/apputveckling'
import Systemutveckling from './pages/systemutveckling'
import AILosningar from './pages/aILosningar'
import ITDrift from './pages/iTDrift'
import Cybersakerhet from './pages/cybersakerhet'
import Integrationer from './pages/integrationer'
import ITSupport from './pages/iTSupport'

// ✅ Scroll fix
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Yahan add kiya */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lagoralanding" element={<LegoraLanding />} />
        <Route path="/expertis" element={<Expertis />} />
        <Route path="/kundcase" element={<Kundcase />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/webbutveckling" element={<Webbutveckling />} />
        <Route path="/apputveckling" element={<Apputveckling />} />
        <Route path="/systemutveckling" element={<Systemutveckling />} />
        <Route path="/ai-losningar" element={<AILosningar />} />
        <Route path="/it-drift" element={<ITDrift />} />
        <Route path="/cybersakerhet" element={<Cybersakerhet />} />
        <Route path="/integrationer" element={<Integrationer />} />
        <Route path="/it-support" element={<ITSupport />} />
      </Routes>
    </BrowserRouter>
  )
}