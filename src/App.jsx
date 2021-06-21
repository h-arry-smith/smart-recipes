import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

import Home from './Home.jsx'

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

function Recipe() {
  let { slug } = useParams();
  return (
    <div> { slug } </div>
  )
}

export default App
