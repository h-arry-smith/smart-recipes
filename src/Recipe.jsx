import React, { useEffect, useState } from 'react'
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  let { path, url } = useRouteMatch();
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
      <Switch>
        <Route exact path={path}>
          {recipe.metadata.title}
        </Route>
        <Route path={`${path}/:step`}>
          Step
        </Route>
      </Switch>
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
