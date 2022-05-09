export default function getMinJump(obstacles) {
  let jump = 1;
  while(obstacles.some(o => o % jump === 0)) jump++
  return jump;
}
