export function wrapping(gifts: string[]): string[] {
  return gifts.map(g =>
    '*'.repeat(g.length+2) + `\n*${g}*\n` + '*'.repeat(g.length+2)
  );
}