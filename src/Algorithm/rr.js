export default function rr(process, tq) {
  // Copy processes and initialize remaining time
  let proc = process.map(p => ({
    ...p,
    remaining: p.burst
  }));

  let time = 0;
  let gantt = [];
  let queue = [];
  let completed = 0;
  const n = proc.length;

  // Sort by arrival time
  proc.sort((a, b) => a.arrival - b.arrival);

  // Add the first arriving process to the queue
  queue.push(proc[0]);
  let nextIndex = 1;

  while (completed < n) {

    // If queue is empty → CPU idle → move time to next arrival
    if (queue.length === 0) {
      let nextArrival = proc[nextIndex].arrival;
      gantt.push({
        pid: "idle",
        start: time,
        end: nextArrival
      });
      time = nextArrival;

      queue.push(proc[nextIndex]);
      nextIndex++;
      continue;
    }

    // Pop first process from queue
    let p = queue.shift();

    // Execute for up to 'tq' time
    let execTime = Math.min(tq, p.remaining);

    gantt.push({
      pid: p.pid,
      start: time,
      end: time + execTime
    });

    time += execTime;
    p.remaining -= execTime;

    // Add new arrivals that came during this time window
    while (
      nextIndex < n &&
      proc[nextIndex].arrival <= time
    ) {
      queue.push(proc[nextIndex]);
      nextIndex++;
    }

    // If process still has time left → push back to queue
    if (p.remaining > 0) {
      queue.push(p);
    } else {
      p.completion = time;
      completed++;
    }
  }

  // Build metric table
  let metrics = proc.map(p => {
    let tat = p.completion - p.arrival;
    let wait = tat - p.burst;

    return {
      pid: p.pid,
      arrival: p.arrival,
      burst: p.burst,
      completion: p.completion,
      tat,
      wait
    };
  });

  return { gantt, metrics };
}
