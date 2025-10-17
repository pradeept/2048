import { Board } from "@/types/board";
import { findEmptyTiles } from "./findEmptyTiles";

export const addRandomTile = (board: Board): Board => {
  const modifiedBoard = [...board];

  // find empty tiles
  const emptyTiles = findEmptyTiles(board);
  // no empty tiles left
  if (emptyTiles.length === 0) {
    return modifiedBoard;
  }
  // for generating random tile
  const randomNum = Math.floor(Math.random() * emptyTiles.length);
  const randomIndex = emptyTiles[randomNum];

  // if number of empty tiles are 30-40% of board length add 4 as random tile value
  // otherwise stick to 2 as the random tile value
  const percentOfEmptyTiles = (emptyTiles.length / board.length) * 2 * 100;
  if (percentOfEmptyTiles >= 30 && percentOfEmptyTiles <= 40) {
    modifiedBoard[randomIndex[0]][randomIndex[1]] = 4;
  } else {
    modifiedBoard[randomIndex[0]][randomIndex[1]] = 2;
  }

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
