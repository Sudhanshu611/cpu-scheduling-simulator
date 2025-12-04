import React, { useState } from "react";
import { BsDice5 } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";

export default function ProcessForm() {
  const randomProcess = () => {
    console.log("Random Process");
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium flex items-center justify-between mb-6">
        Input
        <div
          className="relative p-1 cursor-poiter hover:scale-110 transition-all duration-200 group"
          onClick={() => randomProcess()}
        >
          <BsDice5 />
          <span className="absolute text-xs left-1/2 bottom-full mb-2 -translate-x-1/2 bg-stone-200 py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 cursor-pointer">
            Random Process
          </span>
        </div>
      </h2>
      <InputForm />
    </div>
  );
}

function InputForm() {
  const [showAlgo, setShowAlgo] = useState(false);
  const [algo, setAlgo] = useState("First Come First Serve, FCFS");
  const algorithm = [
    {
      name: "First Come First Serve, FCFS",
      code: "fcfs",
    },
    {
      name: "Shortest Job First, SJF (non-preemptive)",
      code: "sjf",
    },
    {
      name: "Shortest Remaining Time First, SRTF",
      code: "srtf",
    },
    {
      name: "Round-Robin, RR",
      code: "rr",
    },
    {
      name: "Priority",
      code: "p",
    },
  ];
  return (
    <form className="text-left">
      <div className="mb-5">
        <label>Algorithm</label>
        <div>
          <div className=" relative p-2 border mt-2 rounded cursor-pointer ">
            <span
              className="flex items-center justify-between "
              onClick={() => setShowAlgo((prev) => !prev)}
            >
              <span className="w-full truncate">{algo}</span> <GoChevronDown />
            </span>
            {showAlgo && (
              <div className="absolute border rounded-md bg-white w-full top-full left-1/2 -translate-x-1/2 mt-3">
                {algorithm.map((algo, keyIndex) => {
                  return (
                    <div
                      key={keyIndex}
                      className="p-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setAlgo(algo.name);
                        setShowAlgo(false);
                      }}
                    >
                      {algo.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label>Arrival Time</label>
        <input
          type="text"
          placeholder="eg. 2 4 5 6 7"
          className="focus:outline-none border p-2 w-full mt-2 rounded"
        />
      </div>
      <div className="mb-5">
        <label>Burst Time</label>
        <input
          type="text"
          placeholder="eg. 2 4 5 6 7"
          className="focus:outline-none border p-2 w-full mt-2 rounded"
        />
      </div>
      {algo === "Round-Robin, RR" && (
        <div className="mb-5">
          <label>Time Quantum</label>
          <input
            type="text"
            placeholder="eg. 2"
            className="focus:outline-none border p-2 w-full mt-2 rounded"
          />
        </div>
      )}
      {algo === "Priority" && (
        <div className="mb-5">
          <label>Priorities</label>
          <input
            type="text"
            placeholder="Higher # = Higher Prioirity"
            className="focus:outline-none border p-2 w-full mt-2 rounded"
          />
        </div>
      )}

      <button className="bg-black text-white p-2 w-full rounded-md cursor-pointer hover:bg-stone-800 transition-all durstion-200">
        Solve
      </button>
    </form>
  );
}
