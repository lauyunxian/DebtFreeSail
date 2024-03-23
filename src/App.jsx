import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Front from './pages/Front/Front';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import DebtConsolidation from './pages/DebtConsolidation/DebtConsolidation';
import InvestmentScheme from './pages/InvestmentScheme/InvestmentScheme';
import FinancialEducation from './pages/FinancialEducation/FinancialEducation';
import CreditCounsellor from './pages/CreditCounsellor/CreditCounsellor';
import Budget from './pages/FinancialEducation/Budget/Budget';
import Investing from './pages/FinancialEducation/Investing/Investing';
import CreditManagement from './pages/FinancialEducation/CreditManagement/CreditManagement';
import RetirementPlan from './pages/FinancialEducation/RetirementPlan/RetirementPlan';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import InvestmentForm from './pages/InvestForm/InvestForm';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ContactUs from './pages/ContactUs/ContactUs';
import InvestmentPool from './pages/InvestmentPool/InvestmentPool';

function App() {

  return (
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Front />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/debt-consolidation' element={<DebtConsolidation />} />
            <Route path='/investment-scheme' element={<InvestmentScheme />} />
            <Route path='/financial-education' element={<FinancialEducation />} />
            <Route path='/financial-education/budget' element={<Budget />} />
            <Route path='/financial-education/investing' element={<Investing />} />
            <Route path='/financial-education/creditManagement' element={<CreditManagement />} />
            <Route path='/financial-education/retirementPlan' element={<RetirementPlan />} />
            <Route path='/credit-counsellor' element={<CreditCounsellor />} />
            <Route path='/application-form' element={<ApplicationForm />} />
            <Route path='/investment-form' element={<InvestmentForm />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/investment-pool' element={<InvestmentPool />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
