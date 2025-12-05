import fcfs from './fcfs.js';
import sjf from './sjf.js'
import rr from './rr.js'
import priority from './priority.js';
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
    else {
        return priority(process, priorities);
    }
}