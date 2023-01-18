export function sortToys(toys: string[], positions: number[]): string[] {
  return toys.sort((a, b) =>
    positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  );
}