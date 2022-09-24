import React from 'react'
import styled from 'styled-components'
import About from '../about/About'
import Header from '../header/Header'
import Skills from '../skills/Skills'

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home

const Container = styled.section``