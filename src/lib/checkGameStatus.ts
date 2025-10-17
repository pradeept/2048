import { useBoardStore } from "@/stores/board-store";

/*
    Rules:
    - If all tiles are filled with non-zero digit
      and can't be merged => LOSS
    - If there is a 2048 tile => WIN, but the game doesn't stop.
*/

// check all tiles are filled and can't be merged horizontally and vertically
export const checkGameStatus = (): boolean => {
  const board = useBoardStore.getState().board;

  const isAllTilesFilled = board.some((row) => row.some((tile) => tile === 0));

  const isHorizontallyMergeable = board.some((row) =>
    row.some(
      (val, idx, current_row) =>
        idx < row.length - 1 && val === current_row[idx + 1]
    )
  );
  
  const isVerticallyMergeable = board.some((row, i) =>
    row.some((val, j) => i < row.length - 1 && val === board[i + 1][j])
  );
  return isAllTilesFilled || isHorizontallyMergeable || isVerticallyMergeable;
};
