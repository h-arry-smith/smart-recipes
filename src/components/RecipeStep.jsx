import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import RenderMethod from './RenderMethod.jsx'

const RecipeStep = ({recipe}) => {
  let { slug, step } = useParams()

  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <RecipeHeader recipe={recipe} />
      </div>
      <div className="flex flex-col min-h-screen">

        <div className="flex-grow flex justify-center">
          <div class="w-2/3">
            <p className="text-gray-800 text-5xl font-light mt-4">
              { recipe.method.map((recipeStep, index) => (
                <RenderMethod step={recipeStep} stepN={index+1} stepCurrent={step} key={index} />
              )) }
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

  const getPrevious = (step) => {
    if (step === 0) {
      return <HashLink smooth to={`/recipe/${path}`}>Back</HashLink>
    } else {
      return <HashLink smooth to={`${step}#${step}`}>Previous Step</HashLink>
    }
  }

  let nextLink = <HashLink smooth to={`${nextStep}#${nextStep}`}>Next Step</HashLink>

  return (
    <div className="flex justify-between py-6 px-8 border-t bg-white shadow-lg">
      { getPrevious(previousStep) }
      { nextLink }
    </div>
  )
} 

export default RecipeStep
