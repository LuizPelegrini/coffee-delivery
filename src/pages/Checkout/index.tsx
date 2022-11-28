import { MapPinLine } from 'phosphor-react';

import { CheckoutItem } from './components/CheckoutItem';

import {
  FormContainer,
  AddressSection,
  PaymentSection,
  SelectedCoffeesSection,
  ZipCodeInput,
  StreetNameInput,
  ResidencyNumberInput,
  ComplementInput,
  CityInput,
  StateInput,
  AddressInputGroup,
} from './styles';

export function Checkout() {
  return (
    <FormContainer>
      <div>
        <h1>Complete your order</h1>
        <AddressSection>
          <header>
            <MapPinLine size={22} />
            <div>
              <h2>Delivery Address</h2>
              <p>Provide address for delivery</p>
            </div>
          </header>

          <AddressInputGroup>
            <ZipCodeInput type="text" placeholder="Provide Zip Code" />
            <StreetNameInput type="text" placeholder="Address" />
            <ResidencyNumberInput type="text" placeholder="Number" />
            <ComplementInput type="text" placeholder="" />
            <CityInput type="text" placeholder="City" />
            <StateInput type="text" placeholder="State" />
          </AddressInputGroup>
        </AddressSection>

        <PaymentSection></PaymentSection>
      </div>

      <aside>
        <h1>Selected Coffees</h1>
        <SelectedCoffeesSection>
          <CheckoutItem />
        </SelectedCoffeesSection>
      </aside>
    </FormContainer>
  );
}
