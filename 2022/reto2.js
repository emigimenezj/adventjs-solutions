function countHours(year, holidays) {
  const DOMINGO = 0;
  const SABADO = 6;

  return holidays
    .map(h => new Date(h + '/' + year).getDay())
    .filter(d => d != DOMINGO && d != SABADO)
    .length * 2;
}