import styled from 'styled-components';

export const StyledHome = styled.section`
  margin: 1rem 0 5rem;
  .logo {
    img {
      margin: 10px;
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
  .brands {
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    flex: 1;
    z-index: 5;
    filter: drop-shadow(3px 6px 9px #636161);
    img {
      margin: 10px;
    }
  }
`;