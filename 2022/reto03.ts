export function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  return reindeers.join('').length * 2 / packOfGifts.join('').length >> 0;
}