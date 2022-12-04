import { Container, Header, DeliveryInfo, Image } from './styles';

import deliveryImage from '../../assets/delivery-illustration.svg';
import { useContext } from 'react';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import { mapPaymentMethodToName } from '../../utils';

export function CheckoutSuccess() {
  const { address, paymentMethod } = useContext(CheckoutContext);

  const paymentMethodName = paymentMethod
    ? mapPaymentMethodToName(paymentMethod)
    : null;

  return (
    <Container>
      <Header>
        <h1>Uhu! Order placed</h1>
        <p>Now just relax and wait your coffee to be delivered to you</p>
      </Header>
      <main>
        <DeliveryInfo>
          <ul>
            {address && (
              <li>
                <div>
                  <p>
                    Deliver to{' '}
                    <strong>
                      {address.streetName}, {address.number}
                    </strong>
                  </p>
                  <p>
                    {address.city}, {address.state}
                  </p>
                </div>
              </li>
            )}
            <li>
              <div>
                <span>Estimate Delivery Time</span>
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </li>
            {paymentMethodName && (
              <li>
                <div>
                  <span>Payment Method</span>
                  <br />
                  <strong>{paymentMethodName}</strong>
                </div>
              </li>
            )}
          </ul>
        </DeliveryInfo>

        <Image
          src={deliveryImage}
          alt="Man riding a purple motorcycle with a delivery box on its back"
        />
      </main>
    </Container>
  );
}
