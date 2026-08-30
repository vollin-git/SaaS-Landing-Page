import { Route, Routes } from 'react-router-dom'

import { LandingPage } from '@/pages/LandingPage'
import { ContactPage } from '@/pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
