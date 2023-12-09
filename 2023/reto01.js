// First
function findFirstRepeated(gifts) {
  const giftWatched = new Set();

  for (const g of gifts) {
    if(giftWatched.has(g)) return g;
    giftWatched.add(g);
  }
  return -1;
}

// Second → BEST
function findFirstRepeated(gifts) {
  return gifts.find((n, i) => gifts.indexOf(n) != i) ?? -1
}

// Third
function findFirstRepeated(gifts) {
  return gifts.reduce((rec, g, i) => gifts.slice(0, i).includes(g) && rec === -1 ? g : rec, -1);
}