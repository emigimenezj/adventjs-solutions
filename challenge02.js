export default function listGifts(letter) {
 let regalos = letter.split(" ").filter(gift => !gift.startsWith("_") && gift);
 let res = {};
 for (let regalo of regalos) {
   res[regalo] ??= 0;
   res[regalo]++;
 }
 return res;
}
