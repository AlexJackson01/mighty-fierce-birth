import React from 'react'
import Logo from '../assets/images/mighty-logo.png';
import { NavLink, Link as ReactLink } from "react-router-dom";


export default function Nav() {
  return (
    <div>
        <img src={Logo} className="logo" alt="Mighty Fierce Birth logo" />
        <div className="nav-wrap">
            <ul className="nav">
                <NavLink to="/" className="nav-link"><li className="nav-link">Home</li></NavLink>
                <NavLink to="/courses" className="nav-link"><li className="nav-link">Courses</li></NavLink>
                <NavLink to="/testimonials" className="nav-link"><li className="nav-link">Testimonials</li></NavLink>
                <NavLink to="/contact" className="nav-link"><li className="nav-link">Contact</li></NavLink>
            </ul>
        </div>
    </div>
  )
}
