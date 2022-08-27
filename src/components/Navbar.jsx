import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav>
        <li><NavLink className={(el) => el.isActive ? 'selected' : ''} to="/">Home</NavLink></li>
        <li><NavLink className={(el) => el.isActive ? 'selected' : ''} to="/new">New</NavLink></li>
        <li><NavLink className={(el) => el.isActive ? 'selected' : ''} to="/">Go back</NavLink></li>
      </nav>
    </div>
  )
}
