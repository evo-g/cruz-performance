import React from 'react';
import IGGrid from '../IGGrid';
import { motion } from 'framer-motion';
import { StyledAbout } from './About.styled'
import Xdp from '../../images/xdp.png';
import Powerstroke from '../../images/powerstroke.png';
import Truck from '../../images/truck-removebg.png';
import Insta from '../../images/insta-logo.png';

export default function About() {

  return (
    <StyledAbout>
      <motion.div
        className='about-container'
        animate={{ scale: .95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className='heading'>
          <h1><img src={Powerstroke} alt='powerstroke' /></h1>
          <h2>Specialist</h2>
        </div>
        <img id='truck' src={Truck} alt='truck' />
        <h4>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h4>
        <p><strong>XDP</strong> Authorized Dealer</p>
        <img src={Xdp} alt='xdp logo' />
      </motion.div>
        <h2>Check us out on instagram</h2>
        <a className='insta-logo' href='https://www.instagram.com/_cruzperformance_/' target='_blank' alt='instagram page'>
          <img src={Insta} alt='insta-logo' />
        </a>
        <h3>Our Latest Posts</h3>
      <IGGrid />
    </StyledAbout>
  )
};
