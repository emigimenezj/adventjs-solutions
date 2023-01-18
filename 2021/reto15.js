export default function checkSledJump(heights) {
  const graph = [];

  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i];
    if(!diff) return false
    graph.push(diff > 0 ? 1 : 0);
  }

  const graphString = graph.join('');

  return graphString.lastIndexOf('1') + 1 &&
    graphString.lastIndexOf('1') < graphString.indexOf('0') ? true : false ;
}

/*
*** FIRST APPROACH ***
/*
export default function checkSledJump(heights) {
  let max = Math.max(...heights);
  let maxIndex = heights.indexOf(max);
  if (maxIndex === 0 || maxIndex === heights.length-1) return false
  
  let strictlyIncreasing = heights.slice(0, maxIndex+1)
  let strictlyDecreasing = heights.slice(maxIndex);

  for(let i = 0; i < strictlyIncreasing.length - 1; i++)
    if(!(strictlyIncreasing[i] < strictlyIncreasing[i+1])) return false

  for(let i = 0; i < strictlyDecreasing.length - 1; i++)
    if(!(strictlyDecreasing[i] > strictlyDecreasing[i+1])) return false
  
  return true
}
*/
