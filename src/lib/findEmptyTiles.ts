import { Board } from "@/types/board";

export const findEmptyTiles = (board: Board): number[][] => {
  const emptyTiles = [];
  const boardSize = board[0].length;
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === 0) {
        emptyTiles.push([i, j]);
      }
    }
  }
  return emptyTiles;
};
