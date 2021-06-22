import React from 'react'

const RenderMethod = ({step}) => {
  const renderStep = (step) => {
    return <p> { step } </p>
  }

  return (
    <>
      { step.map(step => (
        <p> { renderStep(step) } </p>
      )) }
    </>
  )
}

export default RenderMethod
