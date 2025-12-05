import React from "react";
import { motion } from "framer-motion";

const GanttChart = ({ gantt }) => {

  return (
    <div className="flex flex-col gap-4 col-span-3 p-4 border rounded">
      <div className="text-left text-2xl font-medium bg-white">Gantt Chart</div>

      <div
        key={gantt.map((g) => g.pid + g.start + g.end).join("-")}
        className="flex relative w-full my-auto justify-center gap-4"
      >
        {gantt.map((p, i) => {
          return (
            <motion.div
              key={i}
              className="flex items-center justify-center bg-black text-white relative text-xl font-bold py-3 px-6 rounded"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.2, // stagger animation
                ease: "easeOut",
              }}
            >
              {p.pid}

              {/* Start Time */}
              <span className="absolute text-black -left-3.5 -bottom-8 font-light">
                {p.start}
              </span>

              {/* End Time */}
              {i === gantt.length - 1 && (
                <span className="absolute -right-3.5 -bottom-8 text-black font-light">
                  {p.end}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GanttChart;
