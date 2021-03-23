import styled from 'styled-components';
import { device, theme } from '../../theme';

export const StyledPricing = styled.section`
  padding: 1rem;
  margin: 5rem 0 5rem;
  width: 100vw;
  min-height: 100vh;
  a {
    color: ${theme.primaryA};
  }
  .content {
    max-width: 900px;
    margin: 0 auto;
    background-color: #EFEFEF;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 2rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .row-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .row-child img {
    border-radius: .3rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  @media ${device.mobileXL} {
    .row {
      display: flex;
      flex-direction: column;
    }
  }
`;