import styled from 'styled-components';
import { device } from '../../theme';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  z-index: 99;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    
    &:hover {
      color: ${({ theme }) => theme.primaryTitle};
    }
  }
  #menu-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    margin: 0 auto;
  }
  #menu-logo:hover {
    transition: 0.3s ease all;
    transform: scale(1.1);
  }

  @media ${device.laptopL} {
    justify-content: start;
    #menu-logo {
      margin: 2rem auto 0;
    }
  }
`;
