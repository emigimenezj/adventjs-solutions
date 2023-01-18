function fitsInOneBox(boxes) {
  const compareFn = (a, b) => a.l < b.l && a.w < b.w && a.h < b.h ? -1 : 0
  return boxes
    .sort(compareFn)
    .every((_, i) => i ? compareFn(boxes[i-1], boxes[i]) : true);
}