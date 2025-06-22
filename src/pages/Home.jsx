import React from 'react'
import Banner from '../components/Banner'
import AboutContent from '../components/AboutContent'
import ServicesContent from '../components/ServicesContent'
import Projects from '../components/Projects'
import Choose from '../components/Choose'
import Process from '../components/Process'
import Counter from '../components/Counter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <AboutContent/>
      <ServicesContent/>
      <Projects/>
      <Choose/>
      <Process/>
      <Counter/>
    </div>
  )
}

export default Home
