import React from 'react'
import Header from './Header'
import Intro from './Intro'
import WorkPage from './WorkPage'
import KnowMe from './KnowMe'
import WorkTogether from './WorkTogether'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <WorkPage/>
      <KnowMe/>
      <WorkTogether/>
      <Footer/>
    </div>
  )
}

export default Body
