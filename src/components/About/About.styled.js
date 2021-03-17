import styled from 'styled-components';
import { device } from '../../theme';

export const StyledAbout = styled.section`
  padding: 1rem;
  margin: 5rem 0 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .column {
    display: flex;
    flex-direction: column;
  }
  article {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      padding: 1rem;
      margin: 1rem
    }
  }
  article:nth-child(odd) {
    padding: 1rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  .insta-logo i {
    font-size: 4rem;
    background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .insta-logo i:hover {
    border-radius: .5rem;
  }
  #truck {
    width: auto;
    height: auto;
    object-fit: cover;
  }
  @media ${device.mobileL} {
    .about-container {
      .column {
        margin: 0 auto
      }
      article {
        flex-direction: column;
      }
      article:nth-child(odd) {
        flex-direction: column-reverse;
      }
    }
  }
`