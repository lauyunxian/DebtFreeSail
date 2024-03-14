import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Front from './pages/Front/Front'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import DebtConsolidation from './pages/DebtConsolidation/DebtConsolidation'

function App() {

  return (
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Front />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/debt-solution' element={<DebtConsolidation />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
