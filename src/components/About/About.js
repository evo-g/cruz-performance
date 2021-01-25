import React from 'react';
import IGGrid from '../IGGrid';
import { StyledAbout } from './About.styled'

export default function About() {

  return (
    <StyledAbout>
      <div className='about-container'>
        <h3>Ford Powerstroke Diesel Specialist</h3>
          <img src={require('../../images/powerstroke.png')} alt='powerstroke' />
          <img src={require('../../images/truck.jpeg')} alt='powerstroke' />
        <h4>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h4>
        <p><strong>XDP</strong> Authorized Dealer</p>
          <img src={require('../../images/xdp.png')} alt='xdp' />
        <h2>Check us out on instagram</h2>
        <a className='insta-logo' href='https://www.instagram.com/_cruzperformance_/' target='_blank' alt='instagram page'>
          <img src={require('../../images/insta-logo.png')} alt='insta-logo' />
        </a>
        <h3>Our Latest Posts</h3>
      </div>
      <IGGrid />
    </StyledAbout>
  )
};
