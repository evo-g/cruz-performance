import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, toggleOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={toggleOpen}>
        <span id='menu-logo' role="img" aria-label="contact">
          <img src={require('../../images/logo.JPG')} alt='cruz-logo' />
        </span>
      </Link>
      <Link to="/contact" onClick={toggleOpen}>
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
      </Link>
      <Link to="/pricing" onClick={toggleOpen}>
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </Link>
      <Link to="/about" onClick={toggleOpen}>
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
        </Link>
    </StyledMenu>
  );
}

Menu.propTypes ={
  open: bool.isRequired,
  toggleOpen: func.isRequired
};

export default Menu;
