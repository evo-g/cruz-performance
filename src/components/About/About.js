import React from 'react';
// import IGGrid from '../IGGrid';
import { StyledAbout } from './About.styled'
import Xdp from '../../images/xdp.png';
import Powerstroke from '../../images/powerstroke.png';
import Truck from '../../images/truck-removebg.png';

export default function About() {

  return (
    <StyledAbout>
      <div className='about-container'>
        <div className='heading'>
          <h1><img src={Powerstroke} alt='powerstroke' /></h1>
          <h2>Specialist</h2>
        </div>
        <div className='row'>
          <article>
            <img id='truck' src={Truck} alt='truck' />
            <h4>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h4>
          </article>
          <article>
            <img src={Xdp} alt='xdp logo' />
            <p><strong>XDP</strong> Authorized Dealer</p>
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
