import { Board } from "@/types/board";
import { findEmptyTiles } from "./findEmptyTiles";

export const addRandomTile = (board: Board): Board => {
  // deep copy the board
  const modifiedBoard = structuredClone(board);

  // find empty tiles
  const emptyTiles = findEmptyTiles(board);
  // for generating random tile
  const randomNum = Math.floor(Math.random() * emptyTiles.length);
  const randomIndex = emptyTiles[randomNum];
  modifiedBoard[randomIndex[0]][randomIndex[1]] = 2;
  return modifiedBoard;
};

// for initialization of the board
export const randomIndex = (
  gridSize: number
): { row: number; column: number } => {
  const randomRow = Math.floor(Math.random() * gridSize);
  let randomColumn = Math.floor(Math.random() * gridSize);

  // to avoid same random indices
  if (randomRow === randomColumn) {
    randomColumn = Math.floor(Math.random() * gridSize);
  }
  return { row: randomRow, column: randomColumn };
};
