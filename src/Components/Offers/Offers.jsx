import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive-image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} width={300} height={300} alt=''/>
        </div>
    </div>
  )
}

export default Offers;