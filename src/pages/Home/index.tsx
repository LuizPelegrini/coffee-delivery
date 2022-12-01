import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import {
  Container,
  ItemsList,
  IntroSection,
  IconWrapper,
  CoffeeList,
} from './styles';
import { CoffeeCard } from './components/CoffeeCard';

import coffeeImage from '../../assets/coffee-image.png';

import coffeesCatalogue from '../../coffees.json';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export function Home() {
  const { coffees } = useContext(ShoppingCartContext);

  const shoppingCartCoffeesIndexed = coffees.reduce((acc: any, coffee) => {
    acc[coffee.id] = coffee;
    return acc;
  }, {});

  const c = coffeesCatalogue.map((coffee) => {
    if (shoppingCartCoffeesIndexed[coffee.id]) {
      return shoppingCartCoffeesIndexed[coffee.id];
    } else {
      return {
        ...coffee,
        quantity: 1,
      };
    }
  });

  return (
    <Container>
      <IntroSection>
        <h1>Find the perfect coffee anytime of the day</h1>
        <p>
          Receive your coffee wherever you are and whenever you want with Coffee
          Delivery
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

        <img
          src={coffeeImage}
          alt="Coffee cup on a yellow background with coffee beans"
        />
      </IntroSection>

      <CoffeeList>
        <h2>Our coffees</h2>
        <ul>
          {c.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCard coffee={coffee} quantity={coffee.quantity} />
            </li>
          ))}
        </ul>
      </CoffeeList>
    </Container>
  );
}
