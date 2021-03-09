import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Logo from '../../images/color-logo.png';

const Menu = ({ open, toggleOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={toggleOpen}>
        <span  role="img" aria-label="contact">
          <img id='menu-logo' src={Logo} alt='cruz-logo' />
        </span>
      </Link>
      <Link to="/contact" onClick={toggleOpen}>
        Contact
      </Link>
      <Link to="/pricing" onClick={toggleOpen}>
        Pricing
        </Link>
      <Link to="/about" onClick={toggleOpen}>
        About
        </Link>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
  toggleOpen: func.isRequired
};

export default Menu;
