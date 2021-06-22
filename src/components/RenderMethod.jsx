import React from 'react'
import { ToWords } from 'to-words'

import Timer from './tokens/Timer.jsx'
import Action from './tokens/Action.jsx'

const TOKENS = {
  "timer": Timer,
  "action": Action
}

const RenderMethod = ({step, stepN, stepCurrent}) => {
  const toWords = new ToWords()
  const highlight = stepN == stepCurrent

  const renderStep = (step) => {
    if (typeof step === "string") {
      return <span> { step } </span>
    } else if (Array.isArray(step)) {
      const tokenIdentifier = step[0]
      const tokenArgument = step[1]

      if (TOKENS[tokenIdentifier] === undefined) {
        return <p> Token not implemented: {tokenIdentifier} </p>
      }

      const Token = TOKENS[tokenIdentifier]
      return <Token arg={tokenArgument} />
    }
  }

  return (
    <div className={`${
      highlight ? 'text-gray-700' : 'text-gray-200'
      } my-24`}>
      <p className="mb-4 pl-1 pr-4 uppercase text-gray-500 text-4xl w-max font-light">
        Step <span className="font-semibold text-gray-600">{ toWords.convert(stepN) }</span>
      </p>
      { step.map(step => (
        <>
          { renderStep(step) }
        </>
      )) }
    </div>
  )
}


export default RenderMethod
