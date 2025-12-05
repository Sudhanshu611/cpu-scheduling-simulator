import React, { useState } from "react";
import { BsDice5 } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";

export default function ProcessForm() {
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
  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');
  const [algo, setAlgo] = useState(algorithm[0]);
  const [timeQuantum, setTimeQuantum] = useState(0);
  const [priorities, setPriorities] = useState('');
  const randomProcess = () => {
    const numProcesses = Math.floor(Math.random() * 3) + 4;
    const at = [];
    const bt = [];
    const pr= [];
    for (let i = 0; i < numProcesses; i++){
      const randomAT = Math.floor(Math.random() * 11);
      const randomBT = Math.floor(Math.random() * 11);
      at.push(randomAT);
      bt.push(randomBT);
    }
    setArrivalTime(at.join(' '));
    setBurstTime(bt.join(' '));
    if (algo.code === 'rr') {
      const randomTQ = Math.floor(Math.random() * 4);
      setTimeQuantum(randomTQ)
    }
    if (algo.code === 'p') {
      for (let i = 0; i < numProcesses; i++){
      const randomPR = Math.floor(Math.random() * 9);
      pr.push(randomPR);
    }
    setPriorities(pr.join(' '))
    }
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
      <InputForm arrivalTime={arrivalTime} setArrivalTime={setArrivalTime} burstTime={burstTime} setBurstTime={setBurstTime} algo={algo} setAlgo={setAlgo} timeQuantum={timeQuantum} setTimeQuantum={setTimeQuantum} algorithm={algorithm} setPriorities={setPriorities} priorities={priorities}/>
    </div>
  );
}

function InputForm({
  arrivalTime,
  burstTime,
  algo,
  setAlgo,
  setArrivalTime,
  setBurstTime,
  timeQuantum,
  setTimeQuantum,
  algorithm,
  setPriorities,
  priorities
}) {
  const [showAlgo, setShowAlgo] = useState(false);

  return (
    <form className="text-left">
      {/* Algorithm dropdown */}
      <div className="mb-5">
        <label>Algorithm</label>

        <div className="relative p-2 border mt-2 rounded cursor-pointer">
          <span
            className="flex items-center justify-between"
            onClick={() => setShowAlgo(!showAlgo)}
          >
            <span className="w-full truncate">{algo.name}</span>
            <GoChevronDown />
          </span>

          {showAlgo && (
            <div className="absolute border rounded-md bg-white w-full mt-3">
              {algorithm.map((item, i) => (
                <div
                  key={i}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    setAlgo(item);
                    setShowAlgo(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Arrival Time */}
      <div className="mb-5">
        <label>Arrival Time</label>
        <input
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
          type="text"
          placeholder="eg. 2 4 5 6 7"
          className="focus:outline-none border p-2 w-full mt-2 rounded"
        />
      </div>

      {/* Burst Time */}
      <div className="mb-5">
        <label>Burst Time</label>
        <input
          value={burstTime}
          onChange={(e) => setBurstTime(e.target.value)}
          type="text"
          placeholder="eg. 2 4 5 6 7"
          className="focus:outline-none border p-2 w-full mt-2 rounded"
        />
      </div>

      {/* RR Time Quantum */}
      {algo.code === "rr" && (
        <div className="mb-5">
          <label>Time Quantum</label>
          <input
            type="text"
            value={timeQuantum}
            onChange={(e) => setTimeQuantum(e.target.value)}
            placeholder="eg. 2"
            className="focus:outline-none border p-2 w-full mt-2 rounded"
          />
        </div>
      )}

      {/* Priority */}
      {algo.code === "p" && (
        <div className="mb-5">
          <label>Priorities</label>
          <input
            type="text"
            value={priorities}
            onChange={(e) => setPriorities(e.target.value)}
            placeholder="Higher # = Higher Priority"
            className="focus:outline-none border p-2 w-full mt-2 rounded"
          />
        </div>
      )}

      <button className="bg-black text-white p-2 w-full rounded-md hover:bg-stone-800 transition-all duration-200">
        Solve
      </button>
    </form>
  );
}
