import { Directions } from "@/types/board";

export const shiftZeros = (
  row: number[],
  direction: Directions
): number[] => {
  let i;
  let j;

  // shift zeros to left
  // ex: 2 0 2 0 => 0 0 2 2
  if (direction === "right" || direction === "down") {
    i = j = row.length - 1;
    while (i >= 0) {
      if (row[i] !== 0) {
        const temp = row[j];
        row[j] = row[i];
        row[i] = temp;
        j--;
      }
      i--;
    }
  } else {
    // shift zeros to right
    // ex: 2 0 2 0 => 2 2 0 0
    i = j = 0;
    while (i < row.length) {
      if (row[i] !== 0) {
        const temp = row[j];
        row[j] = row[i];
        row[i] = temp;
        j++;
      }
      i++;
    }
  }
  return row;
};
