export default function sjf(process) {
  let proc = process.map((p) => ({ ...p, done: false }));

  let time = 0;
  let completed = 0;
  let gantt = [];
  const n = proc.length;

  while (completed < n) {
    let ready = proc.filter((p) => p.arrival <= time && !p.done);

    if (ready.length === 0) {
      let nextArrival = Math.min(
        ...proc.filter((p) => !p.done).map((p) => p.arrival)
      );

      gantt.push({
        pid: 'idle',
        start: 0,
        end: nextArrival
      });

      time = nextArrival;
      continue;
    }

    ready.sort((a, b) => a.burst - b.burst);
    let p = ready[0];

    gantt.push({
        pid: p.pid,
        start: time,
        end: time + p.burst
    });

    time += p.burst;
    p.completion = time;
    completed++;
    p.done = true;

  }

  let metrics = proc.map(p => {
    const tat = p.completion - p.arrival;
    const wait = tat - p.burst;

    return {
        pid: p.pid,
        arrival: p.arrival,
        burst: p.burst,
        completion: p.completion,
        tat,
        wait
    }
  });

  return { metrics, gantt }
}
