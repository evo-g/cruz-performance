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
    max-width: 900px;
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
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }
  article {
    max-width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .brands {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    z-index: 5;
    filter: drop-shadow(1px 3px 6px #636161);
    img {
      margin: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media ${device.mobileL} {
    .row {
      flex-direction: column;
    }
    article {
      max-width: none;
      width: 100%
    }
    .brands img {
      max-width: 13rem;
    }
  }
`;