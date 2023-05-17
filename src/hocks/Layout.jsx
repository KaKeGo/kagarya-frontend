import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

import { load_profile_list } from '../actions/accounts/profile'

import Navbar from '../compontents/Navbar/Navbar'


const Layout = ({ children, load_profile_list }) => {
  useEffect(() => {
    load_profile_list()
  }, [])

  console.log(load_profile_list)

  return (
    <Fragment>
        <Navbar />
        { children }
    </Fragment>
  )
}

export default connect(null, { load_profile_list })(Layout)
