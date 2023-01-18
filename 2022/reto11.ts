export function getCompleted(part: string, total: string): string {
  const [ph, pm, ps] = part.split(':').map(t => +t);
  const [th, tm, ts] = total.split(':').map(t => +t);

  const partInSeconds: number = ph*3600 + pm*60 + ps;
  const totalInSeconds: number = th*3600 + tm*60 + ts;

  let a: number = partInSeconds;
  let b: number = totalInSeconds;

  while(b) {
    const tmp: number = a;
    a = b;
    b = tmp % b;
  }

  return partInSeconds/a + '/' + totalInSeconds/a;
}