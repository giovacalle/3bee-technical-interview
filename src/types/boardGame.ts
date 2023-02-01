export type IBoardGamePlayer = "X" | "O";
export type IBoardGameState = IBoardGamePlayer | "";
export type IBoardGameWinner = IBoardGamePlayer | "DRAW" | null;

export interface IBoardGame {
  player: IBoardGamePlayer;
  winner: IBoardGameWinner;
  board: IBoardGameState[][];
  move: (x: number, y: number) => void;
}
