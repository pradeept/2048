import { Board } from "@/types/board";

// find emptyTiles from the board
export const findEmptyTiles = (board: Board): number[][] => {
  let emptyTiles: number[][] = [];
  
  emptyTiles = board
    .flatMap((row, rIndex) => // flatten 2D array and filter null values
      row.map((val, cIndex) => (val === 0 ? [rIndex, cIndex] : null))
    )
    .filter((indices) => indices !== null);
  return emptyTiles;
};

