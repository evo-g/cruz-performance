import React from 'react';
// import { motion } from 'framer-motion';
import { StyledPricing } from './Pricing.styled';
import MotorTeardown from '../../images/motor-teardown.png';
import Motor from '../../images/motor.png';

export default function Pricing() {
  return (
    <StyledPricing>
      <div
        className='content'
        // animate={{ scale: .95 }}
        // transition={{ ease: "easeIn", duration: 2 }}
      >
        <div className='row'>
          <div className='row-child'>
            <img src={MotorTeardown} alt='motor-teardown' />
            <h2>Call for Pricing</h2>
            <a href="tel:6194024165">Call us at 619-402-4165</a>
          </div>
          <div className='row-child'>
            <h2>Services include</h2>
            <ul>
              <li>General Automotive Repair</li>
              <li>Preventative Car Maintenance</li>
              <li>Air Conditioning and Heater Service</li>
              <li>Cooling System and Radiator Repair</li>
              <li>Synthetic Motor Oil Replacement</li>
              <li>Oil Filter Replacement</li>
              <li>Brake Repair</li>
              <li>Engine Diagnostic</li>
              <li>Tune-Up</li>
              <li>Belts, Hoses, Fluids</li>
              <li>Air Filters</li>
              <li>Alternators</li>
              <li>Batteries</li>
              <li>Headlights</li>
              <li>Starters</li>
              <li>Transmission Services</li>
              <li>Struts</li>
              <li>All Fluid Level Checks & Corrections</li>
              <li>Performance installations</li>
              <li>Exhaust leaks</li>
            </ul>
          </div>
          <div className='row-child'>
            <img src={Motor} alt='engine' />
            <h2>Or Text</h2>
            <a href="sms:+16194024165">Click here to text us!</a>
          </div>
        </div>
      </div>
    </StyledPricing>
  );
};
