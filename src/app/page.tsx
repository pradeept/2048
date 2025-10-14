import Board from "@/components/Board";
import { Controls } from "@/components/Controls";

export default function Home() {
  return (
    <div className='flex flex-col gap-6 w-full h-screen justify-center items-center'>
      <Board />
      <Controls />
    </div>
  );
}
