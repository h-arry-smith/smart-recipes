import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { ToWords } from 'to-words'

const RecipeStep = ({recipe}) => {
  let { slug, step } = useParams()
  const toWords = new ToWords()

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-none">
        <RecipeHeader recipe={recipe} />
      </div>
      
      <div className="flex-grow flex justify-center mt-24">
        <div class="w-2/3">
          <p className="pl-1 pr-4 uppercase text-gray-500 text-4xl w-max font-light">
            Step <span className="font-semibold text-gray-600">{ toWords.convert(step) }</span>
          </p>
          <p className="text-gray-800 text-5xl font-light mt-4">
            {recipe.method[step - 1]}
          </p>
        </div>
      </div>

      <div className="flex-none">
        <RecipeFooter step={step} path={slug} />
      </div>
    </div>
  )
}

const RecipeHeader = ({recipe}) => (
  <div className="w-full mx-auto text-center text-2xl font-semibold py-6 border-b">
    <h1>{ recipe.metadata.title }</h1>
  </div>
)

const RecipeFooter = ({step, path}) => {
  let previousStep = parseInt(step - 1)
  let nextStep = parseInt(step + 1)

  const getPrevious = (step) => {
    if (step === 0) {
      return <Link to={`/recipe/${path}`}>Back</Link>
    } else {
      return <Link to={`${step}`}>Previous Step</Link>
    }
  }

  let nextLink = <Link to={`${parseInt(step) + 1}`}>Next Step</Link>

  return (
    <div className="flex justify-between py-6 px-12 border-t">
      { getPrevious(previousStep) }
      { nextLink }
    </div>
  )
} 

export default RecipeStep
