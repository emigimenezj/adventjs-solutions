type Gift = { name: string, quantity: number };

export function printTable(gifts: Gift[]): string {
  const maxGL: number = Math.max(...gifts.map(g => g.name.length), 4);
  const maxQL: number = Math.max(...gifts.map(g => String(g.quantity).length), 8);

  const topEdge: string = '+'.repeat(maxGL + maxQL + 7);
  const bottomEdge: string = topEdge.replaceAll('+', '*');

  const header: { name: string, quantity: string }[] = [
    { name: 'Gift', quantity: 'Quantity' },
    { name: '-'.repeat(maxGL), quantity: '-'.repeat(maxQL) }
  ];

  const lines: string[] = [...header, ...gifts].map(({name, quantity}) =>
    `| ${name.padEnd(maxGL)} | ${String(quantity).padEnd(maxQL)} |\n`
  );

  return topEdge + '\n' + lines.join('') + bottomEdge;
}