import coffeeImage from '../../assets/coffee-image.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { Container, ItemsList, IntroSection, IconWrapper } from './styles';

export function Home() {
  return (
    <Container>
      <IntroSection>
        <div>
          <h1>Find the perfect coffee anytime of the day</h1>
          <p>
            Receive your coffee wherever you are and whenever you want with
            Coffee Delivery
          </p>

          <ItemsList>
            <li>
              <IconWrapper bgColor="yellowDark">
                <ShoppingCart weight="fill" size={16} />
              </IconWrapper>
              Simple and secure purchase
            </li>
            <li>
              <IconWrapper bgColor="yellow">
                <Timer weight="fill" size={16} />
              </IconWrapper>
              Fast delivery
            </li>
            <li>
              <IconWrapper bgColor="gray">
                <Package weight="fill" size={16} />
              </IconWrapper>
              Anti-leaking wrapping
            </li>
            <li>
              <IconWrapper bgColor="purple">
                <Coffee weight="fill" size={16} />
              </IconWrapper>
              Fresh coffee directly delivered to you
            </li>
          </ItemsList>
        </div>

        <img
          src={coffeeImage}
          alt="Coffee cup on a yellow background with coffee beans"
        />
      </IntroSection>
    </Container>
  );
}
