import React from 'react'
import brandlogo from '../assets/brandlogo.png'
function Header() {
  return (

    <div className="Header">
        <img src={brandlogo} className="Header-logo" alt="logo" style={{width:'45px', height: '30px'}} />
        <nav className='navbar'>
        <a href="#"><li>Homepage</li></a>
        <a href="#"><li>Reservation</li></a>
        <a href="#"><li>Locations</li></a>
        <a href="#"><li>Fleet</li></a>
        <a href="#"><li>Special Offers</li></a>
        </nav>
     </div>
    
  )
}

export default Header