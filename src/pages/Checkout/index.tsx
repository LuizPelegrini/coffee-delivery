import { CheckoutItem } from './components/CheckoutItem';
import { OrderSummary } from './components/OrderSummary';
import { CheckoutHeader } from './components/CheckoutHeader';

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
import { RadioInput } from './components/RadioInput';

export function Checkout() {
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
          <CheckoutItem />
          <hr />
          <CheckoutItem />
          <hr />

          <OrderSummary />

          <SubmitButton type="submit">Confirm Purchase</SubmitButton>
        </SelectedCoffeesSection>
      </aside>
    </FormContainer>
  );
}
