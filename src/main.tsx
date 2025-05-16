import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Footer } from './components/footer/Footer.tsx'
import "./i18n.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='font-worksans'>
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
