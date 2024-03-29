import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import RenderMethod from './RenderMethod.jsx'
import HeatBar from './HeatBar.jsx'

const RecipeStep = ({recipe}) => {
  let { slug, step } = useParams()

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <RecipeHeader recipe={recipe} />
      </div>
      <div className="flex flex-col min-h-screen">

        <div className="flex-grow flex justify-center">
          <div className="w-2/3 before:block before:h-36">
            <p className="text-gray-800 text-5xl font-light mt-16">
              { recipe.method.map((recipeStep, index) => {
                const stepN = index + 1
                const highlight = stepN == step
                
                return (
                  <div className="flex">
                    <HeatBar level={recipeStep.heat} key={index} highlight={highlight} />
                    <RenderMethod step={recipeStep.method} stepN={stepN} stepCurrent={step} key={index} highlight={highlight} />
                  </div>
                )}) }
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <RecipeFooter step={step} path={slug} />
      </div>
    </div>
  )
}

const RecipeHeader = ({recipe}) => (
  <div className="w-full mx-auto text-center text-2xl font-semibold py-6 border-b bg-white">
    <h1>{ recipe.metadata.title }</h1>
  </div>
)

const RecipeFooter = ({step, path}) => {
  let previousStep = parseInt(step - 1)
  let nextStep = parseInt(step) + 1

  const scroll = (el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })

  const getPrevious = (step) => {
    if (step === 0) {
      return <HashLink scroll={scroll} to={`/recipe/${path}`}>Back</HashLink>
    } else {
      return <HashLink scroll={scroll} to={`${step}#${step}`}>Previous Step</HashLink>
    }
  }

  let nextLink = <HashLink scroll={scroll} to={`${nextStep}#${nextStep}`}>Next Step</HashLink>

  return (
    <div className="flex justify-between py-6 px-8 border-t bg-white shadow-lg">
      { getPrevious(previousStep) }
      { nextLink }
    </div>
  )
} 

export default RecipeStep
