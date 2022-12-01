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

import coffees from '../../coffees.json';
import { useState } from 'react';

interface ShoppingCartCoffee {
  id: string;
  quantity: number;
}

export function Home() {
  const [coffeesInShoppingCart, setCoffeesInShoppingCart] = useState<
    ShoppingCartCoffee[]
  >([]);

  function handleAddToCart(id: string, quantity: number) {
    const existentCoffeeIndex = coffeesInShoppingCart.findIndex(
      (coffee) => coffee.id === id,
    );

    if (existentCoffeeIndex < 0) {
      const newCoffee = {
        id,
        quantity,
      };

      setCoffeesInShoppingCart((state) => [...state, newCoffee]);
    } else {
      setCoffeesInShoppingCart((state) =>
        state.map((coffee) => {
          if (coffee.id === id) {
            return {
              ...coffee,
              quantity,
            };
          }

          return coffee;
        }),
      );
    }
  }

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
          {coffees.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCard coffee={coffee} onAddToCart={handleAddToCart} />
            </li>
          ))}
        </ul>
      </CoffeeList>
    </Container>
  );
}
