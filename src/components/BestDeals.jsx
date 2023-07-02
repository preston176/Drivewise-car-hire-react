import React from 'react'
import BestCarDeals from './BestCarDeals'
import data from "./data"

function bestDeals() {
  const cards = data.map(item => {
    return (
      <BestCarDeals
        key={item.id}
        coverImg={item.coverImg}
        price={item.price}
      />
    )
  })
  return (
    <div className="best-deals">
     <div className="best-deals-h1">
     <h1>Best deals out there</h1>
     </div>
      <div className="cars-container">
       {cards} 
      </div>
     </div>
  )
}

export default bestDeals