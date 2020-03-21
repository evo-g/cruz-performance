import React from 'react';
import { StyledAbout } from './About.styled'

export default function About() {
  return(
    <StyledAbout>
      <h3>Ford Powerstroke Diesel Specialist</h3>
      <h4>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h4>
      <h2>Check out my instagram</h2>
      <a className='insta-img' href='https://www.instagram.com/_cruzperformance_/' target='_blank' alt='instagram page'>
        <img src={require('../../images/insta-logo.png')} alt='insta-logo' />
      </a>
    </StyledAbout>
  )
}
