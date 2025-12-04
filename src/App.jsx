import { useState } from 'react'
import './App.css'
import ProcessForm from './Components/ProcessForm'
import ProcessTable from './Components/ProcessTable'
import MetricsTable from './Components/MetricsTable'

function App() {

  return (
    <div className='font-jet'>
      <h2 className='text-4xl font-bold p-3'>CPU Scheduling Simulator</h2>
      <div className=' h-[calc(100vh-36px-56px)] w-[calc(100vw-120px)] mx-auto grid grid-cols-[350px_1fr] gap-6'>
        <ProcessForm />
        <div className='h-full w-full rounded grid grid-cols-4 grid-rows-2'>
          <ProcessTable />
          <MetricsTable />
        </div>
      </div>
    </div>
  )
}


export default App
