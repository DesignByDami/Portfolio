import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Cv from './pages/Cv'
import StartProject from './pages/StartProject'
import NotFound from './pages/NotFound'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<CaseStudy />} />
        </Route>
        <Route element={<Layout cta={false} />}>
          <Route path="cv" element={<Cv />} />
          <Route path="start-a-project" element={<StartProject />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
