type box = {l: number, w: number, h: number};

export function fitsInOneBox(boxes: box[]): boolean {
  const compareFn = (a: box, b: box): number => a.l < b.l && a.w < b.w && a.h < b.h ? -1 : 0
  return boxes
    .sort(compareFn)
    .every((_, i) => i ? compareFn(boxes[i-1], boxes[i]) : true);
}