import { useBoard } from "@/stores/BoardContext";
import { indexToCoordinates } from "@/utils/boardGame";

const BoardBlock = ({ index }: { index: number }) => {
  const { board } = useBoard();
  const { x, y } = indexToCoordinates(index);

  return (
    <div className="w-full h-full" onClick={() => console.log("ddd")}>
      {board[x][y]}
    </div>
  );
};

export default BoardBlock;
