import { BOARD_SIZE } from "@/data/boardGame";
import { useBoard } from "@/stores/BoardContext";
import { indexToCoordinates } from "@/utils/boardGame";
import { ReactNode } from "react";

const GameBoard = ({
  onChange,
  children
}: {
  onChange: (board: any, player: any) => void;
  children: (i: number) => ReactNode;
}) => {
  const { board, player, move, resetBoard } = useBoard();

  const clickBlockHandler = (index: number) => {
    const { x, y } = indexToCoordinates(index);

    if (board[x][y] !== "") return;

    move(x, y);

    onChange(board, player);
  };

  return (
    <div className="w-full h-[50vh] mt-[150px] px-[40px] flex flex-col gap-5 items-center">
      <div className="w-full flex flex-row items-center justify-between">
        <h1>Current player: {player}</h1>
        <button
          className="py-2 px-6 rounded-lg bg-[#64758b] text-main text-xl"
          onClick={resetBoard}
        >
          Reset
        </button>
      </div>
      <ul
        className="w-full grid gap-4 p-3 bg-boardGame rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(20px, 1fr))`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(20px, 150px))`
        }}
      >
        {[
          ...Array(BOARD_SIZE * BOARD_SIZE)
            .fill(0)
            .map((item, index) => index)
        ].map((i) => (
          <li
            key={"board-block-" + i}
            className="w-full h-full flex items-center justify-center bg-boardBlock cursor-pointer"
            onClick={() => clickBlockHandler(i)}
          >
            {children(i)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameBoard;
