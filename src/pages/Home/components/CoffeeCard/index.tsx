import { ShoppingCart } from 'phosphor-react';

import { InputNumber } from '../../../../components/InputNumber';

import { Container, Header, FormContainer } from './styles';

import { FormEvent } from 'react';
import { formatPrice } from '../../../../utils';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

interface Coffee {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  priceInCents: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
  onAddToCart: (id: string, quantity: number) => void;
}

export function CoffeeCard({ coffee, onAddToCart }: CoffeeCardProps) {
  const { id, name, description, features, image, priceInCents } = coffee;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget.elements.namedItem(
      'coffee',
    ) as HTMLInputElement;

    const quantity = parseInt(element.value);

    onAddToCart(id, quantity);
  }

  return (
    <Container>
      <Header>
        <img src={image} alt="Mug filled with expresso coffee" />
        {features.map((feature) => (
          <strong key={feature}>{feature}</strong>
        ))}
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
