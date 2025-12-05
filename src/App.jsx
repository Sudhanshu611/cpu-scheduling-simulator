import { useState } from 'react'
import './App.css';
import ProcessForm from './Components/ProcessForm'
import ProcessTable from './Components/ProcessTable'
import MetricsTable from './Components/MetricsTable'
import GanttChart from './Components/GanttChart'
import OtherDetails from './Components/OtherDetails'

function App() {
  const cpuSchedule = [
  { pid: "P1", burst: 4, start: 0, end: 4 },
  { pid: "P2", burst: 2, start: 4, end: 6 },
  { pid: "P3", burst: 6, start: 6, end: 12 },
  { pid: "P4", burst: 6, start: 6, end: 12 },
  { pid: "P3", burst: 6, start: 6, end: 12 },

];

  return (
    <div className='font-jet'>
      <h2 className='text-4xl font-bold p-3'>CPU Scheduling Simulator</h2>
      <div className=' h-[calc(100vh-36px-56px)] w-[calc(100vw-120px)] mx-auto grid grid-cols-[350px_1fr] gap-6'>
        <ProcessForm />
        <div className='h-full w-full rounded grid grid-cols-4 grid-rows-2 gap-4'>
          <ProcessTable />
          <MetricsTable />
          <GanttChart schedule={cpuSchedule} />
          <OtherDetails />
        </div>
      </div>
    </div>
  )
}


export default App
