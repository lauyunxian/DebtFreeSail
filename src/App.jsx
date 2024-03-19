import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Front from './pages/Front/Front'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import DebtConsolidation from './pages/DebtConsolidation/DebtConsolidation'
import InvestmentScheme from './pages/InvestmentScheme/InvestmentScheme'
import FinancialEducation from './pages/FinancialEducation/FinancialEducation'
import Budget from './pages/FinancialEducation/Budget/Budget'
import ApplicationForm from './pages/ApplicationForm/ApplicationForm'
import InvestmentForm from './pages/InvestForm/InvestForm'

function App() {

  return (
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Front />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/debt-consolidation' element={<DebtConsolidation />} />
            <Route path='/investment-scheme' element={<InvestmentScheme />} />
            <Route path='/financial-education' element={<FinancialEducation />} />
            <Route path='/financial-education/budget' element={<Budget />} />
            <Route path='/application-form' element={<ApplicationForm />} />
            <Route path='/investment-form' element={<InvestmentForm />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
