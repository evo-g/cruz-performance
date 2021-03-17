import React from 'react';
// import IGGrid from '../IGGrid';
// import { motion } from 'framer-motion';
import { StyledAbout } from './About.styled'
import Xdp from '../../images/xdp.png';
import Powerstroke from '../../images/powerstroke.png';
import Truck from '../../images/truck-removebg.png';

export default function About() {

  return (
    <StyledAbout>
      <div
        className='about-container'
        // animate={{ scale: .95 }}
        // transition={{ ease: "easeIn", duration: 2 }}
      >
        <div className='heading'>
          <img src={Powerstroke} alt='powerstroke' />
          <h2>Specialist</h2>
        </div>
        <div className='column'>
          <article>
            <img id='truck' src={Truck} alt='truck' />
            <h3>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h3>
          </article>
          <article>
            <img src={Xdp} alt='xdp logo' />
            <h3>XDP Authorized Dealer</h3>
          </article>
        </div>
      </div>
        <h4>Check us out on instagram</h4>
        <a className='insta-logo' href='https://www.instagram.com/_cruzperformance_/' target='_blank' alt='instagram page'>
          <i className="fab fa-instagram"></i>
        </a>
        <p>To See Our Latest Posts</p>
      {/* <IGGrid /> */}
    </StyledAbout>
  )
};

// whileHover={{ scale: 1.1 }} transition={{ ease: "easeOut", duration: 2 }}