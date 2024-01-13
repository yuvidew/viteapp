import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = () => {
    return (<>
        <NavLink to={'/'}><h1>Home</h1></NavLink>
        <NavLink to={'/about'}><h1>About</h1></NavLink>
    </>)
}

export default NavComp