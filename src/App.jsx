import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Front from './pages/Front/Front'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'


function App() {

  return (
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Front />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
