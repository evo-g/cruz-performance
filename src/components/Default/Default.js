import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultStyled } from './Default.styled';
import Truck from '../../images/truck.png'

const pages = {
  0: '/',
  1: '/contact',
  2: '/about',
  3: '/pricing'
};

const Default = (props) => {
  for (let page in pages) {
    if (pages[page] === props.match.url) {
      return (
        <div></div>
      )
    }
  }
  return (
    <DefaultStyled>
      <h1>Sorry cannot find this page</h1>
      <img src={Truck} alt='confused funny face' />
      <Link to='/'>Return Home</Link>
    </DefaultStyled>
  )
};

export default Default;
