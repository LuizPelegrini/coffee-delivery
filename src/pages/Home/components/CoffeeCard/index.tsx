import { ShoppingCart } from 'phosphor-react';
import { InputNumber } from '../../../../components/InputNumber';

import { Container, Header, FormContainer } from './styles';

import americanoImage from '../../../../assets/coffees/americano.png';
import { ChangeEvent, useState } from 'react';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(1);

  function handleChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value) {
      const amount = Math.min(
        Math.max(MIN_QUANTITY, parseInt(value)),
        MAX_QUANTITY,
      );
      setQuantity(amount);
    } else {
      setQuantity(MIN_QUANTITY);
    }
  }

  function handleAddAmount() {
    const newValue = quantity + 1 > MAX_QUANTITY ? MAX_QUANTITY : quantity + 1;
    setQuantity(newValue);
  }

  function handleSubtractAmount() {
    const newValue = quantity - 1 < MIN_QUANTITY ? MIN_QUANTITY : quantity - 1;
    setQuantity(newValue);
  }

  return (
    <Container>
      <Header>
        <img src={americanoImage} alt="Mug filled with expresso coffee" />
        <strong>Traditional</strong>
        <h3>Traditional Expresso</h3>
        <p>Traditional coffee shot with ground beans</p>
      </Header>

      <FormContainer>
        <strong>9.90</strong>
        <form>
          <InputNumber
            value={quantity}
            onChange={handleChangeAmount}
            onAddAmount={handleAddAmount}
            onSubtractAmount={handleSubtractAmount}
            min={1}
            max={99}
          />
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </FormContainer>
    </Container>
  );
}
