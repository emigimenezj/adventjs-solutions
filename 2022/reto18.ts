export function dryNumber(dry: number, numbers: number): number[] {
  return Array(numbers)
    .fill(null)
    .map((_, i) => i+1)
    .filter(n => `${n}`.includes(`${dry}`))
}