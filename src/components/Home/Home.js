import React from 'react';
import { StyledHome } from './Home.styled';
import { motion } from 'framer-motion';
import IGGrid from '../IGGrid';
import ColorLogo from '../../images/color-logo.png';
import { logos } from '../../data';

export default function Home() {
  return (
    <StyledHome>
      <div className="logo">
        <img src={ColorLogo} loading='lazy' alt="cruz perfromance logo" />
      </div>
      <motion.div
        className='content'
        animate={{ scale: .95 }}
        transition={{ ease: "easeIn", duration: 2 }}
      >
        <div className='row'>
          <article>
            <h3>Ford Powerstroke Diesel Specialist</h3>
            <h3>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h3>
            <p>With over 18 years of Diesel experience</p>
          </article>
          <article>
            <h3>Your perfromance needs covered</h3>
            <p><strong>XDP</strong> Authorized Dealer</p>
          </article>
        </div>
        <div className='brands'>
          {
            logos.map(item => (
              <img 
                key={item.id}
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />
            ))
          }
        </div>
      </motion.div>
      <IGGrid />
    </StyledHome>
  )
};
