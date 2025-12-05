import React from "react";
import { BsCaretRightFill } from "react-icons/bs";

export default function OtherDetails() {
  return (
    <div className="border rounded p-4 text-left">
      <div className="text-left text-2xl font-medium bg-white mb-5">
        Details
      </div>
      <div className="space-y-4">
      <div className="text-lg">
        <span className="flex items-center gap-2">
          <BsCaretRightFill /> Avg Waiting Time: 3.4
        </span>
      </div>
      <div className="text-lg">
        <span className="flex items-center gap-2">
          <BsCaretRightFill /> Avg Turnaround Time: 8.2
        </span>
      </div>
      <div className="text-lg">
        <span className="flex items-center gap-2">
          <BsCaretRightFill /> Throughput: 0.21
        </span>
      </div>
      <div className="text-lg">
        <span className="flex items-center gap-2">
          <BsCaretRightFill /> CPU Utilization: 100%
        </span>
      </div>
      </div>
    </div>
  );
}
