import { Bank, CreditCard, Money } from 'phosphor-react';

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
            <input type="radio" name="payment" id="payment_credit" />
            <label htmlFor="payment_credit">
              <CreditCard size={22} />
              <span>Credit Card</span>
            </label>

            <input type="radio" name="payment" id="payment_debit" />
            <label htmlFor="payment_debit">
              <Bank size={22} />
              <span>Debit Card</span>
            </label>

            <input type="radio" name="payment" id="payment_cash" />
            <label htmlFor="payment_cash">
              <Money size={22} />
              <span>Cash</span>
            </label>
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
