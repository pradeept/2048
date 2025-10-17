"use client";

import { checkGameStatus } from "@/lib/checkGameStatus";
import { initializeBoard } from "@/lib/initialize";
import { moveTiles } from "@/lib/moveTiles";
import { addRandomTile, randomIndex } from "@/lib/random";
import { useBoardStore } from "@/stores/board-store";
import { Directions } from "@/types/board";
import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  Check,
  RotateCw,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Controls() {
  const { setBoard } = useBoardStore();
  const [gridLength, setGridLength] = useState("4");
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // key press handler
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    // check if game is over
    const gameStatus: boolean = checkGameStatus();
    if (!gameStatus) {
      const setResult = useBoardStore.getState().setResult;
      setResult("LOSS");
      return;
    }
    switch (key) {
      case "ArrowUp":
        handleMovement("up");
        break;
      case "ArrowDown":
        handleMovement("down");
        break;
      case "ArrowLeft":
        handleMovement("left");
        break;
      case "ArrowRight":
        handleMovement("right");
        break;
      default:
        console.log("Invalid Key");
    }
  };

  // helper for handling tile movement
  const handleMovement = (direction: Directions) => {
    // move tiles (squeeze 0's, merge and squeeze 0's)
    // get updated board from the store
    const movedTiles = moveTiles(useBoardStore.getState().board, direction);

    // add a random tile
    const newBoard = addRandomTile(movedTiles);

    // update the board
    setBoard(newBoard);
  };

  // reset the board to initial state
  const handleRestart = () => {
    const resetBoard = useBoardStore.getState().resetBoard;
    resetBoard();
    // reset score
    const resetScore = useBoardStore.getState().resetScore;
    resetScore();
    const resetResult = useBoardStore.getState().resetResult;
    resetResult();
    const board = useBoardStore.getState().board;
    initializeBoard(board, randomIndex);
  };

  // reset the board to custom grid size
  const handleBoardChange = () => {
    // update board length
    const setBoardLength = useBoardStore.getState().setBoardLength;
    setBoardLength(Number(gridLength));
    // restart the game with new board size
    handleRestart();
  };

  return (
    <div className='flex gap-6 items-top'>
      <div className='flex flex-col justify-center items-center gap-1'>
        <div
          className='flex gap-3 border rounded-full p-2 '
          title='Use the key bindings'
        >
          <ArrowBigLeftDash size={12} />

          <ArrowBigRightDash size={12} />

          {/* Down arrow */}
          <ArrowBigRightDash size={12} className='rotate-90' />

          {/* Up arrow */}
          <ArrowBigLeftDash size={12} className='rotate-90' />
        </div>
      </div>
      <RotateCw
        id='restart'
        className='hover:scale-110 transition-all cursor-pointer'
        size={30}
        onClick={handleRestart}
      />
      <div className='flex gap-2 items-center'>
        <input
          type='number'
          placeholder='rows'
          value={gridLength}
          onChange={(e) => setGridLength(e.target.value)}
          className='border w-10 h-8 text-center rounded border-gray-300 remove-arrow'
        />
        <span>*</span>
        <input
          type='number'
          placeholder='columns'
          value={gridLength}
          onChange={(e) => setGridLength(e.target.value)}
          className='border w-10 h-8 text-center rounded border-gray-300 remove-arrow'
        />
        {Number(gridLength) < 2 || Number(gridLength) > 100 ? (
          <X className='text-red-400 cursor-pointer' />
        ) : (
          <Check
            className={`${
              Number(gridLength) > 10 ? "text-yellow-400" : "text-green-400"
            } cursor-pointer`}
            onClick={handleBoardChange}
          />
        )}
      </div>
    </div>
  );
}
