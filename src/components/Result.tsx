import React from "react";
import Score from "./Score";

export default function Result() {
  const result = "WIN";
  return (
    <div className='flex gap-10 justify-between items-center text-2xl px-3  py-1 '>
      <Score />

      <h1 className='bg-[#9c9389] rounded-md text-[#2c2620] px-4 py-1 flex flex-col justify-center items-center text-lg'>
        Result:{" "}
        <span
          className={`${
            result === "WIN" ? "text-green-800" : "text-red-400"
          } font-semibold text-xl`}
        >
          {result}
        </span>
      </h1>
    </div>
  );
}
