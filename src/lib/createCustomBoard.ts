import { Board } from "@/types/board";

// create a bord with specified size
export const createCustomBoard = (size: number): Board => {
  // Array.from allows to create an array from object (object can be a string/obj etc.)
  // for every object we are creating another Array filled with 0
  return Array.from({ length: size }, () => Array(size).fill(0));
};

