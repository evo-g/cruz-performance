import styled from 'styled-components';

export const StyledIGGrid = styled.div`
  margin: 1rem 0;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      ul {
        flex-direction: column;
      }
      ul li img {
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
`;
