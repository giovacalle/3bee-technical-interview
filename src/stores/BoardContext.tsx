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
  const [movesCount, setMovesCount] = useState(0);

  // click on block
  const move = (x: number, y: number) => {
    const boardTmp = board.map((row) => row.slice()); // shallow copy

    if (boardTmp[x][y] !== "") return; // if block is not empty

    setMovesCount((prev) => prev + 1);

    setBoard(() => {
      boardTmp[x][y] = player;
      return boardTmp;
    });
  };

  // clean board
  const resetBoard = () => {
    setBoard(DEFAULT_BOARD_GAME.board);
    setPlayer(DEFAULT_BOARD_GAME.player);
    setMovesCount(0);
  };

  return (
    <BoardContext.Provider
      value={{
        player,
        setPlayer,
        board,
        move,
        movesCount,
        resetBoard
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
