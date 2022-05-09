export default function maxProfit(prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++)
    for (let j = i + 1; j < prices.length; j++)
      max = Math.max(prices[j] - prices[i], max)

  return max !== 0 ? max : -1 ;
}
