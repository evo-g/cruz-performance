import React from 'react';
import { StyledHome } from './Home.styled';
// import IGGrid from '../IGGrid';
import ColorLogo from '../../images/color-logo.png';
import { logos } from '../../data';

export default function Home() {
  return (
    <StyledHome>
      <div className="logo">
        <img src={ColorLogo} loading='lazy' alt="cruz perfromance logo" />
      </div>
      <div className='content'>
        <div className='row'>
          <article>
            <h3>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h3>
            <p>With over 18 years of Diesel experience. The place to take your truck first, and get it done right the first time! Or the final stop after the other guys couldn't fix it.</p>
          </article>
          <article>
            <h3>Your perfromance needs covered</h3>
            <ul>
              <li><strong>XDP</strong> Authorized Dealer</li>
              <li>ARP</li>
              <li>Misimoto</li>
            </ul>
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
      </div>
      {/* <IGGrid /> */}
    </StyledHome>
  )
};
