import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  let { slug } = useParams();
  
  useEffect(() => {
    async function fetchRecipeJSON() {
      let response = await fetch(`../../recipes/${slug}.json`)
      return await response.json()
    }

    fetchRecipeJSON().then(json => setRecipe(json))
  }) 
  
  if (recipe !== null) {
    return (
      <div>
        { recipe.metadata.title }
        { recipe.metadata.author }
      </div>
    )
  } else {
    return (
      <div>
        Loading..
      </div>
    )
  }
}

export default Recipe
