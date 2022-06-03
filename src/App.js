import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { fetchCampsites } from "./features/campsites/campsitesSlice"
import AboutPage from "./pages/AboutPage"
import CampsiteDetailPage from "./pages/CampsiteDetailPage"
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCampsites())
    }, [dispatch])

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
