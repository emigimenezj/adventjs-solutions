export function decorateTree(base: string): string[] {
  const decorator = {
    BB:"B",
    RR:"R",
    PP:"P",
    PR:"B",
    RP:"B",
    RB:"P",
    BR:"P",   
    PB:"R",
    BP:"R",
  }
  const tree = [base];
  let arr = base.split(' ');
  while(arr.length > 1) {
    arr = arr.slice(1).map((d, i) => decorator[arr[i]+d]);
    tree.unshift(arr.join(' '));
  }
  return tree;
}