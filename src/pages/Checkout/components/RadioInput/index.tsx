import { forwardRef, InputHTMLAttributes } from 'react';

import { Bank, CreditCard, Money } from 'phosphor-react';

import { Input, Label } from './styles';

const ICONS_MAPPER = {
  'credit-card': <CreditCard size={22} />,
  'debit-card': <Bank size={22} />,
  cash: <Money size={22} />,
} as const;

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  icon: keyof typeof ICONS_MAPPER;
  text: string;
}

function RadioInput(
  { id, icon, text, ...inputProps }: RadioInputProps,
  ref: any,
) {
  return (
    <>
      <Input id={id} type="radio" {...inputProps} ref={ref} />
      <Label htmlFor={id}>
        {ICONS_MAPPER[icon]}
        <span>{text}</span>
      </Label>
    </>
  );
}

export default forwardRef(RadioInput);
