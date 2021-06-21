import React from 'react'

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
        
        <div class="flex justify-center space-x-2 mt-2">
          <p class="text-gray-500">
            <span class="text-gray-600 font-medium">{ recipe.metadata.timings.prep }</span>min preperation
          </p>
          <p class="text-gray-500">
            <span class="text-gray-600 font-medium">{ recipe.metadata.timings.cook }</span>min cooking
          </p>
        </div>

        <p>
          <span class="text-gray-700 font-semibold">{ recipe.metadata.basePortion } </span> 
          portions
        </p>

        <p className="text-2xl text-gray-800 font-medium mt-4">
          Let's get everything ready!
        </p>

      </div>
    </div>
  );
}

export default RecipeIntro
