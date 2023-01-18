export function countTime(leds: number[]): number {
  let map: string = leds.join('');
  // @ts-ignore
  const [firstZeros] = map.match(/0*/);

  map = map.slice(firstZeros.length) + firstZeros;

  // @ts-ignore
  return Math.max(...map.match(/0*/g).map(s => s.length)) * 7;
}