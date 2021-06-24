import React from 'react'

import { FireIcon } from '@heroicons/react/solid'
import { COLOURS, TEXT_COLOURS, FIRES } from '../globals.js'

const HeatBar = ({level, highlight}) => {
  return (
    <div className={`
      ${
        COLOURS[level]
      } relative flex flex-col flex-none pb-10 justify-center items-center w-8 mr-8 bg-gray-200`}>
      
      { [...Array(FIRES[level]).keys()].map(i => (
        <FireIcon className="flex-none w-6 h-6 text-white/50"/>
      )) }

      <svg className={`${TEXT_COLOURS[level]} text-gray-200 absolute -top-8`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g clip-path="url(#clip0)"><path d="M16 29L0 18v14h32V18L16 29z" fill="currentColor"/><path d="M-2-2v18l18 13 18-13V-2.5L-2-2z" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
      </svg>

    </div>
  )
}

export default HeatBar
