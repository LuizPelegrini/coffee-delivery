import { Minus, Plus } from 'phosphor-react';

import { Container } from './styles';

export function InputNumber() {
  return (
    <Container>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" min={1} max={99} />
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
