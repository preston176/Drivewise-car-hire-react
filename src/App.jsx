import { useState } from 'react'
import brandlogo from './assets/brandlogo.png'
import imgright from './assets/imgright.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="Header">
        <img src={brandlogo} className="Header-logo" alt="logo" style={{width:'50px', height: '30px'}} />
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
        <img className='homeimg' src={imgright} alt="" />
        </div>
     </div>
     </div>
     <div className="sponsors">
      <div className="car-brands">
        <img src="../public/cars.png" alt="" />
      </div>
     </div>
     <div className="testimony">
      <div className="testimony-text-cards">
        <div className="testimony-text-card">
          <p className='card-heading'>450 +</p>
          <div className="card-text">
          <p>Cars</p>
          </div>
        </div>
        <div className="testimony-text-card">
          <p className='card-heading'>90 +</p>
          <div className="card-text">
          <p>Sales Experts</p>
          </div>
        </div>
        <div className="testimony-text-card">
          <p className='card-heading'>120 +</p>
          <div className="card-text">
          <p>Pickup Locations</p>
          </div>
        </div>
        <div className="testimony-text-card">
          <p className='card-heading'>4650 +</p>
          <div className="card-text">
          <p>Happy customers</p>
          </div>
        </div>
      </div>
     </div>
     <div className="best-deals">
     <div className="best-deals-h1">
     <h1>Best deals out there</h1>
     </div>
      <div className="cars-container">
        <div className="cars">
          <div className="cars-img">
            <img src="../public/home.png" alt="" />
          </div>
          <div className="cars-price">From </div>
          <div className="btn-book-now"><button>Book Now</button></div>
        </div>

        <div className="cars">
          <div className="cars-img">
            <img src="../public/home.png" alt="" />
          </div>
          <div className="cars-price">From </div>
          <div className="btn-book-now"><button>Book Now</button></div>
        </div>


        <div className="cars">
          <div className="cars-img">
            <img src="../public/home.png" alt="" />
          </div>
          <div className="cars-price">From </div>
          <div className="btn-book-now"><button>Book Now</button></div>
        </div>

        <div className="cars">
          <div className="cars-img">
            <img src="../public/home.png" alt="" />
          </div>
          <div className="cars-price">From </div>
          <div className="btn-book-now"><button>Book Now</button></div>
        </div>

        <div className="cars">
          <div className="cars-img">
            <img src="../public/home.png" alt="" />
          </div>
          <div className="cars-price">From </div>
          <div className="btn-book-now"><button>Book Now</button></div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
