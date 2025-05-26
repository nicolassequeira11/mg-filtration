import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import ScrollToTop from './hook/ScrollToTop'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Páginas
import { Home } from './pages/Home'
import { MicroFiltration } from './pages/MicroFiltration'
import { UltraFiltration } from './pages/UltraFiltration'
import { NanoFiltration } from './pages/NanoFiltration'
import { ReverseOsmosisFiltration } from './pages/ReverseOsmosisFiltration'
import { Stabilization } from './pages/Stabilization'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'

function App() {

  useEffect(() => {
    AOS.init({ duration: 400 })
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Redirigir a italiano como idioma principal */}
        <Route path="/" element={<Navigate to="/it" replace />} />

        {/* ITALIANO */}
        <Route path="/it" element={<Home language="it" />} />
        <Route path="/it/membranes/microfiltration" element={<MicroFiltration language="it" />} />
        <Route path="/it/membranes/ultrafiltration" element={<UltraFiltration language="it" />} />
        <Route path="/it/membranes/nanofiltration" element={<NanoFiltration language="it" />} />
        <Route path="/it/membranes/reverse-osmosis" element={<ReverseOsmosisFiltration language="it" />} />
        <Route path="/it/membranes/stabilization" element={<Stabilization language="it" />} />
        <Route path="/it/aboutus" element={<AboutUs language="it" />} />
        <Route path="/it/contact" element={<Contact language="it" />} />

        {/* ESPAÑOL */}
        <Route path="/es" element={<Home language="es" />} />
        <Route path="/es/membranes/microfiltration" element={<MicroFiltration language="es" />} />
        <Route path="/es/membranes/ultrafiltration" element={<UltraFiltration language="es" />} />
        <Route path="/es/membranes/nanofiltration" element={<NanoFiltration language="es" />} />
        <Route path="/es/membranes/reverse-osmosis" element={<ReverseOsmosisFiltration language="es" />} />
        <Route path="/es/membranes/stabilization" element={<Stabilization language="es" />} />
        <Route path="/es/aboutus" element={<AboutUs language="es" />} />
        <Route path="/es/contact" element={<Contact language="es" />} />

        {/* INGLÉS */}
        <Route path="/en" element={<Home language="en" />} />
        <Route path="/en/membranes/microfiltration" element={<MicroFiltration language="en" />} />
        <Route path="/en/membranes/ultrafiltration" element={<UltraFiltration language="en" />} />
        <Route path="/en/membranes/nanofiltration" element={<NanoFiltration language="en" />} />
        <Route path="/en/membranes/reverse-osmosis" element={<ReverseOsmosisFiltration language="en" />} />
        <Route path="/en/membranes/stabilization" element={<Stabilization language="en" />} />
        <Route path="/en/aboutus" element={<AboutUs language="en" />} />
        <Route path="/en/contact" element={<Contact language="en" />} />

        {/* FRANCÉS */}
        <Route path="/fr" element={<Home language="fr" />} />
        <Route path="/fr/membranes/microfiltration" element={<MicroFiltration language="fr" />} />
        <Route path="/fr/membranes/ultrafiltration" element={<UltraFiltration language="fr" />} />
        <Route path="/fr/membranes/nanofiltration" element={<NanoFiltration language="fr" />} />
        <Route path="/fr/membranes/reverse-osmosis" element={<ReverseOsmosisFiltration language="fr" />} />
        <Route path="/fr/membranes/stabilization" element={<Stabilization language="fr" />} />
        <Route path="/fr/aboutus" element={<AboutUs language="fr" />} />
        <Route path="/fr/contact" element={<Contact language="fr" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
