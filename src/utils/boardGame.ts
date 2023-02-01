import { BOARD_SIZE } from "@/data/boardGame";

// this let us know coordinates given an index
// making matrix flat we can retrieve index so this would be the opposite
export const indexToCoordinates = (index: number) => {
  const x = index % BOARD_SIZE;
  const y = Math.floor(index / BOARD_SIZE);
  return { x, y };
};
