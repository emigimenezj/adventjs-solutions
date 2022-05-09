export default function wrapGifts(gifts) {
  let str = "*".repeat(gifts[0].length);
  gifts.unshift(str);
  gifts.push(str);
  return gifts.map(g => `*${g}*`);
}
