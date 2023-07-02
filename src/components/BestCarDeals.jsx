import React from 'react'

function BestCarDeals(props) {
  return (
    <div className="cars">
          <div className="cars-img">
            <img src={`../public/${props.coverImg}`} alt="" />
          </div>
          <div className="cars-price">{`From ${props.price} Ksh`}</div>
          <div className="btn-book-now"><button>Book Now</button></div>
        </div>
  )
}

export default BestCarDeals