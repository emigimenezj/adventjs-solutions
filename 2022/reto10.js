function checkJump(heights) {
  return /^1+0+$/.test(heights.reduce((rec, h, i) => (
    i+1 != heights.length &&
    h < heights[i + 1] &&
    (rec += 1),
    i+1 != heights.length &&
    h > heights[i + 1] &&
    (rec += 0),
    rec
  ), ''));
}