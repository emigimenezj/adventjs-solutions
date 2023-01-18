export function countHours(year: number, holidays: string[]): number {
  const DOMINGO: number = 0;
  const SABADO: number = 6;

  return holidays
    .map(h => new Date(h + '/' + year).getDay())
    .filter(d => d != DOMINGO && d != SABADO)
    .length * 2;
}