import { Board, Directions } from "@/types/board";
import { shiftZeros } from "./shiftZeros";
import { merge } from "./merge";

export const moveTiles = (board: Board, direction: Directions) => {
  // shiftZeros
  // merge
  // shiftZeros
  const modifiedBoard = [];

  // MODIFY COLS INTO ROWS FOR UP AND DOWN
  for (let i = 0; i < board[0].length; i++) {
    // deep copy the row
    const row = JSON.parse(JSON.stringify(board[i]));
    shiftZeros(row, direction);
    merge(row, direction);
    shiftZeros(row, direction);
    modifiedBoard.push(row);
  }
  console.log(modifiedBoard);
  return modifiedBoard;
};
