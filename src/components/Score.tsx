"use client";
import { useBoardStore } from "@/stores/board-store";
import React from "react";

export default function Score() {
  // subscribe to the store
  const score = useBoardStore((state)=>state.score)
  return (
    <div className='text-2xl bg-[#9c9389] flex flex-col justify-center items-center px-3 py-1.5 rounded-md text-[#2c2620]'>
      <p className='text-lg'>Score: </p>
      <span className='font-mono font-semibold  px-4 shadow-inner'>
        {score}
      </span>
    </div>
  );
}
