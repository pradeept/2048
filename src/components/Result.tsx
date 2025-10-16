"use client";
import React from "react";
import Score from "./Score";
import { useBoardStore } from "@/stores/board-store";
import { Result as ResultType } from "@/types/board";

export default function Result() {
  const result: ResultType = useBoardStore((state) => state.result);
  return (
    <div className='flex gap-10 justify-between items-center text-2xl px-3  py-1 '>
      <Score />

      <h1 className='bg-[#9c9389] rounded-md text-[#2c2620] px-4 py-1 flex flex-col justify-center items-center text-lg'>
        Result:{" "}
        <span
          className={`${
            result === "WON"
              ? "text-green-800 animate-bounce"
              : result === "LOSS"
              ? "text-red-800 animate-bounce"
              : ""
          } font-semibold text-xl `}
        >
          {!result ? "-" : result === 'WON' ? 'WON 🎉' :'LOSS :('}
        </span>
      </h1>
    </div>
  );
}
