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
import Contact from '../components/Contact'
import Card from '../components/Card'

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
      <Contact />
      <Card />
    </div>
  )
}

export default Home