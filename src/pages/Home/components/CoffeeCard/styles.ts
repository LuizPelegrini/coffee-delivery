import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 1.25rem 1.5rem;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    margin-top: -45px;
    width: 6.25rem;
  }

  strong {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &::before {
      content: '$';
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;

    label {
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
    }

    button[type='submit'] {
      border: 0;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};
      border-radius: 6px;
      padding: 0.5rem;
      line-height: 0;
      cursor: pointer;
      transition: background-color 0.15s;

      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`;
