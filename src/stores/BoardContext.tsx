import { INITIAL_BOARD_GAME } from "@/data/boardGame";
import { IBoardGame } from "@/types/boardGame";
import { createContext, useContext, useState } from "react";

const DEFAULT_BOARD_GAME = { ...INITIAL_BOARD_GAME };

export const BoardContext = createContext<IBoardGame>(DEFAULT_BOARD_GAME);

export const useBoard = () => {
  return useContext(BoardContext);
};

export const BoardContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [board, setBoard] = useState(DEFAULT_BOARD_GAME.board);
  const [player, setPlayer] = useState(DEFAULT_BOARD_GAME.player);
  const [winner, setWinner] = useState(DEFAULT_BOARD_GAME.winner);
  const [movesCount, setMovesCount] = useState(0);

  const move = (x: number, y: number) => {
    const boardTmp = board.map((row) => row.slice()); // shallow copy

    // check if cell is empty
    if (boardTmp[x][y] === "") {
      setBoard((board) => {
        boardTmp[x][y] = player;
        return boardTmp;
      });
    }
  };

  return (
    <BoardContext.Provider
      value={{
        player,
        winner,
        board,
        move
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
