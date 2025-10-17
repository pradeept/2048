import Board from "@/components/Board";
import Controls from "@/components/Controls";
import Result from "@/components/Result";

export default function Home() {
  return (
    <div className='flex flex-col gap-6 w-full min-h-screen justify-center items-center'>
      <Result /> {/*Shows the score and result */}
      <Board /> {/*Game Board where slides and merges happen*/}
      <Controls /> {/*Key bindings, Reset and custom board size*/}
    </div>
  );
}
