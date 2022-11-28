import styled from 'styled-components';

export const COLORS_MAP = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const;

interface ContainerProps {
  iconColor: keyof typeof COLORS_MAP;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme[COLORS_MAP[props.iconColor]]};
  margin-bottom: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }
`;
