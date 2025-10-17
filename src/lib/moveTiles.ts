import { Board, Directions } from "@/types/board";
import { shiftZeros } from "./shiftZeros";
import { mergeTiles } from "./mergeTiles";
import { createCustomBoard } from "./createCustomBoard";

// move tiles based on direction
// algo: shiftzeros -> merge tiles -> shiftzeros
export const moveTiles = (board: Board, direction: Directions) => {
  let modifiedBoard = [];

  // deep copy whole board
  let copiedBoard = JSON.parse(JSON.stringify(board));

  if (direction === "up" || direction === "down") {
    copiedBoard = rotateBoard(board, "right");
  }

  for (let i = 0; i < copiedBoard[0].length; i++) {
    // deep copy the row
    const row = [...copiedBoard[i]];

    shiftZeros(row, direction);

    const mergedRow = mergeTiles(row, direction);

    shiftZeros(mergedRow, direction);

    modifiedBoard.push(mergedRow);
  }
  if (direction === "up" || direction === "down")
    modifiedBoard = rotateBoard(modifiedBoard, "left");
  return modifiedBoard;
};

// rotate board to left or right
const rotateBoard = (
  board: Board,
  direction: Omit<Directions, "up" | "down">
): Board => {
  const rotatedMatrix = createCustomBoard(board.length);
  const boardSize = board.length;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (direction === "right") {
        rotatedMatrix[i][j] = board[j][i];
      } else {
        rotatedMatrix[j][i] = board[i][j];
      }
    }
  }

  return rotatedMatrix;
};
