import styled from 'styled-components';

export const Input = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;

  &:checked {
    + label {
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }
  }
`;

export const Label = styled.label`
  flex-grow: 1;
  flex-basis: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 1rem;
  color: ${(props) => props.theme.purple};
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 0.15s;
  border-radius: 6px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`;
