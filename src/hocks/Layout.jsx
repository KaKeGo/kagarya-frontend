import React, { Fragment } from 'react'
import { connect } from 'react-redux'

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
