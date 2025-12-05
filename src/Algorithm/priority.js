export default function priority(process, priorities) {
  // Attach priority + remaining time to each process
  let proc = process.map((p, i) => ({
    ...p,
    priority: Number(priorities[i]),
    remaining: Number(p.burst),
    completion: 0
  }));

  let time = 0;
  let completed = 0;
  const n = proc.length;

  let gantt = [];
  let lastPid = null;

  // Continue until all processes are completed
  while (completed < n) {

    // 1. Get all processes that have arrived & not finished
    let ready = proc.filter(p => p.arrival <= time && p.remaining > 0);

    // 2. If no process is ready → CPU idle
    if (ready.length === 0) {
      let nextArrival = Math.min(
        ...proc.filter(p => p.remaining > 0).map(p => p.arrival)
      );

      gantt.push({
        pid: "idle",
        start: time,
        end: nextArrival
      });

      time = nextArrival;
      lastPid = "idle";
      continue;
    }

    // 3. Pick highest priority → smallest priority number
    ready.sort((a, b) => a.priority - b.priority);
    let p = ready[0];

    // 4. Add gantt entry if switching processes
    if (lastPid !== p.pid) {
      gantt.push({
        pid: p.pid,
        start: time,
        end: time + 1
      });
    } else {
      gantt[gantt.length - 1].end += 1;
    }

    lastPid = p.pid;

    // 5. Execute for 1 time unit (preemptive)
    p.remaining -= 1;
    time += 1;

    // 6. If finished → store completion time
    if (p.remaining === 0) {
      p.completion = time;
      completed++;
    }
  }

  // 7. Build metrics table
  let metrics = proc.map(p => {
    let tat = p.completion - p.arrival;
    let wait = tat - p.burst;

    return {
      pid: p.pid,
      arrival: p.arrival,
      burst: p.burst,
      priority: p.priority,
      completion: p.completion,
      tat,
      wait
    };
  });

  return { gantt, metrics };
}
