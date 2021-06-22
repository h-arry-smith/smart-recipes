import React from 'react'

import Timer from './tokens/Timer.jsx'

const TOKENS = {
  "timer": Timer
}

const RenderMethod = ({step}) => {
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
    <>
      { step.map(step => (
        <>
          { renderStep(step) }
        </>
      )) }
    </>
  )
}


export default RenderMethod
