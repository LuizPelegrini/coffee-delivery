import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  input {
    background-color: transparent;
    border: 0;
    width: 2rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    text-align: center;

    &:focus {
      box-shadow: none;
    }

    /* Chrome, Edge, Safari, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  button {
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    border: 0;
    padding: 0.5rem;
    cursor: pointer;

    &:focus {
      box-shadow: none;
    }
  }
`;
