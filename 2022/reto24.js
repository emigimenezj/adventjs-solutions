function canExit(maze) {
  const HEIGHT = maze.length;
  const WIDTH = maze[0].length;
  const { max, min } = Math;

  const start = maze.flat().join('').indexOf('S');

  const row = (start / WIDTH) >> 0;
  const col = (start % WIDTH);

  const findPath = (row, col) => {
    if (/[■W]/.test(maze[row][col])) return false;
    if (maze[row][col] === 'E') return true;

    maze[row][col] = '■';

    return  findPath(min(row+1, HEIGHT-1), col) ||
            findPath(row, min(col+1, WIDTH-1)) ||
            findPath(max(row-1, 0), col) ||
            findPath(row, max(col-1, 0));
  }
  
  const res = findPath(row, col);
  return res;
}