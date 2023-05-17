import React, { Fragment } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    </div>
  )
}

export default Navbar