import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;

  main {
    display: flex;
    gap: 6.375rem;
  }

  @media (max-width: 1100px) {
    main {
      gap: 2rem;
    }
  }

  @media (max-width: 850px) {
    margin-top: 1.5rem;

    main {
      flex-direction: column;
    }
  }
`;

export const Header = styled.header`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};

  h1 {
    margin-bottom: 0.25rem;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }
`;

export const DeliveryInfo = styled.div`
  flex-basis: 35rem;
  min-width: 30rem;
  margin-top: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-clip: padding-box;
  border: 1px solid transparent;
  position: relative;
  background-color: ${(props) => props.theme.background};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    );
  }

  ul {
    padding: 2.5rem;

    li + li {
      margin-top: 2rem;
    }
  }

  @media (max-width: 850px) {
    flex-basis: auto;
    min-width: unset;
  }
`;

export const Image = styled.img`
  flex-basis: 20rem;
  flex-grow: 0;
  flex-shrink: 0;

  @media (max-width: 1100px) {
    width: 10rem;
  }

  @media (max-width: 850px) {
    margin: auto;
    width: 100%;
    flex-basis: 10rem;
  }
`;
