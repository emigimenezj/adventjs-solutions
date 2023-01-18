function countTime(leds) {
  leds = leds.join('');
  const [firstZeros] = leds.match(/0*/);

  leds = leds.slice(firstZeros.length) + firstZeros;

  return Math.max(...leds.match(/0*/g).map(s => s.length)) * 7;
}