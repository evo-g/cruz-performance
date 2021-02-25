import styled from 'styled-components';

export const StyledAbout = styled.section`
  min-height: 100vh;
  .about-container {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .heading {
    h1 {
      margin: 0
    }
    h2 {
      margin-top: 0
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
`