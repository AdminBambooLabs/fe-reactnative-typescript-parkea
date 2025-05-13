export function convertToFloat(value: string | number) {
  const valueAsNumber = typeof value === 'string' ? parseFloat(value) : value;
  const transform = valueAsNumber / 100;

  return Number(transform.toFixed(2));
}
