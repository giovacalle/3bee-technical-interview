import { Dispatch, SetStateAction } from "react";

export type IBoardGamePlayer = "X" | "O";
export type IBoardGameState = IBoardGamePlayer | "";

export interface IBoardGame {
  player: IBoardGamePlayer;
  setPlayer: Dispatch<SetStateAction<IBoardGamePlayer>>;
  board: IBoardGameState[][];
  move: (x: number, y: number) => void;
  movesCount: number;
  resetBoard: () => void;
}
