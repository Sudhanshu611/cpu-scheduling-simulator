import React from "react";

export default function ProcessTable({ process }) {
  return (
    <div className=" w-full min-h-[350px] border p-4 rounded">
      <div className="text-left text-2xl mb-5 font-medium bg-white">
        Processes
      </div>
      <div className="flex flex-col space-y-4 items-start max-h-[340px] overflow-y-auto">
        {process.map((p, keyIndex) => {
          return (
            <div className="flex items-center gap-3" key={keyIndex}>
              <div className="text-2xl p-3 border w-fit rounded font-bold">
                {p.pid}
              </div>
              <div className="text-left">
                Arrival Time: {p.arrival}
                <br />
                Burst Time: {p.burst}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
