export const formatPrice = (priceInCents: number): string => {
  const p = Math.floor(priceInCents / 100);
  const c = String(priceInCents % 100).padStart(2, '0');

  return `${p}.${c}`;
};
