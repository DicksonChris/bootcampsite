import './App.css'
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Header from './components/Header'
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage'
import CampsiteDetailPage from './pages/CampsiteDetailPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/directory' element={<CampsitesDirectoryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App