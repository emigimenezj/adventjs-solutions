// First → BEST
function manufacture(gifts, materials) {
  return gifts.filter((g) => g.split('').every(m => materials.includes(m)));
}

// Second
function manufacture(gifts, materials) {
  const regexp = new RegExp(`^[${materials}]+$`);
  return gifts.filter(g => regexp.test(g));
}