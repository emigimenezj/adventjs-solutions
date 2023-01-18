export function carryGifts(gifts: string[], maxWeight: number): string[] {
  const regex: RegExp = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g');
  return gifts.join(' ').match(regex) || [];
}