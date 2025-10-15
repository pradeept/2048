"use client";

import { moveTiles } from "@/lib/moveTIles";
import { addRandomTile, } from "@/lib/random";
import { useBoardStore } from "@/stores/board-store";
import { Directions } from "@/types/board";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import React, { useEffect } from "react";

export default function Controls() {
  const { board, setBoard } = useBoardStore();
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // cleanup on component un-mount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMovement = (direction: Directions) => {
    // move tiles (squeeze 0's, merge and squeeze 0's)
    const movedTiles = moveTiles(board, direction);

    // add a random tile
    const newBoard = addRandomTile(movedTiles);
    // console.log(newBoard);
    // update the board
    setBoard(newBoard);
  };

  // Key press handler
  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key;

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

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-3 border rounded-full p-2 '>
        <ArrowBigLeftDash size={12} />

        <ArrowBigRightDash size={12} />

        {/* Down arrow */}
        <ArrowBigRightDash size={12} className='rotate-90' />

        {/* Up arrow */}
        <ArrowBigLeftDash size={12} className='rotate-90' />
      </div>
      <p>Use the key bindings</p>
    </div>
  );
}
