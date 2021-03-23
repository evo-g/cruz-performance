import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledContact = styled.section`
  padding: 1rem;
  margin: 5rem 0 5rem;
  width: 100vw;
  height: 100vh;
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
`;