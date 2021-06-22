import React from 'react'

const Action = ({arg, highlight}) => (
  <span class={`${
    highlight ? 'text-blue-400 hover:text-blue-600' : ''
  } font-medium`}> {arg} </span>
)

export default Action
