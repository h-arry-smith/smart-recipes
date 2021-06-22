import React from 'react'

const TestToken = ({arg}) => (
  <>
    <span className="uppercase text-red-500 italic"> { arg } </span>
  </>
)
  
const TOKENS = {
  "test": TestToken
}

const RenderMethod = ({step}) => {
  const renderStep = (step) => {
    if (typeof step === "string") {
      return <span> { step } </span>
    } else if (Array.isArray(step)) {
      const tokenIdentifier = step[0]
      const tokenArgument = step[1]

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
