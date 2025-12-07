import React from "react";
import selector from "../Algorithm/selector.js";

export default function MetricsTable({ metrics }) {
  return (
    <div className="col-span-2 border w-full rounded ">
      <table className=" border-collapse text-center w-full">
        <thead className="text-md border-b">
          <tr>
            <th className="p-3">Process</th>
            <th className="p-3">Arrival Time</th>
            <th className="p-3">Burst Time</th>
            <th className="p-3">Completion Time (CT)</th>
            <th className="p-3">Turnaround Time (TAT)</th>
            <th className="p-3">Waiting Time (WT)</th>
          </tr>
        </thead>

        <tbody className="text-lg" key={metrics.length * Math.floor(Math.random() * 11)}>
          {metrics.map((m, keyIndex) => {
            return (
              <tr
                key={keyIndex}
                className="opacity-0 animate-[fadeIn_0.4s_ease_forwards]"
                style={{ animationDelay: `${keyIndex * 0.15}s` }}
              >
                <td className="p-3">{m.pid}</td>
                <td className="p-3">{m.arrival}</td>
                <td className="p-3">{m.burst}</td>
                <td className="p-3">{m.completion}</td>
                <td className="p-3">{m.tat}</td>
                <td className="p-3">{m.wait}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
