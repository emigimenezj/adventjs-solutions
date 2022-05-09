export default function contains(store, product) {
  for (let tag in store) {
    if (typeof store[tag] === 'object' && contains(store[tag], product)) return true
    if (store[tag] === product) return true
  }
  return false;
}
