import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    &::before {
      content: '$ ';
    }
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }

  > span {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: auto;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
  }
`;
