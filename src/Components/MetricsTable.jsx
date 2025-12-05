import React from "react";

export default function MetricsTable() {
  return (
    <div className="col-span-3 border w-full rounded ">
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

        <tbody className="text-lg">
          <tr>
            <td className="p-3">P1</td>
            <td className="p-3">0</td>
            <td className="p-3">5</td>
            <td className="p-3">5</td>
            <td className="p-3">5</td>
            <td className="p-3">0</td>
          </tr>
          <tr>
            <td className="p-3">P2</td>
            <td className="p-3">1</td>
            <td className="p-3">3</td>
            <td className="p-3">9</td>
            <td className="p-3">8</td>
            <td className="p-3">5</td>
          </tr>
          <tr>
            <td className="p-3">P3</td>
            <td className="p-3">2</td>
            <td className="p-3">8</td>
            <td className="p-3">17</td>
            <td className="p-3">15</td>
            <td className="p-3">7</td>
          </tr>
          <tr>
            <td className="p-3">P4</td>
            <td className="p-3">3</td>
            <td className="p-3">6</td>
            <td className="p-3">23</td>
            <td className="p-3">20</td>
            <td className="p-3">14</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
