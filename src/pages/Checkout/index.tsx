import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CheckoutItem } from './components/CheckoutItem';
import { OrderSummary } from './components/OrderSummary';
import { CheckoutHeader } from './components/CheckoutHeader';

import RadioInput from './components/RadioInput';
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
import { CheckoutContext, PaymentMethod } from '../../contexts/CheckoutContext';
import { useNavigate } from 'react-router-dom';

const checkoutPurchaseFormSchema = zod.object({
  'zip-code': zod.string({
    required_error: 'Please provide your address Zip Code',
  }),
  'address-street': zod.string(),
  'address-number': zod.string(),
  'address-complement': zod.string().optional(),
  'address-city': zod.string(),
  'address-state': zod.string(),
  payment: zod.nativeEnum(PaymentMethod),
});

type CheckoutPurchaseFormData = zod.infer<typeof checkoutPurchaseFormSchema>;

export function Checkout() {
  const { register, handleSubmit } = useForm<CheckoutPurchaseFormData>({
    resolver: zodResolver(checkoutPurchaseFormSchema),
  });
  const { coffees } = useContext(ShoppingCartContext);
  const { changeAddress, changePaymentMethod } = useContext(CheckoutContext);

  const navigate = useNavigate();

  function checkoutPurchase(data: CheckoutPurchaseFormData) {
    console.log(data);
    changeAddress({
      streetName: data['address-street'],
      number: data['address-number'],
      city: data['address-city'],
      state: data['address-state'],
    });

    changePaymentMethod(data.payment);

    navigate('/checkout/success');
  }

  return (
    <FormContainer onSubmit={handleSubmit(checkoutPurchase)}>
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
            <ZipCodeInput
              type="text"
              placeholder="Zip Code"
              {...register('zip-code', { required: true })}
            />
            <StreetNameInput
              type="text"
              placeholder="Address"
              {...register('address-street', { required: true })}
            />
            <ResidencyNumberInput
              type="text"
              placeholder="Number"
              {...register('address-number', { required: true })}
            />
            <ComplementInput
              type="text"
              placeholder="Complement"
              {...register('address-complement')}
            />
            <CityInput
              type="text"
              placeholder="City"
              {...register('address-city', { required: true })}
            />
            <StateInput
              type="text"
              placeholder="State"
              {...register('address-state', { required: true })}
            />
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
              text="Credit Card"
              icon="credit-card"
              value={PaymentMethod.CREDIT}
              {...register('payment', { required: true })}
            />
            <RadioInput
              id="payment_debit"
              text="Debit Card"
              icon="debit-card"
              value={PaymentMethod.DEBIT}
              {...register('payment')}
            />
            <RadioInput
              id="payment_cash"
              text="Cash"
              icon="cash"
              value={PaymentMethod.CASH}
              {...register('payment')}
            />
          </div>
        </PaymentSection>
      </div>

      <aside>
        <h1>Selected Coffees</h1>
        <SelectedCoffeesSection>
          {coffees.map(({ quantity, ...coffee }) => (
            <React.Fragment key={coffee.id}>
              <CheckoutItem coffee={coffee} quantity={quantity} />
              <hr />
            </React.Fragment>
          ))}

          <OrderSummary />

          <SubmitButton type="submit" disabled={!coffees.length}>
            Confirm Purchase
          </SubmitButton>
        </SelectedCoffeesSection>
      </aside>
    </FormContainer>
  );
}
