import { Minus, Plus } from 'phosphor-react';
import { HTMLAttributes } from 'react';

import { Container } from './styles';

interface InputNumberProps extends HTMLAttributes<HTMLInputElement> {
  value: number;
  min: number;
  max: number;
  onAddAmount: () => void;
  onSubtractAmount: () => void;
}

export function InputNumber({
  onSubtractAmount,
  onAddAmount,
  ...inputProps
}: InputNumberProps) {
  return (
    <Container>
      <button type="button" onClick={onSubtractAmount}>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" {...inputProps} />
      <button type="button" onClick={onAddAmount}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
