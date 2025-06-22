import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Choose from '../components/Choose'
import Process from '../components/Process'
import Counter from '../components/Counter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Choose/>
      <Process/>
      <Counter/>
    </div>
  )
}

export default Home
