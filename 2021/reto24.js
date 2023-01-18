export default function checkIsSameTree(treeA, treeB) {
  if (treeA === null || treeB === null)
    return treeA === treeB ? true : false ;
  return treeA.value === treeB.value && 
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right);
}
