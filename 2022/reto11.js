function getCompleted(part, total) {
  const [ph, pm, ps] = part.split(':').map(t => +t);
  const [th, tm, ts] = total.split(':').map(t => +t);

  const partInSeconds = ph*3600 + pm*60 + ps;
  const totalInSeconds = th*3600 + tm*60 + ts;

  let a = partInSeconds;
  let b = totalInSeconds;

  while(b) {
    const tmp = a;
    a = b;
    b = tmp % b;
  }

  return partInSeconds/a + '/' + totalInSeconds/a;
}