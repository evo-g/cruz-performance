import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <h1>Cruz Performance</h1>
      <img src={require('../../images/logo.JPG')} alt="logo icon" />
      <p>Ford Powerstroke Diesel Specialist</p>
      <p>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</p>
    </React.Fragment>
  )
};
