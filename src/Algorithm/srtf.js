export default function srtf(process) {
  let proc = process.map((p) => ({
    ...p,
    remaining: p.burst,
    done: false,
  }));

  let time = 0;
  let completed = 0;
  const n = proc.length;
  let gantt = [];
  let currentPID = null;
  let segmentStart = 0;

  while (completed < n) {
    // Get ready processes
    let ready = proc.filter((p) => p.arrival <= time && !p.done);

    if (ready.length === 0) {
      // CPU idle, jump to next arrival
      let nextArrival = Math.min(
        ...proc.filter((p) => !p.done).map((p) => p.arrival)
      );

      gantt.push({
        pid: "idle",
        start: time,
        end: nextArrival
      });

      time = nextArrival;
      continue;
    }

    // Pick process with shortest remaining time
    ready.sort((a, b) => a.remaining - b.remaining);
    let p = ready[0];

    // If CPU switches to new process → close previous segment
    if (currentPID !== p.pid) {
      if (currentPID !== null) {
        gantt.push({
          pid: currentPID,
          start: segmentStart,
          end: time
        });
      }
      currentPID = p.pid;
      segmentStart = time;
    }

    // Run process for 1 unit (preemptive)
    p.remaining--;
    time++;

    // If completed
    if (p.remaining === 0) {
      p.done = true;
      p.completion = time;
      completed++;

      // Close Gantt segment
      gantt.push({
        pid: p.pid,
        start: segmentStart,
        end: time,
      });

      currentPID = null;
    }
  }

  // Compute metrics
  let metrics = proc.map((p) => {
    const tat = p.completion - p.arrival;
    const wait = tat - p.burst;
    return {
      pid: p.pid,
      arrival: p.arrival,
      burst: p.burst,
      completion: p.completion,
      tat,
      wait,
    };
  });

  return { metrics, gantt };
}
