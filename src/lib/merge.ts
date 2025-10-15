import { Directions } from "@/types/board";

export const merge = (row: number[], direction: Directions): number[] => {
  const mergedRow: number[] = row;
  if (direction === "left" || direction === "up") {
    for (let i = 0; i < mergedRow.length - 1; i++) {
      if (mergedRow[i] !== 0) {
        if (mergedRow[i] === mergedRow[i + 1]) {
          mergedRow[i] *= 2; // double current value
          mergedRow[i + 1] = 0; // remove next value
          i++;
        }
      }
    }
  } else {
    for (let i = mergedRow.length - 1; i >= 0; i--) {
      if (mergedRow[i] !== 0 && mergedRow[i] === mergedRow[i - 1]) {
        mergedRow[i] *= 2; // Double the current value
        mergedRow[i - 1] = 0; // Set the previous value to zero
        i--;
      }
    }
  }

  return mergedRow;
};
