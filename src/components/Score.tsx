import React from "react";

export default function Score() {
  const score = 0;
  return (
    <div className='text-2xl bg-[#9c9389] flex flex-col justify-center items-center px-3 py-1.5 rounded-md text-[#2c2620]'>
      <p className='text-lg'>Score: </p>
      <span className='font-mono font-semibold  px-4 shadow-inner'>
        {score}
      </span>
    </div>
  );
}
