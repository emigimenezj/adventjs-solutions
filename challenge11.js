export default function shouldBuyFidelity(times) {
  let normal = times * 12;
  let card = 250;
  for (let i = 1; i <= times; i++)
    card += 12 * 0.75**i
  return card < normal;
}
