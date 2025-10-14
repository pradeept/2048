import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import React from "react";

export function Controls() {
  return (
    <div className='flex flex-col border rounded-full p-2 justify-center items-center'>
      {/* top arrow */}
      <ArrowBigLeftDash
        className='rotate-90 cursor-pointer hover:bg-red-400 rounded-full'
        size={44}
      />

      <div className='flex gap-4 justify-between '>
        <ArrowBigLeftDash
          size={44}
          className='cursor-pointer hover:bg-red-400 rounded-full'
        />
        <ArrowBigRightDash
          size={44}
          className='cursor-pointer hover:bg-red-400 rounded-full'
        />
      </div>

      {/* down arrow */}
      <ArrowBigRightDash
        className='rotate-90 cursor-pointer hover:bg-red-400 rounded-full'
        size={44}
      />
    </div>
  );
}
