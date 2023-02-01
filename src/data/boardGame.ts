import { IBoardGame } from "@/types/boardGame";

export const BOARD_SIZE = 3;

export const INITIAL_BOARD_GAME: IBoardGame = {
  player: "X",
  winner: null,
  board: Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill("")),
  move: (x: number, y: number) => {}
};
