import { Container, Header, DeliveryInfo, Image } from './styles';

import deliveryImage from '../../assets/delivery-illustration.svg';

export function CheckoutSuccess() {
  return (
    <Container>
      <Header>
        <h1>Uhu! Order placed</h1>
        <p>Now just relax and wait your coffee to be delivered to you</p>
      </Header>
      <main>
        <DeliveryInfo>
          <ul>
            <li>
              <div>
                <p>
                  Deliver to <strong>Bukit Kewangan, 50200</strong>
                </p>
                <p>Kuala Lumpur, KL</p>
              </div>
            </li>
            <li>
              <div>
                <span>Estimate Delivery Time</span>
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </li>
            <li>
              <div>
                <span>Payment Method</span>
                <br />
                <strong>Credit Card</strong>
              </div>
            </li>
          </ul>
        </DeliveryInfo>

        <Image
          src={deliveryImage}
          alt="Man riding a purple motorcycle with a delivery box"
        />
      </main>
    </Container>
  );
}
