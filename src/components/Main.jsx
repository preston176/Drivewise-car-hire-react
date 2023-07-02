import React from 'react'
import imgright from '/imgright.png'

function Main() {
  return (
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
  )
}

export default Main