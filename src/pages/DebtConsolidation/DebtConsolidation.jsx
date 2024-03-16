import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DebtCons from '../../components/DebtCons/DebtCons'
import Footer from '../../components/Footer/Footer'
import Form from '../../components/ApplicationForm/Form'

const DebtConsolidation = () => {
  return (
    <>
    <Navbar />
    <br />
    <DebtCons />
    <Form />
    <Footer />
    </>
  )
}

export default DebtConsolidation;