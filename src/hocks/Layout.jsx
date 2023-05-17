import React, { Fragment, useEffect } from 'react'

import Navbar from '../compontents/Navbar/Navbar'


const Layout = ({ children }) => {

  return (
    <Fragment>
        <Navbar />
        { children }
    </Fragment>
  )
}

export default Layout
