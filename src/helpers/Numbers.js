export function calculatePercentage(oldValue, newValue) {
  if (!oldValue || !newValue) {
    return 0;
  }

  const percentChange = ((newValue - oldValue) / oldValue) * 100;
  return +(percentChange.toFixed(2));
}