import React from 'react'
import { useParams } from 'react-router-dom'
import { HashLink  } from 'react-router-hash-link'

import CheckboxList from './CheckboxList.jsx'

const RecipeIntro = ({recipe}) => {
  let { slug } = useParams()
  return (
    <div>
      <div className="mt-20 mx-auto text-center">
        <h1 className="text-6xl font-gray-900 font-semibold">
          { recipe.metadata.title }
        </h1>
        <p className="text-lg">
          <span className="text-gray-700 italic">recipe by </span>
          { recipe.metadata.author }
        </p>
        
        <div className="flex justify-center space-x-2 mt-2">
          <p className="text-gray-500">
            <span className="text-gray-600 font-medium">{ recipe.metadata.timings.prep }</span>min preperation
          </p>
          <p className="text-gray-500">
            <span className="text-gray-600 font-medium">{ recipe.metadata.timings.cook }</span>min cooking
          </p>
        </div>

        <p>
          <span className="text-gray-700 font-semibold">{ recipe.metadata.basePortion } </span> 
          portions
        </p>

        <div className="mt-4">
          <p className="text-2xl text-gray-800 font-medium">
            Let's get everything ready!
          </p>

          <div className="flex space-x-2 max-w-2xl mx-auto mt-4">
            <div className="w-1/2">
              <IngredientList ingredients={recipe.ingredients} pantry={recipe.pantry} />
            </div>
            <div className="w-1/2">
              <EquipmentList equipment={recipe.equipment} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <HashLink to={`${slug}/1#1`}>
          <div className="py-4 px-8 rounded-lg bg-green-400 text-white text-2xl font-semibold w-max mx-auto">
            Let's Begin!
          </div>
        </HashLink>
      </div>
    </div>
  );
}

const IngredientList = ({ingredients, pantry}) => {
  const generateIngredientText = (ingredients) => {
    return ingredients.map(ingredient => `${ingredient[0]}${ingredient[1]} ${ingredient[2]}`)
  }

  return (
    <div className="px-4 py-6 bg-purple-600 rounded-xl font-semibold text-white">
      <p className="text-2xl my-2"> Ingredients </p>
      <CheckboxList list={generateIngredientText(ingredients)} />
      <p className="text-2xl my-2"> Pantry Items </p>
      <CheckboxList list={pantry} />
    </div>
  )
}

const EquipmentList = ({equipment}) => {
  return (
    <div className="px-4 py-6 bg-yellow-400 rounded-xl font-semibold">
      <p className="text-2xl my-2"> Equipment </p>
      <CheckboxList list={equipment} />
    </div>
  )
}
export default RecipeIntro
