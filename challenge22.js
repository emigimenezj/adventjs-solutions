export default function countDecorations(bigTree) {
  let left = bigTree.left ? countDecorations(bigTree.left) : 0 ;
  let right = bigTree.right ? countDecorations(bigTree.right) : 0 ;
  return bigTree.value + left + right;
} 
