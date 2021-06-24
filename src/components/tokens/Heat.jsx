import React from 'react'

import { FireIcon } from '@heroicons/react/solid'

import {COLOURS, TEXT_COLOURS, FIRES, PRETTY_HEAT} from '../../globals.js'

const Heat = ({arg, highlight}) => (
  <div className="inline-flex items-center">
    <span className={`${
    highlight ? TEXT_COLOURS[arg] : 'text-grey-200'
    } font-semibold`}>
      { PRETTY_HEAT[arg] }
    </span>

    <div className={`${
      highlight ? COLOURS[arg] : 'bg-gray-300'
      } flex flex-col py-2 shadow rounded-full ml-2`}>
      { [...Array(FIRES[arg]).keys()].map(i => (
        <FireIcon className={`flex-none w-4 h-4 text-white/80`} />
      )) }
    </div>
  </div>
)

export default Heat
