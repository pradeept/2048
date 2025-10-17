import { Board } from "@/types/board";
import { findEmptyTiles } from "./findEmptyTiles";

// add a random tile at a random empty position
export const addRandomTile = (board: Board): Board => {
  const modifiedBoard: Board = JSON.parse(JSON.stringify(board));
  const boardSize = modifiedBoard.length;

  // find empty tiles
  const emptyTiles = findEmptyTiles(modifiedBoard);
  const numberOfEmptyTiles = emptyTiles.length;

  // return same board
  if (numberOfEmptyTiles === 0) {
    return modifiedBoard;
  }

  const randomNum = getRandom(numberOfEmptyTiles);
  const randomIndex = emptyTiles[randomNum];

  // if number of empty tiles are 30-40% of board length add 4 as random tile value
  const percentageOfEmptyTiles = getPercantageOfEmptyTiles(
    numberOfEmptyTiles,
    boardSize
  );
  if (percentageOfEmptyTiles >= 30 && percentageOfEmptyTiles <= 40) {
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

const getRandom = (boundary: number): number => {
  return Math.floor(Math.random() * boundary);
};

const getPercantageOfEmptyTiles = (
  numberOfEmptyTiles: number,
  boardSize: number
) => {
  return (numberOfEmptyTiles / (boardSize * 2)) * 100;
};
