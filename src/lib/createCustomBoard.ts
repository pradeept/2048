import { Board } from "@/types/board";

// create a bord with specified size
export const createCustomBoard = (size: number): Board => {
  const customBoard = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    customBoard.push(row);
  }
  return customBoard;
};
