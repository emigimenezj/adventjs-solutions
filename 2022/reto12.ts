type sleigh = { name: string, consumption: number };

export function selectSleigh(distance: number, sleighs: sleigh[]): string {
  // @ts-ignore
  const res = sleighs.findLast((s: sleigh) => s.consumption * distance <= 20);
  return res ? res.name : null;
}