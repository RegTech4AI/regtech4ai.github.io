import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Publications from './components/Publications.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import './index.css'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publications" element={
          <Layout>
            <Publications />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
