import React from "react";

const GanttChart = ({ schedule }) => {

  return (
    <div className="flex flex-col gap-4 col-span-3 p-4 border rounded">
        <div className="text-left text-2xl font-medium bg-white">Gantt Chart</div>
      <div
        className="flex relative w-full my-auto justify-center gap-4"
      >
        {schedule.map((p, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-center bg-black text-white relative text-xl font-bold py-3 px-6"
            >
              {p.pid}

              {/* Start Time */}
              <span className="absolute text-black -left-3.5 -bottom-8 font-light">
                {p.start}
              </span>

              {/* End Time */}
              { i === schedule.length -1 && <span className="absolute -right-3.5 -bottom-8 text-black font-light">
                {p.end}
              </span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GanttChart;
