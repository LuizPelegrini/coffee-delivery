import { Minus, Plus } from 'phosphor-react';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
}

export function InputNumber({ min, max, ...inputProps }: InputNumberProps) {
  const [value, setValue] = useState(1);

  function handleAdd() {
    const newValue = value + 1 > max ? max : value + 1;
    setValue(newValue);
  }

  function handleSubtract() {
    const newValue = value - 1 < min ? min : value - 1;
    setValue(newValue);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value) {
      const amount = Math.min(Math.max(min, parseInt(value)), max);
      setValue(amount);
    } else {
      setValue(min);
    }
  }

  return (
    <Container>
      <button type="button" onClick={handleSubtract}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        {...inputProps}
        value={value}
        onChange={handleChange}
      />
      <button type="button" onClick={handleAdd}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
