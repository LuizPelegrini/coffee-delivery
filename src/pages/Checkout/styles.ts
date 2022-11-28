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
`;

const COLORS_MAP = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const;

interface HeaderProps {
  iconColor: keyof typeof COLORS_MAP;
}

export const Header = styled.header<HeaderProps>`
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
  }
`;

export const SelectedCoffeesSection = styled.section`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0px 36px 0px 36px;
  width: 28rem;
`;

// export const PaymentOption = styled.div`
//   background-color: ${(props) => props.theme['base-button']};
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   color: ${(props) => props.theme.purple};
//   padding: 1rem;
//   border-radius: 6px;
//   flex-grow: 1;
//   flex-basis: 1rem; // so they occupy the same width
//   cursor: pointer;
//   transition: background-color 0.15s;

//   &:hover {
//     background-color: ${(props) => props.theme['base-hover']};

//     label {
//       color: ${(props) => props.theme['base-subtitle']};
//     }
//   }

//   input[type='radio'] {
//     -webkit-appearance: none;
//   }

//   label {
//     color: ${(props) => props.theme['base-text']};
//     text-transform: uppercase;
//     font-size: 0.75rem;
//     cursor: inherit;
//   }
// `;

// export const PaymentOption = styled.label`
//   background-color: ${(props) => props.theme['base-button']};
//   display: flex;
//   align-items: center;
//   padding: 1rem;
//   border-radius: 6px;
//   flex-grow: 1;
//   flex-basis: 1rem; // so they occupy the same width
//   cursor: pointer;
//   transition: background-color 0.15s;

//   & > input:checked {
//     background-color: red;
//   }

//   input[type='radio'] {
//     -webkit-appearance: none;
//   }
// `;
