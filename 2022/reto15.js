function decorateTree(base) {
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
  base = base.split(' ');

  while(base.length > 1) {
    base = base.slice(1).map((d, i) => decorator[base[i]+d]);
    tree.unshift(base.join(' '));
  }

  return tree;
}