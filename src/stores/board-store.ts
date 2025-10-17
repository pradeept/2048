import { createCustomBoard } from "@/lib/createCustomBoard";
import { Board, Result } from "@/types/board";
import { create } from "zustand";

export interface BoardState {
  board: Board;
  score: number;
  result: Result | undefined;
  boardLength: number;

  setBoard: (newBoard: Board) => void;
  setScore: (newScore: number) => void;
  setResult: (newResult: Result) => void;
  setBoardLength: (newLength: number) => void;
  resetBoard: () => void;
  resetScore: () => void;
  resetResult: () => void;
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
  boardLength: 4,

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
      score: state.score + newScore,
    }));
  },

  // set the result
  setResult: (newResult: Result) => {
    set((state: BoardState) => ({
      ...state,
      result: newResult,
    }));
  },

  // reset board
  resetBoard: () => {
    set((state: BoardState) => ({
      ...state,
      board: createCustomBoard(state.boardLength),
    }));
  },

  // set board size
  setBoardLength: (newLength: number) => {
    set((state) => ({
      ...state,
      boardLength: newLength,
    }));
  },

  // reset score
  resetScore: () => {
    set((state) => ({
      ...state,
      score: 0,
    }));
  },

  // reset result
  resetResult: () => {
    set((state) => ({
      ...state,
      result: undefined,
    }));
  },
}));
