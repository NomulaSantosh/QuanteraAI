import React from 'react'
import Header from '../components/Header'
import Abou from '../components/Abou'
import Missio from '../components/Missio'
import Vission from '../components/Vission'
import Benefit from '../components/Benefit'
import Services from '../components/Services'
import Choose from '../components/Choose'
import Popular from '../components/Popular'
import Teams from '../components/Teams'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Header />
      <Abou />
      <Missio />
      <Vission />
      <Benefit />
      <Services />
      <Choose />
      <Popular />
      <Teams />
      <Testimonials />
    </div>
  )
}

export default Home