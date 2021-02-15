import React from 'react';
import { StyledHome } from './Home.styled';
import IGGrid from '../IGGrid';
import Flag from '../../images/flag.png';
import Xdp from '../../images/xdp.png'
import ColorLogo from '../../images/color-logo.png';
import ArpLogo from '../../images/arplogo.png';
import Powerstroke from '../../images/powerstroke.png';
import Mishimoto from '../../images/mishimoto.png';

export default function Home() {
  return (
    <StyledHome>
      <div className="logo">
        <img src={ColorLogo} loading='lazy' alt="cruz perfromance logo" />
      </div>
      <div className='content'>
        <h3>Ford Powerstroke Diesel Specialist</h3>
        <h3>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h3>
        <h3><strong>XDP</strong> Authorized Dealer</h3>
        <div className='brands'>
          <img src={Powerstroke} alt="ford powerstroke logo" />
          <img src={Flag} alt="american flag" />
          <img src={Xdp} alt="xdp log" />
          <img src={ArpLogo} alt="arp logo" />
          <img src={Mishimoto} alt="mishimoto logo" />
        </div>
      </div>
      <IGGrid />
    </StyledHome>
  )
};
