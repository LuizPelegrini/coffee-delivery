import styled from 'styled-components';

export const Container = styled.header`
  padding: 2rem 1rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 1rem; */
    margin: 0 auto;
    max-width: 70rem;

    & > a {
      line-height: 0;
    }

    div {
      display: flex;
      gap: 0.75rem;
    }
  }
`;
