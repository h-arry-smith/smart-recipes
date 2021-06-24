import React from 'react'

import { FireIcon } from '@heroicons/react/solid'
import { COLOURS, FIRES } from '../globals.js'

const HeatBar = ({level, highlight}) => {
  return (
    <div className={`${
      highlight ? 'bg-gray-500' : 'bg-gray-200'
      } 
      ${
      COLOURS[level]
      } flex flex-col flex-none justify-center items-center w-8 mr-8 bg-gray-200`}>
      { [...Array(FIRES[level]).keys()].map(i => (
        <FireIcon className="flex-none w-6 h-6 text-white/50"/>
      )) }
    </div>
  )
}

export default HeatBar
