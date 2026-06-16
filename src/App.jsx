import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './css/card.scss'
import Footer from './components/footer'
import ScrollToTop from './components/helper/scroll-to-top'
import ScrollToHash from './components/helper/scroll-to-hash'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <ToastContainer />
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

