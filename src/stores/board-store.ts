import { Board, Result } from "@/types/board";
import { create } from "zustand";

export interface BoardState {
  board: Board;
  score: number;
  result: Result | undefined;

  setBoard: (newBoard: Board) => void;
  setScore: (newScore: number) => void;
  setResult: (newResult: Result) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  // inital values
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  score: 0,
  result: undefined,

  // setter functions
  // set the board
  setBoard: (newBoard: Board) => {
    set((state: BoardState) => ({
      ...state,
      board: newBoard,
    }));
  },

  // set the score
  setScore: (newScore: number) => {
    set((state: BoardState) => ({
      ...state,
      score: newScore,
    }));
  },

  // set the result
  setResult: (newResult: Result) => {
    set((state: BoardState) => ({
      ...state,
      result: newResult,
    }));
  },
}));

