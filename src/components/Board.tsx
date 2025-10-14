export default function Board() {
  const mat = [
    [0, 0, 0, 0],
    [0, 4, 2, 0],
    [0, 0, 16, 0],
    [0, 32, 0, 0],
  ];
  return (
    <>
      <table className=' text-slate-900 font-bold text-xl'>
        <tbody>
          {mat.map((row, rowIndex) => (
            <tr key={rowIndex} className='border border-slate-800'>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border border-slate-800 p-6 w-28 h-24 text-center ${
                    cell <= 3
                      ? "bg-amber-50"
                      : cell <= 8
                      ? "bg-amber-200"
                      : cell <= 16
                      ? "bg-orange-200"
                      : cell <= 200
                      ? "bg-red-300"
                      : "bg-red-500"
                  }`}
                >
                  <div className=" border p-2.5 shadow-xl rounded">{cell}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
