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
        <h1 className='main-left-text'>Explore the freedom of car rental with <span className='main-left-text-span'>Drivewise.</span></h1>
        <p className='main-left-text-p'>Whether you're planning a road trip, need a reliable vehicle for a business trip, or just want the convenience of having a car at your disposal, we've got you covered</p>
        <div className="main-left-section">
        <button className='main-left-btn'>Book Now</button>
        <a className='main-left-see-all'>See all cars&#8594;</a>
        </div>
      </div>
      <div className="main-right">
      <div className="main-right-img">
        <img className='homeimg' src="../public/home.png" alt="" />
        </div>
     </div>
     </div>
     <div className="sponsors">
      <div className="car-brands">
        <img src="../public/cars.png" alt="" />
      </div>
     </div>
     <div className="testimony"></div>
     <div className="best-deals">
      <div className="car-image-container"></div>
     </div>
    </>
  )
}

export default App
