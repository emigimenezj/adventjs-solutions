export default function sumPairs(numbers, result) {
  let res = null;
  main :
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let a = numbers[i];
      let b = numbers[j];
      if (a + b === result) {
        res = [a, b];
        break main;
      };
    }
  }
  return res;
}
