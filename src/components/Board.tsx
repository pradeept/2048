"use client";

import { initializeBoard } from "@/lib/initialize";
import { randomIndex } from "@/lib/random";
import { useBoardStore } from "@/stores/board-store";
import { tileColor } from "@/utils/tile-color";
import { useEffect } from "react";

export default function Board() {
  const { board, setBoard } = useBoardStore();

  useEffect(() => {
    const initBoard = initializeBoard(board, randomIndex);
    setBoard(initBoard);
  }, []);

  return (
    <div className='black'>
      <table className=' text-slate-900 font-bold'>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex} className=''>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`bg-[#cdc1b4]  ${
                    board.length > 6 ? "w-10 h-10 p-2" : "w-20 h-20 p-4"
                  } border text-center  rounded-xl shadow-inner ${
                    tileColor[cell]
                  } transition-all`}
                >
                  <div>{cell !== 0 && cell}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
