import React from 'react';
import './Hero.css';
import '../App.css'
import Button from './Button'

const Hero = () => {
  return (
        <div className="hero-container">
            <video src='videos/video-2.mp4' autoPlay loop muted />

            <h1>ADVENTURE AWAITS</h1>

            <p>What are you waiting for</p>

            <div className="hero-btn">
                <Button className='btn'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'>GET STARTED</Button>
            </div>

            <div className="hero-btn">
                <Button className='btn'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'>WATCH TRAILER
                  <i className="far fa-play-circle" /></Button>
            </div>
        </div>
  );
};

export default Hero;
