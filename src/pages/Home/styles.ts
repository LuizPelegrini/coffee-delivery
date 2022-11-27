import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 880px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const IntroSection = styled.section`
  margin: 5.75rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'header coffeeImage'
    'description coffeeImage'
    'list coffeeImage';
  grid-column-gap: 3.5rem;

  @media (max-width: 880px) {
    margin: 1.5rem 0;
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'description'
      'coffeeImage'
      'list';
    grid-row-gap: 1rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    grid-area: header;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    margin: 1rem 0;
    grid-area: description;
  }

  img {
    width: 29.75rem;
    grid-area: coffeeImage;
    align-self: center;

    @media (max-width: 960px) {
      width: 25rem;
      margin: 0 auto;
    }
  }
`;

export const ItemsList = styled.ul`
  grid-area: list;
  margin: auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.3;
  }
`;

const COLORS_MAP = {
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const;

interface IconWrapperProps {
  bgColor: keyof typeof COLORS_MAP;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[COLORS_MAP[props.bgColor]]};
`;

export const CoffeeList = styled.section`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  ul {
    display: flex;
    margin-top: 3.375rem;
  }
`;
