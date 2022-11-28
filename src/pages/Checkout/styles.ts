import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`;

export const AddressSection = styled.section`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
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
  }
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
`;

export const StreetNameInput = styled(BaseInput)`
  grid-column: 1 / span 5;
  grid-row: 2;
`;

export const ResidencyNumberInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 3;
`;

export const ComplementInput = styled(BaseInput)`
  grid-column: 2 / span 4;
  grid-row: 3;
`;

export const CityInput = styled(BaseInput)`
  grid-column: 1;
  grid-row: 4;
`;

export const StateInput = styled(BaseInput)`
  grid-column: 2 / span 4;
  grid-row: 4;
`;

export const PaymentSection = styled.section``;

export const SelectedCoffeesSection = styled.section`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0px 36px 0px 36px;
  width: 28rem;
`;
