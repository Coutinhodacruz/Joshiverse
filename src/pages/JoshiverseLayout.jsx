import React from 'react'
import NavBar from './joshiverse/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './joshiverse/Footer'

const JoshiverseLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default JoshiverseLayout
