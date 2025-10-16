import { useBoardStore } from "@/stores/board-store";

/*
    Rules:
    - If all tiles are filled with non-zero digit
      and can't be merged => LOSS
    - If there is a 2048 tile => WIN, but the game doesn't stop.
*/
export const checkGameStatus = (): boolean => {
  const board = useBoardStore.getState().board;

  //check if all tiles are filled
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return true; // if empty space found return true
      }
    }
  }

  //check if a tile can be merged vertically or horizontally
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // check right neighbor (horizontal merge)
      if (j < board[i].length - 1 && board[i][j] === board[i][j + 1]) {
        return true; // can merge horizontally
      }
      // check bottom neighbor (vertical merge)
      if (i < board.length - 1 && board[i][j] === board[i + 1][j]) {
        return true; // can merge vertically
      }
    }
  }
  return false;
};
