import styled from 'styled-components';

export const StyledAbout = styled.section`
  min-height: 100vh;
  .about-container {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
  }
  .insta-logo img {
    width: 4rem;
  }
  .insta-grid ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      .insta-grid ul {
        flex-direction: column;
      }
      .insta-grid ul li img {
        width: 15rem;
      }
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  li {
    padding: 1rem;
  }
`