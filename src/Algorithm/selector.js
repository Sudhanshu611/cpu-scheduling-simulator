import fcfs from './fcfs.js';
import sjf from './sjf.js'
import rr from './rr.js'
import priority from './priority.js';
import srtf from './srtf.js';
export default function selector(code, process, tq, priorities){
    if (code === 'fcfs'){
        return fcfs(process);
    }
    else if (code === 'sjf'){
        return sjf(process);
    }
    else if (code === 'rr'){
        return rr(process, tq);
    } 
    else if (code === 'srtf'){
        return srtf(process);
    }
    else if (code === 'p'){
        return priority(process, priorities);
    }
    else{
        return { metrics: [], gantt:[] };
    }
}