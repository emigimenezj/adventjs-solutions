function selectSleigh(distance, sleighs) {
  const res = sleighs.findLast(s => s.consumption * distance <= 20);
  return res ? res.name : null;
}