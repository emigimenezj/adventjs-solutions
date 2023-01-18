export function checkPart(part: string): boolean {
  return [...part].some((_, i, pieces) => {
    const partToCheck = pieces.filter((_, k) => i != k)
    return partToCheck.join('') === partToCheck.reverse().join('');
  });
}