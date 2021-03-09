import styled from 'styled-components';
import { device } from '../../theme';

export const StyledAbout = styled.section`
  padding: 1rem;
  margin: 5rem 0 5rem;
  min-height: 100vh;
  .about-container {
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
  .heading {
    h1 {
      margin: 0
    }
    h2 {
      margin-top: 0
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    article {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .insta-logo img {
    width: 4rem;
  }
  #truck {
    width: auto;
    height: auto;
    object-fit: cover;
  }
  @media ${device.mobileL} {
    .row {
      flex-direction: column;
    }
  }
`