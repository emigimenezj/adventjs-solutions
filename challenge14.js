export default function missingReindeer(ids) {
  return ids.sort((a, b) => a - b).reduce((rec, id, i) => id === i ? ++rec : rec, 0);
}
