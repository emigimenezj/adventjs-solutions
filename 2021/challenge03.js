export default function isValid(letter) {
 return letter.split(" ").reduce((rec, gift) => /\([a-ú]+\)|^[a-ú]+$/i.test(gift) && rec, true);
}
