import React, { useState, useEffect } from 'react'

import { PlayIcon, PauseIcon, RewindIcon } from '@heroicons/react/solid'

const Timer = ({arg}) => {
  const [time, setTime] = useState(arg)
  const [running, setRunning] = useState(false)
  const originalTime = arg

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0 & running) {
        setTime(time - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [running, time])

  return (
    <div className="w-max mx-auto p-6 rounded-xl bg-gray-100 mt-8 shadow">
      <div className="rounded-xl py-4 px-6 font-mono font-bold bg-gray-900 text-green-100">
        { Math.floor(time / 60) }:{ `${time % 60}`.padStart(2, '0') }
      </div>
      <div className="flex justify-between space-x-2 mt-2">
        <TimerButton onClick={() => {
            setRunning(false)
            setTime(originalTime)
          }}>
          <RewindIcon className="h-full w-full" />
        </TimerButton>
        <TimerButton onClick={() => setRunning(false)}>
          <PauseIcon className="h-full w-full" />
        </TimerButton>
        <TimerButton onClick={() => setRunning(true)}>
          <PlayIcon className="h-full w-full" />
        </TimerButton>
      </div>
    </div>
  )
}

const TimerButton = ({children, onClick}) => (
  <button
    className="flex justify-center items-center p-2 rounded-lg bg-gray-500 shadow h-16 w-16 hover:bg-gray-400 text-gray-200 hover:text-yellow-300"
    onClick={onClick}
  >
    {children} 
  </button>
)

export default Timer
