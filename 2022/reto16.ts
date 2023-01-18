export function fixLetter(letter: string): string {
  return letter
    .trim()
    .replace(/,(?=[^\s])/g, ', ')
    .replace(/\s+(?=,|\.|\?|\s)/g, '')
    .replace(/\?\?+/g, '?')
    .replace(/([.!?] |^)(\w)/g, m => m.toUpperCase())
    .replace(/Santa Claus/gi, 'Santa Claus')
    .replace(/\w($)/g, m => m + '.')
}