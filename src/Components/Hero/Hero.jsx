import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/handicon.png'
import model from '../Assets/model.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} width= {55} height={55} alt=''/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>
        </div>
        <div className="hero-right">
            <img src={model} width={400} height={400} alt=''/>
        </div>
    </div>
  )
}

export default Hero;
