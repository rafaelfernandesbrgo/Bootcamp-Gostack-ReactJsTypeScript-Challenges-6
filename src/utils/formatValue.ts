const formatValue = (value: number): string => {
  const valueformated = Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  return valueformated;
};

export default formatValue;
