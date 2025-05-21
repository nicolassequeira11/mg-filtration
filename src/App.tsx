import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import ScrollToTop from './hook/ScrollToTop'

import { Home } from './pages/Home'
import { MicroFiltration } from './pages/MicroFiltration'
import { UltraFiltration } from './pages/UltraFiltration'
import { NanoFiltration } from './pages/NanoFiltration'
import { ReverseOsmosisFiltration } from './pages/ReverseOsmosisFiltration'
import { Stabilization } from './pages/Stabilization'
import { AboutUs } from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membranes/microfiltration" element={<MicroFiltration />} />
        <Route path="/membranes/ultrafiltration" element={<UltraFiltration />} />
        <Route path="/membranes/nanofiltration" element={<NanoFiltration />} />
        <Route path="/membranes/reverse-osmosis" element={<ReverseOsmosisFiltration />} />
        <Route path="/membranes/stabilization" element={<Stabilization />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
