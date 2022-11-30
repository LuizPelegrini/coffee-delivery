import { Minus, Plus } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

import { Container } from './styles';

interface InputNumberProps {
  initialAmount: number;
}

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 99;

export function InputNumber({ initialAmount }: InputNumberProps) {
  const [amount, setAmount] = useState(initialAmount);

  function handleAddAmount() {
    setAmount((state) => {
      if (state === MAX_AMOUNT) return state;
      return state + 1;
    });
  }

  function handleSubtractAmount() {
    setAmount((state) => {
      if (state === MIN_AMOUNT) return state;
      return state - 1;
    });
  }

  function handleChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value) {
      const amount = Math.min(
        Math.max(MIN_AMOUNT, parseInt(value)),
        MAX_AMOUNT,
      );
      setAmount(amount);
    } else {
      setAmount(1);
    }
  }

  return (
    <Container>
      <button type="button" onClick={handleSubtractAmount}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        min={1}
        max={99}
        value={amount}
        onChange={handleChangeAmount}
      />
      <button type="button" onClick={handleAddAmount}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
