export default function decodeNumber(symbols) {
  let doc = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100
  }

  return symbols.split("").reduce((rec, s, i, arr) => {
    let actual = doc[s];
    let next = doc[arr[i+1]];
    return actual < next ? rec - actual : rec + actual ;
  }, 0);
}
