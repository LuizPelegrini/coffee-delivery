import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  aside {
    flex-shrink: 0;
    flex-basis: 28rem;
  }

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export const AddressSection = styled.section`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const AddressInputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;
`;

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border: 0;
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const ZipCodeInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 1;

  @media (max-width: 980px) {
    grid-column: 1 / span 5;
  }
`;

export const StreetNameInput = styled(BaseInput)`
  grid-column: 1 / span 5;
  grid-row: 2;
`;

export const ResidencyNumberInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 3;

  @media (max-width: 980px) {
    grid-column: 1 / span 5;
  }
`;

export const ComplementInput = styled(BaseInput)`
  grid-column: 2 / span 4;
  grid-row: 3;

  @media (max-width: 980px) {
    grid-row: 4;
    grid-column: 1 / span 5;
  }
`;

export const CityInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 4;

  @media (max-width: 980px) {
    grid-row: 5;
    grid-column: 1 / span 5;
  }
`;

export const StateInput = styled(BaseInput)`
  grid-column: 2 / span 4;
  grid-row: 4;

  @media (max-width: 980px) {
    grid-row: 6;
    grid-column: 1 / span 5;
  }
`;

export const PaymentSection = styled.section`
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  > div {
    display: flex;
    gap: 0.75rem;

    input[type='radio'] {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    input[type='radio']:checked {
      + label {
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
      }
    }

    label {
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
    }

    @media (max-width: 980px) {
      flex-direction: column;
    }
  }
`;

export const SelectedCoffeesSection = styled.section`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0px 36px 0px 36px;

  hr {
    border-top: 1px solid ${(props) => props.theme['base-button']};
    border-left-width: 0;
    margin: 1.5rem 0;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
