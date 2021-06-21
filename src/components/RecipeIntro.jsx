import React from 'react'

import CheckboxList from './CheckboxList.jsx'

const RecipeIntro = ({recipe}) => {
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

          <CheckboxList list={["a", "b", "c"]} />
        </div>

      </div>
    </div>
  );
}

export default RecipeIntro
