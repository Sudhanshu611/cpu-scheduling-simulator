import React from "react";
import { BsCaretRightFill } from "react-icons/bs";

function computeDetails(metrics, gantt) {
  if (!metrics || metrics.length === 0 || !gantt || gantt.length === 0) {
    return {
      avgWT: 0,
      avgTAT: 0,
      throughput: 0,
      cpuUtil: 0,
    };
  }

  const n = metrics.length;

  const avgWT =
    metrics.reduce((acc, m) => acc + Number(m.wait), 0) / n;

  const avgTAT =
    metrics.reduce((acc, m) => acc + Number(m.tat), 0) / n;

  const totalTime = gantt[gantt.length - 1].end;

  const burstSum =
    metrics.reduce((acc, m) => acc + Number(m.burst), 0);

  const throughput = totalTime > 0 ? n / totalTime : 0;

  const cpuUtil = totalTime > 0 ? (burstSum / totalTime) * 100 : 0;

  return {
    avgWT,
    avgTAT,
    throughput,
    cpuUtil,
  };
}

export default function OtherDetails({ metrics, gantt }) {
  const { avgWT, avgTAT, throughput, cpuUtil } = computeDetails(metrics, gantt);

  return (
    <div className="border rounded p-4 text-left">
      <div className="text-left text-2xl font-medium bg-white mb-5">
        Details
      </div>
      <div className="space-y-4">
        <div className="text-lg">
          <span className="flex items-center gap-2">
            <BsCaretRightFill /> Avg Waiting Time: {avgWT.toFixed(1)}
          </span>
        </div>

        <div className="text-lg">
          <span className="flex items-center gap-2">
            <BsCaretRightFill /> Avg Turnaround Time: {avgTAT.toFixed(1)}
          </span>
        </div>

        <div className="text-lg">
          <span className="flex items-center gap-2">
            <BsCaretRightFill /> Throughput: {throughput.toFixed(2)}
          </span>
        </div>

        <div className="text-lg">
          <span className="flex items-center gap-2">
            <BsCaretRightFill /> CPU Utilization: {cpuUtil.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
