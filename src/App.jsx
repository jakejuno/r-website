
import './App.css'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
