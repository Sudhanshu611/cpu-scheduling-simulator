import { useState } from "react";
import "./App.css";
import ProcessForm from "./Components/ProcessForm";
import ProcessTable from "./Components/ProcessTable";
import MetricsTable from "./Components/MetricsTable";
import GanttChart from "./Components/GanttChart";
import OtherDetails from "./Components/OtherDetails";
import selector from "./Algorithm/selector.js";


function App() {
  
  const cpuSchedule = [
    { pid: "P1", burst: 4, start: 0, end: 4 },
    { pid: "P2", burst: 2, start: 4, end: 6 },
    { pid: "P3", burst: 6, start: 6, end: 12 },
    { pid: "P4", burst: 6, start: 6, end: 12 },
    { pid: "P3", burst: 6, start: 6, end: 12 },
  ];
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
  const [algo, setAlgo] = useState(algorithm[0]);
  const [process, setProcess] = useState([]);
  const [timeQuantum, setTimeQuantum] = useState(0);
  const [priorities, setPriorities] = useState([]);
  const { metrics, gantt } = selector(algo.code, process, timeQuantum, priorities);
  return (
    <div className="font-jet">
      <h2 className="text-4xl font-bold p-3">CPU Scheduling Simulator</h2>
      <div className=" h-[calc(100vh-36px-56px)] w-[calc(100vw-120px)] mx-auto grid grid-cols-[350px_1fr] gap-6">
        <ProcessForm
          process={process}
          setProcess={setProcess}
          setAlgo={setAlgo}
          algo={algo}
          algorithm={algorithm}
          timeQuantum={timeQuantum}
          setTimeQuantum={setTimeQuantum}
          priorities={priorities}
          setPriorities={setPriorities}
        />
        <div className="h-full w-full rounded grid grid-cols-4 grid-rows-2 gap-4">
          <ProcessTable process={process} />
          <MetricsTable metrics={metrics}/>
          <GanttChart gantt={gantt}/>
          <OtherDetails metrics={metrics} gantt={gantt}/>
        </div>
      </div>
    </div>
  );
}

export default App;
