import React from 'react'
import Nav from '../component/nav/Nav'
import Footer from '../component/footer/Footer'

function AppLayout({children}) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout