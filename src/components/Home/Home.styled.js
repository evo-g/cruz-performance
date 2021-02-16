import styled from 'styled-components';
import { device } from '../../theme';

export const StyledHome = styled.section`
  margin: 1rem 0 5rem;
  .logo {
    img {
      margin: 10px;
      width: 15rem;
      height: auto;
    }
  }
  .content {
    margin: 0 1rem;
    background-color: #EFEFEF;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      text-align: center;
      color: ${({ theme }) => theme.primaryHeading};
    }
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .brands {
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    flex: 1;
    z-index: 5;
    filter: drop-shadow(1px 3px 6px #636161);
    img {
      margin: 10px;
    }
  }
  @media ${device.mobileS} {
    .row {
      flex-direction: column;
    }
  }
  @media ${device.mobileL} {
    .brands img {
      max-width: 10rem;
    }
  }
  @media ${device.tablet} {
    .row {
      flex-direction: row;
    }
    .brands img 
      max-width: 13rem;
  }
`;