import { CheckoutItem } from './components/CheckoutItem';
import { OrderSummary } from './components/OrderSummary';
import { CheckoutHeader } from './components/CheckoutHeader';

import { RadioInput } from './components/RadioInput';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

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
  SubmitButton,
} from './styles';

export function Checkout() {
  const { coffees } = useContext(ShoppingCartContext);

  return (
    <FormContainer>
      <div>
        <h1>Complete your order</h1>
        <AddressSection>
          <CheckoutHeader
            icon="pin"
            iconColor="yellow-dark"
            title="Delivery Address"
            description="Provide address for delivery"
          />

          <AddressInputGroup>
            <ZipCodeInput type="text" placeholder="Zip Code" />
            <StreetNameInput type="text" placeholder="Address" />
            <ResidencyNumberInput type="text" placeholder="Number" />
            <ComplementInput type="text" placeholder="Complement" />
            <CityInput type="text" placeholder="City" />
            <StateInput type="text" placeholder="State" />
          </AddressInputGroup>
        </AddressSection>

        <PaymentSection>
          <CheckoutHeader
            icon="dollar"
            iconColor="purple"
            title="Payment"
            description="Payment is made upon delivery. Choose the method you'd like
            to use:"
          />

          <div>
            <RadioInput
              id="payment_credit"
              groupName="payment"
              label="Credit Card"
              icon="credit-card"
            />
            <RadioInput
              id="payment_debit"
              groupName="payment"
              label="Debit Card"
              icon="debit-card"
            />
            <RadioInput
              id="payment_cash"
              groupName="payment"
              label="Cash"
              icon="cash"
            />
          </div>
        </PaymentSection>
      </div>

      <aside>
        <h1>Selected Coffees</h1>
        <SelectedCoffeesSection>
          {coffees.map(({ quantity, ...coffee }) => (
            <>
              <CheckoutItem coffee={coffee} quantity={quantity} />
              <hr />
            </>
          ))}

          <OrderSummary />

          <SubmitButton type="submit">Confirm Purchase</SubmitButton>
        </SelectedCoffeesSection>
      </aside>
    </FormContainer>
  );
}
