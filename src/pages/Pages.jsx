import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

const Pages = () => {
  return (
    <div>
        <ScrollToTop/>
        <Outlet/>
    </div>
  )
}

export default Pages
