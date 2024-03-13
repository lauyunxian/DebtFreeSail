import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'
import Offer from '../../components/Offers/Offers'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
        <Navbar />
        <Offer />
        <News />
        <Testimonial />
        <Footer />
    </>
  )
}

export default Home