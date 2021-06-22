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
    <div 
      id={stepN}
      className={`${
        highlight ? 'text-gray-700' : 'text-gray-200'
        } py-32`}
    >
      <p className="mb-4 pl-1 pr-4 uppercase text-4xl w-max font-light">
        Step <span className="font-semibold">{ toWords.convert(stepN) }</span>
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
