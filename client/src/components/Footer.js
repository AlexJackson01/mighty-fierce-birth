import React from 'react';
import { NavLink, Link as ReactLink } from "react-router-dom";


export default function Footer() {
  return (
    <div className='footer'>
        <NavLink to="/t&cs" className="tcs-link"><li className="tcs-link">Terms & Conditions</li></NavLink>
    </div>
  )
}
