import { Directions } from "@/types/board";
import { useBoardStore } from "@/stores/board-store";

export const merge = (row: number[], direction: Directions): number[] => {
  const mergedRow: number[] = row;
  if (direction === "left" || direction === "up") {
    for (let i = 0; i < mergedRow.length - 1; i++) {
      if (mergedRow[i] !== 0) {
        if (mergedRow[i] === mergedRow[i + 1]) {
          // get score setter function
          const addScore = useBoardStore.getState().setScore;

          const updatedValue = mergedRow[i] * 2;
          mergedRow[i + 1] = updatedValue; // double current value
          mergedRow[i] = 0; // remove next value

          // check 2048 tile
          if (updatedValue === 2048) {
            const setResult = useBoardStore.getState().setResult;
            setResult("WON");
          }
          // append new score
          addScore(updatedValue);
          i++;
        }
      }
    }
  } else {
    for (let i = mergedRow.length - 1; i >= 0; i--) {
      if (mergedRow[i] !== 0 && mergedRow[i] === mergedRow[i - 1]) {
        // get score setter function
        const addScore = useBoardStore.getState().setScore;

        const updatedValue = mergedRow[i] * 2;
        mergedRow[i] = updatedValue; // Double the current value
        mergedRow[i - 1] = 0; // Set the previous value to zero

        // append new score
        addScore(updatedValue);
        i--;
      }
    }
  }

  return mergedRow;
};
