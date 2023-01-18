function printTable(gifts) {
  const maxGL = Math.max(...gifts.map(g => g.name.length), 4);
  const maxQL = Math.max(...gifts.map(g => String(g.quantity).length), 8);

  const topEdge = '+'.repeat(maxGL + maxQL + 7);
  const bottomEdge = topEdge.replaceAll('+', '*');

  const header = [
    { name: 'Gift', quantity: 'Quantity' },
    { name: '-'.repeat(maxGL), quantity: '-'.repeat(maxQL) }
  ];

  const lines = [...header, ...gifts].map(({name, quantity}) =>
    `| ${name.padEnd(maxGL)} | ${String(quantity).padEnd(maxQL)} |\n`
  );

  return topEdge + '\n' + lines.join('') + bottomEdge;
}