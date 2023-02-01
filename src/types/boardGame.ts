import { Dispatch, SetStateAction } from "react";

export type IBoardGamePlayer = "X" | "O";
export type IBoardGameState = IBoardGamePlayer | "";
export type IBoardGameWinner = IBoardGamePlayer | "DRAW" | null;

export interface IBoardGame {
  player: IBoardGamePlayer;
  setPlayer: Dispatch<SetStateAction<IBoardGamePlayer>>;
  winner: IBoardGameWinner;
  setWinner: Dispatch<SetStateAction<IBoardGameWinner>>;
  board: IBoardGameState[][];
  move: (x: number, y: number) => void;
  movesCount: number;
  resetBoard: () => void;
}
