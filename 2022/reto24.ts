function canExit(maze: string[][]): boolean {
  const HEIGHT: number = maze.length;
  const WIDTH: number = maze[0].length;
  const { max, min } = Math;

  const start: number = maze.flat().join('').indexOf('S');

  const row: number = (start / WIDTH) >> 0;
  const col: number = (start % WIDTH);

  const findPath = (row: number, col: number): boolean => {
    if (/[■W]/.test(maze[row][col])) return false;
    if (maze[row][col] === 'E') return true;

    maze[row][col] = '■';

    return  findPath(min(row+1, HEIGHT-1), col) ||
            findPath(row, min(col+1, WIDTH-1)) ||
            findPath(max(row-1, 0), col) ||
            findPath(row, max(col-1, 0));
  }
  
  const res: boolean = findPath(row, col);
  return res;
}