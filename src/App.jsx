import { useState } from "react";
import "./App.css";
import ProcessForm from "./Components/ProcessForm";
import ProcessTable from "./Components/ProcessTable";
import MetricsTable from "./Components/MetricsTable";
import GanttChart from "./Components/GanttChart";
import OtherDetails from "./Components/OtherDetails";
import selector from "./Algorithm/selector.js";
import { title } from "framer-motion/client";

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
  const algorithmDetails = [
    {
      title: "First Come First Serve (FCFS)",
      description:
        "FCFS is the simplest CPU scheduling algorithm where the process that arrives first gets executed first. It follows a strict queue-based approach. There is no prioritization, meaning shorter jobs may wait behind longer ones, which can lead to the 'convoy effect'. It is non-preemptive, so once a process starts executing, it runs until completion.",
    },

    {
      title: "Shortest Job First (SJF)",
      description:
        "SJF selects the process with the smallest CPU burst time and executes it next. It minimizes average waiting time and is optimal in theory, but requires knowledge of the burst times beforehand. Since it is non-preemptive, once a shorter job starts, it runs until completion even if a shorter job arrives later.",
    },

    {
      title: "Shortest Remaining Time First (SRTF) – Preemptive",
      description:
        "SRTF is the preemptive version of SJF. The CPU always chooses the process with the shortest remaining burst time. If a new process arrives with a shorter burst time than the currently running one, the CPU immediately preempts the current job. This leads to very efficient scheduling but increases context switching.",
    },

    {
      title: "Round Robin (RR)",
      description:
        "Round Robin is designed for time-shared systems. Each process is assigned a fixed time quantum, and tasks are executed in a circular queue. If a process does not finish within its quantum, it is preempted and moved to the back of the queue. This ensures fairness and reduces starvation but may increase waiting time if the quantum is too small.",
    },

    {
      title: "Priority Scheduling",
      description:
        "In Priority Scheduling, each process is assigned a priority value, and the CPU executes processes based on their priority. Higher-priority tasks run first. Depending on the system, priority scheduling can be preemptive or non-preemptive. The main drawback is the possibility of starvation, where low-priority processes may never get CPU time unless techniques like aging are applied.",
    },
  ];
  function algoDetails(code) {
    if (code === "fcfs") {
      return algorithmDetails[0];
    } else if (code === "sjf") {
      return algorithmDetails[1];
    } else if (code === "rr") {
      return algorithmDetails[3];
    } else if (code === "srtf") {
      return algorithmDetails[2];
    } else if (code === "p") {
      return algorithmDetails[4];
    } else {
      return { title: "", description: "" };
    }
  }
  const [algo, setAlgo] = useState(algorithm[0]);
  const [process, setProcess] = useState([]);
  const [timeQuantum, setTimeQuantum] = useState(0);
  const [priorities, setPriorities] = useState([]);
  const { metrics, gantt } = selector(
    algo.code,
    process,
    timeQuantum,
    priorities
  );
  return (
    <div className="font-jet">
      <h2 className="text-4xl font-bold p-3">CPU Scheduling Simulator</h2>
      <div className=" h-[calc(100vh-36px-56px)] w-[calc(100vw-120px)] mx-auto grid-rows-2 grid grid-cols-[350px_1fr] gap-6">
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
        <div className="h-full w-full rounded grid row-span-2 grid-cols-4 grid-rows-2 gap-4">
          <ProcessTable process={process} />
          <MetricsTable metrics={metrics} />
          <div className="border w-full h-full rounded p-4 text-left">
            {/* <h2 className="text-2xl font-medium mb-3">Algorithm</h2> */}
            <h3 className="font-medium text-2xl mb-5">
              {algoDetails(algo.code).title}
            </h3>
            <div className="text-justify">{algoDetails(algo.code).description}</div>
          </div>
          <GanttChart gantt={gantt} />
          <OtherDetails metrics={metrics} gantt={gantt} />
        </div>
      </div>
    </div>
  );
}

export default App;
