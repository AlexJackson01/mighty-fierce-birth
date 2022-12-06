import React from 'react';
import { NavLink, Link as ReactLink } from "react-router-dom";


export default function Footer() {
  return (
    <div>
        <NavLink to="/t&cs" className="nav-link"><li className="nav-link">Terms & Conditions</li></NavLink>
    </div>
  )
}
