export default function getCoins(change) {
  let coins = [1, 2, 5, 10, 20, 50];
  let res = Array(6).fill(0);

  for (let i = coins.length - 1; change;) {
    if (change >= coins[i]) {
      change -= coins[i];
      res[i]++;
      continue;
    }
    i--;
  }

  return res;
}
