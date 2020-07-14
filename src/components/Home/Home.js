import React from 'react';
import IGGrid from '../IGGrid';

export default function Home() {
  return (
    <React.Fragment>
      <div className='home-container'>
        <h1>Cruz Performance</h1>
        <img src={require('../../images/logo.JPG')} alt="logo icon" />
        <p>Ford Powerstroke Diesel Specialist</p>
        <p>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</p>
        <p><strong>XDP</strong> Authorized Dealer</p>
      </div>
      <IGGrid />
    </React.Fragment>
  )
};
