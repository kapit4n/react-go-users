import React from 'react'

import { Link, useLocation } from "react-router-dom"


import './styles.css'

const Navigation = () => {

  const location = useLocation();

  return (
    <ul className={"navigation"}>
      <li className={location.pathname === '/' ? 'current': ''}>
        <Link to="/">Home</Link>
      </li>
      <li  className={location.pathname === '/users' ? 'current': ''}>
        <Link to="/users">Users</Link>
      </li>
      <li className={location.pathname === '/permissions' ? 'current': ''}>
        <Link to="/permissions">Permissions</Link>
      </li>
      <li className={location.pathname === '/roles' ? 'current': ''}>
        <Link to="/roles">Roles</Link>
      </li>
      <li className={location.pathname === '/about' ? 'current': ''}>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}

export default Navigation;
