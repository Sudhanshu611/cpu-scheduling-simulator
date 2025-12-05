export default function fcfs(process) {
    let proc = process.map(p => ({ ...p }));
    proc.sort((a, b) => a.arrival - b.arrival);

    let time = 0;
    let gantt = [];

    for (const p of proc) {

        // HANDLE IDLE TIME CORRECTLY
        if (time < p.arrival) {
            gantt.push({
                pid: "idle",
                start: time,
                end: p.arrival
            });
            time = p.arrival;
        }

        // PROCESS EXECUTION
        gantt.push({
            pid: p.pid,
            start: time,
            end: time + Number(p.burst)
        });

        p.completion = time + Number(p.burst);
        time = p.completion;
    }

    let metrics = proc.map((p) => {
        const tat = p.completion - Number(p.arrival);
        const wait = tat - Number(p.burst);

        return {
            pid: p.pid,
            arrival: Number(p.arrival),
            burst: Number(p.burst),
            completion: p.completion,
            tat,
            wait
        };
    });

    return { gantt, metrics };
}
