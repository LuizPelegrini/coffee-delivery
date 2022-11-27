import styled from 'styled-components';

export const Container = styled.div``;

export const IntroSection = styled.section`
  margin: 5.75rem 0;
  display: flex;
  gap: 3.5rem;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3;
      margin-top: 1rem;
    }
  }

  img {
    width: 29.75rem;
  }
`;

export const ItemsList = styled.ul`
  margin: auto 0;
  list-style: none;
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
