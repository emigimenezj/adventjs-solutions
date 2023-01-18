export function getGiftsToRefill(a1: string[], a2: string[], a3: string[]): string[] {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    gift => ~~a1.includes(gift) + ~~a2.includes(gift) + ~~a3.includes(gift) === 1
  );
}