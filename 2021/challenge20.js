export default function pangram(letter) {
  let change = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u',
    'ü': 'u'
  }
  for (let key of Object.keys(change)) letter.replaceAll(new RegExp(key,'gi'), change[key])
  return new Set(letter.toLowerCase().replaceAll(/[^a-zñ]/gi, "")).size === 27;
}
