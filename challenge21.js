export default function canCarry(capacity, trips) {
  const GIFTS = 0;
  const START = 1;
  const END = 2;
  
  let condition = [];
  for (let i = 0; i < trips.length; i++) {
    for (let j = trips[i][START]; j < trips[i][END]; j++) {
      condition[j] ??= 0;
      condition[j] += trips[i][GIFTS];
      if (capacity < condition[j]) return false
    }
  }
  return true;
}
