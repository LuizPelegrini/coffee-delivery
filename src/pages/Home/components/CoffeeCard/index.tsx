import { ShoppingCart } from 'phosphor-react';

import { InputNumber } from '../../../../components/InputNumber';

import { Container, Header, FormContainer, CoffeeFeatures } from './styles';

import { FormEvent, useContext } from 'react';
import { formatPrice } from '../../../../utils';
import { Coffee } from '../../../../@types/coffee';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffee } = useContext(ShoppingCartContext);

  const { name, description, features, image, priceInCents } = coffee;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget.elements.namedItem(
      'coffee',
    ) as HTMLInputElement;

    const quantity = parseInt(element.value);
    addCoffee(coffee, quantity);
  }

  return (
    <Container>
      <Header>
        <img src={image} alt="Mug filled with expresso coffee" />
        <CoffeeFeatures>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </CoffeeFeatures>
        <h3>{name}</h3>
        <p>{description}</p>
      </Header>

      <FormContainer>
        <strong>{formatPrice(priceInCents)}</strong>
        <form onSubmit={handleSubmit}>
          <InputNumber name="coffee" min={MIN_QUANTITY} max={MAX_QUANTITY} />
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </FormContainer>
    </Container>
  );
}
