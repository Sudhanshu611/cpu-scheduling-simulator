import fcfs from './fcfs.js';
import sjf from './sjf.js'
export default function selector(code, process){
    if (code === 'fcfs'){
        return fcfs(process);
    }
    else if (code === 'sjf'){
        return sjf(process);
    }
    return {
        gantt: [],
        metrics: []
    };
}