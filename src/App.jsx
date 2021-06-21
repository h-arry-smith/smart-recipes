import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './Home.jsx'
import Recipe from './Recipe.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/recipe/:slug">
          <Recipe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
