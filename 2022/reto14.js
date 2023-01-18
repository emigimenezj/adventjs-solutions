function getOptimalPath(path) {
  const [res] = path.reverse()
    .reduce((rec, level) =>
      level.map((n, i) =>
        n + Math.min(rec[i], rec[i+1])
    ));
  return res;
}