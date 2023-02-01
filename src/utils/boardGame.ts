import { BOARD_SIZE } from "@/data/boardGame";
import { IBoardGamePlayer, IBoardGameState } from "@/types/boardGame";

// this let us know coordinates given an index
// making matrix flat we can retrieve index so this would be the opposite
export const indexToCoordinates = (index: number) => {
  const y = index % BOARD_SIZE;
  const x = Math.floor(index / BOARD_SIZE);
  return { x, y };
};

export const checkWinner = (
  board: IBoardGameState[][],
  player: IBoardGamePlayer
) => {
  // rows
  for (let row = 0; row < BOARD_SIZE - 1; row++) {
    if (board[row].every((box) => box == player)) return player;
  }

  // columns
  for (let col = 0; col < BOARD_SIZE - 1; col++) {
    if (board.every((row) => row[col] == player)) return player;
  }

  // diagonal
  if (board.every((row, index) => row[index] == player)) return player;

  // anti-diagonal
  if (board.every((row, index) => row[BOARD_SIZE - index - 1] == player))
    return player;
};
