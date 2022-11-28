import { Bank, CreditCard, Money } from 'phosphor-react';

import { Input, Label } from './styles';

const ICONS_MAPPER = {
  'credit-card': <CreditCard size={22} />,
  'debit-card': <Bank size={22} />,
  cash: <Money size={22} />,
} as const;

interface RadioInputProps {
  id: string;
  icon: keyof typeof ICONS_MAPPER;
  label: string;
  groupName: string;
}

export function RadioInput({ id, icon, label, groupName }: RadioInputProps) {
  return (
    <>
      <Input type="radio" name={groupName} id={id} />
      <Label htmlFor={id}>
        {ICONS_MAPPER[icon]}
        <span>{label}</span>
      </Label>
    </>
  );
}
