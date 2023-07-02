import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="Header">
        <img src={reactLogo} className="Header-logo" alt="logo" />
        <nav className='navbar'>
        <li>Homepage</li>
        <li>Reservation</li>
        <li>Locations</li>
        <li>Fleet</li>
        <li>Special Offers</li>
        </nav>
     </div>
     <div className="main">
      <div className="main-left">
        <h1>Book your car today!</h1>
        <p>Whether you're planning a road trip, need a reliable vehicle for a business trip, or just want the convenience of having a car at your disposal, we've got you covered</p>
        <div className="main-left-section">
        <button>Book Now</button>
        <a>See all cars</a>&#8594;
        </div>
      </div>
      <div className="main-right">
        <h2>Reserve your car in 3 easy steps</h2>
     </div>
     </div>
     <div className="sponsors"></div>
     <div className="testimony"></div>
     <div className="best-deals">
      <div className="car-image-container"></div>
     </div>
    </>
  )
}

export default App
