function dryNumber(dry, numbers) {
  return Array(numbers)
    .fill()
    .map((_, i) => i+1)
    .filter(n => `${n}`.includes(dry))
}