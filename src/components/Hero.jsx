import React from 'react'
import './Hero.css'
import Header from './Header'

import hero_image from "../assets/hero_image.png"

import hero_image_back from "../assets/hero_image_back.png"

import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"

const Hero = () => {
  return (
    <div className='hero'>
    <div className='left-h'>
    <Header /> 


    <div className='ad'>
    <div></div>
    <span>The best fitness club in town </span>
    </div>
    
    <div className='hero-text'>
        <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
        </div>
        <div>
            <span>Ideal Body</span>
        </div> 
        <div>
            <span>We will help you to shape your ideal body and live your life to the fullest </span>
        </div>  
        <div className='span'>
        </div>
    </div>

    <div className='figures'>
        <div>
            <span>140+</span>
            <span>Expert Coaches</span>
        </div>
        <div>
            <span>978+</span>
            <span>memnbers joined</span>
        </div>
        <div>
            <span>50+</span>
            <span>fitness programs</span>
        </div>
    </div>

    <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
    </div>
    </div>


    <div className='right-h'>
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
        <img src={Heart} alt='' />
        <span>Heart Rate</span>
        <span>116bpm</span>
        </div>


        <img src={hero_image} alt='' className='hero-image' />
        <img src={hero_image_back} alt='' className='hero-image-back' />

        <div className='calories'>
            <img src={Calories} alt=''/>
            <div>
                <span>Calories Burned</span>
                <span>220 Kcal</span>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Hero
