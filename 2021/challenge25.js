export default function canMouseEat(direction, game) {
  const mouse = 'm';
  const food = '*';

  const dim = game[0].length;
  game = game.flat().join('');
  const pos = game.indexOf(mouse);

  const moves = {
    'up': game[pos-dim] === food,
    'down': game[pos+dim] === food,
    'right': game[pos+1] === food,
    'left': game[pos-1] === food
  }
  return moves[direction];
}
