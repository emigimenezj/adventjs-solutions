export default function createXmasTree(height) {
  let maxLong = height * 2 - 1;
  let maxLongDiv2 = Math.floor(maxLong / 2);
  let arbol = Array(height);

  for(let i = 0; i < arbol.length; i++) {
    let paddingSize = maxLongDiv2 - i;
    arbol[i] = "_".repeat(paddingSize) + "*".repeat(1 + i*2) + "_".repeat(paddingSize);
  }
  let tronco = arbol[0].replace("*", "#");
  arbol.push(tronco, tronco);
  return arbol.join("\n");
}
