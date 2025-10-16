import { Board } from "@/types/board";

export const initializeBoard = (
  board: Board,
  random: (gridSize: number) => { row: number; column: number }
): Board => {
  const firstRandomTile = random(board.length);
  const secondRandomTile = random(board.length);

  board[firstRandomTile.row][firstRandomTile.column] = 2;
  board[secondRandomTile.row][secondRandomTile.column] = 2;
  return board;
};
