export default function canReconfigure(start, end) {
  if (start.length !== end.length) return false

  let map = {};
  for (let i = 0; i < start.length; i++)
    if ((map[start[i]] ??= end[i]) !== end[i] || (map[end[i]] ??= start[i]) !== start[i])
      return false

  return true;
}
