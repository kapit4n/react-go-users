import React from 'react'

import { Link } from "react-router-dom"

import './styles.css'

const Navigation = () => {
  return (
    <ul className={"navigation"}>
      <li style={{textDecoration: 'none'}}>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/permissions">Permissions</Link>
      </li>
      <li>
        <Link to="/roles">Roles</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}

export default Navigation;
